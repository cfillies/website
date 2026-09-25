import React from "react";
import { Button, Text } from "@fluentui/react-components";
import { Sparkle24Regular } from "@fluentui/react-icons";
import { navItems } from "../App";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";  // <- Import


class Header extends React.Component {
  render() {
    return (
      <header className="site-header">

        <div className="brand-lockup">
          <Link to="/" className="brand-mark">
          <img src={logo} alt="SemTalk Logo"/>
          </Link>
          <div>
            <Text className="brand-name" weight="semibold">
              SemTalk
            </Text>
            
          </div>
        </div>

        <nav className="site-nav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="nav-link"
              to={`/${item.label.toLowerCase().replace(/ /g, "-")}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Button
            appearance="primary"
            size="large"
            className="primary-action"
            as="a"
            href="https://www.semtation.de/testversion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo anfordern
          </Button>

          <Button appearance="transparent" className="lang-action">
            DE
          </Button>
        </div>
      </header>
    );
  }
}

export default Header;
