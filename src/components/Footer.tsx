import monieLogo from "@/assets/monielogo.png";
import { Link } from "react-router-dom";

const FOOTER_EVENTBRITE_ID = "1978806719165";
const FOOTER_EVENT_URL = `https://www.eventbrite.com/e/${FOOTER_EVENTBRITE_ID}`;

const Footer = () => {
  return (
    <footer className="footer-panel bg-[#0b0b0b]" style={{ boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.6)' }}>
      <div className="container mx-auto px-6 py-8">
        {/* clear divider between page content and footer */}
        <div className="w-full mb-8">
          <div className="mx-auto w-full max-w-[1200px] h-[3px] bg-[#212121] rounded-sm" />
        </div>
        <div className="footer-inner">
          {/* Left: Brand (logo only) */}
          <div className="footer-brand">
            <div style={{ width: 200 }}>
              <div className="logo-fill" style={{
                WebkitMaskImage: `url(${monieLogo})`,
                maskImage: `url(${monieLogo})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                width: '200px',
                height: '56px'
              }} />
            </div>
          </div>

          {/* Ticket column (opens Eventbrite in a new tab) */}
          <div className="ticket-col">
            <noscript><a href={FOOTER_EVENT_URL} rel="noopener noreferrer" target="_blank">Buy Tickets on Eventbrite</a></noscript>
            <a href={FOOTER_EVENT_URL} target="_blank" rel="noopener noreferrer" className="ticket-btn">
              <span className="ticket-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="ticket-label">Get Your Tickets</span>
            </a>
          </div>

          {/* Middle: Site links */}
          <div className="footer-links">
            <div className="footer-title">MONIE FEST 2026</div>
            <ul>
              <li><Link className="footer-link" to="/programme">Programme</Link></li>
              <li><Link className="footer-link" to="/speakers">Speakers</Link></li>
              <li><Link className="footer-link" to="/highlights">Highlights</Link></li>
              <li><Link className="footer-link" to={{ pathname: '/', hash: '#exhibitors' }}>Sponsors</Link></li>
              <li><Link className="footer-link" to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Right: Socials */}
          <div>
            <div className="footer-title" style={{ marginBottom: 6 }}>Visit Our Socials</div>
            <div className="footer-socials">
              <div className="company-column">
                <div className="company-title">Finance Lang</div>
                <ul className="company-list">
                  <li>
                    <a className="footer-link" href="https://youtube.com/@finance.lang88" target="_blank" rel="noopener noreferrer">Youtube</a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://www.instagram.com/finance.lang" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </li>
                  <li>
                    <a className="footer-link" href="#">RedNote</a>
                  </li>
                  <li>
                    <a className="footer-link" href="#">TikTok</a>
                  </li>
                  <li>
                    <a className="footer-link" href="https://www.financelang.com" target="_blank" rel="noopener noreferrer">Website</a>
                  </li>
                </ul>
              </div>

              <div className="company-column">
                <div className="company-title">Monie</div>
                <ul className="company-list">
                  <li>
                    <a className="footer-link" href="#">Facebook</a>
                  </li>
                  <li>
                    <a className="footer-link" href="#">Instagram</a>
                  </li>
                  <li>
                    <a className="footer-link" href="#">Tiktok</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

          <div className="mt-10 border-t-2 border-white/10 pt-6 text-sm text-white/80">
            <div className="flex flex-col md:flex-row items-center justify-center text-center gap-3">
              <div>© {new Date().getFullYear()} Monie Fest — All rights reserved.</div>
            </div>
        </div>
        {/* Modal removed: open Eventbrite in a new tab instead of an embedded modal */}
      </div>
    </footer>
  );
};

export default Footer;
