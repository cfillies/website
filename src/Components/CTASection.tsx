import React from "react";
import { Button, Text, Title2 } from "@fluentui/react-components";

class CTASection extends React.Component {
  render() {
    return (
      <section className="cta-band">
        <div>
          <Title2>Bereit, Ihre Prozesswelt zur Wissensbasis für KI zu machen?</Title2>
          <Text>Lassen Sie uns gemeinsam Ihre Use Cases besprechen.</Text>
        </div>

        <div className="cta-actions">
          <Button
            appearance="primary"
            size="large"
            className="cta-demo"
            as="a"
            href="https://www.semtation.de/testversion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo anfordern
          </Button>

          <Button appearance="transparent" size="large" className="cta-contact">
            Kontakt aufnehmen
          </Button>

        </div>
      </section>
    );
  }
}

export default CTASection;
