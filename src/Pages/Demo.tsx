import React from "react";
import {
  Title1,
  Title2,
  Text,
  Input,
  Checkbox,
  Button
} from "@fluentui/react-components";

type DemoState = {
  firstName: string;
  lastName: string;
  org: string;
  phone: string;
  email: string;
  comment: string;
  privacyAccepted: boolean;
};

class Demo extends React.Component<{}, DemoState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      org: "",
      phone: "",
      email: "",
      comment: "",
      privacyAccepted: false
    };
  }

  private isFormValid() {
    const {
      firstName,
      lastName,
      org,
      phone,
      email,
      privacyAccepted
    } = this.state;

    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      org.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      privacyAccepted
    );
  }

  render() {
    const { firstName, lastName, org, phone, email, comment, privacyAccepted } =
      this.state;

    return (
      <div className="content-shell">

        {/* Hero */}
        <section className="section">
          <div className="section-content pm-card">
            <Title1>Testumgebung SemTalk online</Title1>
            <p>
              <Text>
                Registrieren Sie sich hier, um Modelle mit SemTalk online zu erstellen.
                Bitte beachten Sie, dass in der Demo‑Umgebung Ihre Modelle auch für andere
                Nutzer sichtbar sind.
              </Text>
            </p>
          </div>
        </section>

        {/* Formular */}
        <section className="section">
          <div className="section-content pm-card">

            <Title2>Registrierung</Title2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "500px"
              }}
            >
              {/* Name */}
              <div>
                <Text weight="semibold">Name *</Text>
                <div style={{ display: "flex", gap: "12px", marginTop: "6px" }}>
                  <Input
                    placeholder="Vorname"
                    required
                    value={firstName}
                    onChange={(_, data) =>
                      this.setState({ firstName: data.value })
                    }
                  />
                  <Input
                    placeholder="Nachname"
                    required
                    value={lastName}
                    onChange={(_, data) =>
                      this.setState({ lastName: data.value })
                    }
                  />
                </div>
              </div>

              {/* Organisation */}
              <div>
                <Text weight="semibold">Organisation / Unternehmen *</Text>
                <Input
                  placeholder="Ihr Unternehmen"
                  required
                  value={org}
                  onChange={(_, data) =>
                    this.setState({ org: data.value })
                  }
                />
              </div>

              {/* Telefonnummer */}
              <div>
                <Text weight="semibold">Telefonnummer *</Text>
                <Input
                  placeholder="Ihre Telefonnummer"
                  required
                  value={phone}
                  onChange={(_, data) =>
                    this.setState({ phone: data.value })
                  }
                />
              </div>

              {/* E-Mail */}
              <div>
                <Text weight="semibold">E‑Mail *</Text>
                <Input
                  placeholder="Ihre E‑Mail-Adresse"
                  required
                  value={email}
                  onChange={(_, data) =>
                    this.setState({ email: data.value })
                  }
                />
              </div>

              {/* Kommentar */}
              <div>
                <Text weight="semibold">Kommentar oder Nachricht</Text>
                <Input
                  placeholder="Ihre Nachricht (optional)"
                  value={comment}
                  onChange={(_, data) =>
                    this.setState({ comment: data.value })
                  }
                />
              </div>

              {/* Datenschutz */}
              <div style={{ marginTop: "12px" }}>
                <Checkbox
                  checked={privacyAccepted}
                  onChange={(_, data) =>
                    this.setState({ privacyAccepted: !!data.checked })
                  }
                  required
                  label={
                    <>
                      Ich habe die{" "}
                      <a href="/impressum#datenschutz" target="_blank">
                        Datenschutzbestimmungen
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu.
                    </>
                  }
                />
              </div>

              {/* Absenden */}
              <Button
                appearance="primary"
                size="large"
                disabled={!this.isFormValid()}
              >
                Absenden
              </Button>

              <Text size={200} style={{ marginTop: "8px" }}>
                Bitte beachten Sie unsere{" "}
                <a href="/impressum#datenschutz">Datenschutzbestimmungen</a>.
              </Text>
            </div>
          </div>
        </section>

        {/* Demo Portal Hinweis */}
        <section className="section">
          <div className="section-content pm-card">
            <Title2>SemTalk Services Demo Portal</Title2>
            <p>
              <Text>
                Ein SemTalk Services Demo Portal können Sie über den folgenden Link ansehen:
              </Text>
            </p>

            <a
              href="https://www.semtation.de/semtalk-online-teams-app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: "8px" }}
            >
              Zum SemTalk Services Demo Portal
            </a>

            <div className="pm-back-to-top">
              <a href="#top">↑ Nach oben</a>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Demo;
