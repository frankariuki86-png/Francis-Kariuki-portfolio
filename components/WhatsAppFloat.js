import { portfolioConfig, buildWhatsAppLink } from "../data/portfolioConfig"

export default function WhatsAppFloat() {
  const { contact } = portfolioConfig
  const href = buildWhatsAppLink(contact.whatsappNumber, contact.whatsappMessage)

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Francis"
      title="Chat with Francis"
      className="whatsapp-float"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.373 0 .03 5.344.03 11.97c0 2.108.55 4.166 1.6 5.996L0 24l6.2-1.62A11.93 11.93 0 0012 23.94c6.627 0 11.97-5.344 11.97-11.97 0-3.2-1.246-6.197-3.45-8.49zM12 21.5c-1.31 0-2.6-.34-3.73-.98l-.27-.16-3.68.96.99-3.59-.17-.28A8.34 8.34 0 013.7 12c0-4.6 3.74-8.34 8.34-8.34 4.6 0 8.34 3.74 8.34 8.34 0 4.6-3.74 8.34-8.34 8.34z" />
        <path d="M17.18 14.45c-.24-.12-1.41-.7-1.63-.78-.22-.08-.39-.12-.56.12-.17.24-.67.78-.81.94-.14.17-.28.19-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.015-.37.105-.49.11-.11.24-.29.36-.44.12-.17.16-.28.25-.46.08-.17.04-.33-.02-.45-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.45.06-.69.33-.24.27-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.12.17 1.85 2.86 4.49 3.9 3.14 1.24 3.14.83 3.71.78.12-.02.99-.4 1.13-.79.14-.38.14-.7.1-.79-.04-.09-.18-.13-.42-.24z" />
      </svg>
      <span>Chat with Francis</span>
    </a>
  )
}
