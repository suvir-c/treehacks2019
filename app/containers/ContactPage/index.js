import React from 'react';

import SideNavigation from 'components/SideNavigation';
import Button from 'components/Button';

class ContactPage extends React.Component {
  state = {
    message: '',
    message2: '',
  };

  handleSubmitReportClick = () => {};

  sendTextMessage = () => {
    fetch(`/send-message/${this.state.message}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  sendTextMessageSecond = () => {
    fetch(`/send-message/${this.state.message2}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="page-wrapper-sidebar contact-page">
        <SideNavigation />
        <div className="page-body">
          <h1>Contacts</h1>
          <p className="body-text">
            Reach out to help anonymously. Your phone number wont be shared
            without your consent.
          </p>
          <div className="contacts-list">
            <div className="card card-long">
              <div>
                <h3>Healthcare Professional</h3>
                <p>+1 192 142 1253</p>
                <p>
                  Create text message to get help on your mental and physical
                  health.
                </p>
              </div>
              <input
                placeholder="Enter Message"
                type="text"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              />
              <Button title="Let's Talk" onClick={this.sendTextMessage} />
            </div>
            <div className="card card-long">
              <div>
                <h3>Legal Aid</h3>
                <p>+1 213 124 1159</p>
                <p>
                  Create text message to consult with a legal aid for potential
                  lawsuits.
                </p>
                <input
                  placeholder="Enter Message"
                  type="text"
                  value={this.state.message2}
                  onChange={e => this.setState({ message2: e.target.value })}
                />
                <Button
                  title="Let's Talk"
                  onClick={this.sendTextMessageSecond}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
