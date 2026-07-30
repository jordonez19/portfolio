import React from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { Terminal, Network } from 'lucide-react';

interface FooterProps {
  onOpenGraphifyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGraphifyModal }) => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        padding: '3rem 0',
        background: 'var(--footer-bg)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-cyan) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Terminal size={16} color="#fff" />
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--text-heading)' }}>
            Javier<span style={{ color: 'var(--accent-cyan)' }}>.Ordoñez</span>
          </span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          © {new Date().getFullYear()} Javier Ordoñez. Backend & Cloud Software Engineer.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', fontSize: '0.85rem' }}>
          {onOpenGraphifyModal && (
            <button
              onClick={onOpenGraphifyModal}
              style={{
                background: 'rgba(253, 123, 84, 0.1)',
                border: '1px solid rgba(253, 123, 84, 0.3)',
                color: 'var(--primary-light)',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
            >
              <Network size={14} />
              <span>Grafo de Código (Graphify AST)</span>
            </button>
          )}

          <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            GitHub
          </a>
          <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
