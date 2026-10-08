import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";
import {
  Flow24Regular,
  Bot24Regular,
  BookOpen24Regular,
  Sparkle24Regular
} from "@fluentui/react-icons";

const Produkte: React.FC = () => {
  return (
    <div className="process-page">

      {/* Abschnitt 1 – Was ist SemTalk */}
      <section className="section">
        <div className="pm-card">
          <Title1>Was ist SemTalk® Online?</Title1>

          <Text block>
            SemTalk Online® von Semtation GmbH ist ein webbasiertes Modellierungswerkzeug mit nahtloser
            Microsoft Teams‑ und Browser‑Integration.
          </Text>

          <ul className="check-list">
            <li><Flow24Regular /> <Text block>Direkte Modellierung in Teams – kollaborativ, ohne zusätzliches Einloggen</Text></li>
            <li><Flow24Regular /> <Text block>Flexibel anpassbar – neue und eigene Elemente einfach hinzufügen</Text></li>
            <li><Flow24Regular /> <Text block>Individuelle Lösungen – jede Kundeninstanz kann einzigartig sein</Text></li>
            <li><Flow24Regular /> <Text block>Metamodellanpassung – bestehende Modellierungsvorlagen gezielt verändern</Text></li>
            <li><Flow24Regular /> <Text block>KI‑gestützte Funktionen – Prozessbeschreibung als Text oder Prozessmodell aus Text erzeugen</Text></li>
          </ul>

          <Text block>
            Bringen Sie mit SemTalk® Online Transparenz und Flexibilität ins Prozessmanagement.
          </Text>
        </div>
      </section>

      {/* Abschnitt 2 – SemTalk Online */}
      <section className="section">
        <div className="pm-card">
          <Title2>SemTalk® Online</Title2>

          <Text block>
            SemTalk® Online ist der neue browser‑basierte Editor zur Dokumentation von Geschäftsprozessen
            in der bewährten SemTalk‑Systematik – im Browser, in Microsoft Teams, in SharePoint oder auf dem Desktop.
          </Text>
        </div>
      </section>

      <section className="section">
        <div className="pm-card">  
          <Title2>Modellieren Sie schnell und mit hoher Qualität</Title2>
          <ul className="check-list">
            <li><Sparkle24Regular /> <Text block>vordefinierte Quick Shapes</Text></li>
            <li><Sparkle24Regular /> <Text block>einfache Formatierungsmöglichkeiten</Text></li>
            <li><Sparkle24Regular /> <Text block>vokabular‑basierte Modellierung</Text></li>
            <li><Sparkle24Regular /> <Text block>eingebettete Modellierungsregeln</Text></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="pm-card">  
          <Title2>Erzeugen Sie Mehrwert für Ihre Kollegen</Title2>
          <ul className="check-list">
            <li><BookOpen24Regular /> <Text block>Verknüpfung relevanter Dokumente mit Prozesselementen</Text></li>
            <li><BookOpen24Regular /> <Text block>navigierbare Modellwelt durch Diagramm‑Verbindungen</Text></li>
            <li><BookOpen24Regular /> <Text block>zentrale Veröffentlichung aller Modelle in einer Portalapplikation</Text></li>
            <li><BookOpen24Regular /> <Text block>Zugriff auf das Wissen Ihrer Vorgänge</Text></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="pm-card">  
          <Title2>Integration in die Microsoft‑Plattform</Title2>
          <ul className="check-list">
            <li><Flow24Regular /> <Text block>Veröffentlichung im Intranet</Text></li>
            <li><Flow24Regular /> <Text block>Anbindung an Workflow‑Systeme</Text></li>
            <li><Flow24Regular /> <Text block>Definition von Metadaten für SharePoint / Term Store</Text></li>
            <li><Flow24Regular /> <Text block>Klassifikationsmerkmale für Dokumente</Text></li>
            <li><Flow24Regular /> <Text block>Generierung von Aufgabenlisten in Microsoft ToDo</Text></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="pm-card">
          <Title2>Zusatzfunktionen</Title2>
          <ul className="check-list">
            <li><Sparkle24Regular /> <Text block>Inspiration und Unterstützung durch ChatGPT</Text></li>
            <li><Sparkle24Regular /> <Text block>eigene Kopf‑ und Fußzeilen</Text></li>
            <li><Sparkle24Regular /> <Text block>Begriffsverwaltung über zentrales Repository</Text></li>
            <li><Sparkle24Regular /> <Text block>Mehrsprachige Modellierung</Text></li>
            <li><Sparkle24Regular /> <Text block>Simulationsmöglichkeiten</Text></li>
            <li><Sparkle24Regular /> <Text block>Ontologie‑ und Begriffsmodellierung</Text></li>
            <li><Sparkle24Regular /> <Text block>zahlreiche Exportmöglichkeiten</Text></li>
          </ul>

          <Text block>
            SemTalk Online kann sowohl in Microsoft Azure gehostet als auch in Ihrer eigenen Infrastruktur betrieben werden.
            Bei der passenden Bereitstellung unterstützen wir Sie gerne.
          </Text>
        </div>
      </section>

      {/* Abschnitt 3 – Prozessbot */}
      <section className="section">
        <div className="pm-card">
          <Title2>Der SemTalk Prozessbot</Title2>

          <Text block>
            Der SemTalk Prozessbot operationalisiert Ihr Prozesswissen direkt im Unternehmenskontext.
            Über den MCP‑Server greift der Bot auf das zentrale Prozess‑Repository zu, interpretiert Modelle
            einschließlich Rollen, Inputs und Freigaben und liefert konsistente, modellbasierte Auskünfte
            in Microsoft Copilot, Teams oder Chatbots.
          </Text>

          <Text block>
            So werden bestehende BPMN‑Modelle technisch nutzbar, integriert und sicher bereitgestellt –
            on‑premise oder in Azure – mit klarer Governance und kontrollierter Datenhaltung.
          </Text>
        </div>
      </section>

      {/* Abschnitt 4 - Infos */}
      <section className="section">
  <div className="pm-card">
    <Title2>Weiterführende Informationen</Title2>

    <div className="link-block">
      <Text block>
        Einen ersten Eindruck erhalten Sie in diesem kurzen{" "}
        <a
          href="https://www.semtation.de/wp-content/uploads/2023/05/semtalkonlinevideo.mp4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Video
        </a>.
        {" "}
        Und registrieren Sie sich für die kostenlose Testumgebung unter{" "}
        <a
          href="https://www.semtation.de/testversion"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Testversion – Semtation GmbH
        </a>.
      </Text>
    </div>

    <div className="link-block">
      <Text block>
        Einen Überblick über Funktionsumfang können Sie in unserem{" "}
        <a
          href="https://github.com/SemTalkOnline/SemTalkOnline_DE/wiki/SemTalk-%C3%9Cberblick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Tutorial Wiki
        </a>{" "}
        erlangen.
      </Text>
    </div>

    <div className="link-block">
      <Text block>
        SemTalk Online kann sowohl als von der Semtation GmbH gehostete Web‑Applikation (in Microsoft Azure)
        genutzt werden als auch in einer Unternehmensinfrastruktur (eigene Cloud oder eigene Serverlandschaft)
        betrieben werden. Bei der passenden Bereitstellung von SemTalk Online für Ihre Zwecke und Bedürfnisse
        sind wir Ihnen gerne behilflich. Wenden Sie sich dafür gerne direkt an uns.
      </Text>
    </div>

    <div className="link-block">
      <Text block>
        Feedback und Fragen gerne unter{" "}
        <a
          href="https://github.com/SemTalkOnline/SemTalkOnline/discussions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          SemTalkOnline/SemTalkOnline · Discussions · GitHub
        </a>
        , an{" "}
        <a href="mailto:support@semtalk.com" className="text-link">support@semtalk.com</a>{" "}
        oder über unsere Support‑Telefonnummer: +49 (0)331 581 39 36.
      </Text>
    </div>

  </div>
</section>

    </div>
  );
};

export default Produkte;
