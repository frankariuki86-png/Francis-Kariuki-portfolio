const Card = ({title, desc}) => (
  <div className="p-4 glass-card rounded-md">
    <h4 className="font-semibold">{title}</h4>
    <p className="mt-2 text-slate-600">{desc}</p>
  </div>
)

export default function Services(){
  return (
    <section id="services" className="mt-16 py-12">
      <h2 className="text-2xl font-semibold">Services</h2>
      <div className="mt-4 section-banner">
        <img src="/images/services.svg" alt="IT services" />
        <div className="banner-overlay" />
        <div className="banner-title">Services & Solutions</div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Web Development" desc="Modern responsive websites and web applications." />
        <Card title="Software Development" desc="Custom business systems and web-based applications." />
        <Card title="ERP & POS Solutions" desc="Business management, sales, inventory and reporting systems." />
        <Card title="IT Support" desc="Computer installation, repair, troubleshooting and maintenance." />
        <Card title="Networking" desc="Wi-Fi, routers, network configuration and office networking." />
        <Card title="CCTV & Access Control" desc="Installation and configuration of security systems." />
        <Card title="Graphic Design" desc="Posters, branding, social media graphics and marketing materials." />
        <Card title="Social Media Management" desc="Content creation, page management and social media growth." />
        <Card title="Online Services" desc="eCitizen, HELB, KUCCPS, passport services, CV creation and other assistance." />
      </div>
    </section>
  )
}
