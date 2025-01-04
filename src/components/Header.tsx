import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-gray-700 hover:text-rose-600 transition-colors duration-300"
  >
    {children}
  </a>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-rose-600 transition-colors duration-300"
  >
    {icon}
  </a>
);

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="text-xl font-semibold text-rose-600">
            Eya Naffeti
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#about">{t('header.about')}</NavLink>
            <NavLink href="#experience">{t('header.experience')}</NavLink>
            <NavLink href="#skills">{t('header.skills')}</NavLink>
            <NavLink href="#projects">{t('header.projects')}</NavLink>
            <NavLink href="#contact">{t('header.contact')}</NavLink>
          </nav>

          {/* Right Side: Social Links and Language Switcher */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} />
              <SocialLink href="https://linkedin.com/in/eyanaffeti" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:eya.naffeti01@gmail.com" icon={<Mail size={20} />} />
            </div>
            <div className="border-l border-gray-200 h-6" />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <NavLink href="#about">{t('header.about')}</NavLink>
            <NavLink href="#experience">{t('header.experience')}</NavLink>
            <NavLink href="#skills">{t('header.skills')}</NavLink>
            <NavLink href="#projects">{t('header.projects')}</NavLink>
            <NavLink href="#contact">{t('header.contact')}</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}