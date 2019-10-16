import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from './actions/shared';

import Nav from './components/Nav';
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
    <Router>
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {loading ? null : (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/leaderboard" exact component={Leaderboard} />
              <Route path="/polls/:id" exact component={Poll} />
              <Route path="/add" exact component={AddPoll} />
            </div>
          )}
        </div>
      </Fragment>
    </Router>
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
