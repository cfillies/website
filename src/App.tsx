import React from 'react';
import {
  Badge,
  Button,
  Card,
  Subtitle1,
  Text,
  Title1,
  Title2
} from '@fluentui/react-components';
import {
  ArrowRight24Regular,
  BookOpen24Regular,
  Building24Regular,
  CheckmarkCircle24Regular,
  Database24Regular,
  Globe24Regular,
  Lightbulb24Regular,
  Microscope24Regular,
  ShieldCheckmark24Regular,
  Sparkle24Regular,
  Bot24Regular,
  Flow24Regular
} from '@fluentui/react-icons';
import Foo from './Foo';

type NavItem = {
  label: string;
};

type Benefit = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

type UseCase = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

type Resource = {
  kind: string;
  title: string;
  date: string;
};

const navItems: NavItem[] = [
  { label: 'Prozessmanagement' },
  { label: 'Unternehmenswissen' },
  { label: 'KI-Agenten' },
  { label: 'Microsoft 365' },
  { label: 'Branchen' },
  { label: 'Ressourcen' },
  { label: 'Über uns' }
];

const benefits: Benefit[] = [
  {
    icon: <Flow24Regular />,
    title: 'Prozesse im Mittelpunkt',
    text: 'Modellieren Sie Abläufe konsistent und verbinden Sie sie mit Wissen, Rollen und Daten.'
  },
  {
    icon: <BookOpen24Regular />,
    title: 'Wissen strukturieren',
    text: 'Machen Sie Begriffe, Regeln und Informationen auffindbar und für Teams nutzbar.'
  },
  {
    icon: <Bot24Regular />,
    title: 'KI-Agenten kontextualisieren',
    text: 'Geben Sie Assistenten und Automatisierungen den richtigen fachlichen Kontext.'
  },
  {
    icon: <ShieldCheckmark24Regular />,
    title: 'Governance und Compliance',
    text: 'Schaffen Sie Transparenz, Nachvollziehbarkeit und auditierbare Strukturen.'
  },
  {
    icon: <Database24Regular />,
    title: 'Mit Systemen verbinden',
    text: 'Verknüpfen Sie Microsoft 365, Fachanwendungen und Unternehmensdaten.'
  }
];

const useCases: UseCase[] = [
  {
    icon: <Flow24Regular />,
    title: 'Prozessmanagement',
    text: 'Modellieren, analysieren und verbessern Sie Geschäftsprozesse mit einer klaren Wissensbasis.'
  },
  {
    icon: <Building24Regular />,
    title: 'Enterprise Architecture',
    text: 'Verknüpfen Sie Prozesse, Anwendungen und Informationen in einem konsistenten Bild.'
  },
  {
    icon: <BookOpen24Regular />,
    title: 'Wissensmanagement',
    text: 'Zentralisieren Sie Unternehmenswissen, Dokumente und Begriffe für bessere Auffindbarkeit.'
  },
  {
    icon: <Bot24Regular />,
    title: 'KI & Automatisierung',
    text: 'Ermöglichen Sie intelligente Workflows, RAG-Szenarien und assistierte Arbeit.'
  },
  {
    icon: <ShieldCheckmark24Regular />,
    title: 'Compliance & Risiko',
    text: 'Unterstützen Sie regulierte Abläufe mit klaren Verantwortlichkeiten und Nachweisen.'
  }
];

