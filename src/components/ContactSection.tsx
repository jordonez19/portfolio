import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Mensaje de ${formData.name} desde el Portafolio`,
          message: formData.message,
          _subject: 'Nuevo mensaje desde tu portafolio',
          _template: 'table',
          _captcha: 'false',
          _honey: ''
        })
      });

      if (!res.ok) throw new Error('FormSubmit request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Trabajemos Juntos</h2>
          <p>
            ¿Tienes un proyecto en mente, deseas automatizar un proceso con IA o incorporar a un Senior Backend Engineer a tu equipo?
          </p>
        </div>

        <div className="grid-2">
          {/* Direct Channels Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(253, 123, 84, 0.1) 100%)'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Información de Contacto</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)' }}
                >
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(253, 123, 84, 0.15)' }}>
                    <Mail size={22} color="var(--primary-light)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Email Profesional:</span>
                    <strong style={{ fontSize: '1.05rem' }}>{PROFILE_DATA.email}</strong>
                  </div>
                </a>

                <a
                  href={PROFILE_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)' }}
                >
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(37, 211, 102, 0.15)' }}>
                    <WhatsAppIcon size={22} color="#25D366" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Teléfono & WhatsApp:</span>
                    <strong style={{ fontSize: '1.05rem' }}>{PROFILE_DATA.phone}</strong>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(212, 165, 116, 0.15)' }}>
                    <MapPin size={22} color="var(--accent-cyan)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Ubicación:</span>
                    <strong style={{ fontSize: '1.05rem' }}>{PROFILE_DATA.location}</strong>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-glass)', display: 'flex', gap: '1rem' }}>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.65rem 1.2rem', fontSize: '0.85rem' }}
                >
                  <Linkedin size={16} color="var(--accent-cyan)" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.65rem 1.2rem', fontSize: '0.85rem' }}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={48} color="var(--accent-emerald)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>¡Mensaje Enviado!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Gracias por comunicarte, tu mensaje llegó directo a mi correo. Responderé en menos de 24 horas.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--overlay-1)',
                      border: '1px solid var(--border-glass-strong)',
                      color: 'var(--text-heading)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--overlay-1)',
                      border: '1px solid var(--border-glass-strong)',
                      color: 'var(--text-heading)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                    Asunto / Proyecto
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Integración Amazon Bedrock & Backend"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--overlay-1)',
                      border: '1px solid var(--border-glass-strong)',
                      color: 'var(--text-heading)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntame sobre las necesidades de tu proyecto o vacante..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--overlay-1)',
                      border: '1px solid var(--border-glass-strong)',
                      color: 'var(--text-heading)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', borderRadius: '10px', background: 'rgba(225, 29, 72, 0.1)', border: '1px solid rgba(225, 29, 72, 0.3)', color: '#e11d48', fontSize: '0.85rem' }}>
                    <AlertCircle size={16} style={{ flexShrink: 0 }} />
                    <span>No se pudo enviar el mensaje. Intenta de nuevo o escríbeme directo por WhatsApp.</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', padding: '0.95rem', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'default' : 'pointer' }}
                >
                  {status === 'sending' ? (
                    <>
                      <RefreshCw size={18} className="spin-icon" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Enviar Mensaje Directo</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
