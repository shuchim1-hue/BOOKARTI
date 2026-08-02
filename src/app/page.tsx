"use client"

import { useState } from "react"
import {
  ArrowRight, BadgeCheck, Bell, ChevronRight, Heart,
  MapPin, Menu, Play, Search, ShieldCheck, Sparkles, Star, Users, X,
} from "lucide-react"

const services = [
  ["Puja & Havan", "Book a sacred ceremony with verified pandits, online or at home.", "₹1,100 onwards", "🪔"],
  ["Pandit at Home", "Experienced priests for every samskar, festival and family ritual.", "₹899 onwards", "🙏"],
  ["Kundli & Astrology", "Clarity on your life's questions from trusted spiritual guides.", "₹499 onwards", "✦"],
  ["Vastu & Numerology", "Bring balance to your home, work and important decisions.", "₹799 onwards", "◈"],
]

const temples = [
  { name: "Kashi Vishwanath", city: "Varanasi, Uttar Pradesh", time: "Aarti in 18 min", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=85" },
  { name: "Mahakaleshwar Jyotirlinga", city: "Ujjain, Madhya Pradesh", time: "Live now", image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=85" },
  { name: "Shree Jagannath Temple", city: "Puri, Odisha", time: "Next at 6:30 PM", image: "https://images.unsplash.com/photo-1621502602155-8f39b5a1f6ba?auto=format&fit=crop&w=900&q=85" },
]

const rituals = ["Satyanarayan Katha", "Griha Pravesh", "Mahamrityunjaya Jaap", "Navgraha Shanti", "Rudrabhishek", "Pind Daan"]

export default function HomePage() {
  const [activeService, setActiveService] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [donation, setDonation] = useState("501")

  return (
    <div className="arti-site">
      <div className="announcement"><Bell size={14} /> <span>Navratri Seva bookings are now open</span><a href="#services">Explore seva <ArrowRight size={13} /></a></div>
      <header className="site-header">
        <a href="#top" className="wordmark"><span className="wordmark-mark">ॐ</span><span>book<span>arti</span><small>Faith, made possible.</small></span></a>
        <nav className={menuOpen ? "mobile-open" : ""}>
          <a href="#live" onClick={() => setMenuOpen(false)}>Live Darshan</a><a href="#services" onClick={() => setMenuOpen(false)}>Puja & Seva</a><a href="#astrology" onClick={() => setMenuOpen(false)}>Astrology</a><a href="#community" onClick={() => setMenuOpen(false)}>Community</a>
          <a className="nav-cta" href="#download" onClick={() => setMenuOpen(false)}>Get the app <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> India&apos;s spiritual home, online</div>
            <h1>Keep your faith<br /><em>close to heart.</em></h1>
            <p className="hero-intro">From the first diya of the morning to a prayer for someone you love. Book authentic rituals, connect with trusted pandits and find a little more peace, wherever you are.</p>
            <div className="hero-actions"><a className="button button-primary" href="#services">Book a puja <ArrowRight size={17} /></a><a className="button button-quiet" href="#live"><span className="play-circle"><Play size={11} fill="currentColor" /></span> Watch live darshan</a></div>
            <div className="trust-row"><div className="avatars"><span>PS</span><span>AK</span><span>RM</span><span>+</span></div><span><strong>2 lakh+</strong> devotees found their seva</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image" />
            <div className="hero-glow" />
            <div className="floating-card mantra-card"><span className="floating-icon">ॐ</span><div><small>Today&apos;s mantra</small><strong>ॐ नमः शिवाय</strong></div></div>
            <div className="floating-card darshan-card"><span className="live-dot" /><div><small>Live from Ujjain</small><strong>Mahakal Aarti <span>↗</span></strong></div><div className="mini-wave"><i /><i /><i /><i /><i /></div></div>
          </div>
        </section>

        <section className="quick-search"><div className="search-label"><Sparkles size={18} /> What are you seeking today?</div><div className="search-box"><Search size={18} /><input placeholder="Search for a puja, temple, pandit or guidance..." /><button>Search <ArrowRight size={15} /></button></div><div className="popular"><span>Popular:</span>{["Griha Pravesh", "Kundli", "Havan", "Puja Samagri"].map((x) => <a href="#services" key={x}>{x}</a>)}</div></section>

        <section className="section live-section" id="live"><div className="section-heading"><div><span className="section-kicker">Be there, from anywhere</span><h2>Temple darshan, <em>every day.</em></h2></div><a href="#live" className="text-link">View all temples <ArrowRight size={15} /></a></div><div className="temple-grid">{temples.map((temple, index) => <article className="temple-card" key={temple.name}><div className="temple-image" style={{ backgroundImage: `url(${temple.image})` }}><span className={index === 1 ? "live-pill" : "time-pill"}>{index === 1 && <span className="live-dot" />}{temple.time}</span><button className="watch-button"><Play size={14} fill="currentColor" /> Watch live</button></div><div className="temple-details"><h3>{temple.name}</h3><p><MapPin size={14} /> {temple.city}</p><span className="temple-link">View aarti schedule <ChevronRight size={14} /></span></div></article>)}</div></section>

        <section className="section services-section" id="services"><div className="section-heading"><div><span className="section-kicker">Guided by tradition</span><h2>One place for your <em>seva.</em></h2></div><p className="heading-note">Every booking includes a digital sankalp, photos from the ceremony and prasad delivery options.</p></div><div className="service-layout"><div className="service-tabs">{services.map((service, index) => <button className={activeService === index ? "service-tab active" : "service-tab"} onClick={() => setActiveService(index)} key={service[0]}><span className="service-emoji">{service[3]}</span><span><strong>{service[0]}</strong><small>{service[1]}</small></span><ChevronRight size={17} /></button>)}</div><div className="service-feature"><div className="feature-top"><span>Recommended for you</span><span className="price">{services[activeService][2]}</span></div><h3>{services[activeService][0]}</h3><p>{services[activeService][1]} Add your name, gotra and sankalp. We&apos;ll take care of everything else.</p><div className="feature-checks"><span><BadgeCheck size={16} /> Verified pandit</span><span><BadgeCheck size={16} /> Live video available</span><span><BadgeCheck size={16} /> Prasad to your door</span></div><a className="button button-light" href="#booking">Explore this seva <ArrowRight size={16} /></a></div></div></section>

        <section className="ritual-banner"><div><span className="section-kicker">For every milestone</span><h2>A ritual for every <em>intention.</em></h2><p>Birthdays, new beginnings, healing, gratitude or remembrance. Let tradition hold the moment.</p></div><div className="ritual-pills">{rituals.map((ritual) => <a href="#services" key={ritual}>{ritual}<ArrowRight size={14} /></a>)}</div></section>

        <section className="section guidance-section" id="astrology"><div className="guidance-copy"><span className="section-kicker">A little clarity, when you need it</span><h2>Answers that feel<br /><em>grounded.</em></h2><p>Talk to a verified astrologer, tarot reader or vastu expert over chat or call. Human wisdom, supported by thoughtful technology.</p><div className="guide-links"><a href="#booking"><span>✦</span> Talk to an astrologer <ArrowRight size={15} /></a><a href="#booking"><span>◈</span> Get your kundli made <ArrowRight size={15} /></a><a href="#booking"><span>✧</span> Ask our AI guide <ArrowRight size={15} /></a></div></div><div className="guidance-art"><div className="sun-disc" /><div className="zodiac-card"><div className="zodiac-title"><span>YOUR BIRTH CHART</span><span>♈ ♉ ♊</span></div><div className="chart"><span>☽</span><span>♃</span><b>✦</b><span>☉</span><span>♄</span></div><p>Understand the patterns.<br /><strong>Choose your path.</strong></p></div></div></section>

        <section className="section community-section" id="community"><div className="community-photo" /><div className="community-content"><span className="section-kicker">Seva is a circle</span><h2>Your prayer can<br /><em>feed a family.</em></h2><p>Make an offering towards animal feeding, poor feeding, temple restoration or a teerth yatra for someone who dreams of going home to the divine.</p><div className="donation-options">{["501", "1,001", "2,501"].map((amount) => <button className={donation === amount ? "selected" : ""} onClick={() => setDonation(amount)} key={amount}>₹{amount}</button>)}</div><a className="button button-primary" href="#donate">Offer seva <Heart size={16} fill="currentColor" /></a><small className="impact-note"><Users size={14} /> 100% of your seva goes to the cause you choose</small></div></section>

        <section className="package-section" id="booking"><div className="package-image" /><div className="package-content"><span className="section-kicker">Make memories, not arrangements</span><h2>Celebrate together.<br /><em>We&apos;ll handle the rest.</em></h2><p>From an intimate jagrata to a grand bhandara, our complete packages bring together pandits, singers, DJs, orchestra, catering, tents, decor and homestays.</p><a href="#download" className="button button-dark">Plan your event <ArrowRight size={16} /></a><div className="package-meta"><span><ShieldCheck size={16} /> One trusted team</span><span><Star size={16} fill="currentColor" /> Budget to luxury</span></div></div></section>

        <section className="download-section" id="download"><div><span className="section-kicker">Your mandir, in your pocket</span><h2>Keep faith<br /><em>within reach.</em></h2><p>Book, watch, connect and give from the BookArti app. Coming soon on iOS and Android.</p><div className="store-buttons"><a href="#download"><span></span><small>Download on the<br /><strong>App Store</strong></small></a><a href="#download"><span>▶</span><small>GET IT ON<br /><strong>Google Play</strong></small></a></div></div><div className="phone-mockup"><div className="phone-screen"><div className="phone-top">9:41 <span>•••</span></div><div className="phone-om">ॐ</div><h4>Namaste, Priya</h4><p>What will you seek today?</p><div className="phone-card"><span>LIVE NOW</span><strong>Mahakal Aarti</strong><small>Ujjain · 2.4k watching</small></div><div className="phone-nav"><span>⌂<small>Home</small></span><span>◉<small>Darshan</small></span><span>♧<small>Bookings</small></span><span>◯<small>Profile</small></span></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="footer-brand"><a href="#top" className="wordmark"><span className="wordmark-mark">ॐ</span><span>book<span>arti</span><small>Faith, made possible.</small></span></a><p>Bringing India&apos;s living traditions closer to every home, every heart.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#live">Live Darshan</a><a href="#services">Puja & Seva</a><a href="#astrology">Astrology</a></div><div><strong>Company</strong><a href="#community">Our impact</a><a href="#download">Download app</a><a href="#booking">Partner with us</a></div><div><strong>Support</strong><a href="#booking">Help centre</a><a href="#booking">Contact us</a><a href="#booking">Terms & privacy</a></div></div><div className="footer-bottom"><span>© 2025 BookArti. Made with श्रद्धा in India.</span><span>Namaste from <strong>bookarti.com</strong></span></div></footer>
    </div>
  )
}
