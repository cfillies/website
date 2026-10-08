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
            <Link to="/" className="brand-mark">
              <img src={logo} alt="SemTalk Logo" />
            </Link>
            <Text className="brand-name" weight="semibold">
              SemTalk
            </Text>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/SemTalk/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"></path>
              </svg>
            </a>

            <a
              href="https://www.xing.com/companies/semtationgmbh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.9 3h-3.3l-4.5 7.8 3.9 6.7h3.3l-3.9-6.7L19.9 3zM8.4 3H5.1l3.9 6.7L4.1 17h3.3l4.9-7.3L8.4 3z"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/semtation-gmbh/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-8.2c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z"></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/channel/UClW1VsL_IdPrM_WxHu4hyAA"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.3 2.5 12 2.5 12 2.5h-.1s-5.3 0-8.6.3c-.4.1-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 7.3.3s5.3 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.7 14.9V7.9l6.3 3.5-6.3 3.5z"></path>
              </svg>
            </a>
          </div>

        </div>

        <div className="footer-columns">
          <div>
            <Text weight="semibold">Produkte</Text>
            <a href="/produkte">SemTalk Online</a>
            <a href="/semtalk-online-teams-app">SemTalk Online in Microsoft365</a>
          </div>

          <div>
            <Text weight="semibold">Lösungen</Text>
            <a href="/prozessmanagement">Prozessmanagement</a>
            <a href="/unternehmenswissen">Wissensmanagement</a>
            <a href="/ki-agenten">KI & Automatisierung</a>
          </div>

          <div>
            <Text weight="semibold">Ressourcen</Text>
            <a href="/Ressourcen">Whitepaper</a>
            <a href="/semtalk-online-documentation-and-support">SemTalk Online Dokumentation</a>
          </div>

          <div>
            <Text weight="semibold">Unternehmen</Text>
            <Link to="/impressum">Impressum</Link>
            <a href="/datenschutz">Datenschutzbestimmungen</a>
            <a href="/terms-of-service-semtalk-online">Nutzungsbestimmungen SemTalk Online</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
