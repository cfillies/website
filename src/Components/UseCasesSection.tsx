import React from "react";
import { Card, Text, Title2 } from "@fluentui/react-components";
import { ArrowRight24Regular } from "@fluentui/react-icons";
import { useCases } from "../App"; // useCases aus App importieren

class UseCasesSection extends React.Component {
  render() {
    return (
      <section className="usecases-section">
        <div className="section-heading">
          <Title2 className="section-title">Für Ihre wichtigsten Anwendungsfälle</Title2>
        </div>

        <div className="usecase-grid">
          {useCases.map((useCase) => (
            <Card className="usecase-card" key={useCase.title}>
              <div className="usecase-icon">{useCase.icon}</div>
              <Text className="usecase-title" weight="semibold">
                {useCase.title}
              </Text>
              <p>{useCase.text}</p>
              <div className="card-arrow">
                <ArrowRight24Regular />
              </div>
            </Card>
          ))}
        </div>

        <div className="section-link">
          <a href="#">Alle Anwendungsfälle entdecken</a>
          <ArrowRight24Regular />
        </div>
      </section>
    );
  }
}

export default UseCasesSection;
