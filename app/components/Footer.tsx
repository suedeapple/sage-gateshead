import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__col">
          <a href="https://www.sagegateshead.com" target="_blank" rel="noopener">
            <Image
              src="/media/d5tchrta/sage-gateshead_logo.svg"
              alt="Sage Gateshead"
              className="footer__logo"
              width={113}
              height={56}
              unoptimized
            />
          </a>
        </div>

        <div className="footer__col">
          <ul className="footer__ul">
            <li className="footer__li"><Link href="/faq/" className="footer__link">FAQ</Link></li>
            <li className="footer__li"><Link href="/privacy-policy/" className="footer__link">Privacy Policy</Link></li>
            <li className="footer__li"><Link href="/terms-conditions/" className="footer__link">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <ul className="footer__ul">
            <li className="footer__li"><Link href="/about/" className="footer__link">About</Link></li>
            <li className="footer__li"><Link href="/contact/" className="footer__link">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__social">
        <SocialLinks />
      </div>

      <div className="footer__credits">
        <p>Sage Gateshead is a registered charity, North Music Trust (Reg. Ch. No. 1087445).</p>
        <p>Sage Gateshead exists thanks to the support of public and private donations.</p>
        <p>© Copyright 2022</p>
      </div>
    </footer>
  )
}
