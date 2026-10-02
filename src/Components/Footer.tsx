import React from "react";
import { Text } from "@fluentui/react-components";
import { Sparkle24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";



class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-brand">
          <div className="brand-lockup">
            <div className="brand-mark">
            <img src={logo} alt="SemTalk Logo" />
            </div>
            <Text className="brand-name" weight="semibold">
              SemTalk
            </Text>
          </div>

          <p>
            SemTalk ist die Plattform für modernes Prozessmanagement und die zentrale Wissensbasis
            für Menschen und KI-Agenten.
          </p>
        </div>

        <div className="footer-columns">
          <div>
            <Text weight="semibold">Produkte</Text>
            <a href="#">SemTalk Desktop</a>
            <a href="#">SemTalk Online</a>
            <a href="#">Add-Ons</a>
            <a href="/semtalk-online-teams-app">SemTalk Online in Microsoft365</a>
          </div>

          <div>
            <Text weight="semibold">Lösungen</Text>
            <a href="/prozessmanagement">Prozessmanagement</a>
            <a href="#">Enterprise Architecture</a>
            <a href="/unternehmenswissen">Wissensmanagement</a>
            <a href="/ki-agenten">KI & Automatisierung</a>
          </div>

          <div>
            <Text weight="semibold">Ressourcen</Text>
            <a href="/Ressourcen">Blog</a>
            <a href="/Ressourcen">Webinare</a>
            <a href="/Ressourcen">Whitepaper</a>
            <a href="/semtalk-online-documentation-and-support">SemTalk Online Dokumentation</a>
          </div>

          <div>
            <Text weight="semibold">Unternehmen</Text>
            <Link to="/impressum">Impressum</Link>
            <a href="/datenschutz">Datenschutzbestimmungen</a>
            <a href="/terms-of-service-semtalk-online">Nutzungsbestimmungen SemTalk Online</a>
            <a href="#">Karriere</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
