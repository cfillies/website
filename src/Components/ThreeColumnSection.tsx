import React from "react";
import { Card, Text, Title2, Button } from "@fluentui/react-components";
import { CheckmarkCircle24Regular, ArrowRight24Regular } from "@fluentui/react-icons";
import { resources } from "../App";

class ThreeColumnSection extends React.Component {
  render() {
    return (
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
    );
  }
}

export default ThreeColumnSection;
