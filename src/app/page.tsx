"use client"

import { useState } from "react"
import { ArrowRight, CalendarDays, ChevronDown, ChevronRight, Heart, Menu, Play, ShieldCheck, Sparkles, UserRound, X } from "lucide-react"

const templeServices = [
  { title: "Live Darshan", hindi: "दर्शन", icon: "◉", note: "Join aarti from 100+ mandirs", color: "red" },
  { title: "Book a Puja", hindi: "पूजा बुक करें", icon: "ॐ", note: "Puja at temple or home", color: "saffron" },
  { title: "Pandit at Home", hindi: "पंडित बुक करें", icon: "श्री", note: "Verified pandits near you", color: "green" },
  { title: "Astrology", hindi: "ज्योतिष", icon: "✦", note: "Kundli, tarot & guidance", color: "blue" },
  { title: "Seva & Donations", hindi: "सेवा", icon: "दान", note: "Offer with a pure heart", color: "pink" },
]

const pujas = [
  { title: "Maha Mrityunjaya Jaap", temple: "Kashi Vishwanath Temple", price: "₹1,100", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=85", tag: "For health & healing" },
  { title: "Rudrabhishek Puja", temple: "Mahakaleshwar Jyotirlinga", price: "₹1,501", image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=85", tag: "Most booked" },
  { title: "Navgraha Shanti Puja", temple: "Trimbakeshwar Temple", price: "₹2,100", image: "https://images.unsplash.com/photo-1621502602155-8f39b5a1f6ba?auto=format&fit=crop&w=800&q=85", tag: "For dosha nivaran" },
]

const festivals = ["Ganesh Chaturthi", "Navratri Puja", "Satyanarayan Katha", "Griha Pravesh", "Maha Shivratri"]

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [service, setService] = useState(1)
  const [amount, setAmount] = useState("501")

  return <div className="devotional-site">
    <div className="top-strip"><span>शुभ प्रभात</span><span className="top-message">Aaj ka darshan: <strong>Shree Mahakaleshwar Jyotirlinga</strong></span><span>ॐ नमः शिवाय</span></div>
    <header className="main-nav">
      <a className="devotional-logo" href="#home"><span className="logo-sun">ॐ</span><span><strong>Book<span>Arti</span></strong><small>भक्ति से सेवा तक</small></span></a>
      <nav className={menuOpen ? "open" : ""}><a href="#live">Live Darshan</a><a href="#puja">Puja & Seva <ChevronDown size={13} /></a><a href="#pandit">Pandit Booking</a><a href="#astro">Astrology</a><a href="#donate">Seva & Daan</a><a className="nav-account" href="#account"><UserRound size={15} /> Login</a></nav>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="home">
      <section className="devotional-hero">
        <div className="hero-mandala" />
        <div className="hero-copy"><div className="devotional-kicker"><span /> भारत की भक्ति, आपके घर तक <span /></div><h1>जहाँ मन में श्रद्धा,<br /><em>वहाँ BookArti.</em></h1><p>Book authentic puja, join live darshan from India&apos;s sacred temples, and seek guidance from trusted pandits and spiritual experts.</p><div className="hero-buttons"><a className="primary-action" href="#puja">Book a Puja <ArrowRight size={17} /></a><a className="secondary-action" href="#live"><span className="play-button"><Play size={12} fill="currentColor" /></span> Watch Live Darshan</a></div><div className="hero-proof"><ShieldCheck size={15} /><span><strong>Trusted by 2,00,000+ devotees</strong><br />Secure payments · Authentic seva · Prasad delivered</span></div></div>
        <div className="hero-temple"><div className="hero-temple-image" /><div className="hero-temple-overlay" /><div className="hero-live-card"><span className="live-badge"><i /> LIVE NOW</span><strong>Mahakal Bhasma Aarti</strong><small>Ujjain · 2,408 devotees watching</small><a href="#live">Join darshan <ArrowRight size={13} /></a></div><div className="hero-blessing"><span>ॐ</span><div><small>आज का मंत्र</small><strong>ॐ त्र्यम्बकं यजामहे</strong></div></div></div>
      </section>

      <section className="intent-bar"><div className="intent-label"><Sparkles size={17} /> Aap kya karna chahenge?</div><div className="intent-options">{templeServices.map((item, index) => <button className={service === index ? `intent-item active ${item.color}` : `intent-item ${item.color}`} onClick={() => setService(index)} key={item.title}><span className="intent-icon">{item.icon}</span><span><strong>{item.title}</strong><small>{item.note}</small></span><ChevronRight size={15} /></button>)}</div></section>

      <section className="dev-section" id="live"><div className="section-title"><div><span className="red-kicker">प्रत्यक्ष दर्शन</span><h2>Darshan that feels <em>near.</em></h2><p>Be a part of the aarti, wherever you are.</p></div><a href="#live" className="view-all">View all live temples <ArrowRight size={15} /></a></div><div className="darshan-grid"><article className="darshan-feature"><div className="darshan-feature-image" /><div className="feature-shade" /><div className="darshan-feature-content"><span className="live-badge"><i /> LIVE NOW</span><h3>Shree Mahakaleshwar<br />Jyotirlinga</h3><p>Evening Aarti · Ujjain, Madhya Pradesh</p><a className="white-action" href="#live"><Play size={13} fill="currentColor" /> Enter Darshan</a></div></article><div className="temple-list"><TempleRow image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80" name="Kashi Vishwanath" place="Varanasi · Next aarti 6:30 PM" /><TempleRow image="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=80" name="Shree Jagannath Temple" place="Puri · Next aarti 7:00 PM" /><TempleRow image="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=300&q=80" name="Tirupati Balaji" place="Tirumala · Next aarti 8:00 PM" /></div></div></section>

      <section className="puja-section" id="puja"><div className="dev-section"><div className="section-title"><div><span className="red-kicker">पूजा और सेवा</span><h2>Make your sankalp.<br /><em>We&apos;ll do the seva.</em></h2><p>Choose a temple, share your sankalp and let our verified pandits perform the ritual on your behalf.</p></div><a href="#puja" className="view-all">Explore all pujas <ArrowRight size={15} /></a></div><div className="puja-cards">{pujas.map((puja) => <article className="puja-card" key={puja.title}><div className="puja-image" style={{ backgroundImage: `url(${puja.image})` }}><span>{puja.tag}</span><button aria-label="Add to wishlist"><Heart size={16} /></button></div><div className="puja-card-body"><small><CalendarDays size={13} /> Available this week</small><h3>{puja.title}</h3><p>{puja.temple}</p><div><strong>{puja.price}</strong><a href="#booking">Book now <ArrowRight size={13} /></a></div></div></article>)}</div></div></section>

      <section className="how-section"><div className="dev-section"><div className="section-title centered"><span className="red-kicker">सरल, सुरक्षित, सात्विक</span><h2>Your puja, in <em>three steps.</em></h2></div><div className="steps"><Step number="01" icon="✦" title="Choose your seva" text="Select your puja, temple and preferred date." /><Step number="02" icon="ॐ" title="Add your sankalp" text="Share your name, gotra and prayer details." /><Step number="03" icon="♧" title="Receive blessings" text="Watch live, get photos, certificate and prasad." /></div></div></section>

      <section className="astro-section" id="astro"><div className="astro-art"><div className="astro-ring ring-one" /><div className="astro-ring ring-two" /><div className="astro-symbol">✦</div><div className="astro-paper"><small>YOUR KUNDLI</small><strong>आकाश में<br />आपकी कहानी</strong><span>Get a reading from a verified expert</span></div></div><div className="astro-copy"><span className="red-kicker">ज्योतिष और मार्गदर्शन</span><h2>When you seek<br /><em>clarity.</em></h2><p>Connect with experienced astrologers, tarot readers, numerologists and vastu experts. Chat or call, in your language.</p><div className="astro-links"><a href="#booking">Talk to an astrologer <ArrowRight size={15} /></a><a href="#booking">Get your Janam Kundli <ArrowRight size={15} /></a><a href="#booking">Ask our AI guide <ArrowRight size={15} /></a></div></div></section>

      <section className="festival-section" id="pandit"><div className="dev-section"><div className="festival-heading"><div><span className="red-kicker">आपके हर शुभ अवसर के लिए</span><h2>Bring the <em>mandir</em><br />home.</h2></div><p>From a simple puja to a complete jagrata or bhandara, our verified pandits and event partners take care of every detail.</p></div><div className="festival-list">{festivals.map((festival, index) => <a href="#booking" key={festival}><span className="festival-number">0{index + 1}</span><strong>{festival}</strong><small>Puja · Pandit · Samagri</small><ArrowRight size={15} /></a>)}</div><div className="package-callout"><div><span>COMPLETE EVENT PACKAGES</span><strong>Jagrata · Bhandara · Path · Katha</strong></div><a href="#booking">Plan your event <ArrowRight size={15} /></a></div></div></section>

      <section className="seva-section" id="donate"><div className="seva-image" /><div className="seva-copy"><span className="red-kicker">दान और सेवा</span><h2>Bhakti grows<br /><em>when shared.</em></h2><p>Feed a hungry family, care for a gaushala, support temple restoration or help someone complete their teerth yatra.</p><div className="amounts">{["501", "1,001", "2,501"].map((item) => <button className={amount === item ? "chosen" : ""} onClick={() => setAmount(item)} key={item}>₹{item}</button>)}</div><a className="primary-action" href="#donate">Offer seva <Heart size={15} fill="currentColor" /></a><small className="seva-note"><ShieldCheck size={14} /> Transparent, verified causes</small></div></section>

      <section className="app-section" id="account"><div><span className="red-kicker">आपकी भक्ति, हर दिन</span><h2>Download the<br /><em>BookArti app.</em></h2><p>Darshan, puja bookings, your sankalp and all your blessings in one place.</p><div className="app-stores"><a href="#account"><b></b><span>Download on the<strong>App Store</strong></span></a><a href="#account"><b>▶</b><span>GET IT ON<strong>Google Play</strong></span></a></div></div><div className="app-phone"><div className="app-phone-top">9:41 <span>● ● ●</span></div><div className="app-om">ॐ</div><h4>Namaste, Priya</h4><p>Aaj ka darshan dekhiye</p><div className="app-darshan"><span>LIVE DARSHAN</span><strong>Mahakal Aarti</strong><small>Ujjain · Join now →</small></div><div className="app-tabs">⌂ &nbsp;&nbsp;&nbsp; ◉ &nbsp;&nbsp;&nbsp; ॐ &nbsp;&nbsp;&nbsp; ♡</div></div></section>
    </main>
    <footer className="dev-footer"><div className="footer-top"><a className="devotional-logo" href="#home"><span className="logo-sun">ॐ</span><span><strong>Book<span>Arti</span></strong><small>भक्ति से सेवा तक</small></span></a><p>India&apos;s spiritual home, online.<br />Built with श्रद्धा for every devotee.</p><div className="footer-columns"><div><b>Explore</b><a href="#live">Live Darshan</a><a href="#puja">Book a Puja</a><a href="#pandit">Pandit Booking</a></div><div><b>Company</b><a href="#donate">Our Seva</a><a href="#account">Download app</a><a href="#booking">Partner with us</a></div><div><b>Help</b><a href="#booking">Help centre</a><a href="#booking">Contact us</a><a href="#booking">Terms & privacy</a></div></div></div><div className="footer-bottom"><span>© 2025 BookArti Technologies Pvt. Ltd.</span><span>ॐ शान्तिः शान्तिः शान्तिः</span></div></footer>
  </div>
}

function TempleRow({ image, name, place }: { image: string; name: string; place: string }) { return <a className="temple-row" href="#live"><div style={{ backgroundImage: `url(${image})` }} /><span><strong>{name}</strong><small>{place}</small></span><ChevronRight size={15} /></a> }
function Step({ number, icon, title, text }: { number: string; icon: string; title: string; text: string }) { return <div className="step"><span className="step-number">{number}</span><span className="step-icon">{icon}</span><h3>{title}</h3><p>{text}</p></div> }
