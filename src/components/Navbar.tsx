import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Simulador IA', href: '#simulador-ia' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Stack', href: '#stack' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 2.5rem)',
        maxWidth: '1150px',
        zIndex: 100,
        transition: 'all 0.3s ease'
      }}
    >
      <nav
        style={{
          background: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-glass)',
          borderRadius: '14px',
          padding: '0.65rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 8px 30px var(--shadow-color)'
        }}
      >
        {/* Brand */}
        <a
          href="#inicio"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--text-heading)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.15rem'
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Terminal size={16} color="#fff" />
          </div>
          <span>Javier<span style={{ color: 'var(--accent-cyan)' }}>.Ordoñez</span></span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: '1.15rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-heading)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <ThemeToggle />

          <button
            onClick={onOpenCvModal}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <Download size={14} />
            <span className="nav-cv-label">CV (ES/EN)</span>
          </button>

          <a
            href="#contacto"
            className="btn btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <span>Contacto</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-heading)',
              cursor: 'pointer',
              padding: '0.4rem'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: '0.5rem',
            background: 'var(--nav-bg-scrolled)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-glass-strong)',
            borderRadius: '14px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                padding: '0.4rem 0'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (max-width: 560px) {
          .nav-cv-label {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
