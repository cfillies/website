import React from "react";
import {
  Badge,
  Button,
  Card,
  Subtitle1,
  Text,
  Title1
} from "@fluentui/react-components";

import {
  ArrowRight24Regular,
  Globe24Regular,
  Microscope24Regular,
  Bot24Regular,
  ShieldCheckmark24Regular
} from "@fluentui/react-icons";

class HeroSection extends React.Component {
  render() {
    return (
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
    );
  }
}

export default HeroSection;
