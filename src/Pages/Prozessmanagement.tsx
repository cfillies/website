import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";

import {
  Flow24Regular,
  Document24Regular,
  Search24Regular,
  Info24Regular,
  BrainCircuit24Regular,
  Bot24Regular
} from "@fluentui/react-icons";

class Prozessmanagement extends React.Component {
  render() {
    return (
      <div className="content-shell process-page">

        {/* Hero */}
        <section className="section">
          <div className="section-content pm-card">
            <Title1>Prozessmanagement</Title1>
            <p>
            <Text>
              Ein wirkungsvolles Prozessmanagement basiert auf einem klaren Verständnis darüber,
              wie Abläufe innerhalb einer Organisation tatsächlich funktionieren. Prozessmodelle
              dienen dazu, Tätigkeiten, Verantwortlichkeiten und Schnittstellen strukturiert
              darzustellen und so ein gemeinsames Verständnis über den gesamten Prozess zu schaffen.
              Sie unterstützen dabei, komplexe Abläufe nachvollziehbar zu machen und ermöglichen es,
              Optimierungspotenziale zu erkennen.
            </Text>
            </p>
          </div>
        </section>

        {/* Einführung */}
        <section className="section">
  <div className="pm-grid">

    <div className="section-content pm-card">
      <div className="pm-heading">
  <Flow24Regular className="pm-icon" />
  <Title2>Einführung in die Prozessmodellierung</Title2>
</div>

      <p>
      <Text>
              Prozessmodelle bilden die Grundlage für ein systematisches Verständnis von Abläufen.
              Sie helfen dabei, Tätigkeiten, Verantwortlichkeiten und Abhängigkeiten sichtbar zu
              machen und schaffen eine gemeinsame Basis für Analyse, Optimierung und Kommunikation.
            </Text>
            </p>
  </div>          
          

        {/* Ziele */}
        <div className="section-content pm-card">
      <div className="pm-heading">
  <Info24Regular className="pm-icon" />
  <Title2>Ziele und Einsatzbereiche von Prozessmodellen</Title2>
</div>

      <Text>
           <p>
              Je nach Zielsetzung können Prozessmodelle unterschiedliche Anforderungen erfüllen.
              Modelle, die zur Ausführung automatisierter Workflows dienen, benötigen andere
              Informationen als Modelle, die zur Analyse, Diskussion oder Verbesserung organisatorischer
              Abläufe eingesetzt werden. Für die Gestaltung und das Verständnis von Geschäftsprozessen
              steht die klare, visuelle Darstellung der Abläufe im Vordergrund.
            </p></Text>
            
        </div>
        </div>

        </section>

        {/* Grundlagen */}
        <section className="section">
          <div className="section-content pm-card">
            <div className="pm-heading">
             <Document24Regular className="pm-icon" />
              <Title2>Grundlegende Informationen für ein Prozessmodell</Title2>
            </div>

            <p>
            <div className="pm-grid">
            <Text>
              Für die Beschreibung eines Geschäftsprozesses werden bestimmte grundlegende Informationen
              benötigt. Dazu gehören der Auslöser des Prozesses, die einzelnen Aufgaben und ihre
              Reihenfolge, Entscheidungspunkte sowie die beteiligten Rollen oder organisatorischen
              Einheiten. Ebenso wichtig ist die Erfassung der benötigten und erzeugten Daten sowie
              deren Herkunft, Weitergabe und Ablage.
            </Text>
            <Text>
              Diese Informationen bilden die Grundlage für ein Modell, das sowohl verständlich als auch
              praktisch nutzbar ist. Häufig entsteht dabei eine Verbindung zu eingesetzten IT‑Systemen,
              Formularen oder anderen Hilfsmitteln.
            </Text>
            </div>
            </p>
            <img
              src="/assets/bpmn-example.png"
              alt="Beispiel eines Prozessmodells"
              className="pm-image"
            />
          </div>
        </section>

        {/* Ergänzende Informationen */}
        <section className="section">
          <div className="section-content pm-card">
            <div className="pm-heading">
              <Search24Regular className="pm-icon" />
              <Title2>Ergänzende Informationen zur Verbesserung der Verständlichkeit</Title2>
            </div>

            <p>
            <Text>
              Um die Aussagekraft eines Prozessmodells zu erhöhen, werden ergänzende Elemente wie
              Kommentare oder verlinkte Dokumente eingesetzt. Kommentare enthalten zusätzliche Hinweise,
              Varianten oder Ausnahmeregelungen, die für das Verständnis relevant sind, ohne das Diagramm
              zu überladen.
            </Text>
            <Text>
              Verlinkte Dokumente ermöglichen den Zugriff auf weiterführende Informationen wie
              Checklisten, Richtlinien, Formulare oder Screenshots aus IT‑Systemen. Diese Verknüpfungen
              entfalten ihren vollen Nutzen insbesondere in interaktiven Prozessportalen.
            </Text>
            </p>
          </div>
        </section>

        {/* Navigation */}
        <section className="section">
          <div className="section-content pm-card">
            <div className="pm-heading">
              <Flow24Regular className="pm-icon" />
              <Title2>Umgang mit komplexen Prozesslandschaften</Title2>
            </div>

            <p>
            <Text>
              Mit zunehmender Detailtiefe können Prozessmodelle sehr umfangreich werden. Um diese
              Komplexität beherrschbar zu machen, stehen verschiedene Navigationsmechanismen zur
              Verfügung: Hierarchische Modellstrukturen, Diagrammbäume, Brotkrumenpfade,
              Suchfunktionen und die Navigation über Objekteigenschaften.
            </Text>
            <Text>
              Diese Werkzeuge ermöglichen eine effiziente Orientierung innerhalb großer
              Modelllandschaften und erleichtern das Auffinden relevanter Inhalte.
            </Text>
            </p>
          </div>
        </section>

        {/* Veröffentlichung */}
        <section className="section">
          <div className="section-content pm-card">
            <div className="pm-heading">
              <Document24Regular className="pm-icon" />
              <Title2>Veröffentlichung von Prozessmodellen</Title2>
            </div>

            <p>
            <Text>
              Die Bereitstellung von Prozessmodellen erfolgt idealerweise über ein Prozessportal.
              Im Gegensatz zu statischen Formaten wie PDF ermöglichen Portale eine interaktive Nutzung
              der Modelle, einschließlich Navigation, Verlinkungen und Zugriff auf hinterlegte
              Informationen. Modelle können dort zielgruppenspezifisch bereitgestellt und kontrolliert
              veröffentlicht werden.
            </Text>
            </p>
          </div>
        </section>

        {/* Reporting */}
        <section className="section">
          <div className="section-content pm-card">
            <div className="pm-heading">
              <Info24Regular className="pm-icon" />
              <Title2>Reporting auf Basis von Prozessmodellen</Title2>
            </div>

            <p>
            <Text>
              Prozessmodelle bieten eine wertvolle Grundlage für Reporting. Aus ihnen lassen sich
              verschiedene Sichten ableiten, beispielsweise welche Rollen bestimmte Aufgaben ausführen,
              welche Formulare oder Systeme an welchen Stellen verwendet werden oder welche Prozesse von
              Änderungen an IT‑Systemen betroffen wären.
            </Text>
            <Text>
              Diese Auswertungen basieren auf dem Metamodell der verwendeten Modellierungsmethode und
              können flexibel erweitert werden, wenn zusätzliche Eigenschaften oder Metadaten benötigt
              werden.
            </Text>
            </p>
          </div>
        </section>

        {/* KI */}
        <section className="section">
          <div className="section-content pm-card">
            <div className="pm-heading">
              <BrainCircuit24Regular className="pm-icon" />
              <Title2>Prozessmodelle im Kontext künstlicher Intelligenz</Title2>
            </div>

            <p>
            <Text>
              Künstliche Intelligenz kann Prozesswissen nutzen, um präzisere Antworten zu geben,
              Abläufe besser zu verstehen oder Modellierungsschritte zu unterstützen. Durch die
              Kombination von Modellinformationen und aktuellen Systemdaten entstehen neue Möglichkeiten,
              Prozesse gezielt zu verbessern oder zu automatisieren.
            </Text>
            </p>
          </div>
        </section>

        {/* Prozessbot */}
        <section className="section">
          <div className="section-content pm-card">
            <div className="pm-heading">
              <Bot24Regular className="pm-icon" />
              <Title2>Der SemTalk Prozessbot</Title2>
            </div>

            <p>
            <Text>
              Der SemTalk Prozessbot verbindet Prozessmodelle mit modernen KI‑Werkzeugen. Er greift
              direkt auf Modellinhalte zu und stellt diese über Chatbots, Microsoft Copilot oder andere
              Agentensysteme bereit. Dadurch können Fragen zu Abläufen, Rollen, Freigaben oder
              Abhängigkeiten konsistent beantwortet werden.
            </Text>
            <Text>
              Der zugrunde liegende MCP‑Server stellt das Prozesswissen zentral bereit und ermöglicht
              eine sichere, kontrollierte Nutzung – sowohl in der Cloud als auch on‑premise.
            </Text>
            </p>
          </div>
        </section>

      </div>
    );
  }
}

export default Prozessmanagement;
