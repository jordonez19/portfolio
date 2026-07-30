import React from 'react';
import { X, Network, ExternalLink } from 'lucide-react';

interface GraphifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GraphifyModal: React.FC<GraphifyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'var(--modal-overlay)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '95%',
          maxWidth: '1100px',
          height: '85vh',
          borderRadius: '20px',
          padding: '1.5rem',
          background: 'var(--bg-glass-strong)',
          border: '1px solid var(--border-glow)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--overlay-3)',
            border: 'none',
            color: 'var(--text-heading)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', paddingRight: '3rem' }}>
          <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'rgba(253, 123, 84, 0.15)' }}>
            <Network size={22} color="var(--primary-light)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)' }}>Grafo de Conocimiento del Proyecto (Graphify AST)</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Mapeo interactivo de dependencias y componentes generado estáticamente mediante Graphify Labs.
            </p>
          </div>
          <a
            href="/graph.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ marginLeft: 'auto', padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            <ExternalLink size={14} />
            <span>Abrir en Pestaña</span>
          </a>
        </div>

        {/* Interactive Graph iFrame */}
        <div style={{ flex: 1, width: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-glass)' }}>
          <iframe
            src="/graph.html"
            title="Graphify Knowledge Graph"
            style={{ width: '100%', height: '100%', border: 'none', background: '#090a0f' }}
          />
        </div>
      </div>
    </div>
  );
};
