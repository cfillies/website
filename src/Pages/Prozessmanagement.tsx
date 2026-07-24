import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";

class Prozessmanagement extends React.Component {
  render() {
    return (
      <div className="page process-page">

        {/* Hero */}
        <section className="pm-hero section">
          <div className="section-content">
            <Title1>Prozessmanagement</Title1>
            <p><Text className="pm-intro">
              Ein wirkungsvolles Prozessmanagement beginnt mit einem klaren Verständnis darüber,
              wie Abläufe in einer Organisation tatsächlich funktionieren. Prozessmodelle helfen
              dabei, komplexe Tätigkeiten sichtbar zu machen, Verantwortlichkeiten zu klären und
              Schnittstellen zwischen Rollen, Systemen und Daten transparent darzustellen.
            </Text></p>
          </div>
        </section>

        {/* 1. Grundlagen */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>1. Grundlagen der Prozessmodellierung</Title2>
            <p><Text>
              Um ein aussagekräftiges Prozessmodell zu erstellen, benötigt man einige grundlegende
              Informationen: Wie beginnt ein Prozess? Welche Aufgaben werden ausgeführt und in
              welcher Reihenfolge? Wo gibt es Entscheidungspunkte? Welche Rollen oder
              organisatorischen Einheiten sind beteiligt? Und welche Daten werden benötigt,
              erzeugt oder weitergegeben?
            </Text>
            <Text>
              Diese Inhalte bilden die Basis für ein Modell, das sowohl verständlich als auch
              praktisch nutzbar ist. Visuelle Darstellungen erleichtern das Verständnis für den
              Prozess als Ganzes und ermöglichen es Beteiligten, ihre Aufgaben besser einzuordnen.
            </Text></p>
          </div>
        </section>

        {/* 2. Ergänzende Informationen */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>2. Ergänzende Informationen</Title2>
            <p><Text>
              Kommentare und verlinkte Dokumente erhöhen die Verständlichkeit eines Modells,
              ohne das Diagramm zu überladen. Sie dokumentieren Ausnahmen, Varianten, Hinweise
              oder weiterführende Informationen wie Checklisten, Richtlinien oder Screenshots
              aus IT‑Systemen.
            </Text>
            <Text>
              Diese Elemente schaffen einen direkten Bezug zur praktischen Ausführung und machen
              Modelle zu wertvollen Arbeitsinstrumenten.
            </Text></p>
          </div>
        </section>

        {/* 3. Navigation */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>3. Navigation in Prozessmodellen</Title2>
            <p><Text>
              Mit zunehmender Detailtiefe entstehen größere Modelllandschaften. Damit Modelle
              trotz ihrer Komplexität gut nutzbar bleiben, braucht es klare Navigationsmechanismen:
              Hierarchien, Verfeinerungen, Diagrammbäume, Brotkrumenpfade, Suchfunktionen und
              Navigation über Objekteigenschaften.
            </Text>
            <Text>
              Diese Funktionen ermöglichen es, auch umfangreiche Prozesswelten effizient zu
              erkunden und relevante Inhalte schnell zu finden.
            </Text></p>
          </div>
        </section>

        {/* 4. Veröffentlichung */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>4. Veröffentlichung von Prozessmodellen</Title2>
            <p><Text>
              Damit Prozesswissen nicht isoliert bleibt, müssen Modelle für andere zugänglich
              gemacht werden. PDF‑Formate reichen dafür oft nicht aus, da sie keine Navigation
              oder Interaktion ermöglichen.
            </Text>
            <Text>
              Moderne Prozessportale stellen Modelle strukturiert bereit, ermöglichen kontrollierte
              Zugriffe und bieten dieselben Navigationsfunktionen wie der Editor.
            </Text></p>
          </div>
        </section>

        {/* 5. Reporting */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>5. Reporting auf Prozessmodellen</Title2>
            <p><Text>
              Prozessmodelle enthalten wertvolle Informationen, die sich auswerten lassen:
              Welche Rolle bearbeitet welche Aufgabe? Welche Formulare oder Systeme werden wo
              genutzt? Welche Prozesse sind betroffen, wenn ein System geändert wird?
            </Text>
            <Text>
              Reports basieren auf dem Metamodell der Modellierungsmethode und ermöglichen
              tabellarische Übersichten, die zur Analyse und Weiterverarbeitung genutzt werden
              können.
            </Text></p>
          </div>
        </section>

        {/* 6. KI-Unterstützung */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>6. KI‑Unterstützung in der Prozessmodellierung</Title2>
            <p><Text>
              Künstliche Intelligenz kann sowohl die Modellierung als auch die Nutzung von
              Prozesswissen unterstützen. Chatbots können BPMN‑Diagramme generieren,
              Modellschritte vorschlagen oder Modellwissen als Kontext nutzen, um präzisere
              Antworten zu geben.
            </Text>
            <Text>
              Dadurch verringern sich Halluzinationen, und die Ergebnisse beziehen sich stärker
              auf die tatsächlichen Abläufe der Organisation.
            </Text></p>
          </div>
        </section>

        {/* 7. Prozessbot */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>7. Der SemTalk Prozessbot</Title2>
            <p><Text>
              Der SemTalk Prozessbot verbindet bestehendes Prozesswissen mit KI‑Werkzeugen wie
              Microsoft Copilot oder ChatGPT. Er greift direkt auf Modellinhalte zu – inklusive
              Rollen, Freigaben und Abhängigkeiten – und liefert konsistente Antworten im
              Arbeitsalltag.
            </Text>
            <Text>
              Der MCP‑Server stellt das Prozesswissen zentral bereit, on‑premise oder in Azure,
              und ermöglicht die Nutzung durch Bots, Portale oder agentische KI‑Systeme.
            </Text></p>
          </div>
        </section>

      </div>
    );
  }
}

export default Prozessmanagement;
