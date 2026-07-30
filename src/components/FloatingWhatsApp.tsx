import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PROFILE_DATA } from '../data/profileData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={PROFILE_DATA.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      title="Escribir por WhatsApp"
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
        zIndex: 90,
        animation: 'wa-pulse 2.6s ease-in-out infinite'
      }}
    >
      <WhatsAppIcon size={30} color="#ffffff" />
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45); transform: scale(1); }
          50% { box-shadow: 0 8px 30px rgba(37, 211, 102, 0.7); transform: scale(1.06); }
        }
        @media (max-width: 640px) {
          a[aria-label="Escribir por WhatsApp"] {
            bottom: 1.25rem;
            right: 1.25rem;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </a>
  );
};
