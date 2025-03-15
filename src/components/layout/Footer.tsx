
import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-odia-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl mb-4 text-odia-gold">OdiaCast</h3>
            <p className="text-gray-300 max-w-md">
              Exploring Odia culture, language, and stories through engaging conversations and meaningful dialogues.
            </p>
            <div className="flex space-x-4 pt-4">
              <SocialIcon icon={<Youtube size={20} />} href="https://youtube.com" label="YouTube" />
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" label="Instagram" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" label="Twitter" />
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" label="Facebook" />
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-odia-gold">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/">Latest Episodes</FooterLink>
              <FooterLink to="/">Subscribe</FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-odia-gold">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <Mail size={18} className="mr-2 text-odia-gold" />
                <a href="mailto:info@odiacast.com" className="hover:text-white transition-colors">
                  info@odiacast.com
                </a>
              </p>
              <p>
                Bhubaneswar, Odisha<br />
                India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} OdiaCast. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, label }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-odia-gold transition-colors duration-300 text-white"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default Footer;
