import React from "react";
import { Title1, Title2, Text, Card } from "@fluentui/react-components";
import {
  Flow24Regular,
  CheckmarkCircle24Regular,
  PeopleCommunity24Regular,
  ClipboardTask24Regular,
  ShareScreenPerson24Regular,
} from "@fluentui/react-icons";

class Prozessmanagement extends React.Component {
  render() {
    return (
      <div className="page process-page">

        {/* Hero */}
        <section className="pm-hero section">
          <div className="section-content">
            <Title1>Prozessmanagement</Title1>
            <p>
            <Text className="pm-intro">
              Effektives Prozessmanagement schafft Transparenz, verbessert Abläufe und verbindet Wissen,
              Rollen und Systeme. SemTalk unterstützt Sie dabei, Prozesse klar zu modellieren und
              organisationsweit bereitzustellen.
            </Text>
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>Was Sie mit SemTalk erreichen</Title2>

            <div className="pm-grid">
              <Card className="pm-card">
                <Flow24Regular className="pm-icon" />
                <h3>Prozessmodellierung</h3>
                <p>
                  Modellieren Sie Prozesse in BPMN oder anderen Notationen und speichern Sie Modelle zentral
                  in SharePoint oder MongoDB.
                </p>
              </Card>

              <Card className="pm-card">
                <ShareScreenPerson24Regular className="pm-icon" />
                <h3>Prozess‑Portal</h3>
                <p>
                  Stellen Sie Diagramme, Hintergrundinformationen und verknüpfte Inhalte für Leser in Teams,
                  SharePoint oder Webseiten bereit.
                </p>
              </Card>

              <Card className="pm-card">
                <ClipboardTask24Regular className="pm-icon" />
                <h3>Projektpläne</h3>
                <p>
                  Nutzen Sie Prozessmodelle als Blaupause für wiederkehrende Projekte und übernehmen Sie
                  Aufgaben direkt in Microsoft Planner.
                </p>
              </Card>

              <Card className="pm-card">
                <CheckmarkCircle24Regular className="pm-icon" />
                <h3>Workflows</h3>
                <p>
                  Modellieren Sie Workflows in Visio, exportieren Sie sie nach Power Automate und verknüpfen
                  Sie sie im Prozess‑Portal.
                </p>
              </Card>

              <Card className="pm-card">
                <PeopleCommunity24Regular className="pm-icon" />
                <h3>Prozess‑Teams</h3>
                <p>
                  Fachliche und technische Experten arbeiten gemeinsam an Prozessen. Das Process Office
                  koordiniert Modelle und Verantwortlichkeiten.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* LinkedIn Feed */}
        <section className="pm-section section">
          <div className="section-content">
            <Title2>Aktuelle LinkedIn‑Posts</Title2>

            <div className="linkedin-feed">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_POST_ID"
                height="400"
                width="100%"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>

            <Text>
              Weitere Beiträge finden Sie auf unserem{" "}
              <a
                href="https://www.linkedin.com/company/semtalk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn‑Profil
              </a>.
            </Text>
          </div>
        </section>

      </div>
    );
  }
}

export default Prozessmanagement;
