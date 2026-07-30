import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { Bot, Cloud, Layout, Zap, CheckCircle2, MessageSquare, Mail, ClipboardList } from 'lucide-react';

const URGENCY_OPTIONS = [
  { label: 'Estándar (3-5 sem)', val: 'Estándar (3-5 semanas)' },
  { label: 'Prioritario (2 sem)', val: 'Prioritario (2 semanas)' },
  { label: 'Express / Sprint', val: 'Express / Sprint' }
];

const SCOPE_OPTIONS = [
  { label: 'PoC / MVP Inicial', val: 'PoC / MVP Inicial' },
  { label: 'Producto Empresarial', val: 'Producto Empresarial' }
];

export const ServicesCalculator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['ai_automation']);
  const [urgency, setUrgency] = useState<string>(URGENCY_OPTIONS[0].val);
  const [scope, setScope] = useState<string>(SCOPE_OPTIONS[0].val);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getServiceIcons = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot size={24} color="var(--accent-cyan)" />;
      case 'Cloud': return <Cloud size={24} color="var(--primary-light)" />;
      case 'Layout': return <Layout size={24} color="var(--text-heading)" />;
      default: return <Zap size={24} color="var(--accent-emerald)" />;
    }
  };

  const selectedServiceNames = selectedServices
    .map(id => PROFILE_DATA.services.find(s => s.id === id)?.title)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `Hola Javier, estuve en tu portafolio web y me interesa conversar sobre estos servicios:\n\n` +
    `📌 Servicios: ${selectedServiceNames}\n` +
    `⏱️ Urgencia: ${urgency}\n` +
    `📐 Alcance: ${scope}\n\n` +
    `¿Podríamos agendar una breve llamada para conversar sobre una cotización a la medida?`
  );

  const emailSubject = encodeURIComponent(`Solicitud de Cotización: ${selectedServiceNames}`);
  const emailBody = encodeURIComponent(
    `Hola Javier,\n\nMe interesa trabajar contigo en:\n` +
    `- Servicios: ${selectedServiceNames}\n` +
    `- Urgencia: ${urgency}\n` +
    `- Alcance: ${scope}\n\n` +
    `¿Podríamos agendar una llamada para conversar sobre una cotización a la medida?`
  );

  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Servicios & <span className="accent-word">Configurador</span> de Proyecto</h2>
          <p>
            Selecciona las soluciones que tu empresa o startup requiere y arma en segundos un resumen para conversar sobre tu proyecto.
          </p>
        </div>

        {/* Services Cards Selector Grid */}
        <div className="grid-2" style={{ marginBottom: '3rem' }}>
          {PROFILE_DATA.services.map((svc) => {
            const isSelected = selectedServices.includes(svc.id);

            return (
              <div
                key={svc.id}
                onClick={() => toggleService(svc.id)}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '20px',
                  border: isSelected ? '2px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
                  background: isSelected ? 'rgba(253, 123, 84, 0.08)' : 'var(--bg-card)',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  {/* Card Top */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'var(--overlay-2)' }}>
                        {getServiceIcons(svc.iconName)}
                      </div>
                      <h3 style={{ fontSize: '1.2rem' }}>{svc.title}</h3>
                    </div>

                    {svc.badge && (
                      <div className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
                        {svc.badge}
                      </div>
                    )}
                  </div>

                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {svc.tagline}
                  </p>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {svc.description}
                  </p>

                  {/* Deliverables */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {svc.deliverables.map((del, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={15} color="var(--accent-emerald)" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', paddingTop: '1rem', marginTop: '1.25rem', borderTop: '1px solid var(--border-glass)' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: isSelected ? 'var(--accent-cyan)' : 'var(--text-dim)' }}>
                    {isSelected ? 'Seleccionado, clic para quitar' : 'Clic para incluir en tu resumen'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Configurator Panel */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'var(--bg-glass-strong)',
            border: '1px solid var(--border-glow)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <ClipboardList size={24} color="var(--primary-light)" />
            <h3 style={{ fontSize: '1.5rem' }}>Configura tu Proyecto</h3>
          </div>

          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            {/* Urgency */}
            <div>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                Velocidad de Entrega / Urgencia:
              </label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {URGENCY_OPTIONS.map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setUrgency(item.val)}
                    style={{
                      flex: 1,
                      padding: '0.75rem 0.5rem',
                      borderRadius: '10px',
                      background: urgency === item.val ? 'var(--primary)' : 'var(--overlay-2)',
                      border: urgency === item.val ? '1px solid var(--primary-light)' : '1px solid var(--border-glass)',
                      color: urgency === item.val ? '#ffffff' : 'var(--text-muted)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scope */}
            <div>
              <label style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                Alcance del Proyecto:
              </label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {SCOPE_OPTIONS.map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setScope(item.val)}
                    style={{
                      flex: 1,
                      padding: '0.75rem 0.5rem',
                      borderRadius: '10px',
                      background: scope === item.val ? 'var(--primary)' : 'var(--overlay-2)',
                      border: scope === item.val ? '1px solid var(--primary)' : '1px solid var(--border-glass)',
                      color: scope === item.val ? '#ffffff' : 'var(--text-muted)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary & Direct Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              background: 'rgba(253, 123, 84, 0.08)',
              border: '1px solid var(--border-glow)',
              padding: '1.5rem 2rem',
              borderRadius: '16px'
            }}
          >
            <div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'block', marginBottom: '0.3rem' }}>Tu resumen:</span>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-heading)', maxWidth: '480px', lineHeight: 1.5 }}>
                {selectedServiceNames}
                <span style={{ display: 'block', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.88rem', marginTop: '0.3rem' }}>
                  {urgency}, {scope}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/573507834094?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: '#25D366', color: '#ffffff', boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)' }}
              >
                <MessageSquare size={18} />
                <span>Solicitar Cotización por WhatsApp</span>
              </a>

              <a
                href={`mailto:${PROFILE_DATA.email}?subject=${emailSubject}&body=${emailBody}`}
                className="btn btn-primary"
              >
                <Mail size={18} />
                <span>Enviar por Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
