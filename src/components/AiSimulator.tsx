import React, { useState } from 'react';
import { Bot, Play, CheckCircle, RefreshCw, Zap } from 'lucide-react';

interface SimulationScenario {
  id: string;
  name: string;
  model: string;
  inputSample: string;
  steps: {
    title: string;
    description: string;
    codeSnippet?: string;
  }[];
  finalOutput: Record<string, any>;
}

export const AiSimulator: React.FC = () => {
  const scenarios: SimulationScenario[] = [
    {
      id: 'bedrock_invoice',
      name: 'Extracción Inteligente con Amazon Bedrock',
      model: 'anthropic.claude-3-5-sonnet (Bedrock)',
      inputSample: 'Factura_Proveedor_2026.pdf (Ingreso de 4.5 MB no estructurado)',
      steps: [
        {
          title: '1. Ingesta S3 & Trigger Event',
          description: 'Evento S3 en AWS dispara Worker escrito en Golang.',
          codeSnippet: 'aws.s3.ObjectCreated -> EventBridge -> ECS Task (Go)'
        },
        {
          title: '2. Bedrock LLM Prompt & Vision Processing',
          description: 'Análisis del documento con prompt estructurado para extraer campos clave.',
          codeSnippet: 'bedrockRuntime.Converse({ ModelId: "claude-3-5-sonnet", Tools: [...] })'
        },
        {
          title: '3. Tool Calling & Validación de Negocio',
          description: 'El modelo decide invocar la función "save_invoice_records" pasando JSON validado.',
          codeSnippet: 'ToolCall: "save_invoice_records" -> SQL Type Checking'
        },
        {
          title: '4. Transacción PostgreSQL & Alert en Slack',
          description: 'Inserción atómica en base de datos y envío de webhook a operaciones.',
          codeSnippet: 'PostgreSQL INSERT Status: SUCCESS | Slack Webhook 200 OK'
        }
      ],
      finalOutput: {
        proveedor: "TechCorp Logistics S.A.",
        nit: "900.148.592-1",
        montoTotal: "$14,500.00 USD",
        impuestos: "$2,755.00 USD",
        itemsExtraidos: 12,
        confianzaIA: "99.4%"
      }
    },
    {
      id: 'slack_fintech_agent',
      name: 'Agente Slack FinTech & Core Bancario',
      model: 'OpenAI GPT-4o + Custom Tool Definitions',
      inputSample: 'Mensaje de usuario en Slack: "@FinAgent ¿Cuál es el saldo pendiente del préstamo #84920?"',
      steps: [
        {
          title: '1. Evento Slack & Webhook Gateway',
          description: 'Recepción del webhook en AWS Lambda + Cognito Auth.',
          codeSnippet: 'POST /api/v1/slack/events -> API Gateway -> Lambda'
        },
        {
          title: '2. Selección de Herramienta por LLM',
          description: 'El agente determina que requiere consultar la API de Apache Fineract.',
          codeSnippet: 'LLM Response: tool_calls=[{ name: "get_loan_balance", args: { loan_id: 84920 } }]'
        },
        {
          title: '3. Ejecución Segura en Core Financiero',
          description: 'Invocación de la API del Core de Crédito con tokens JWT encriptados.',
          codeSnippet: 'HTTP GET /fineract/api/v1/loans/84920 -> 200 OK ($4,250 USD)'
        },
        {
          title: '4. Respuesta Natural al Usuario',
          description: 'Sintetización de la respuesta y renderizado de bloques interactivos en Slack.',
          codeSnippet: 'Slack PostMessage -> "El préstamo #84920 tiene un saldo de $4,250 USD..."'
        }
      ],
      finalOutput: {
        idPrestamo: 84920,
        estado: "ACTIVO - AL DÍA",
        saldoPendiente: "$4,250.00 USD",
        proximaCuota: "2026-08-15",
        latenciaTotal: "320 ms"
      }
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('bedrock_invoice');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  const activeScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  const handleStartSimulation = () => {
    setIsSimulating(true);
    setCurrentStep(0);
    setCompleted(false);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < activeScenario.steps.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setCompleted(true);
      }
    }, 1200);
  };

  return (
    <section id="simulador-ia" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Simulador de <span className="accent-word">Agentes de IA</span> en Producción</h2>
          <p>
            Prueba en tiempo real cómo integro modelos LLM con arquitecturas backend, tool calling y bases de datos cloud.
          </p>
        </div>

        {/* Scenario Selectors */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveScenarioId(sc.id);
                setCurrentStep(0);
                setCompleted(false);
                setIsSimulating(false);
              }}
              className="glass-card"
              style={{
                padding: '0.85rem 1.5rem',
                borderRadius: '12px',
                border: activeScenarioId === sc.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
                background: activeScenarioId === sc.id ? 'rgba(253, 123, 84, 0.12)' : 'var(--bg-card)',
                color: activeScenarioId === sc.id ? 'var(--text-heading)' : 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontWeight: 600
              }}
            >
              <Bot size={18} color={activeScenarioId === sc.id ? 'var(--accent-cyan)' : 'var(--text-muted)'} />
              <span>{sc.name}</span>
            </button>
          ))}
        </div>

        {/* Simulator Grid Workspace */}
        <div
          className="glass-card"
          style={{
            borderRadius: '24px',
            padding: '2rem',
            border: '1px solid var(--border-glow)',
            background: 'var(--bg-glass-strong)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}
        >
          {/* Header Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-glass)' }}>
            <div>
              <div style={{ color: 'var(--primary-light)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                MODELO: {activeScenario.model}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginTop: '0.2rem' }}>{activeScenario.name}</h3>
            </div>

            <button
              onClick={handleStartSimulation}
              disabled={isSimulating}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', opacity: isSimulating ? 0.6 : 1 }}
            >
              {isSimulating ? (
                <>
                  <RefreshCw size={16} className="spin-icon" />
                  <span>Procesando Flujo...</span>
                </>
              ) : (
                <>
                  <Play size={16} />
                  <span>Ejecutar Simulación</span>
                </>
              )}
            </button>
          </div>

          {/* Sample Input */}
          <div style={{ background: 'var(--overlay-1)', border: '1px dashed var(--border-glass-strong)', padding: '1rem', borderRadius: '12px', margin: '1.5rem 0' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>DATOS DE ENTRADA:</span>
            <code style={{ color: 'var(--primary-light)', fontFamily: 'var(--font-mono)' }}>{activeScenario.inputSample}</code>
          </div>

          {/* Steps Timeline Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', margin: '2rem 0' }} className="sim-steps-grid">
            {activeScenario.steps.map((st, idx) => {
              const isActive = isSimulating && currentStep === idx;
              const isPast = completed || (isSimulating && currentStep > idx);

              return (
                <div
                  key={idx}
                  style={{
                    background: isActive
                      ? 'rgba(253, 123, 84, 0.18)'
                      : isPast
                      ? 'rgba(16, 185, 129, 0.1)'
                      : 'var(--overlay-1)',
                    border: isActive
                      ? '1px solid var(--primary-light)'
                      : isPast
                      ? '1px solid var(--accent-emerald)'
                      : '1px solid var(--border-glass)',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isPast ? 'var(--accent-emerald)' : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      PASO 0{idx + 1}
                    </span>
                    {isPast ? (
                      <CheckCircle size={16} color="var(--accent-emerald)" />
                    ) : isActive ? (
                      <Zap size={16} color="var(--primary-light)" className="pulse-icon" />
                    ) : (
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--border-glass-strong)' }} />
                    )}
                  </div>

                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem', lineHeight: 1.3, color: isActive || isPast ? 'var(--text-heading)' : 'var(--text-main)' }}>
                    {st.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {st.description}
                  </p>

                  {st.codeSnippet && (
                    <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                      <div style={{ height: '6.5rem', background: '#08090e', padding: '0.5rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', lineHeight: 1.5, color: 'var(--primary-light)', fontFamily: 'var(--font-mono)', overflowX: 'auto' }}>
                        {st.codeSnippet}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final Output Result Card */}
          {completed && (
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '16px',
                padding: '1.5rem',
                animation: 'fadeIn 0.5s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '1rem' }}>
                <CheckCircle size={20} />
                <span>Resultado del Pipeline en Producción (JSON Estructurado):</span>
              </div>

              <pre className="font-mono" style={{ background: '#08090e', padding: '1rem', borderRadius: '10px', fontSize: '0.85rem', color: '#10b981' }}>
                {JSON.stringify(activeScenario.finalOutput, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
