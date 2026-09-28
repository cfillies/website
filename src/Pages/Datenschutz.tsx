import React from "react";
import { Title1, Text } from "@fluentui/react-components";

class Datenschutz extends React.Component {
  render() {
    return (
      <div className="content-shell">
        <div className="pm-card">
          <Title1>Datenschutzbestimmungen</Title1>
          <p>
            <Text>
              Die Datenschutzbestimmungen finden Sie auf der Impressum-Seite.
            </Text>
          </p>
        </div>
      </div>
    );
  }
}

export default Datenschutz;
