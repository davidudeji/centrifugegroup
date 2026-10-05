import React from 'react'
import { useInView } from '../../hooks/useInView'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'
type AnimVariant = 'slide' | 'scale' | 'blur' | 'clip' | 'fade'

interface RevealProps {
  children: React.ReactNode
  /** Initial translate direction before reveal */
  from?: Direction
  /** Animation variant — slide (default), scale, blur, clip, fade */
  variant?: AnimVariant
  /** px to translate from */
  distance?: number
  /** animation duration in ms */
  duration?: number
  /** delay before animation starts in ms */
  delay?: number
  /** threshold (0–1) — fraction of element visible before triggering */
  threshold?: number
  className?: string
  style?: React.CSSProperties
  as?: keyof JSX.IntrinsicElements
}

const directionMap: Record<Direction, string> = {
  up:    'translateY(VAR)',
  down:  'translateY(-VAR)',
  left:  'translateX(VAR)',
  right: 'translateX(-VAR)',
  none:  'none',
}

const EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'

function buildStyles(
  inView: boolean,
  variant: AnimVariant,
  from: Direction,
  distance: number,
  duration: number,
  delay: number,
): { hidden: React.CSSProperties; visible: React.CSSProperties } {
  const translate = from === 'none'
    ? undefined
    : directionMap[from].replace('VAR', `${distance}px`)

  const transBase = `opacity ${duration}ms ${EASING} ${delay}ms`
  const transMove = `transform ${duration}ms ${EASING} ${delay}ms`
  const transFilter = `filter ${duration}ms ${EASING} ${delay}ms`

  switch (variant) {
    case 'scale': return {
      hidden: { opacity: 0, transform: `scale(0.92) ${translate ?? ''}`.trim(), willChange: 'opacity, transform' },
      visible: { opacity: 1, transform: 'scale(1)', transition: `${transBase}, ${transMove}` },
    }
    case 'blur': return {
      hidden: { opacity: 0, filter: 'blur(12px)', transform: translate, willChange: 'opacity, filter, transform' },
      visible: { opacity: 1, filter: 'blur(0px)', transform: 'none', transition: `${transBase}, ${transFilter}, ${transMove}` },
    }
    case 'clip': return {
      hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: translate, willChange: 'opacity, clip-path, transform' },
      visible: { opacity: 1, clipPath: 'inset(0 0 0% 0)', transform: 'none', transition: `${transBase}, clip-path ${duration}ms ${EASING} ${delay}ms, ${transMove}` },
    }
    case 'fade': return {
      hidden: { opacity: 0, willChange: 'opacity' },
      visible: { opacity: 1, transition: transBase },
    }
    default: // 'slide'
      return {
        hidden: { opacity: 0, transform: translate, willChange: 'opacity, transform' },
        visible: { opacity: 1, transform: 'none', transition: `${transBase}, ${transMove}` },
      }
  }
}

/**
 * Wraps children in a container that animates in when scrolled into view.
 * Supports slide (default), scale, blur, clip, and fade variants.
 * Uses the design-spec easing: cubic-bezier(0.16, 1, 0.3, 1)
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  from = 'up',
  variant = 'slide',
  distance = 28,
  duration = 650,
  delay = 0,
  threshold = 0.1,
  className,
  style,
  as: Tag = 'div',
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold, rootMargin: '0px 0px -48px 0px' })
  const { hidden, visible } = buildStyles(inView, variant, from, distance, duration, delay)

  return (
    // @ts-ignore — dynamic tag
    <Tag
      ref={ref}
      className={className}
      style={{ ...style, ...(inView ? visible : hidden) }}
    >
      {children}
    </Tag>
  )
}

/** Convenience alias — just fades in with no movement */
export const FadeIn: React.FC<Omit<RevealProps, 'from' | 'variant'>> = (props) => (
  <Reveal {...props} variant="fade" from="none" />
)

/**
 * Staggered reveal — wraps multiple children, each delayed by `stagger` ms.
 * A single IntersectionObserver on the wrapper triggers all children at once.
 */
interface StaggerProps {
  children: React.ReactNode[]
  stagger?: number
  from?: Direction
  variant?: AnimVariant
  distance?: number
  duration?: number
  threshold?: number
  className?: string
  childClassName?: string
  style?: React.CSSProperties
}

export const StaggerReveal: React.FC<StaggerProps> = ({
  children,
  stagger = 80,
  from = 'up',
  variant = 'slide',
  distance = 24,
  duration = 600,
  threshold = 0.08,
  className,
  childClassName,
  style,
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold, rootMargin: '0px 0px -48px 0px' })

  return (
    <div ref={ref} className={className} style={style}>
      {React.Children.map(children, (child, i) => {
        const { hidden, visible } = buildStyles(inView, variant, from, distance, duration, i * stagger)
        return (
          <div className={childClassName} style={inView ? visible : hidden}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default Reveal
