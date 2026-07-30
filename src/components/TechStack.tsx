import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profileData';
import { Bot, Server, Cloud, Database, Layout } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ai');

  const tabs = [
    { id: 'ai', label: 'IA & Automatización', icon: Bot },
    { id: 'backend', label: 'Backend Architecture', icon: Server },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'databases', label: 'Bases de Datos', icon: Database },
    { id: 'frontend', label: 'Frontend', icon: Layout }
  ];

  const getSkillsForTab = () => {
    switch (activeTab) {
      case 'ai': return PROFILE_DATA.skills.ai;
      case 'backend': return PROFILE_DATA.skills.backend;
      case 'cloud': return PROFILE_DATA.skills.cloud;
      case 'databases': return PROFILE_DATA.skills.databases;
      case 'frontend': return PROFILE_DATA.skills.frontend;
      default: return PROFILE_DATA.skills.ai;
    }
  };

  const skills = getSkillsForTab();

  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Tech Stack & Herramientas</h2>
          <p>
            Herramientas y tecnologías modernas que domino para construir aplicaciones robustas, escalables e inteligentes.
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="glass-card"
                style={{
                  padding: '0.85rem 1.4rem',
                  borderRadius: '14px',
                  border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
                  background: isActive ? 'rgba(253, 123, 84, 0.12)' : 'var(--bg-card)',
                  color: isActive ? 'var(--text-heading)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={18} color={isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills - plain divided rows, no cards */}
        <div className="divided-list" style={{ maxWidth: '760px', margin: '0 auto' }}>
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-row">
              <span className="skill-name" style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--text-heading)' }}>
                {skill.name}
              </span>

              <div className="skill-bar-track" style={{ height: '6px', background: 'var(--overlay-2)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'var(--primary-light)',
                    borderRadius: '9999px',
                    transform: `scaleX(${skill.level / 100})`,
                    transformOrigin: 'left',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>

              <span style={{ flexShrink: 0, width: '2.5rem', textAlign: 'right', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .skill-name {
          flex-shrink: 0;
          width: 230px;
        }
        .skill-bar-track {
          flex: 1;
        }
        @media (max-width: 640px) {
          .skill-row {
            flex-wrap: wrap;
            gap: 0.5rem 1rem;
          }
          .skill-name {
            width: 100%;
          }
          .skill-bar-track {
            order: 3;
            flex-basis: 100%;
          }
        }
      `}</style>
    </section>
  );
};
