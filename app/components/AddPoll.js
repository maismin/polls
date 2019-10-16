import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleAddPoll } from '../actions/polls';

function AddPoll(props) {
  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');

  const isDisabled = () => {
    return !(question && optionA && optionB && optionC && optionD);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.history.push('/');
    props.handleAddPoll({
      question,
      a: optionA,
      b: optionB,
      c: optionC,
      d: optionD,
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
      <input
        value={question}
        name="questions"
        onChange={e => {
          e.preventDefault();
          setQuestion(e.target.value);
        }}
        className="input"
        type="text"
      />

      <h3>What are the options?</h3>
      <label className="label" htmlFor="a">
        A.
        <input
          value={optionA}
          name="a"
          id="a"
          onChange={e => {
            e.preventDefault();
            setOptionA(e.target.value);
          }}
          className="input"
          type="text"
        />
      </label>

      <label className="label" htmlFor="b">
        B.
        <input
          value={optionB}
          name="b"
          id="b"
          onChange={e => {
            e.preventDefault();
            setOptionB(e.target.value);
          }}
          className="input"
          type="text"
        />
      </label>

      <label className="label" htmlFor="c">
        C.
        <input
          value={optionC}
          name="c"
          id="c"
          onChange={e => {
            e.preventDefault();
            setOptionC(e.target.value);
          }}
          className="input"
          type="text"
        />
      </label>

      <label className="label" htmlFor="d">
        D.
        <input
          value={optionD}
          name="d"
          id="d"
          onChange={e => {
            e.preventDefault();
            setOptionD(e.target.value);
          }}
          className="input"
          type="text"
        />
      </label>
      <button type="submit" className="btn" disabled={isDisabled()}>
        Submit
      </button>
    </form>
  );
}

AddPoll.propTypes = {
  handleAddPoll: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  handleAddPoll,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddPoll);
