import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";
import {
  Bot24Regular,
  Flow24Regular,
  BookOpen24Regular,
  PlugConnected24Regular
} from "@fluentui/react-icons";
import Prozessbot from "../assets/Prozessbot.png";

class KIAgenten extends React.Component {
  render() {
    return (
      /* Änderung: 'process-page' sorgt für die identische Breite und Abstände wie Produkte.tsx */
      <div className="process-page">

        {/* Hero */}
        <section className="section">
          {/* Änderung: Das störende 'section-content' wurde entfernt, damit die Card direkt greift */}
          <div className="pm-card">
            <Title1>KI‑Agenten</Title1>
            <p>
              <Text>
                Unternehmen besitzen umfangreiche Prozesslandschaften, die Aktivitäten,
                Rollen, Entscheidungen und Geschäftsobjekte präzise beschreiben.
                SemTalk nutzt diese Modelle, um KI‑Agenten mit organisationsspezifischem
                Wissen zu versorgen oder ausführbare Workflows daraus zu erzeugen.
              </Text>
            </p>
          </div>
        </section>

        {/* Architektur */}
        <section className="section">
          <div className="pm-grid">

            {/* Änderung: Auch hier 'section-content' entfernt */}
            <div className="pm-card">
              <div className="pm-heading">
                <Flow24Regular className="pm-icon" />
                <Title2>Prozessmodelle</Title2>
              </div>
              <p>
                <Text>
                  Prozessmodelle liefern Struktur, Rollen, Abläufe und organisatorisches Wissen.
                  Sie bilden die Grundlage für kontextualisierte KI‑Agenten und ausführbare Workflows.
                </Text>
              </p>
            </div>

            <div className="pm-card">
              <div className="pm-heading">
                <BookOpen24Regular className="pm-icon" />
                <Title2>Semantische Modelle</Title2>
              </div>
              <p>
                <Text>
                  Semantische Modelle definieren Begriffe, Zusammenhänge und Regeln.
                  Sie sorgen dafür, dass Agenten fachlich korrekt und konsistent arbeiten.
                </Text>
              </p>
            </div>

            <div className="pm-card">
              <div className="pm-heading">
                <Bot24Regular className="pm-icon" />
                <Title2>Agenten & Fähigkeiten</Title2>
              </div>
              <p>
                <Text>
                  Agenten führen Aufgaben flexibel aus. Fähigkeiten werden über standardisierte
                  Schnittstellen wie MCP bereitgestellt und können wiederverwendet werden.
                </Text>
              </p>
              <img
                src={Prozessbot}
                alt="Prozessbot im Einsatz"
                className="pm-image"
              />
            </div>

            <div className="pm-card">
              <div className="pm-heading">
                <PlugConnected24Regular className="pm-icon" />
                <Title2>Ausführbare Workflows</Title2>
              </div>
              <p>
                <Text>
                  Agentische Workflows lassen sich in SemTalk direkt als BPMN‑Modell definieren.
                  Die Ausführung erfolgt über LangGraph, das auch hohe parallele Volumina
                  zuverlässig verarbeiten kann.
                </Text>
              </p>
            </div>

          </div>
        </section>

        {/* Multi-Agenten-Systeme */}
        <section className="section">
          {/* Änderung: 'section-content' entfernt */}
          <div className="pm-card">
            <div className="pm-heading">
              <Bot24Regular className="pm-icon" />
              <Title2>Multi‑Agenten‑Systeme</Title2>
            </div>

            <p>
              <Text>
                Gerade für Multi‑Agenten‑Systeme wird die Komplexität der Entwicklung und des
                Betriebs spürbar reduziert, indem der Prompt auf die verschiedenen Aufgaben
                eines BPMN‑Modells verteilt wird. Klare Regeln müssen nicht mehr im Prompt
                stehen, sondern werden im Modell explizit definiert.
              </Text>
            </p>

            <div className="pm-back-to-top">
              <a href="#top">↑ Nach oben</a>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default KIAgenten;
