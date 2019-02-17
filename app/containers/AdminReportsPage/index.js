import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Map from 'components/Map';
import UserActions from '../../stores/user/actions';

class AdminReportsPage extends React.Component {
  state = {};

  render() {
    const data = {
      coordinates: [
        [-118.48563, 34.22051],
        [-118.28863, 34.0751],
        [-118.28563, 34.02051],
        [-118.28563, 34.02051],
      ],
    };

    return (
      <div className="page-wrapper-sidebar admin-reports-page">
        <h2>Report Center</h2>
        <Map center={[-118.28563, 34.02051]} coordinates={data.coordinates} />
        <div className="card card-long">
          <div>
            <h3>Report Status</h3>
            <p>Sumittted Jan 14, 2019</p>
            <p>Location: W 38th St, Los Angeles, CA 90007</p>
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
