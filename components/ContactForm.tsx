'use client'

import { useState, FormEvent } from 'react'

interface FormContent {
  heading: string
  name: { label: string; placeholder: string }
  email: { label: string; placeholder: string }
  phone: { label: string; placeholder: string }
  division: {
    label: string
    placeholder: string
    options: { value: string; label: string }[]
  }
  message: { label: string; placeholder: string }
  submit: string
  sending: string
  success: string
  error: string
}

interface ContactFormProps {
  form: FormContent
}

export default function ContactForm({ form }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const data = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })

      if (response.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-navy-900 mb-6">{form.heading}</h2>

      {status === 'success' && (
        <div role="alert" className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm">
          {form.success}
        </div>
      )}

      {status === 'error' && (
        <div role="alert" className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
          {form.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Web3Forms access key — replace with real key from client */}
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
        <input type="hidden" name="subject" value="New enquiry from sarayaco.com" />
        <input type="checkbox" name="botcheck" className="hidden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-navy-700">
              {form.name.label} <span aria-hidden="true" className="text-terra-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={form.name.placeholder}
              className="border border-sand-300 focus:border-terra-500 focus:outline-none focus:ring-2 focus:ring-terra-500/20 px-3.5 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors duration-150"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-navy-700">
              {form.email.label} <span aria-hidden="true" className="text-terra-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={form.email.placeholder}
              className="border border-sand-300 focus:border-terra-500 focus:outline-none focus:ring-2 focus:ring-terra-500/20 px-3.5 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors duration-150"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-navy-700">
              {form.phone.label}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder={form.phone.placeholder}
              className="border border-sand-300 focus:border-terra-500 focus:outline-none focus:ring-2 focus:ring-terra-500/20 px-3.5 py-2.5 text-sm text-navy-900 placeholder-navy-400 transition-colors duration-150"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="division" className="text-sm font-medium text-navy-700">
              {form.division.label}
            </label>
            <select
              id="division"
              name="division"
              className="border border-sand-300 focus:border-terra-500 focus:outline-none focus:ring-2 focus:ring-terra-500/20 px-3.5 py-2.5 text-sm text-navy-900 bg-white transition-colors duration-150"
            >
              <option value="">{form.division.placeholder}</option>
              {form.division.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-navy-700">
            {form.message.label} <span aria-hidden="true" className="text-terra-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={form.message.placeholder}
            className="border border-sand-300 focus:border-terra-500 focus:outline-none focus:ring-2 focus:ring-terra-500/20 px-3.5 py-2.5 text-sm text-navy-900 placeholder-navy-400 resize-none transition-colors duration-150"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          aria-busy={status === 'sending'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-terra-500 hover:bg-terra-600 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99] text-white font-semibold px-8 py-3.5 transition-all duration-150"
        >
          {status === 'sending' ? form.sending : form.submit}
        </button>
      </form>
    </div>
  )
}
