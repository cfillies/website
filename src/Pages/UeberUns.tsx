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
            <Title1>Über uns</Title1>
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

        {/* Kontakt / Adresse */}
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

      </div>
    );
  }
}

export default UeberUns;
