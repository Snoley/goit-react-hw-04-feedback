import React from 'react';
import PropTypes from 'prop-types';
import { Title, Li } from './StatsStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <Title>Statistics</Title>
    {total > 0 ? (
      <ul>
        <Li>
          Good: <span>{good}</span>
        </Li>
        <Li>
          Neutral: <span>{neutral}</span>
        </Li>
        <Li>
          Bad: <span>{bad}</span>
        </Li>
        <Li>
          Total: <span>{total}</span>
        </Li>
        <Li>
          Positive feedback:{' '}
          <span>{total > 0 ? `${positivePercentage}%` : '0%'}</span>
        </Li>
      </ul>
    ) : (
      <p>No feedback given</p>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