const resources: Resource[] = [
  {
    kind: 'Blog',
    title: 'Prozessmodelle als Kontext für KI-Agenten',
    date: '15. Mai 2024'
  },
  {
    kind: 'Webinar',
    title: 'SemTalk und Microsoft 365: Das perfekte Zusammenspiel',
    date: '5. Juni 2024'
  },
  {
    kind: 'Whitepaper',
    title: 'Semantische Modellierung: Der Schlüssel für Enterprise AI',
    date: '22. April 2024'
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="semtalk-page">
        <div className="semtalk-backdrop" />

        <div className="page-shell">
          <header className="site-header">
            <div className="brand-lockup">
              <div className="brand-mark">
                <Sparkle24Regular />
              </div>
              <div>
                <Text className="brand-name" weight="semibold">
                  SemTalk
                </Text>
                <Foo></Foo>
              </div>
            </div>

            <nav className="site-nav" aria-label="Hauptnavigation">
              {navItems.map((item) => (
                <a href="#" key={item.label} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="header-actions">
              <Button appearance="primary" className="primary-action">
                Demo anfordern
              </Button>
              <Button appearance="transparent" className="lang-action">
                DE
              </Button>
            </div>
          </header>

          <main>
            <section className="hero-grid">
              <div className="hero-copy">
                <div className="hero-eyebrow">
                  <Badge appearance="filled" color="brand">
                    Vom Prozessmodell zu KI-Agenten
                  </Badge>
                </div>

                <Title1 className="hero-title">
                  Prozesse modellieren.
                  <br />
                  Unternehmenswissen aufbauen.
                  <br />
                  KI-Agenten steuern.
                </Title1>

                <p className="hero-text">
                  SemTalk ist die Plattform für modernes Prozessmanagement. Aus Ihren Prozessmodellen
                  entsteht eine vernetzte Wissensbasis für Menschen, Systeme und KI-Agenten.
                </p>

                <div className="hero-actions">
                  <Button appearance="primary" size="large" className="primary-action">
                    Demo anfordern
                  </Button>
                  <Button appearance="secondary" size="large" icon={<ArrowRight24Regular />}>
                    Video ansehen
                  </Button>
                </div>

                <div className="hero-features">
                  <div className="hero-feature">
                    <Globe24Regular />
                    <span>In Microsoft 365 integriert</span>
                  </div>
                  <div className="hero-feature">
                    <Microscope24Regular />
                    <span>Semantisch & wiederverwendbar</span>
                  </div>
                  <div className="hero-feature">
                    <Bot24Regular />
                    <span>Basis für KI-Agenten</span>
                  </div>
                  <div className="hero-feature">
                    <ShieldCheckmark24Regular />
                    <span>Sicher, nachvollziehbar & compliant</span>
                  </div>
                </div>
              </div>

              <div className="hero-stack">
                <Card className="stack-card stack-agents">
                  <div className="stack-head">
                    <Subtitle1 className="stack-title">KI-Agenten</Subtitle1>
                    <Text size={200}>Assistenz, Compliance, Wissen und Projekte</Text>
                  </div>
                  <div className="stack-items">
                    <span>Prozess-Assistent</span>
                    <span>Compliance-Agent</span>
                    <span>Wissens-Agent</span>
                    <span>Projekt-Agent</span>
                  </div>
                </Card>

                <Card className="stack-card stack-context">
                  <Subtitle1 className="stack-title">Kontext für KI-Agenten</Subtitle1>
                  <Text>Strukturiert • Konsistent • Vertrauenswürdig</Text>
                </Card>

                <Card className="stack-card stack-knowledge">
                  <Subtitle1 className="stack-title">Unternehmenswissen</Subtitle1>
                  <div className="knowledge-grid">
                    <span>Prozesse</span>
                    <span>Rollen & Organisation</span>
                    <span>Dokumente & Informationen</span>
                    <span>Begriffe & Ontologien</span>
                    <span>Systeme & Daten</span>
                  </div>
                </Card>

                <Card className="stack-card stack-modeling">
                  <Subtitle1 className="stack-title">Prozessmodellierung mit SemTalk</Subtitle1>
                  <Text>BPMN, eEPK, DMN und individuelle Metamodelle</Text>
                  <div className="model-preview">
                    <div className="preview-bar" />
                    <div className="preview-flow">
                      <span className="flow-chip start">Start</span>
                      <span className="flow-chip task">Prüfen</span>
                      <span className="flow-chip decision">Entscheiden</span>
                      <span className="flow-chip end">Ende</span>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section className="value-band">
              {benefits.map((benefit) => (
                <div className="value-item" key={benefit.title}>
                  <div className="value-icon">{benefit.icon}</div>
                  <Text className="value-title" weight="semibold">
                    {benefit.title}
                  </Text>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </section>

            <section className="usecases-section">
              <div className="section-heading">
                <Title2 className="section-title">Für Ihre wichtigsten Anwendungsfälle</Title2>
              </div>
              <div className="usecase-grid">
                {useCases.map((useCase) => (
                  <Card className="usecase-card" key={useCase.title}>
                    <div className="usecase-icon">{useCase.icon}</div>
                    <Text className="usecase-title" weight="semibold">
                      {useCase.title}
                    </Text>
                    <p>{useCase.text}</p>
                    <div className="card-arrow">
                      <ArrowRight24Regular />
                    </div>
                  </Card>
                ))}
              </div>
              <div className="section-link">
                <a href="#">Alle Anwendungsfälle entdecken</a>
                <ArrowRight24Regular />
              </div>
            </section>

            <section className="logo-band">
              <Text>Vertrauen führender Unternehmen</Text>
              <div className="logo-row">
                <span>LOGOIPSUM</span>
                <span>LOGOIPSUM</span>
                <span>LOGOIPSUM</span>
                <span>LOGOIPSUM</span>
                <span>LOGOIPSUM</span>
              </div>
            </section>

            <section className="three-column">
              <Card className="info-card">
                <Title2 className="info-title">Warum SemTalk?</Title2>
                <ul className="check-list">
                  <li>
                    <CheckmarkCircle24Regular /> Ganzheitlich: Prozesse, Wissen, Organisation und IT verbinden
                  </li>
                  <li>
                    <CheckmarkCircle24Regular /> Semantisch fundiert für konsistente und skalierbare Modelle
                  </li>
                  <li>
                    <CheckmarkCircle24Regular /> Nahtlos integriert in Microsoft 365 und Azure
                  </li>
                  <li>
                    <CheckmarkCircle24Regular /> KI-ready: die ideale Grundlage für Enterprise AI
                  </li>
                  <li>
                    <CheckmarkCircle24Regular /> Seit über 20 Jahren bewährt in Projekten weltweit
                  </li>
                </ul>
                <Button appearance="secondary">Mehr über SemTalk</Button>
              </Card>

              <Card className="info-card">
                <Title2 className="info-title">So entsteht Mehrwert</Title2>
                <ol className="numbered-list">
                  <li>
                    <span>1</span>
                    <div>
                      <strong>Prozesse modellieren</strong>
                      <Text block>Erfassen und strukturieren Sie Ihre Prozesse.</Text>
                    </div>
                  </li>
                  <li>
                    <span>2</span>
                    <div>
                      <strong>Unternehmenswissen vernetzen</strong>
                      <Text block>Verknüpfen Sie relevante Informationen und Begriffe.</Text>
                    </div>
                  </li>
                  <li>
                    <span>3</span>
                    <div>
                      <strong>KI-Agenten befähigen</strong>
                      <Text block>Nutzen Sie das Wissen als Kontext für KI und Automation.</Text>
                    </div>
                  </li>
                  <li>
                    <span>4</span>
                    <div>
                      <strong>Besser entscheiden & umsetzen</strong>
                      <Text block>Steigern Sie Effizienz, Qualität und Compliance.</Text>
                    </div>
                  </li>
                </ol>
              </Card>

              <Card className="info-card">
                <Title2 className="info-title">Aktuelles & Ressourcen</Title2>
                <div className="resource-list">
                  {resources.map((resource) => (
                    <div className="resource-item" key={resource.title}>
                      <div className="resource-kind">{resource.kind}</div>
                      <div className="resource-body">
                        <strong>{resource.title}</strong>
                        <Text block>{resource.date}</Text>
                      </div>
                      <ArrowRight24Regular />
                    </div>
                  ))}
                </div>
                <div className="section-link compact">
                  <a href="#">Alle Ressourcen</a>
                  <ArrowRight24Regular />
                </div>
              </Card>
            </section>

            <section className="cta-band">
              <div>
                <Title2>Bereit, Ihre Prozesswelt zur Wissensbasis für KI zu machen?</Title2>
                <Text>Lassen Sie uns gemeinsam Ihre Use Cases besprechen.</Text>
              </div>
              <div className="cta-actions">
                <Button appearance="secondary" size="large">
                  Demo anfordern
                </Button>
                <Button appearance="transparent" size="large" className="cta-outline">
                  Kontakt aufnehmen
                </Button>
              </div>
            </section>
          </main>

          <footer className="site-footer">
            <div className="footer-brand">
              <div className="brand-lockup">
                <div className="brand-mark">
                  <Sparkle24Regular />
                </div>
                <Text className="brand-name" weight="semibold">
                  SemTalk
                </Text>
              </div>
              <p>SemTalk ist die Plattform für modernes Prozessmanagement und die zentrale Wissensbasis für Menschen und KI-Agenten.</p>
            </div>

            <div className="footer-columns">
              <div>
                <Text weight="semibold">Produkte</Text>
                <a href="#">SemTalk Desktop</a>
                <a href="#">SemTalk Online</a>
                <a href="#">Add-Ons</a>
                <a href="#">Preise</a>
              </div>
              <div>
                <Text weight="semibold">Lösungen</Text>
                <a href="#">Prozessmanagement</a>
                <a href="#">Enterprise Architecture</a>
                <a href="#">Wissensmanagement</a>
                <a href="#">KI & Automatisierung</a>
              </div>
              <div>
                <Text weight="semibold">Ressourcen</Text>
                <a href="#">Blog</a>
                <a href="#">Webinare</a>
                <a href="#">Whitepaper</a>
                <a href="#">Dokumentation</a>
              </div>
              <div>
                <Text weight="semibold">Unternehmen</Text>
                <a href="#">Über uns</a>
                <a href="#">Kunden</a>
                <a href="#">Partner</a>
                <a href="#">Karriere</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
