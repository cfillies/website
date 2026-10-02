import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";

class SemTalkOnlineTeamsApp extends React.Component {
  render() {
    return (
      <div className="content-shell">

        <section className="section">
          <div className="section-content pm-card">
            <Title1>SemTalk Online in Microsoft365 – Zusammenarbeit neu gedacht</Title1>

            <p>
              <Text>
                In einer zunehmend vernetzten Arbeitswelt ist effiziente Zusammenarbeit der
                Schlüssel zum Erfolg. Mit SemTalk Online in Microsoft365 wird kollaboratives
                Prozess- und Wissensmanagement auf ein neues Level gehoben.
              </Text>
            </p>

            <p>
              <Text>
                Die Integration von SemTalk Online in die vertraute Microsoft-Teams-Umgebung
                ermöglicht es Teams, komplexe Prozesse gemeinsam zu modellieren, zu analysieren
                und zu optimieren – direkt dort, wo die Kommunikation stattfindet.
              </Text>
            </p>

            <p>
              <Text>
                SemTalk Online verbindet dabei die bekannten Features der Weboberfläche mit den
                Vorteilen von Microsoft Teams.
              </Text>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-content pm-card">
            <Title2>Die Vorteile von SemTalk Online in Microsoft365 auf einen Blick</Title2>

            <p>
              <Text>
                <strong>Nahtlose Integration:</strong> SemTalk Online ist vollständig in
                Microsoft Teams eingebettet. Nutzer müssen die Plattform nicht wechseln –
                Modelle, Diskussionen und Analysen finden zentral an einem Ort statt.
              </Text>
            </p>

            <p>
              <Text>
                <strong>Einfache Zusammenarbeit:</strong> Mehrere Personen haben Zugriff und
                können an einem Prozessmodell arbeiten oder diese lesen. Das erhöht die
                Transparenz und spart wertvolle Zeit.
              </Text>
            </p>

            <p>
              <Text>
                <strong>Zentrale Wissensbasis:</strong> Prozessmodelle, Dokumentationen und
                wichtige Informationen sind zentral gespeichert und jederzeit verfügbar. Das
                unterstützt den Wissensaustausch und fördert ein gemeinsames Verständnis
                innerhalb des Teams.
              </Text>
            </p>

            <p>
              <Text>
                <strong>Niedrige Einstiegshürde:</strong> Durch die Integration in Teams ist
                keine separate Softwareinstallation notwendig. Die intuitive Benutzeroberfläche
                erleichtert den Einstieg auch für Nutzer ohne Vorkenntnisse in der
                Prozessmodellierung.
              </Text>
            </p>

            <p>
              <Text>
                <strong>Skalierbarkeit und Sicherheit:</strong> Als cloudbasierte Lösung
                innerhalb des Microsoft‑365‑Ökosystems profitiert SemTalk Online von hoher
                Verfügbarkeit, Skalierbarkeit und den bewährten Sicherheitsstandards von
                Microsoft. Die Berechtigungsverwaltung lässt sich ebenfalls einfach über die
                bewährten Mittel von Microsoft Teams steuern.
              </Text>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-content pm-card">
            <Title2>Weitere Informationen</Title2>

            <p>
              <Text>
                Um mehr über SemTalk Online zu erfahren, besuchen Sie die Dokumentation:
                <br />
                <a href="/semtalk-online-documentation-and-support">
                  SemTalk Online Dokumentation und Hilfe
                </a>
              </Text>
            </p>

            <p>
              <Text>
                Informationen zur Einrichtung von SemTalk Online in Microsoft Teams finden Sie
                auf der Wiki‑Seite:
                <br />
                <a
                  href="https://github.com/SemTalkOnline/SemTalkOnline/wiki/SemTalk-Online-in-Microsoft-365"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SemTalk Online in Microsoft365 – GitHub Wiki
                </a>
              </Text>
            </p>
          </div>
        </section>

      </div>
    );
  }
}

export default SemTalkOnlineTeamsApp;
