import React, { useState } from 'react'
import { Save, Store, DollarSign, Truck, CreditCard, Bell, Search, Globe, Mail } from 'lucide-react'

type SettingsSection =
  | 'general'
  | 'currency'
  | 'shipping'
  | 'payments'
  | 'notifications'
  | 'seo'
  | 'social'

const sections: { key: SettingsSection; label: string; icon: React.FC<{ className?: string }> }[] = [
  { key: 'general',       label: 'General',       icon: Store },
  { key: 'currency',      label: 'Currency & Tax', icon: DollarSign },
  { key: 'shipping',      label: 'Shipping',       icon: Truck },
  { key: 'payments',      label: 'Payments',       icon: CreditCard },
  { key: 'notifications', label: 'Notifications',  icon: Bell },
  { key: 'seo',           label: 'SEO',            icon: Search },
  { key: 'social',        label: 'Social Links',   icon: Globe },
]

export const AdminSettingsPage: React.FC = () => {
  const [active, setActive] = useState<SettingsSection>('general')
  const [saved, setSaved] = useState(false)

  // Demo state for each section
  const [general, setGeneral] = useState({
    storeName: 'Centrifuge Group Store',
    email: 'store@centrifugegroup.co',
    phone: '+234 800 CENTRIFUGE',
    address: 'Victoria Island, Lagos, Nigeria',
    timezone: 'Africa/Lagos',
  })

  const [currency, setCurrency] = useState({
    currency: 'NGN',
    symbol: '₦',
    taxRate: '7.5',
    taxLabel: 'VAT',
  })

  const [shipping, setShipping] = useState({
    freeShippingThreshold: '500000',
    standardRate: '5000',
    expressRate: '15000',
    estimatedDays: '3–7',
  })

  const [seo, setSeo] = useState({
    metaTitle: 'Centrifuge Group | Enterprise Technology & Store',
    metaDescription: 'Premium technology hardware, inverters, UPS, solar controllers and enterprise IoT equipment from Centrifuge Group.',
    keywords: 'inverter Nigeria, UPS system, solar controller, enterprise hardware',
  })

  const [social, setSocial] = useState({
    linkedin: 'https://linkedin.com/company/centrifuge-group',
    twitter: '',
    facebook: '',
    instagram: '',
  })

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const Field = ({ label, value, onChange, type = 'text', placeholder = '' }: {
    label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string
  }) => (
    <div>
      <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d] transition-all"
      />
    </div>
  )

  const renderSection = () => {
    switch (active) {
      case 'general':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Store Name" value={general.storeName} onChange={(v) => setGeneral({ ...general, storeName: v })} />
            <Field label="Contact Email" value={general.email} type="email" onChange={(v) => setGeneral({ ...general, email: v })} />
            <Field label="Phone Number" value={general.phone} onChange={(v) => setGeneral({ ...general, phone: v })} />
            <Field label="Timezone" value={general.timezone} onChange={(v) => setGeneral({ ...general, timezone: v })} />
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Store Address</label>
              <textarea
                value={general.address}
                onChange={(e) => setGeneral({ ...general, address: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d] resize-none"
              />
            </div>
          </div>
        )

      case 'currency':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Currency</label>
              <select
                value={currency.currency}
                onChange={(e) => setCurrency({ ...currency, currency: e.target.value })}
                className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]"
              >
                <option value="NGN">NGN — Nigerian Naira (₦)</option>
                <option value="USD">USD — US Dollar ($)</option>
                <option value="GBP">GBP — British Pound (£)</option>
                <option value="EUR">EUR — Euro (€)</option>
              </select>
            </div>
            <Field label="Currency Symbol" value={currency.symbol} onChange={(v) => setCurrency({ ...currency, symbol: v })} />
            <Field label="Tax Rate (%)" value={currency.taxRate} type="number" onChange={(v) => setCurrency({ ...currency, taxRate: v })} />
            <Field label="Tax Label" value={currency.taxLabel} onChange={(v) => setCurrency({ ...currency, taxLabel: v })} />
          </div>
        )

      case 'shipping':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Free Shipping Threshold (₦)" value={shipping.freeShippingThreshold} type="number" onChange={(v) => setShipping({ ...shipping, freeShippingThreshold: v })} />
            <Field label="Standard Shipping Rate (₦)" value={shipping.standardRate} type="number" onChange={(v) => setShipping({ ...shipping, standardRate: v })} />
            <Field label="Express Shipping Rate (₦)" value={shipping.expressRate} type="number" onChange={(v) => setShipping({ ...shipping, expressRate: v })} />
            <Field label="Estimated Delivery (e.g. 3–7 days)" value={shipping.estimatedDays} onChange={(v) => setShipping({ ...shipping, estimatedDays: v })} />
          </div>
        )

      case 'payments':
        return (
          <div className="space-y-4">
            <div className="p-4 bg-[#000000] rounded-xl border border-[#333333]">
              <p className="text-xs font-semibold text-[#faf9f6] mb-1">Payment Gateway</p>
              <p className="text-xs text-[#868684]">
                Payment is abstracted behind <code className="font-mono text-[#faf9f6] bg-[#1e1e1d] px-1.5 py-0.5 rounded">PaymentService</code>.
                Connect Paystack, Flutterwave, or Stripe by updating the service in <code className="font-mono text-[#faf9f6] bg-[#1e1e1d] px-1.5 py-0.5 rounded">src/services/paymentService.ts</code>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Active Gateway</label>
                <select className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]">
                  <option>Mock Payment (Development)</option>
                  <option>Paystack</option>
                  <option>Flutterwave</option>
                  <option>Stripe</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Mode</label>
                <select className="w-full h-9 px-3 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d]">
                  <option>Test Mode</option>
                  <option>Live Mode</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-4">
            {[
              { label: 'New Order Email', desc: 'Receive email when a new order is placed' },
              { label: 'Low Stock Alert', desc: 'Alert when a product falls below threshold' },
              { label: 'Customer Registration', desc: 'Notify when a new customer registers' },
              { label: 'Order Status Updates', desc: 'Notify customers when order status changes' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-4 bg-[#000000] rounded-xl border border-[#333333]">
                <div>
                  <p className="text-xs font-semibold text-[#faf9f6]">{item.label}</p>
                  <p className="text-xs text-[#868684]">{item.desc}</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-[#333333]" />
              </div>
            ))}
          </div>
        )

      case 'seo':
        return (
          <div className="space-y-5">
            <Field label="Meta Title" value={seo.metaTitle} onChange={(v) => setSeo({ ...seo, metaTitle: v })} />
            <div>
              <label className="block text-xs font-semibold text-[#faf9f6] mb-1.5">Meta Description</label>
              <textarea
                value={seo.metaDescription}
                onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 bg-[#000000] border border-[#333333] rounded-lg text-sm text-[#faf9f6] focus:outline-none focus:border-[#f0b66d] resize-none"
              />
            </div>
            <Field label="Keywords (comma-separated)" value={seo.keywords} onChange={(v) => setSeo({ ...seo, keywords: v })} />
          </div>
        )

      case 'social':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {Object.entries(social).map(([key, value]) => (
              <Field
                key={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={value}
                type="url"
                placeholder={`https://${key}.com/…`}
                onChange={(v) => setSocial({ ...social, [key]: v })}
              />
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading font-bold text-2xl text-[#faf9f6]">Store Settings</h1>
        <p className="text-sm text-[#868684] mt-0.5">Manage your store configuration and preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar nav */}
        <aside className="lg:w-56 shrink-0">
          <div className="bg-[#121212] rounded-xl border border-[#333333] overflow-hidden">
            {sections.map((s) => {
              const Icon = s.icon
              return (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-semibold text-left transition-colors border-b last:border-0 border-[#333333] ${
                    active === s.key
                      ? 'bg-[#000000] text-white'
                      : 'text-[#868684] hover:bg-[#000000] hover:text-[#faf9f6]'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {s.label}
                </button>
              )
            })}
          </div>
        </aside>

        {/* Settings form */}
        <div className="flex-1">
          <div className="bg-[#121212] rounded-xl border border-[#333333] p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-base text-[#faf9f6]">
                {sections.find((s) => s.key === active)?.label}
              </h2>
              <button
                onClick={handleSave}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  saved
                    ? 'bg-[#16A34A] text-white'
                    : 'bg-[#000000] text-white hover:bg-[#000000]'
                }`}
              >
                <Save className="h-3.5 w-3.5" />
                {saved ? 'Saved!' : 'Save Changes'}
              </button>
            </div>

            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettingsPage
