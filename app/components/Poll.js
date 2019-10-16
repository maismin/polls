import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPercentage } from '../utils/helpers';
import { handleAddAnswer } from '../actions/answers';

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];

function Poll(props) {
  const [answered, setAnswered] = useState(false);
  const { poll, vote, authedUser, authorAvatar, handleAddAnswer } = props;

  const handleAnswer = answer => {
    setAnswered(true);
    handleAddAnswer({
      authedUser,
      answer,
      id: poll.id,
    });
  };

  if (poll === null) {
    return <p>This poll does not exist</p>;
  }

  const totalVotes = getVoteKeys().reduce(
    (total, key) => total + poll[key].length,
    0,
  );

  return (
    <div className="poll-container">
      <h1 className="question">{poll.question}</h1>
      <div className="poll-author">
        By
        <img src={authorAvatar} alt="Author's avatar" />
      </div>
      <ul>
        {['aText', 'bText', 'cText', 'dText'].map(key => {
          const count = poll[key[0] + 'Votes'].length;
          return (
            <li
              key={key}
              className={`option ${vote === key[0] ? 'chosen' : ''}`}
              onClick={() => {
                if (vote === null && !answered) {
                  handleAnswer(key[0]);
                }
              }}
            >
              {vote === null ? (
                poll[key]
              ) : (
                <div className="result">
                  <span>{poll[key]}</span>
                  <span>{`${getPercentage(
                    count,
                    totalVotes,
                  )}% (${count})`}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Poll.propTypes = {
  poll: PropTypes.object.isRequired,
  vote: PropTypes.string,
  authedUser: PropTypes.string,
  authorAvatar: PropTypes.string.isRequired,
  handleAddAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ authedUser, polls, users }, { match }) => {
  const { id } = match.params;
  const poll = polls[id];

  if (!poll) {
    return {
      poll: null,
    };
  }

  const vote = getVoteKeys().reduce((vote, key) => {
    if (vote !== null) {
      return vote[0];
    }

    return poll[key].includes(authedUser) ? key : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL,
  };
};

const mapDispatchToProps = {
  handleAddAnswer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Poll);
