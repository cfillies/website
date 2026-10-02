import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";

class SemtalkOnlineDocumentationAndSupport extends React.Component {
  render() {
    return (
      <div className="content-shell">

        <section className="section">
          <div className="section-content pm-card">
            <Title1>SemTalk Online Dokumentation und Hilfe</Title1>

            <p>
              <Text>
                Die SemTalk Online Wiki Dokumentation dient als zentrale Wissensbasis für alle
                Anwenderinnen und Anwender von SemTalk. Sie bietet einen schnellen und
                strukturierten Zugang zu Informationen über Funktionen, Anwendungsszenarien und
                Best Practices.
              </Text>
            </p>

            <p>
              <Text>
                Mithilfe der integrierten Such- und Navigationsfunktionen können Inhalte
                effizient gefunden und in der Praxis genutzt werden.
              </Text>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-content pm-card">
            <Title2>Wiki Dokumentation</Title2>

            <p>
              <Text>
                Hier entlang zur vollständigen SemTalk Online Dokumentation:
                <br />
                <a
                  href="https://github.com/SemTalkOnline/SemTalkOnline/wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/SemTalkOnline/SemTalkOnline/wiki
                </a>
              </Text>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-content pm-card">
            <Title2>Diskussionsforum</Title2>

            <p>
              <Text>
                Nutzerinnen und Nutzer können im Diskussionsforum Fragen stellen oder
                Diskussionen starten, wenn weitere Informationen zu bestimmten Funktionen
                benötigt werden:
                <br />
                <a
                  href="https://github.com/SemTalkOnline/SemTalkOnline/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/SemTalkOnline/SemTalkOnline/discussions
                </a>
              </Text>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-content pm-card">
            <Title2>Support</Title2>

            <p>
              <Text>
                Um das SemTalk Online Team direkt zu kontaktieren, können Anwender die
                Support‑E-Mail-Adresse verwenden:
                <br />
                <a href="mailto:support@semtalk.com">support@semtalk.com</a>
              </Text>
            </p>
          </div>
        </section>

      </div>
    );
  }
}

export default SemtalkOnlineDocumentationAndSupport;
