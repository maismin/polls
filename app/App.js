import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleInitialData } from './actions/shared';

function App(props) {
  useEffect(() => {
    props.handleInitialData();
  }, []);
  return <div>Hello World</div>;
}

App.propTypes = {
  handleInitialData: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  handleInitialData,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
