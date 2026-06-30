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
          <Button appearance="secondary" size="large">
            Demo anfordern
          </Button>
          <Button appearance="transparent" size="large" className="cta-outline">
            Kontakt aufnehmen
          </Button>
        </div>
      </section>
    );
  }
}

export default CTASection;
