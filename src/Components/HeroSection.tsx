import workflowImage from "../assets/usedcase-bpmn.png";
import React from "react";
import {
  Badge,
  Button,
  Card,
  Subtitle1,
  Text,
  Title1,
  Title2
} from "@fluentui/react-components";

import {
  ArrowRight24Regular,
  Globe24Regular,
  Microscope24Regular,
  Bot24Regular,
  ShieldCheckmark24Regular
} from "@fluentui/react-icons";

import { resources } from "../App";

class HeroSection extends React.Component {
  render() {
    return (
      <section className="hero-grid">
      <div className="hero-class-layout">
        
        
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
            <Button
              appearance="primary"
              size="large"
              className="primary-action"
              as="a"
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo anfordern
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

            <div className="hero-info-card">
                  <Card className="info-card">
                    <Title2 className="info-title">Aktuelles & Ressourcen</Title2>
                    <div className="resource-list">
                     
                      {resources.map((resource) => {
                        const linkTarget =
                              resource.kind === "Messen"
                            ? "/ressourcen#messen"
                            : resource.kind === "Whitepaper"
                            ? "/ressourcen#whitepaper"
                            : resource.kind === "Aktuelles"
                            ? "/ressourcen#aktuelles" 
                            :"/ressourcen";
          
                        return (
                          <a
                            href={linkTarget}
                            className="resource-item"
                            key={resource.title}
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <div className="resource-kind">{resource.kind}</div>
                            <div className="resource-body">
                              <strong>{resource.title}</strong>
                              <Text block>{resource.date}</Text>
                            </div>
                            <ArrowRight24Regular />
                          </a>
                        );
                      })}
                    </div>
          
                    <div className="section-link compact">
                      <a href="/Ressourcen">Alle Ressourcen</a>
                      <ArrowRight24Regular />
                    </div>
                  </Card>
                </div>
        </div>
          

        <div className="hero-stack">
          <Card className="stack-card stack-agents">
            <div className="stack-head">
              <Subtitle1 className="stack-title">
                Vom Prozessmodell zum intelligenten Workflow
              </Subtitle1>

              <Text size={200} block>
                SemTalk verbindet die Klarheit modellierter Prozesse mit der Flexibilität von KI-Agenten
              </Text>
            </div>

            <Text weight="semibold">
              Warum SemTalk?
            </Text>

            <Text block>
              Viele KI-Lösungen starten mit einem Prompt. Doch sobald mehrere Schritte,
              Daten, Systeme und Menschen zusammenspielen, wird aus dem Prompt schnell
              eine schwer überschaubare Blackbox. SemTalk setzt auf einen anderen Ansatz:
              Der Geschäftsprozess gibt den Rahmen vor. KI übernimmt dort, wo Sprache,
              Interpretation oder flexible Bearbeitung gefragt sind.
            </Text>
            <Text block>
              SemTalk bringt klassische Prozesslogik und agentische Fähigkeiten in einem Workflow zusammen. 
              Nicht jeder Schritt braucht KI: Die passende Ausführungsart wird je nach Aufgabe gewählt.
            </Text>
              <table className="workflow-table">
                <tbody>

                  <tr>
                    <td className="workflow-key">Prozessmodell</td>
                    <td className="workflow-value">
                      Definiert Aktivitäten, Reihenfolge,
                      Verzweigungen und Verantwortlichkeiten.
                    </td>
                  </tr>

                  <tr>
                    <td className="workflow-key">KI-Agent</td>
                    <td className="workflow-value">
                      Übernimmt sprachliche Interpretation,
                      flexible Bearbeitung und die Nutzung geeigneter Tools.
                    </td>
                  </tr>

                  <tr>
                    <td className="workflow-key">Prozessdaten</td>
                    <td className="workflow-value">Halten strukturierte Ergebnisse fest 
                      und stellen sie späteren Schritten bereit.
                    </td>
                  </tr>

                  <tr>
                    <td className="workflow-key">Menschliche Interaktion</td>
                    <td className="workflow-value">Ermöglicht Eingaben, 
                      Rückfragen und Entscheidungen an den vorgesehenen Stellen.
                    </td>
                  </tr>

                  <tr>
                    <td className="workflow-key">Services & MCP-Tools</td>
                    <td className="workflow-value">Verbinden den Workflow 
                      mit externen Funktionen und Systemen.
                    </td>
                  </tr>

                  <tr>
                    <td className="workflow-key">Workflow-Debugger</td>
                    <td className="workflow-value">Macht Fortschritt, 
                      Prozesszustand und Tool-Aufrufe untersuchbar. 
                    </td>
                  </tr>

                </tbody>
              </table>
            <div className="stack-items">
            </div>
          </Card>

          <Card className="stack-card stack-context">
            <Subtitle1 className="stack-title">Die wichtigsten Nutzenargumente</Subtitle1>
            <ul>
              <li>Transparenz statt Blackbox. Der Ablauf bleibt als Prozessmodell sichtbar. 
                Aktivitäten, Verzweigungen, Daten und menschliche Aufgaben 
                sind nachvollziehbar strukturiert. </li>  
              <li>Gezielte KI statt Mega-Prompt. Jeder Prozessschritt hat eine klar umrissene Aufgabe. 
                Agenten werden dort eingesetzt, wo sie einen Mehrwert bieten – nicht für alles. </li> 
              <li>Kontrolle über den Ablauf. Der Prozess legt fest, welcher Schritt wann ausgeführt wird, 
                welche Daten weitergegeben werden und wann ein Mensch eingebunden wird. </li>
              <li>Debugging statt Rätselraten. Die Ausführung kann Schritt für Schritt untersucht werden: 
                Prozessstatus, aktuelle Daten und verwendete MCP-Tools werden sichtbar. </li>
              <li>Menschen und Systeme eingebunden. Formulare, Freigaben, Webservices, 
                Datenbanken und KI können in einem modellierten Workflow zusammenspielen. </li>
              <li>Wiederverwendbare Fähigkeiten. Agentische Teilnehmer können als aufrufbare 
                Fähigkeiten bereitgestellt werden; 
                dahinter kann auch ein ausführbarer Prozess stehen. </li>
            </ul>
          </Card>

          


          <Card className="stack-card stack-modeling">
            <Subtitle1 className="stack-title">Prozessmodellierung mit SemTalk</Subtitle1>
            <text>
              Ein Elternteil schreibt im Chat: „Ich brauche einen Kita-Platz für mein Kind in Bielefeld.“ Ein Agent sucht mithilfe verfügbarer MCP-Tools nach passenden Kitas. Der Prozess fordert anschließend die benötigten Angaben über ein Formular an. Ein LLM erstellt aus den strukturierten Daten ein Anschreiben; danach kann ein Webservice die Anfrage versenden. Der Workflow steuert den Ablauf, 
              übergibt Prozessdaten und macht die Ausführung im Debugger nachvollziehbar.
            </text>
            <img
              src={workflowImage}
              alt="Agentischer Workflow mit Prozessmodell und KI-Agenten"
              className="workflow-image"
/>
          </Card>

          <Card className="stack-card stack-video">
            <div className="stack-head">
              <Subtitle1 className="stack-title">
                Agentic Workflows mit SemTalk Online
              </Subtitle1>

              <Text size={200} block>
                Sehen Sie, wie Prozessmodelle, KI-Agenten und Unternehmenswissen
                in einem ausführbaren Workflow zusammenarbeiten.
              </Text>
            </div>
            <iframe
                src="https://www.youtube.com/embed/gb3k2WJmOVQ?si=Ximo09ROiHBy8bDS"
                title="Agentic Workflows mit SemTalk Online"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16 / 9",
                  display: "block"
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
          
          </Card>

        </div>
      </section>
    );
  }
}

export default HeroSection;
