import Link from 'next/link';
import Logo from './Logo';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="footer grid grid-cols-1 md:grid-cols-4  p-10 text-center md:text-left">
        
        {/* 1. Brand Section */}
        <aside className="flex flex-col items-center md:items-start">
          <Logo />
          <p className="mt-2 font-medium">
            Providing authentic knowledge since 2026.
            <br />
            Your trusted partner in reading.
          </p>
        </aside>

        {/* 2. Services Links */}
        <nav className="flex flex-col gap-2 items-center md:items-start">
          <h6 className="footer-title text-primary opacity-100">Services</h6>
          <Link href="/items" className="link link-hover hover:text-secondary">All Books</Link>
          <Link href="/items?cat=quran" className="link link-hover hover:text-secondary">Quran & Tafsir</Link>
          <Link href="/items?cat=hadith" className="link link-hover hover:text-secondary">Hadith Collections</Link>
          <Link href="/items?cat=kids" className="link link-hover hover:text-secondary">Kids Corner</Link>
        </nav>

        {/* 3. Company Links */}
        <nav className="flex flex-col gap-2 items-center md:items-start">
          <h6 className="footer-title text-primary opacity-100">Company</h6>
          <Link href="/about" className="link link-hover hover:text-secondary">About us</Link>
          <Link href="/contact" className="link link-hover hover:text-secondary">Contact</Link>
          <Link href="/jobs" className="link link-hover hover:text-secondary">Jobs</Link>
          <Link href="/terms" className="link link-hover hover:text-secondary">Terms of use</Link>
        </nav>

        {/* 4. Newsletter */}
        <form className="flex flex-col items-center md:items-start w-full">
          <h6 className="footer-title text-primary opacity-100">Newsletter</h6>
          <fieldset className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join w-full">
              <input 
                type="text" 
                placeholder="email@site.com" 
                className="input input-bordered join-item w-full focus:border-primary focus:outline-none" 
              />
              <button className="btn btn-primary join-item text-white">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* 5. Copyright Section */}
      <div className="border-t border-base-300 bg-base-200 px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          <aside>
            <p className="font-medium">© 2026 Book Shop Ltd. All rights reserved.</p>
          </aside>
          
          <nav>
            <div className="flex gap-6">
              {/* Facebook Icon */}
              <a className="cursor-pointer text-primary hover:text-secondary transition-colors hover:scale-110 duration-200">
                <FaFacebook className="text-2xl" />
              </a>
              
              {/* Twitter Icon */}
              <a className="cursor-pointer text-primary hover:text-secondary transition-colors hover:scale-110 duration-200">
                <FaTwitter className="text-2xl" />
              </a>
              
              {/* YouTube Icon */}
              <a className="cursor-pointer text-primary hover:text-secondary transition-colors hover:scale-110 duration-200">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}