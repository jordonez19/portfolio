import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface HeroProps {
  onOpenCvModal: () => void;
}

const ACCENT_COLORS: Record<string, string> = {
  heading: 'var(--text-heading)',
  cyan: 'var(--accent-cyan)',
  primary: 'var(--primary-light)',
  emerald: 'var(--accent-emerald)'
};

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section id="inicio" className="section" style={{ paddingTop: '8.5rem', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Main Content */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(52, 211, 153, 0.08)', border: '1px solid rgba(52, 211, 153, 0.2)', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '1.5rem' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-emerald)' }} />
              <span>Disponible para Oportunidades & Consultoría</span>
            </div>

            <h1 style={{ fontSize: '3.4rem', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              {PROFILE_DATA.name}
            </h1>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary-light)', fontWeight: 600, marginBottom: '1.25rem' }}>
              {PROFILE_DATA.headlineTitle}
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2.25rem', maxWidth: '580px', lineHeight: 1.65 }}>
              Diseño <strong style={{ color: 'var(--text-heading)' }}>arquitecturas cloud-native</strong> en AWS/GCP e integro <strong style={{ color: 'var(--text-heading)' }}>Agentes de IA en producción</strong>, con Golang, Node.js y Amazon Bedrock.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="#contacto" className="btn btn-primary">
                <span>Conversar / Contactar</span>
                <ArrowRight size={16} />
              </a>

              <button onClick={onOpenCvModal} className="btn btn-secondary">
                <FileText size={16} />
                <span>Descargar CV (PDF)</span>
              </button>
            </div>

            {/* Key Highlights */}
            <div style={{ display: 'flex', gap: '2rem', rowGap: '1.25rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-glass)', paddingTop: '1.5rem' }}>
              {PROFILE_DATA.heroStats.map((stat, idx) => (
                <React.Fragment key={stat.value}>
                  {idx > 0 && <div style={{ width: '1px', background: 'var(--border-glass)' }} />}
                  <div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: ACCENT_COLORS[stat.accent], display: 'block', lineHeight: 1.1 }}>
                      {stat.value}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Clean Code Card */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid var(--border-glass)',
                background: '#0d0f17'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.85rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#334155' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#334155' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#334155' }} />
                </div>
                <span className="font-mono" style={{ color: 'var(--text-dim)', fontSize: '0.78rem' }}>
                  architecture_core.go
                </span>
              </div>

              <pre className="font-mono" style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.65, overflowX: 'auto' }}>
                <code>
                  <span style={{ color: '#93c5fd' }}>type</span> SystemArchitecture <span style={{ color: '#93c5fd' }}>struct</span> {'{\n'}
                  {'  '}CloudProvider  <span style={{ color: '#f472b6' }}>string</span>  <span style={{ color: '#64748b' }}>// AWS (ECS, Lambda, S3)</span>{'\n'}
                  {'  '}BackendLanguages <span style={{ color: '#f472b6' }}>[]string</span> <span style={{ color: '#64748b' }}>// Golang, Node.js, Java</span>{'\n'}
                  {'  '}IaC              <span style={{ color: '#f472b6' }}>string</span>  <span style={{ color: '#64748b' }}>// Terraform</span>{'\n'}
                  {'  '}AIEngine         <span style={{ color: '#f472b6' }}>string</span>  <span style={{ color: '#64748b' }}>// Amazon Bedrock & Tool Calling</span>{'\n'}
                  {'}'}{'\n\n'}
                  <span style={{ color: '#93c5fd' }}>func</span> <span style={{ color: '#f59e0b' }}>DeployResilientService</span>() *SystemArchitecture {'{\n'}
                  {'  '}<span style={{ color: '#93c5fd' }}>return</span> &amp;SystemArchitecture{'{'}{'\n'}
                  {'    '}CloudProvider:  <span style={{ color: '#86efac' }}>"AWS Elastic Container Service"</span>,{'\n'}
                  {'    '}IaC:            <span style={{ color: '#86efac' }}>"Terraform Infrastructure as Code"</span>,{'\n'}
                  {'  '}{'}'}{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
