import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { DeveloperProfile } from '../types';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactProps {
  profile: DeveloperProfile;
  initialSubject?: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ profile, initialSubject = '' }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!initialSubject) return;
    setFormData((current) => ({ ...current, subject: initialSubject }));
  }, [initialSubject]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

    if (!accessKey) {
      toast.error('The contact form is not configured yet. Please use the email link below.');
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'Hamid Amini Portfolio',
          subject: `New portfolio inquiry: ${formData.subject}`,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          inquiry_subject: formData.subject.trim(),
          botcheck: '',
        }),
      });

      const result = await response.json() as Web3FormsResponse;
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Your message could not be sent. Please try again.');
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      toast.success('Message sent successfully. I’ll get back to you soon.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="border-t border-slate-200/80 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-950 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Contact details and message form */}
          <div className="bg-white p-4 dark:bg-slate-900 sm:p-5 lg:p-6">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
              <h2 className="section-title section-title-left text-2xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white sm:text-3xl">Get in touch</h2>
              <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">Have a project, position, or idea in mind? Send a message and I’ll get back to you within one business day.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-3 space-y-1">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <label className="block border-b border-slate-200 py-2.5 transition-colors focus-within:border-indigo-500 dark:border-slate-700 dark:focus-within:border-indigo-400">
                  <span className="sr-only">Name</span>
                  <input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Name" className="w-full bg-transparent text-sm text-slate-900 outline-none focus-visible:outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500" />
                </label>
                <label className="block border-b border-slate-200 py-2.5 transition-colors focus-within:border-indigo-500 dark:border-slate-700 dark:focus-within:border-indigo-400">
                  <span className="sr-only">Email address</span>
                  <input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="Email" className="w-full bg-transparent text-sm text-slate-900 outline-none focus-visible:outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500" />
                </label>
                <label className="block border-b border-slate-200 py-2.5 transition-colors focus-within:border-indigo-500 dark:border-slate-700 dark:focus-within:border-indigo-400">
                  <span className="sr-only">Subject</span>
                  <input required value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} placeholder="Subject" className="w-full bg-transparent text-sm text-slate-900 outline-none focus-visible:outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500" />
                </label>
                <label className="block border-b border-slate-200 py-2.5 transition-colors focus-within:border-indigo-500 dark:border-slate-700 dark:focus-within:border-indigo-400">
                  <span className="sr-only">Message</span>
                  <textarea required rows={2} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Create a message here" className="w-full resize-none bg-transparent text-sm leading-6 text-slate-900 outline-none focus-visible:outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500" />
                </label>
                <button type="submit" disabled={isSending} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 disabled:cursor-wait disabled:opacity-70">
                  <Send className="h-4 w-4" />
                  {isSending ? 'Sending…' : 'Send message'}
                </button>
                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                  <a href={`mailto:${profile.email}`} aria-label="Email" title="Email" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"><Mail className="h-4 w-4" /></a>
                  <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} aria-label="Phone" title="Phone" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"><Phone className="h-4 w-4" /></a>
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"><Github className="h-4 w-4" /></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-500 dark:hover:text-indigo-300"><Linkedin className="h-4 w-4" /></a>
                </div>
            </form>
          </div>

          {/* Google Map replaces the image panel from the reference design. */}
          <div className="relative hidden min-h-[240px] overflow-hidden border-t border-slate-200 bg-slate-100 dark:border-slate-800 lg:block lg:min-h-full lg:border-l lg:border-t-0">
            <iframe
              title="Map showing Kabul, Afghanistan"
              src="https://www.google.com/maps?q=Kabul%2C%20Afghanistan&z=11&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[15%] dark:opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-xl bg-slate-950/90 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-indigo-300" />
              Kabul, Afghanistan · Remote worldwide
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
