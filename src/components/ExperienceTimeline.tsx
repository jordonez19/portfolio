import React, { useState } from 'react';
import { PROFILE_DATA, ExperienceItem } from '../data/profileData';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filterOptions = ['Todos', 'Golang', 'Node.js', 'Amazon Bedrock', 'AWS', 'Java', 'React'];

  const filteredExperiences = PROFILE_DATA.experiences.filter(exp => {
    if (activeFilter === 'Todos') return true;
    if (activeFilter === 'Amazon Bedrock') return exp.tags.some(t => t.includes('Bedrock') || t.includes('OpenAI') || t.includes('Claude'));
    return exp.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Experiencia Laboral</h2>
          <p>
            Más de 5 años diseñando e implementando sistemas backend, infraestructura en la nube y soluciones avanzadas de IA.
          </p>
        </div>

        {/* Filter Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className="pill"
              data-active={activeFilter === opt}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--primary) 0%, var(--accent-cyan) 50%, rgba(253, 123, 84, 0.1) 100%)'
            }}
          />

          {filteredExperiences.map((exp: ExperienceItem, idx: number) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2.5rem',
                position: 'relative'
              }}
            >
              {/* Timeline Icon Node */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: idx === 0 ? 'linear-gradient(135deg, var(--primary) 0%, var(--accent-cyan) 100%)' : 'var(--bg-card)',
                  border: idx === 0 ? 'none' : '1px solid var(--border-glass)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 2,
                  boxShadow: idx === 0 ? '0 0 20px rgba(253, 123, 84, 0.5)' : 'none'
                }}
              >
                <Briefcase size={22} color={idx === 0 ? '#ffffff' : 'var(--accent-cyan)'} />
              </div>

              {/* Experience Card */}
              <div
                className="glass-card"
                style={{
                  flex: 1,
                  padding: '1.75rem',
                  borderRadius: '20px',
                  border: idx === 0 ? '1px solid var(--border-glow)' : '1px solid var(--border-glass)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                    <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1.05rem' }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                    <span className="badge badge-emerald" style={{ fontSize: '0.8rem' }}>
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{exp.location}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', margin: '1.25rem 0' }}>
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      <ChevronRight size={16} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">
                      {tag}
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
