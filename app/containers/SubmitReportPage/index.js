import React from 'react';

import SideNavigation from 'components/SideNavigation';
import Button from 'components/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitNewReport } from '../../stores/report/actions';

class SubmitReportPage extends React.Component {
  state = {
    offendersName: '',
    date: '',
    location: '',
    details: '',
  };

  handleSubmitReportClick = async () => {
    this.state.submittedOffendersName = this.state.offendersName;
    this.state.submittedDate = this.state.date;
    this.state.submittedLocation = this.state.location;
    this.state.submittedDetails = this.state.details;
    this.state.submittedStatus = 'pending';
    console.log('state1', this.state);

    this.toggleSubmitReportForm();
  };

  toggleSubmitReportForm = () => {
    this.setState(prevState => ({
      toggleSubmitReportForm: !prevState.toggleSubmitReportForm,
    }));
  };

  render() {
    return (
      <div className="page-wrapper-sidebar">
        <SideNavigation />
        <div className="page-body">
          <h1>Submit Report</h1>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.
          </p>
          <p className="input-label">Offenders Name</p>
          <input
            placeholder="Enter offender's full name"
            type="text"
            value={this.state.offendersName}
            onChange={e => this.setState({ offendersName: e.target.value })}
          />
          <p className="input-label">Date</p>
          <input
            placeholder="Enter date of incident"
            type="text"
            value={this.state.date}
            onChange={e => this.setState({ date: e.target.value })}
          />
          <p className="input-label">Location</p>
          <input
            placeholder="Enter location"
            type="text"
            value={this.state.location}
            onChange={e => this.setState({ location: e.target.value })}
          />
          <p className="input-label">Details</p>
          <textarea
            placeholder="Enter a description of the case. Enter as much detail as you remember and are comfortable with sharing."
            type="text"
            value={this.state.details}
            onChange={e => this.setState({ details: e.target.value })}
          />
          <Button
            title="Submit Report"
            onClick={() => this.props.submitNewReport(this.state)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ redux: state });

const mapDispatchToProps = dispatch => ({
  submitNewReport: state => dispatch(submitNewReport(state)),
});

SubmitReportPage.propTypes = {
  submitNewReport: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubmitReportPage);
