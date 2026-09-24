import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";
import {
  Document24Regular,
  Info24Regular,
  BrainCircuit24Regular
} from "@fluentui/react-icons";

class Ressourcen extends React.Component {
  render() {
    return (
      <div className="content-shell ressourcen-page">
        <a id="top"></a>

        {/* Überschrift */}
        <section className="section">
          <div className="pm-card">
            <Title1>Ressourcen</Title1>
            <p>
              <Text>
                Hier finden Sie Whitepaper, LinkedIn‑Beiträge und Informationen zu Messen,
                auf denen SemTalk vertreten ist.
              </Text>
            </p>
          </div>
        </section>

        {/* Whitepaper + LinkedIn */}
        <section className="section">
          <div className="pm-grid-2col">

            {/* Whitepaper */}
            <div id="whitepaper" className="pm-card">
              <div className="pm-heading">
                <Document24Regular className="pm-icon" />
                <Title2>Whitepaper</Title2>
              </div>

              <p>
                <Text>
                  Unsere Whitepaper bieten fundierte Einblicke in Prozessmanagement,
                  Wissensmodellierung und KI‑gestützte Anwendungen. Sie richten sich an
                  Fachleute, die praxisnahe Beispiele und tiefgehendes Hintergrundwissen suchen.
                </Text>
              </p>

              <div className="pm-back-to-top">
                <a href="#top">↑ Nach oben</a>
              </div>
            </div>

            {/* LinkedIn */}
            <div id="linkedin" className="pm-card">
              <div className="pm-heading">
                <Info24Regular className="pm-icon" />
                <Title2>LinkedIn</Title2>
              </div>

              <p>
                <Text>
                  Auf LinkedIn teilen wir aktuelle Entwicklungen, Produktneuigkeiten,
                  Event‑Ankündigungen und Fachbeiträge rund um SemTalk, KI‑Agenten und
                  modernes Prozessmanagement.
                </Text>
              </p>

              <div className="pm-back-to-top">
                <a href="#top">↑ Nach oben</a>
              </div>
            </div>

          </div>
        </section>

        {/* Messen */}
        <section className="section">
          <div id="messen" className="pm-card">
            <div className="pm-heading">
              <BrainCircuit24Regular className="pm-icon" />
              <Title2>Messen</Title2>
            </div>

            <p>
              <Text>
                SemTalk ist regelmäßig auf Fachmessen und Branchenevents vertreten.
                Dort präsentieren wir neue Funktionen, zeigen Live‑Demos und stehen
                für persönliche Gespräche zur Verfügung.
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

export default Ressourcen;
