"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

interface HeaderProps {
  caption?: React.ReactNode;
}

export default function Header({ caption }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
    return () => document.body.classList.remove("stop-scrolling");
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="brand">
        <Link href="/">
          <Image
            src="/media/ibjoznbg/sage-gateshead.gif"
            alt="Sage Gateshead"
            width={380}
            height={124}
            unoptimized
          />
        </Link>
      </div>

      <button
        className={`hamburger${menuOpen ? " close" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`main-nav${menuOpen ? " open" : ""}`}>
        <ul>
          <li>
            <Link href="/faq/">FAQ</Link>
          </li>
          <li>
            <Link href="/about/">About</Link>
          </li>
        </ul>
        <div className="header__social">
          <SocialLinks />
        </div>
      </nav>

      {caption && <section className="home-caption">{caption}</section>}
    </header>
  );
}
