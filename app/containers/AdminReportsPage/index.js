import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserActions from '../../stores/user/actions';

class AdminReportsPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="page-wrapper-sidebar admin-reports-page">
        <div className="card card-long">
          <div>
            <h3>Report Status</h3>
            <p>Sumittted Jan 14, 2019</p>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, UserActions), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminReportsPage);
