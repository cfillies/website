import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";
import {
  PeopleCommunity24Regular,
  Info24Regular,
  Location24Regular
} from "@fluentui/react-icons";

class UeberUns extends React.Component {
  render() {
    return (
      <div className="content-shell ue-page">

        {/* Hero */}
        <section className="section">
          <div className="section-content pm-card">
            <Title1>Über Uns</Title1>
            <p>
              <Text>
                SemTalk ist seit mehr als 25 Jahren im Einsatz bei Unternehmen jeder Größe
                und bildet die Grundlage für modernes Prozess‑ und Wissensmanagement.
              </Text>
            </p>
          </div>
        </section>

        {/* Boxen */}
        <section className="section">
          <div className="pm-grid">

            <div className="section-content pm-card">
              <div className="pm-heading">
                <PeopleCommunity24Regular className="pm-icon" />
                <Title2>Unsere Mission</Title2>
              </div>
              <p>
                <Text>
                  Wir unterstützen Organisationen dabei, Wissen strukturiert aufzubauen,
                  effizient zu nutzen und nachhaltig weiterzuentwickeln.
                </Text>
              </p>
            </div>

            <div className="section-content pm-card">
              <div className="pm-heading">
                <Info24Regular className="pm-icon" />
                <Title2>Was uns auszeichnet</Title2>
              </div>
              <p>
                <Text>
                  SemTalk verbindet klassische Modellierungsmethoden mit modernen KI‑Werkzeugen
                  und schafft eine Umgebung, in der Wissen lebendig und nutzbar wird.
                </Text>
              </p>
            </div>

          </div>
        </section>

        {/* Adresse und Kontakt*/}
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

            <p>
              <Text>
                Geschäftsführer: Christian Fillies und Dr.-Ing. Frauke Weichhardt
              </Text>
            </p>

            <p>
              <Text>
                Anfahrt: Mit ÖPNV am besten über den S‑Bahnhof Babelsberg.
                Mit dem Auto über die A115 bis zur Abfahrt Potsdam‑Zentrum.
              </Text>
            </p>
          </div>
        </section>

        <section className="section">
        <div className="pm-grid-2col">

          {/* Unternehmensdaten */}
          <div className="section-content pm-card">
            <div className="pm-heading">
              <Title2>Unternehmensdaten</Title2>
            </div>
            <p>
              <Text>
                HRB‑Nummer: 16434 P, Potsdam<br />
                Umsatzsteuer‑Identifikationsnummer: DE 219 394 064
              </Text>
            </p>
            <div className="pm-back-to-top">
              <a href="#top">↑ Nach oben</a>
            </div>
          </div>

          {/* Urheberrecht */}
          <div className="section-content pm-card">
            <div className="pm-heading">
              <Title2>Urheberrecht</Title2>
            </div>
            <p>
              <Text>
                Jede Vervielfältigung, Änderung, Verbreitung oder Speicherung von Texten,
                Bildern oder sonstigem Material bedarf der ausdrücklichen Zustimmung der
                Semtation GmbH.
              </Text>
            </p>
            <div className="pm-back-to-top">
              <a href="#top">↑ Nach oben</a>
            </div>
          </div>

        </div>
      </section>

      {/* Haftung */}
      <section className="section">
        <div className="section-content pm-card">
          <div className="pm-heading">
            <Title2>Haftungsausschluss</Title2>
          </div>
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
          <div className="pm-back-to-top">
            <a href="#top">↑ Nach oben</a>
          </div>
        </div>
      </section>



      </div>
    );
  }
}

export default UeberUns;
