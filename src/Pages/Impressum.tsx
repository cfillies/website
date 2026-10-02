import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";
import { Location24Regular } from "@fluentui/react-icons";

class Impressum extends React.Component {
  render() {
    return (
      <div className="content-shell">

        <section className="section">
          <div className="section-content pm-card">
            <Title1>Impressum</Title1>
          </div>
        </section>

        {/* Kontakt & Adresse */}
        <section className="section">
          <div className="section-content pm-card">
            <div className="pm-heading">
              <Location24Regular className="pm-icon" />
              <Title2>Kontakt & Adresse</Title2>
            </div>

            <p>
              <Text>
                Semtation GmbH<br />
                Karl-Liebknecht-Straße 21-22<br />
                D – 14482 Potsdam<br />
                Telefon: +49 (0)331 581 39 36<br />
                Fax: +49 (0)331 581 39 29<br />
                <br />
                Info & Sales: sales@semtalk.com<br />
                Support: support@semtalk.com
              </Text>
            </p>
          </div>
        </section>

        {/* Unternehmensdaten */}
        <section className="section">
          <div className="section-content pm-card">
            <Title2>Unternehmensdaten</Title2>
            <p>
              <Text>
                HRB‑Nummer: 16434 P, Potsdam<br />
                Umsatzsteuer‑Identifikationsnummer: DE 219 394 064
              </Text>
            </p>
          </div>
        </section>

        {/* Urheberrecht */}
        <section className="section">
          <div className="section-content pm-card">
            <Title2>Urheberrecht</Title2>
            <p>
              <Text>
                Jede Vervielfältigung, Änderung, Verbreitung oder Speicherung von Texten,
                Bildern oder sonstigem Material bedarf der ausdrücklichen Zustimmung der
                Semtation GmbH.
              </Text>
            </p>
          </div>
        </section>

        {/* Haftungsausschluss */}
        <section className="section">
          <div className="section-content pm-card">
            <Title2>Haftungsausschluss</Title2>
            <p>
              <Text>
                    HRB-Nummer: 16434 P, Potsdam<br />
                    Umsatzsteueridentifikationsnummer: DE 219 394 064<br />
              
                    Urheberecht:
                    Jede Vervielfältigung, Änderung, Verbreitung oder Speicherung von Texten, Textteilen, 
                    Bildern, Fotografien oder sonstigen Bildmaterialien, 
                    bedürfen der ausdrücklichen Zustimmung von der Semtation GmbH.<br />
                    <br />
                    Haftung:
                    Die Informationen, die Semtation GmbH als Betreiber der Webseite 
                    www.semtalk.de/www.semtalk.com 
                    auf dieser Webseite zur Verfügung stellt, sind sorgfältig ausgewählt, 
                    recherchiert und zusammengestellt, sie werden, soweit erforderlich, laufend aktualisiert. 
                    Semtation GmbH haftet nicht für die Inhalte dritter Webseiten, 
                    die über Links von der Webseite www.semtalk.de/www.semtalk.com angesteuert werden können. 
                    Von Inhalten dritter Webseiten distanziert sich Semtation GmbH ausdrücklich. 
                    Für Inhalte verlinkter Seiten ist ausschließlich der jeweilige Dienstanbieter oder 
                    Betreiber verantwortlich. 
                    Außerdem behalten wir uns das Recht vor, 
                    Inhalte dieser Webseite ohne vorherige Ankündigung zu ändern, 
                    zu ergänzen oder zu entfernen. Eine Haftung ergibt sich daraus nicht.<br />        
                </Text>
            </p>
          </div>
        </section>

      </div>
    );
  }
}

export default Impressum;
