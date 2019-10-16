import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from './actions/shared';

import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import AddPoll from './components/AddPoll';
import Poll from './components/Poll';

function App(props) {
  const { loading } = props;
  useEffect(() => {
    props.handleInitialData();
  }, []);
  return (
    <div>
      <LoadingBar />
      {loading ? null : (
        <Poll match={{ params: { id: 'loxhs1bqm25b708cmbf3g' } }} />
      )}
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
