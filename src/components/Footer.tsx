import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import logo from '../assets/podsparx-logo.png'


function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content py-10 px-6">
      <div className="container mx-auto">
        <p className="font-bold text-lg">
          <a href="#hero" className="flex items-center">
          <img src={logo} alt="Company Logo" className="h-[90px] w-auto" />
        </a>
        </p>
        <p className="text-base-content/60">Crafting digital products with purpose & precision.</p>
        <div className="flex gap-6 mt-2">
          <a href="#" className="btn btn-ghost btn-circle text-xl hover:text-primary transition-colors">
            <FaGithub />
          </a>
          <a href="#" className="btn btn-ghost btn-circle text-xl hover:text-primary transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="btn btn-ghost btn-circle text-xl hover:text-primary transition-colors">
            <FaXTwitter />
          </a>
        </div>
        <div className="flex gap-6 mt-2">
          <a href="/privacy" className="link link-hover text-sm text-base-content/40">Privacy Policy</a>
          <a href="/privacy/puglet" className="link link-hover text-sm text-base-content/40">Puglet App Privacy</a>
        </div>
        <p className="text-base-content/40 text-sm mt-2">© 2026 PodSparx. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer