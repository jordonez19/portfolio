import React from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { X, Download, FileText, Globe, CheckCircle2 } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
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
          width: '100%',
          maxWidth: '620px',
          borderRadius: '24px',
          padding: '2.5rem',
          background: 'var(--bg-glass-strong)',
          border: '1px solid var(--border-glow)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'var(--overlay-3)',
            border: 'none',
            color: 'var(--text-heading)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto'
            }}
          >
            <FileText size={28} color="#ffffff" />
          </div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>Descargar Curriculum Vitae</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Selecciona la versión en el idioma de tu preferencia (Formato PDF Oficial 2026).
          </p>
        </div>

        {/* Download Options */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }} className="cv-modal-grid">
          {/* Spanish PDF */}
          <a
            href={PROFILE_DATA.cvFiles.es}
            download="CV_Javier_Ordonez_ES.pdf"
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'transform 0.2s ease'
            }}
          >
            <Globe size={24} color="var(--accent-emerald)" />
            <span style={{ color: 'var(--text-heading)', fontWeight: 700, fontSize: '1.1rem' }}>CV en Español</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Formato PDF (Actualizado 2026)</span>
            <div className="btn btn-primary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <Download size={15} />
              <span>Descargar (ES)</span>
            </div>
          </a>

          {/* English PDF */}
          <a
            href={PROFILE_DATA.cvFiles.en}
            download="CV_Javier_Ordonez_EN.pdf"
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              border: '2px solid rgba(255, 117, 38, 0.3)',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'transform 0.2s ease'
            }}
          >
            <Globe size={24} color="#f97a35ff" />
            <span style={{ color: 'var(--text-heading)', fontWeight: 700, fontSize: '1.1rem' }}>CV in English</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>PDF Format (Updated 2026)</span>
            <div className="btn btn-primary" style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <Download size={15} />
              <span>Download (EN)</span>
            </div>
          </a>
        </div>

        {/* Highlights included */}
        <div style={{ background: 'var(--overlay-1)', padding: '1rem', borderRadius: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <div style={{ fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>Resumen del CV:</div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><CheckCircle2 size={14} color="var(--accent-emerald)" /> Ecapture & Plurall</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><CheckCircle2 size={14} color="var(--accent-cyan)" /> Amazon Bedrock & AI Agents</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><CheckCircle2 size={14} color="var(--primary-light)" /> Golang, Node.js & AWS</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 520px) {
          .cv-modal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
