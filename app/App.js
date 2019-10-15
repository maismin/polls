import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from './actions/shared';

import Dashboard from './components/Dashboard';

function App(props) {
  const { loading } = props;
  useEffect(() => {
    props.handleInitialData();
  }, []);
  return (
    <div>
      <LoadingBar />
      {loading ? null : <Dashboard />}
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleInitialData: PropTypes.func.isRequired,
};

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

const mapDispatchToProps = {
  handleInitialData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
