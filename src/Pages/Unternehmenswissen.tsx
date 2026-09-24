import React from "react";
import { Title1, Title2, Text } from "@fluentui/react-components";
import {
  Info24Regular,
  Document24Regular,
  BrainCircuit24Regular
} from "@fluentui/react-icons";

class Unternehmenswissen extends React.Component {
  render() {
    return (
      <div className="content-shell uw-page">
        <a id="top"></a>


       {/* Inhaltsverzeichnis + Unternehmenswissen (2-Spalten-Grid) */}
        <section className="section">
          <div className="pm-grid-2col">

            {/* Inhaltsverzeichnis (links) */}
            <div className="pm-card pm-toc">
              <Title2>Inhalt</Title2>
              <ul>
                <li><a href="#ontologien">Ontologien und Wissensgraphen</a></li>
                <li><a href="#beispiel">Beispiel</a></li>
                <li><a href="#warum">Warum Ontologien und Wissensgraphen?</a></li>
                <li><a href="#ki">KI mit Kontext</a></li>
              </ul>
            </div>

            {/* Unternehmenswissen (rechts) */}
            <div className="pm-card">
              <Title1>Unternehmenswissen</Title1>
              <p>
                <Text>
                  Unternehmenswissen besteht aus Begriffen, Objekten, Regeln und Beziehungen,
                  die eine Organisation definieren. SemTalk ermöglicht es, dieses Wissen
                  strukturiert abzubilden und für KI‑gestützte Anwendungen nutzbar zu machen.
                </Text>
              </p>
            </div>

          </div>
        </section>



        {/* Ontologie Einführung */}
        <section className="section">
          <div className="pm-grid">

            <div id="ontologien" className="section-content pm-card">
              <div className="pm-heading">
                <Info24Regular className="pm-icon" />
                <Title2>Ontologien und Wissensgraphen</Title2>
              </div>

              <p>
                <Text>
                  Eine Ontologie bzw. ein Wissensgraph beschreibt Begriffe, Objekte und deren
                  Beziehungen in einer klar definierten Struktur. Ziel ist es, ein gemeinsames
                  Verständnis über die Bedeutung von Informationen zu schaffen und diese
                  maschinenlesbar zu machen.
                </Text>
              </p>

            </div>

            <div id="beispiel" className="section-content pm-card">
              <div className="pm-heading">
                <Document24Regular className="pm-icon" />
                <Title2>Beispiel</Title2>
              </div>

              <p>
                <Text>
                  In einer Ontologie können die Klassen „Käse“ und „Länder“ mit Instanzen wie
                  Brie, Cheddar, Appenzeller sowie Frankreich, England und Schweiz modelliert
                  werden. Die Beziehung „kommt aus“ verbindet die Käsesorten mit ihren
                  Herkunftsländern und macht die Bedeutung der Informationen sichtbar.
                </Text>
              </p>
              
            </div>

          </div>
        </section>

        {/* Warum Ontologien */}
        <section className="section">
          <div id="warum" className="section-content pm-card">
            <div className="pm-heading">
              <Info24Regular className="pm-icon" />
              <Title2>Warum Ontologien und Wissensgraphen?</Title2>
            </div>

            <p>
              <Text>
                Ontologien beschreiben zentrale Konzepte eines Unternehmens: Rollen, Produkte,
                Systeme, Dokumente oder Datenobjekte. Wissensgraphen verbinden diese Konzepte
                miteinander und zeigen, wie sie sich gegenseitig beeinflussen. Sie bilden die
                Grundlage für moderne KI‑Anwendungen, die Kontext benötigen, um präzise Antworten
                zu liefern.
              </Text>
            </p>
              <div className="pm-back-to-top">
              <a href="#top">↑ Nach oben</a>
              </div>
          </div>
        </section>

        {/* KI mit Kontext */}
        <section className="section">
          <div id="ki" className="section-content pm-card">
            <div className="pm-heading">
              <BrainCircuit24Regular className="pm-icon" />
              <Title2>KI mit Kontext</Title2>
            </div>

            <p>
              <Text>
                Ontologien und Wissensgraphen liefern KI‑Systemen den Kontext, den sie benötigen,
                um Zusammenhänge zu erkennen und korrekte Antworten zu geben. SemTalk stellt dieses
                Wissen zentral bereit — über Portale, Bots oder den MCP‑Server — und macht es
                sicher und kontrolliert nutzbar.
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

export default Unternehmenswissen;
