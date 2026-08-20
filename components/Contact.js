import { portfolioConfig, buildWhatsAppLink } from '../data/portfolioConfig'

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.85,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true
}

function MailIcon() {
  return <svg {...iconProps}><path d="M4 6h16v12H4z" /><path d="m4 7 8 6 8-6" /></svg>
}

function WhatsAppIcon() {
  return <svg {...iconProps}><path d="M20 11.5a8 8 0 1 1-3.6-6.7" /><path d="M16.5 8.5 13 12l-2-1" /></svg>
}

function PhoneIcon() {
  return <svg {...iconProps}><path d="M6.5 4.5 9 7l-1.5 2.5c1.2 2.4 3.1 4.3 5.5 5.5L15.5 13 18 15.5c.5.5.5 1.2 0 1.7-1 1-2.4 1.4-3.7 1.1-5.7-1.2-10.4-5.9-11.6-11.6C2.4 4.9 2.8 3.5 3.8 2.5c.5-.5 1.2-.5 1.7 0z" /></svg>
}

function GithubIcon() {
  return <svg {...iconProps}><path d="M9 19c-4 1.2-4-1.6-5.5-2" /><path d="M15 22v-3.3c0-1 .3-1.8.8-2.4C11.2 16 9 14.4 9 10.5c0-1 .3-1.8.9-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.5 9.5 0 0 1 4.6 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.8.9 1.6.9 2.6 0 3.9-2.2 5.5-5.8 5.8.6.6 1 1.7 1 2.9V22" /></svg>
}

function LinkedInIcon() {
  return <svg {...iconProps}><path d="M6.5 9.5V18" /><path d="M6.5 6.2v.1" /><path d="M10.2 18v-4.7c0-1.6 1-2.8 2.5-2.8 1.6 0 2.6 1.2 2.6 2.8V18" /><path d="M10.2 13.6V18" /></svg>
}

function FacebookIcon() {
  return <svg {...iconProps}><path d="M14 3h3v4h-3c-.6 0-1 .4-1 1v2h4l-.5 4H13v7h-4v-7H6v-4h3V7c0-2.2 1.8-4 4-4z" /></svg>
}

function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h12" /><path d="m13 6 6 6-6 6" /></svg>
}

function StatusDot() {
  return <span className="status-dot" aria-hidden="true" />
}

function Card({ href, icon, title, value, note, cta, ariaLabel }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-card" aria-label={ariaLabel}>
      <div className="contact-card-icon">{icon}</div>
      <div className="contact-card-body">
        <div className="contact-card-title">{title}</div>
        <div className="contact-card-value">{value}</div>
        <div className="contact-card-note">{note}</div>
        <div className="contact-card-cta">
          <span>{cta}</span>
          <ArrowIcon />
        </div>
      </div>
    </a>
  )
}

function SocialLinks() {
  const { social } = portfolioConfig
  const { contact } = portfolioConfig
  const whatsappHref = buildWhatsAppLink(contact.whatsappNumber, contact.whatsappMessage)

  const items = [
    { key: 'github', label: 'GitHub', href: social.github, icon: <GithubIcon /> },
    { key: 'linkedin', label: 'LinkedIn', href: social.linkedin, icon: <LinkedInIcon /> },
    { key: 'facebook', label: 'Facebook', href: social.facebook, icon: <FacebookIcon /> },
    { key: 'whatsapp', label: 'WhatsApp', href: whatsappHref, icon: <WhatsAppIcon /> }
  ].filter((item) => Boolean(item.href))

  return (
    <div className="contact-social-row">
      {items.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="social-icon-button"
          aria-label={item.label}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default function Contact(){
  const { contact, images } = portfolioConfig
  const whatsappHref = buildWhatsAppLink(contact.whatsappNumber, contact.whatsappMessage)
  const projectTypeOptions = [
    'Web Development',
    'Software Development',
    'ERP / POS',
    'IT Support',
    'Networking',
    'CCTV / Access Control',
    'Graphic Design',
    'Social Media Management',
    'Other'
  ]

  return (
    <section id="contact" className="section fade-up">
      <div className="contact-status">
        <StatusDot />
        <span>AVAILABLE FOR PROJECTS</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <div className="space-y-6">
          <div>
            <p className="section-kicker">Let's Talk</p>
            <h2 className="section-title">Let's build something useful.</h2>
            <p className="section-sub">
              Have a project, business idea or technology challenge? Let's talk and turn it into a practical solution.
            </p>
            <p className="section-sub mt-4">
              I'm available for software development, websites, business systems, IT solutions, graphic design and digital projects.
            </p>
          </div>

          <div className="grid gap-4">
            <Card
              href={`mailto:${contact.email}`}
              icon={<MailIcon />}
              title="Email Me"
              value={contact.email}
              note="Best for project enquiries & collaborations"
              cta="Send Email →"
              ariaLabel={`Send an email to ${contact.email}`}
            />
            <Card
              href={whatsappHref}
              icon={<WhatsAppIcon />}
              title="WhatsApp"
              value={contact.phoneDisplay}
              note="Quick conversations & project enquiries"
              cta="Chat on WhatsApp →"
              ariaLabel={`Chat on WhatsApp at ${contact.phoneDisplay}`}
            />
            <Card
              href={`tel:${contact.phone}`}
              icon={<PhoneIcon />}
              title="Call Me"
              value={contact.phoneDisplay}
              note="Available for project discussions"
              cta="Call Now →"
              ariaLabel={`Call ${contact.phoneDisplay}`}
            />
          </div>

          <div className="panel p-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">Connect with me</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Social</span>
            </div>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="contact-visual panel">
            <img
              src={images.contactImage}
              alt="Modern technology workspace"
              className="contact-visual-image"
              onError={(event) => {
                event.currentTarget.src = images.contactImageLocal
              }}
            />
            <div className="contact-visual-overlay" />
            <div className="contact-visual-chip">
              <span className="status-dot" />
              <span>Available for projects</span>
            </div>
            <div className="contact-visual-tag">Software • Web • IT • Digital</div>
          </div>

          <form id="contact-form" className="panel p-6 space-y-4" noValidate>
            <div>
              <h3 className="text-lg font-semibold">Start a conversation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300" htmlFor="contact-name">Full Name</label>
                <input id="contact-name" name="name" type="text" className="mt-1" placeholder="Your full name" required minLength={2} />
              </div>
              <div>
                <label className="block text-sm text-slate-300" htmlFor="contact-email">Email Address</label>
                <input id="contact-email" name="email" type="email" className="mt-1" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="block text-sm text-slate-300" htmlFor="contact-phone">Phone Number</label>
                <input id="contact-phone" name="phone" type="tel" className="mt-1" placeholder="+254 7xx xxx xxx" pattern="[0-9+\s()-]{8,}" />
              </div>
              <div>
                <label className="block text-sm text-slate-300" htmlFor="contact-project-type">Project Type</label>
                <select id="contact-project-type" name="projectType" className="mt-1" defaultValue="" required>
                  <option value="" disabled>Select project type</option>
                  {projectTypeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" className="mt-1" rows="4" placeholder="Tell me about your idea" required minLength={10} />
            </div>
            <button type="submit" className="btn-primary">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  )
}
