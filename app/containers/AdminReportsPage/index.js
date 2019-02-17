import React from 'react';
import { connect } from 'react-redux';

class AdminReportsPage extends React.Component {
  state = {};

  // async componentWillMount() {
  //   const reports = await fetchReports();
  //   // console.log(reports);
  // }

  render() {
    return (
      <div className="page-wrapper-sidebar admin-reports-page">
        <div className="card card-long">
          <div>
            <h3>Report Status</h3>
            <p>Sumitted Jan 14, 2019</p>
            <p>Insert short description here...</p>
            <div className="status">
              <h4>Filed</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ redux: state });

export default connect(
  mapStateToProps,
  null,
)(AdminReportsPage);
