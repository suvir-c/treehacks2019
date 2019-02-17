import React from 'react';
import { Link } from 'react-router-dom';

import SideNavigation from 'components/SideNavigation';
import Button from 'components/Button';
import Channel from '../../models/channel';
import { fetchChannels } from '../../lib/api';

class HomePage extends React.Component {
  state = {
    toggleCommunityForm: '',
    communityName: '',
    communityDescription: '',
  };

  async componentWillMount() {
    const channels = await fetchChannels();
    this.setState({ channels });
  }

  handleSubmitCommunity = async () => {
    const channel = new Channel({
      name: this.state.communityName,
      description: this.state.communityDescription,
    });
    await channel.create();
    // close form
    this.toggleCommunityForm();
    // redirect
  };

  toggleCommunityForm = () => {
    this.setState(prevState => ({
      toggleCommunityForm: !prevState.toggleCommunityForm,
    }));
  };

  render() {
    let channels = null;
    if (this.state.channels) {
      channels = (
        <div className="cards-wrapper">
          {this.state.channels.map(channel => (
            <div className="card">
              <div>
                <Link
                  to={{
                    pathname: '/support',
                    state: {
                      id: channel.attrs.id,
                      name: channel.attrs.name,
                      description: channel.attrs.description,
                    },
                  }}
                >
                  <h3>{channel.attrs.name}</h3>
                  <p>{channel.attrs.description}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="page-wrapper-sidebar home-page">
        <SideNavigation />
        <div className="page-body">
          <h1>Welcome</h1>
          <p className="body-text">
            You are not alone. We are here for you. Welcome to a space where you
            can stay completely <span className="highlight">anonymous</span> and
            feel at ease discussing your experiences freely amongst a supportive
            community.
          </p>
          <h3>Communities</h3>
          {channels}
          <h3>Reports</h3>
          <div className="card card-long">
            <div>
              <h3>Report Status</h3>
              <p>Submitted Jan 14, 2019</p>
              <p>Waiting for police review and support</p>
              <div className="status">
                <h4>Filed</h4>
              </div>
            </div>
          </div>

          <Button title="Create Community" onClick={this.toggleCommunityForm} />
          {this.state.toggleCommunityForm && (
            <div className="form">
              <h3>Create Community</h3>
              <input
                placeholder="Enter name"
                type="text"
                value={this.state.communityName}
                onChange={e => this.setState({ communityName: e.target.value })}
              />
              <p className="input-label">Details</p>
              <input
                placeholder="Enter community description"
                type="text"
                value={this.state.communityDescription}
                onChange={e =>
                  this.setState({ communityDescription: e.target.value })
                }
              />
              <Button
                title="Submit Community"
                onClick={this.handleSubmitCommunity}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
