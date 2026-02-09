import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { useBasics } from '@/hooks/useResumeData'

export function ContactSection() {
  const basics = useBasics()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
      <p className="text-[var(--color-text-secondary)] mb-8">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Details */}
        <div className="space-y-4">
          <a
            href={`mailto:${basics.email}`}
            className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card-inner)]
              hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg
              bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">Email</div>
              <div className="text-sm font-medium group-hover:text-[var(--color-brand)] transition-colors">
                {basics.email}
              </div>
            </div>
          </a>

          <a
            href={`tel:${basics.phone}`}
            className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card-inner)]
              hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg
              bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">Phone</div>
              <div className="text-sm font-medium group-hover:text-[var(--color-brand)] transition-colors">
                {basics.phone}
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-card-inner)]">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg
              bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">Location</div>
              <div className="text-sm font-medium">{basics.location}</div>
            </div>
          </div>
        </div>

        {/* Social Profiles */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
          <div className="space-y-3">
            {basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl
                  bg-[var(--color-card-inner)] hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="text-sm font-medium group-hover:text-[var(--color-brand)] transition-colors">
                    {profile.network}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    @{profile.username}
                  </div>
                </div>
                <ExternalLink size={16} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-brand)] transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`mailto:${basics.email}`}
            className="flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-xl
              bg-[var(--color-brand)] text-white font-medium
              hover:bg-[var(--color-brand-dark)] transition-colors"
          >
            <Mail size={18} />
            Send me an email
          </a>
        </div>
      </div>
    </div>
  )
}
