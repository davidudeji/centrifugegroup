import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, ShoppingBag, X } from 'lucide-react'
import { brandAssets } from '../../assets'
import { optimaXCloudLinks } from '../../data/optimaXCloud'
import { siteNavigationGroups, type NavigationGroup } from '../../data/navigation'
import { useCartStore } from '../../stores/cartStore'

interface MenuState {
  pathname: string
  id: string | null
  direction: number
}

const motionEase = [0.16, 1, 0.3, 1] as const

export const Header: React.FC = () => {
  const location = useLocation()
  const reduceMotion = Boolean(useReducedMotion())
  const [scrolled, setScrolled] = useState(false)
  const [menuState, setMenuState] = useState<MenuState>({
    pathname: location.pathname,
    id: null,
    direction: 1,
  })
  const [expandedMobileGroupState, setExpandedMobileGroupState] = useState<{
    pathname: string
    id: string | null
  }>({ pathname: location.pathname, id: null })
  const [mobileNavigationState, setMobileNavigationState] = useState<{
    pathname: string
    open: boolean
  }>({ pathname: location.pathname, open: false })
  const shellRef = useRef<HTMLDivElement>(null)
  const menuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const mobileTriggerRef = useRef<HTMLButtonElement>(null)
  const groupTriggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const focusFirstMenuLinkRef = useRef(false)
  const mobileNavRef = useRef<HTMLElement>(null)
  const toggleCart = useCartStore((state) => state.toggleCart)
  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  )
  const activeMenu = menuState.pathname === location.pathname ? menuState.id : null
  const mobileNavigationOpen =
    mobileNavigationState.pathname === location.pathname && mobileNavigationState.open
  const expandedMobileGroup =
    expandedMobileGroupState.pathname === location.pathname
      ? expandedMobileGroupState.id
      : null

  const setMobileNavigationOpen = useCallback(
    (next: boolean | ((open: boolean) => boolean)) => {
      setMobileNavigationState((current) => ({
        pathname: location.pathname,
        open: typeof next === 'function'
          ? next(current.pathname === location.pathname && current.open)
          : next,
      }))
    },
    [location.pathname],
  )

  const setExpandedMobileGroup = useCallback(
    (next: string | null | ((group: string | null) => string | null)) => {
      setExpandedMobileGroupState((current) => ({
        pathname: location.pathname,
        id: typeof next === 'function'
          ? next(current.pathname === location.pathname ? current.id : null)
          : next,
      }))
    },
    [location.pathname],
  )

  const setOpenMenu = useCallback(
    (id: string | null, direction = 1) => {
      setMenuState({ pathname: location.pathname, id, direction })
    },
    [location.pathname],
  )

  const cancelMenuClose = useCallback(() => {
    if (menuTimerRef.current) clearTimeout(menuTimerRef.current)
    menuTimerRef.current = null
  }, [])

  const scheduleMenuClose = useCallback(() => {
    cancelMenuClose()
    menuTimerRef.current = setTimeout(() => setOpenMenu(null), 140)
  }, [cancelMenuClose, setOpenMenu])

  const openGroup = (group: NavigationGroup) => {
    cancelMenuClose()
    const currentIndex = siteNavigationGroups.findIndex((item) => item.id === activeMenu)
    const nextIndex = siteNavigationGroups.findIndex((item) => item.id === group.id)
    setOpenMenu(group.id, currentIndex < 0 || nextIndex >= currentIndex ? 1 : -1)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (shellRef.current && !shellRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeMenu) {
        const trigger = groupTriggerRefs.current[activeMenu]
        setOpenMenu(null)
        trigger?.focus()
      }
    }
    document.addEventListener('click', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('click', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeMenu, setOpenMenu])

  useEffect(() => {
    if (!mobileNavigationOpen) return
    mobileNavRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled])')?.focus()
  }, [mobileNavigationOpen])

  useEffect(() => {
    if (!activeMenu || !focusFirstMenuLinkRef.current) return
    focusFirstMenuLinkRef.current = false
    document
      .querySelector<HTMLElement>(`#site-mega-menu-${activeMenu} a`)
      ?.focus()
  }, [activeMenu])

  useEffect(
    () => () => {
      if (menuTimerRef.current) clearTimeout(menuTimerRef.current)
    },
    [],
  )

  const handleMobileKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      setMobileNavigationOpen(false)
      mobileTriggerRef.current?.focus()
      return
    }
    if (event.key !== 'Tab') return
    const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }

  const handleDesktopKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (activeMenu) {
        document
          .querySelector<HTMLElement>(`#site-mega-menu-${activeMenu} a`)
          ?.focus()
      } else {
        const group = siteNavigationGroups[index]
        focusFirstMenuLinkRef.current = true
        openGroup(group)
      }
      return
    }
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const next = (index + direction + siteNavigationGroups.length) % siteNavigationGroups.length
    event.preventDefault()
    groupTriggerRefs.current[siteNavigationGroups[next].id]?.focus()
  }

  const currentMenu = siteNavigationGroups.find((group) => group.id === activeMenu)

  return (
    <div
      ref={shellRef}
      className="site-header-shell relative z-50"
      onMouseEnter={cancelMenuClose}
      onMouseLeave={scheduleMenuClose}
    >
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white transition-shadow duration-200 ${
          scrolled ? 'shadow-[0_10px_28px_rgba(7,31,58,0.2)]' : ''
        }`}
      >
        <div className="site-header__bar">
          <div className="site-header__inner">
            <Link
              to="/"
              className="site-header__brand"
              aria-label="Centrifuge Group home"
              onClick={() => setOpenMenu(null)}
            >
              <img src={brandAssets.logo} alt="Centrifuge Group" />
            </Link>

            <nav className="site-header__desktop-nav" aria-label="Main navigation">
              {siteNavigationGroups.map((group, index) => {
                const expanded = activeMenu === group.id
                const current = group.columns.some((column) =>
                  column.links.some((item) =>
                    location.pathname === item.href ||
                    (item.href !== '/' && location.pathname.startsWith(item.href)),
                  ),
                )
                return (
                  <button
                    key={group.id}
                    ref={(element) => {
                      groupTriggerRefs.current[group.id] = element
                    }}
                    type="button"
                    className={`site-header__nav-trigger ${expanded || current ? 'is-active' : ''}`}
                    aria-expanded={expanded}
                    aria-controls={expanded ? `site-mega-menu-${group.id}` : undefined}
                    onMouseEnter={() => openGroup(group)}
                    onClick={() => openGroup(group)}
                    onKeyDown={(event) => handleDesktopKeyDown(event, index)}
                  >
                    {group.label}
                    <ChevronDown size={14} aria-hidden="true" />
                  </button>
                )
              })}
              <Link
                className={`site-header__nav-link ${location.pathname.startsWith('/projects') ? 'is-active' : ''}`}
                to="/projects"
                aria-current={location.pathname.startsWith('/projects') ? 'page' : undefined}
                onMouseEnter={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(null)}
              >
                Projects
              </Link>
              <Link
                className={`site-header__nav-link site-header__cloud-link ${location.pathname.startsWith('/optima-xcloud') ? 'is-active' : ''}`}
                to="/optima-xcloud/"
                aria-current={location.pathname.startsWith('/optima-xcloud') ? 'page' : undefined}
                onMouseEnter={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(null)}
              >
                OptimaXCloud
              </Link>
            </nav>

            <div className="site-header__actions">
              <Link to="/shop" className="site-header__shop-link">Shop</Link>
              <button
                type="button"
                onClick={toggleCart}
                className="site-header__cart"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag size={17} aria-hidden="true" />
                {cartCount > 0 && <span>{cartCount}</span>}
              </button>
              <Link to="/contact" className="site-header__cta">Get in touch</Link>
              <button
                ref={mobileTriggerRef}
                type="button"
                className="site-header__mobile-toggle"
                onClick={() => setMobileNavigationOpen((open) => !open)}
                aria-expanded={mobileNavigationOpen}
                aria-controls="mobile-site-navigation"
                aria-label={mobileNavigationOpen ? 'Close navigation' : 'Open navigation'}
              >
                {mobileNavigationOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {currentMenu && (
            <motion.div
              key={currentMenu.id}
              id={`site-mega-menu-${currentMenu.id}`}
              className="site-mega-menu"
              role="region"
              aria-label={`${currentMenu.label} navigation`}
              initial={{ opacity: 0, x: reduceMotion ? 0 : menuState.direction * 10, y: reduceMotion ? 0 : 5 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : menuState.direction * -5, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.22,
                ease: motionEase,
              }}
              onMouseEnter={cancelMenuClose}
              onMouseLeave={scheduleMenuClose}
            >
              <div className="site-mega-menu__grid">
                {currentMenu.columns.map((column) => (
                  <section className="site-mega-menu__column" key={column.heading}>
                    <h2>{column.heading}</h2>
                    <ul>
                      {column.links.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            aria-current={location.pathname === item.href ? 'page' : undefined}
                            onClick={() => setOpenMenu(null)}
                          >
                            <span>{item.label}</span>
                            {item.description && <small>{item.description}</small>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
              <div className="site-mega-menu__bottom">
                <span>Explore Centrifuge Group capabilities</span>
                <Link to="/contact" onClick={() => setOpenMenu(null)}>
                  Start a conversation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="site-header__spacer" aria-hidden="true" />

      <AnimatePresence>
        {mobileNavigationOpen && (
          <motion.nav
            ref={mobileNavRef}
            id="mobile-site-navigation"
            aria-label="Mobile site navigation"
            className="site-mobile-nav"
            onKeyDown={handleMobileKeyDown}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
          >
            <div className="site-mobile-nav__top">
              <Link to="/" onClick={() => setMobileNavigationOpen(false)} aria-label="Centrifuge Group home">
                <img src={brandAssets.logo} alt="Centrifuge Group" />
              </Link>
              <button
                type="button"
                aria-label="Close navigation"
                onClick={() => {
                  setMobileNavigationOpen(false)
                  mobileTriggerRef.current?.focus()
                }}
              >
                <X size={21} />
              </button>
            </div>
            <div className="site-mobile-nav__content">
              {siteNavigationGroups.map((group) => (
                <section key={group.id} className="site-mobile-nav__group">
                  <button
                    type="button"
                    aria-expanded={expandedMobileGroup === group.id}
                    aria-controls={`mobile-${group.id}-links`}
                    onClick={() => setExpandedMobileGroup((current) => current === group.id ? null : group.id)}
                  >
                    {group.label}
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>
                  <div id={`mobile-${group.id}-links`} hidden={expandedMobileGroup !== group.id}>
                    {group.columns.flatMap((column) => column.links).map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        aria-current={location.pathname === item.href ? 'page' : undefined}
                        onClick={() => setMobileNavigationOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
              <Link to="/projects" aria-current={location.pathname === '/projects' ? 'page' : undefined} onClick={() => setMobileNavigationOpen(false)}>Projects</Link>
              <Link to="/shop" onClick={() => setMobileNavigationOpen(false)}>Shop</Link>
              <section className="site-mobile-nav__group">
                <button
                  type="button"
                  aria-expanded={expandedMobileGroup === 'optima-xcloud'}
                  aria-controls="mobile-optima-xcloud-links"
                  onClick={() => setExpandedMobileGroup((current) => current === 'optima-xcloud' ? null : 'optima-xcloud')}
                >
                  OptimaXCloud <ChevronDown size={16} aria-hidden="true" />
                </button>
                <div id="mobile-optima-xcloud-links" hidden={expandedMobileGroup !== 'optima-xcloud'}>
                  {optimaXCloudLinks.map((item) => (
                    <Link key={item.path} to={item.path} aria-current={location.pathname === item.path ? 'page' : undefined} onClick={() => setMobileNavigationOpen(false)}>{item.label}</Link>
                  ))}
                </div>
              </section>
              <Link className="site-mobile-nav__cta" to="/contact" onClick={() => setMobileNavigationOpen(false)}>
                Get in touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
