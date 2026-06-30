import React from "react";
import { Button, Text } from "@fluentui/react-components";
import { Sparkle24Regular } from "@fluentui/react-icons";
import Foo from "./Foo";
import { navItems } from "../App";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="site-header">

        <div className="brand-lockup">
          <Link to="/"  className="brand-mark">
            <Sparkle24Regular />
          </Link>

          <div>
            <Text className="brand-name" weight="semibold">
              SemTalk
            </Text>
            <Foo />
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
          <Button appearance="primary" className="primary-action">
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
