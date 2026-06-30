import React from "react";
import { Text } from "@fluentui/react-components";
import { benefits } from "../App"; // benefits aus App importieren

class ValueBand extends React.Component {
  render() {
    return (
      <section className="value-band">
        {benefits.map((benefit) => (
          <div className="value-item" key={benefit.title}>
            <div className="value-icon">{benefit.icon}</div>
            <Text className="value-title" weight="semibold">
              {benefit.title}
            </Text>
            <p>{benefit.text}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default ValueBand;
