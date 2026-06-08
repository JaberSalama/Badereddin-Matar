'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { personalInfo } from '@/data/profile'
import { fadeLeft, fadeRight } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
          description="Have a project in mind? Let's discuss how I can help bring your vision to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-gray-900 font-bold text-xl mb-2">Let&apos;s Talk</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                I&apos;m currently available for freelance work and full-time positions. If you have a project that needs a skilled Laravel developer, I&apos;d love to hear from you.
              </p>
            </div>

            {[
              {
                icon: Phone,
                label: 'Phone',
                value: personalInfo.phone,
                href: `tel:${personalInfo.phone}`,
              },
              {
                icon: Mail,
                label: 'Email',
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: personalInfo.location,
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#ff4d4f]/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ff4d4f]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#ff4d4f]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-semibold text-gray-700 hover:text-[#ff4d4f] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-gray-700">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { href: personalInfo.github, icon: GithubIcon, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#ff4d4f] hover:text-white hover:border-[#ff4d4f] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-slate-200 bg-slate-50"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm mb-6">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#ff4d4f] text-white rounded-xl text-sm font-semibold hover:bg-[#e03e3e] transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name <span className="text-[#ff4d4f]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#ff4d4f] focus:ring-2 focus:ring-[#ff4d4f]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span className="text-[#ff4d4f]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#ff4d4f] focus:ring-2 focus:ring-[#ff4d4f]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Subject <span className="text-[#ff4d4f]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#ff4d4f] focus:ring-2 focus:ring-[#ff4d4f]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-[#ff4d4f]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-gray-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#ff4d4f] focus:ring-2 focus:ring-[#ff4d4f]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#ff4d4f] text-white font-semibold rounded-xl hover:bg-[#e03e3e] shadow-[0_0_20px_rgba(255,77,79,0.3)] hover:shadow-[0_0_35px_rgba(255,77,79,0.5)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
