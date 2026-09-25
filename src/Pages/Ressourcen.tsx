import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";
import {
  Document24Regular,
  Info24Regular,
  BrainCircuit24Regular
} from "@fluentui/react-icons";
import logo from "../assets/logo.png";
import messenBild from "../assets/allaboutpm_m365sum.png"; 



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

              {/* Vorschau + Download */}
              <div className="pm-grid-2col whitepaper-preview">
                <img
                  src={logo}
                  alt="Whitepaper Vorschau"
                  className="pm-image"
                  style={{
                    borderRadius: "6px",
                    maxWidth: "140px",
                    padding: "12px",
                    background: "#f5f5f5",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                  }}
                />

                <div>
                  <Text>
                    Laden Sie das aktuelle Whitepaper herunter und erhalten Sie einen
                    strukturierten Überblick über moderne Prozessmodellierung und
                    Wissensarchitekturen.
                  </Text>

                  <a
                    href={window.location.origin + "/assets/whitepaper.pdf"}
                    download="SemTalk-Whitepaper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="agent-btn"
                    style={{ marginTop: "12px", display: "inline-block" }}
                  >
                    Whitepaper herunterladen
                  </a>


                </div>
              </div>

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

              {/* Liste der LinkedIn-Posts */}
              <div style={{ marginTop: "16px" }}>
                <Text weight="semibold" style={{ marginBottom: "8px", display: "block" }}>
                  Aktuelle Beiträge:
                </Text>

                <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                  <li>
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7462079611271573505"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Semtation – LinkedIn Post (Prozessmanagement & KI)
                    </a>
                  </li>
                </ul>
              </div>
                  {/* Vorschau-Karte für LinkedIn-Posts */}
                  <div
                    className="linkedin-preview-card"
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginTop: "16px",
                      padding: "16px",
                      borderRadius: "8px",
                      background: "#f5f5f5",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                    }}
                  >
                    <img
                      src={logo}
                      alt="LinkedIn Vorschau"
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "6px",
                        background: "white",
                        padding: "8px",
                        objectFit: "contain"
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <Text weight="semibold" style={{ display: "block", marginBottom: "4px" }}>
                        Neuer Beitrag auf LinkedIn
                      </Text>

                      <Text style={{ display: "block", marginBottom: "8px" }}>
                        Ein kurzer Einblick in aktuelle Entwicklungen rund um SemTalk,
                        Prozessmanagement und KI‑gestützte Anwendungen.
                      </Text>

                      <a
                        href="https://www.linkedin.com/feed/update/urn:li:activity:7462079611271573505"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="agent-btn"
                        style={{ display: "inline-block" }}
                      >
                        Beitrag ansehen
                      </a>
                    </div>
                  </div>


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

            {/* Messe-Vorschau */}
            <div
              className="messen-preview-card"
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "16px",
                padding: "16px",
                borderRadius: "8px",
                background: "#f5f5f5",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={messenBild}
                alt="Messe Vorschau"
                style={{
                  width: "280px",
                  borderRadius: "8px",
                  background: "white",
                  padding: "10px",
                  objectFit: "contain"
                }}
              />

              <div style={{ flex: 1 }}>
                <Text weight="semibold" style={{ display: "block", marginBottom: "8px" }}>
                  Kommende Veranstaltungen
                </Text>

                <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                  <li>
                    <Text weight="semibold">All About Process Management</Text><br />
                    <Text>30.09.2026 – 01.10.2026</Text><br />
                    <Text>📍 Stuttgart</Text><br />
                    <a
                      href="https://www.messe-stuttgart.de/all-about-process-management/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-block", marginTop: "6px" }}
                    >
                      Zur Messe‑Website
                    </a>
                  </li>

                  <li style={{ marginTop: "16px" }}>
                    <Text weight="semibold">M365 Summit</Text><br />
                    <Text>12.10.2026 – 14.10.2026</Text><br />
                    <Text>📍 Mainz</Text><br />
                    <a
                      href="https://www.m365-summit.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-block", marginTop: "6px" }}
                    >
                      Zur Messe‑Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>

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
