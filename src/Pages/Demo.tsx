import React from "react";
import {
  Title1,
  Title2,
  Text,
  Input,
  Checkbox,
  Button
} from "@fluentui/react-components";
import {  IMongoOption, mgSend_Mail} from '@semtalk/mongodb';


class Demo extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    
  }

  /*private handleSubmit = () => {
    if (!this.isFormValid()) {
      return;
    }


    // Handle form submission logic here
  };*/

  /*private send_mail = async (link: string,) => {
    let email = this.state.email;
    let semLink ="https://semtalk.com";
    
    
      
        let comment = this.state.comment
       
        
        let subject = "Registrierung für SemTalk Online";
        let mailtext = 'Hallo ' + this.state.firstName + ' ' + this.state.lastName + ',\n\n Sie haben sich für SemTalk Online registriert. '
           + 'Wenn Sie die Testumgebung von SemTalk verwenden möchten, klicken Sie bitte auf den folgenden Link, um Ihre Registrierung abzuschließen: ' + link +
       
            + comment +
            '\n\n Sie können sich als ' + role + ' anmelden.' +
            '\n\n Diese E-Mail ist computergeneriert.';
        

        mgSend_Mail(this.props.mongo, email, mailtext, subject);
     
    this.setState({ mailsend: true});




  }*/

  render() {
    return (
      /* Änderung: Wrapper auf 'process-page' vereinheitlicht */
      <div className="process-page">

        {/* Hero */}
        <section className="section">
          {/* Änderung: 'section-content' entfernt für korrekte Ränder */}
          <div className="pm-card">
            <Title1>Testumgebung SemTalk online</Title1>
            <p>
              <Text>
                Registrieren Sie sich <u><a href="https://semtalk.com" target="_blank">hier</a></u> (<u><a href="https://semtalk.com" target="_blank">Registrierungsformular</a></u>), um Modelle mit SemTalk online in unserer Testumgebung zu erstellen.
                Bitte beachten Sie, dass in der Demo‑Umgebung Ihre Modelle auch für andere Nutzer sichtbar sind. Sie soll lediglich zu ersten Modellierungstest dienen und keine individuelle Anwendungsumgebung darstellen.
                <p>Beachten Sie auch unsere <u><a href="/datenschutz" target="_blank">
                        Datenschutzbestimmungen
                </a></u>
                </p>
              </Text>
            </p>
            <p>
              <Text>
                Das SemTalk Services Demo Portal (für ausschließlich lesenden Zugriff auf Modelle) können Sie über den folgenden Link ansehen: 
                <u><a href="https://semtalk.com" target="_blank"> SemTalk Online Portal</a></u>
              </Text>
            </p>  
            <p>
              <Text>
                Wenn Sie mit uns in Kontakt treten wollen, um ein individuelles Online Meeting zu SemTalk Online zu vereinbaren, nutzen Sie unser Kontaktformular: <u><a href="/contact" target="_blank">Kontaktformular</a></u> oder schreiben Sie uns direkt an <a href="mailto:sales@semtalk.com" className="text-link">sales@semtalk.com</a>.
              </Text>
            </p>
          </div>
        </section>

      </div>
    );
  }
}

export default Demo;
