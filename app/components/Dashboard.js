import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Dashboard({ answered, unanswered }) {
  const [showAnswered, setShowAnswered] = useState(false);

  const list = showAnswered ? answered : unanswered;

  return (
    <div>
      <div className="dashboard-toggle">
        <button
          type="button"
          style={{ textDecoration: !showAnswered ? 'underline' : null }}
          onClick={() => setShowAnswered(false)}
        >
          Unanswered
        </button>
        <span>|</span>
        <button
          type="button"
          style={{ textDecoration: showAnswered ? 'underline' : null }}
          onClick={() => setShowAnswered(true)}
        >
          Answered
        </button>
      </div>
      <ul className="dashboard-list">
        {list.map(poll => (
          <li key={poll.id}>{poll.question}</li>
        ))}
      </ul>
    </div>
  );
}

Dashboard.propTypes = {
  answered: PropTypes.arrayOf(PropTypes.object).isRequired,
  unanswered: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ authedUser, polls, users }) => {
  const answers = users[authedUser] ? users[authedUser].answers : [];

  const answered = answers
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answered,
    unanswered,
  };
};

export default connect(mapStateToProps)(Dashboard);
