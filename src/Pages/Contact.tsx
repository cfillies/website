import React from "react";
import {
  Title1,
  Title2,
  Text,
  Input,
  Checkbox,
  Button,
  Textarea
} from "@fluentui/react-components";
import {  IMongoOption, mgSend_Mail} from '@semtalk/mongodb';

type DemoState = {
  firstName: string;
  lastName: string;
  org: string;
  phone: string;
  email: string;
  comment: string;
  privacyAccepted: boolean;
  mailsend: boolean;
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
      privacyAccepted: false,
      mailsend: false
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

  private handleSubmit = () => {
    if (!this.isFormValid()) {
      return;
    }
    this.send_mail();
    this.setState({ mailsend: true });


    // Handle form submission logic here
  };

  private send_mail = async () => {
    let mongo: IMongoOption = {
      usemongo: true,
      semmongoserverurl: "https://semmongo4.azurewebsites.net/api/",
      semmongoserverurlBackup: "https://semmongo4.azurewebsites.net/api/",
      documents: "",
      backup: "SDX_backup",
      templates: "Templates",
      stencils: "Stencils",
      // approved: "Approved",
      approved: "",
      semuserlogin: null,
      semmongoconnectiontoken: "",
      dbname: "",
      repository: "",
      iselectron: false,
      defaultdatabase: "",
      defaultrepository: "repository",
      objects: "Objects",
      roles: "Roles",
      users: "Users",
      vectorsearchindex: ""
    };
    let email = this.state.email;
    
    
    let subject = "Kontaktanfrage über Semtalk.com";
    let mailtext = 'Daten: \n\n'
           + 'Name: ' + this.state.firstName + ' ' + this.state.lastName 
           + '\n\n E-Mail: ' + email
           + '\n\n Unternehmen: ' + this.state.org
           + '\n\n Kommentar: ' + this.state.comment;

    mgSend_Mail(mongo, "sales@semtalk.com", mailtext, subject);
     
    this.setState({ mailsend: true});




  }

  render() {
    const { firstName, lastName, org, phone, email, comment, privacyAccepted, mailsend } =
      this.state;

    return (
      <div className="content-shell">

        {/* Hero */}
        <section className="section">
          <div className="section-content pm-card">
            <p>
              <Text>
                Für Fragen rund um unser Angebot oder zur allgemeinen Kontaktaufnahme können Sie uns gerne über das untenstehende Formular erreichen. Wir freuen uns auf Ihre Nachricht und werden uns so schnell wie möglich bei Ihnen melden.
              </Text>
            </p>
          </div>
        </section>

         {!mailsend && (
        
        <section className="section">
         
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "500px",
              width: "100%",
              marginLeft:"20px",
            }}
            className="section-content pm-card">
            <div><Title2>Kontaktanfrage</Title2> </div>
  {/* Name */}
  <div>
    <Text weight="semibold">Name *</Text>
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "6px",
        width: "100%"
      }}
    >
      <Input
        style={{ flex: 1, minWidth: 0 }}
        placeholder="Vorname"
        required
        value={firstName}
        onChange={(_, data) =>
          this.setState({ firstName: data.value })
        }
      />

      <Input
        style={{ flex: 1, minWidth: 0 }}
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
    <div style={{ marginTop: "6px", width: "100%" }}>
      <Input
        style={{ width: "100%" }}
        placeholder="Ihr Unternehmen"
        required
        value={org}
        onChange={(_, data) =>
          this.setState({ org: data.value })
        }
      />
    </div>
  </div>

  {/* Telefonnummer */}
  <div>
    <Text weight="semibold">Telefonnummer *</Text>
    <div style={{ marginTop: "6px", width: "100%" }}>
      <Input
        style={{ width: "100%" }}
        placeholder="Ihre Telefonnummer"
        required
        value={phone}
        onChange={(_, data) =>
          this.setState({ phone: data.value })
        }
      />
    </div>
  </div>

  {/* E-Mail */}
  <div>
    <Text weight="semibold">E-Mail *</Text>
    <div style={{ marginTop: "6px", width: "100%" }}>
      <Input
        style={{ width: "100%" }}
        placeholder="Ihre E-Mail-Adresse"
        required
        value={email}
        onChange={(_, data) =>
          this.setState({ email: data.value })
        }
      />
    </div>
  </div>

  {/* Kommentar */}
  <div>
    <Text weight="semibold">Kommentar oder Nachricht</Text>
    <div style={{ marginTop: "6px", width: "100%" }}>
      <Textarea
        style={{ width: "100%" }}
        placeholder="Ihre Nachricht (optional)"
        value={comment}
        rows={3}
        resize="vertical"
        onChange={(_, data) =>
          this.setState({ comment: data.value })
        }
      />
    </div>
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

  <Button
    appearance="primary"
    size="large"
    disabled={!this.isFormValid()}
    onClick={this.handleSubmit}
  >
    Absenden
  </Button>
</div>
          
        </section>
        )}

        {mailsend && (
          <section className="section">
          <div className="section-content pm-card">
              <Title2>Nachricht gesendet</Title2>
              <p>
                Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.
              </p>
            </div>
          </section>
        )}

        

      </div>
    );
  }
}

export default Demo;
