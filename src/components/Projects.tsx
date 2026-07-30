import React from 'react';
import { PROFILE_DATA } from '../data/profileData';

export const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Casos de Estudio e <span className="accent-word">Implementaciones</span></h2>
          <p>
            Soluciones reales diseñadas e implementadas en entornos productivos, priorizando alta disponibilidad, mantenibilidad y rendimiento.
          </p>
        </div>

        <div className="grid-2">
          {PROFILE_DATA.projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-glass)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {project.category}
                  </span>
                  <div style={{ padding: '0.35rem 0.6rem', background: 'var(--overlay-2)', borderRadius: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Producción
                  </div>
                </div>

                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.85rem' }}>{project.title}</h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>

                {/* Architecture Snippet Box */}
                <div style={{ background: 'var(--bg-inset)', border: '1px solid var(--border-glass)', padding: '0.85rem 1rem', borderRadius: '10px', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block', marginBottom: '0.2rem', fontFamily: 'var(--font-mono)' }}>
                    PATRÓN DE ARQUITECTURA:
                  </span>
                  <span className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.82rem' }}>
                    {project.architectureSnippet}
                  </span>
                </div>
              </div>

              <div>
                  <span style={{
                    color: 'var(--primary-light)',
                    fontWeight: 300
                  }}>Impacto:</span>
                <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--accent-mutted)', fontWeight: 300, marginBottom: '1.25rem' }}>
                  <span>{project.impact}</span>
                </div>

                {/* Tech Badges */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        background: 'var(--overlay-1)',
                        border: '1px solid var(--border-glass)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
