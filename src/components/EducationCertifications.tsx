import React from 'react';
import { PROFILE_DATA, EducationItem } from '../data/profileData';
import { GraduationCap, Award, Globe, CheckCircle2, BookOpen } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="educacion" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Educación e Idiomas</h2>
          <p>
            Compromiso constante con la excelencia académica, certificaciones de la industria y fluidez internacional.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: '4rem' }}>
          {/* Education List */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <GraduationCap color="var(--primary-light)" size={24} />
              <span>Grados y Títulos</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {PROFILE_DATA.education.map((edu: EducationItem, idx: number) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '18px',
                    border: '1px solid var(--border-glass)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-heading)' }}>{edu.degree}</h4>
                    {edu.highlightBadge && (
                      <span className="badge badge-emerald" style={{ fontSize: '0.75rem' }}>
                        {edu.highlightBadge}
                      </span>
                    )}
                  </div>

                  <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    {edu.institution} • <span style={{ color: 'var(--text-muted)' }}>{edu.period}</span>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={14} color="var(--accent-emerald)" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & English Highlight */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Globe color="var(--accent-cyan)" size={24} />
              <span>Dominio de Idiomas</span>
            </h3>

            {/* English Card */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(253, 123, 84, 0.12) 0%, rgba(212, 165, 116, 0.06) 100%)',
                border: '1px solid var(--border-glow)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.3rem' }}>Inglés Nivel C1 Avanzado</h4>
                  <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600 }}>
                    EF International Language Centers, Dublín, Irlanda
                  </p>
                </div>
                <div style={{ padding: '0.6rem 1rem', borderRadius: '12px', background: 'var(--accent-cyan)', color: '#ffffff', fontWeight: 800 }}>
                  C1
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Estudios de inmersión lingüística en Dublín. Capacidad fluida para coordinar con equipos multiculturales, redactar documentación técnica y dirigir reuniones de arquitectura en inglés.
              </p>
            </div>

            {/* Spanish Native */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.75rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.1rem' }}>Español</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Lengua Materna / Nativa</p>
              </div>
              <span className="badge badge-emerald">Nativo</span>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Award color="var(--accent-cyan)" size={24} />
            <span>Licencias y Certificaciones Técnicas</span>
          </h3>

          <div className="divided-list">
            {PROFILE_DATA.certifications.map((cert, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <BookOpen size={16} color="var(--text-dim)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--text-heading)', fontWeight: 500 }}>{cert.name}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginLeft: 'auto', whiteSpace: 'nowrap' }}>
                  {cert.provider}, {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
