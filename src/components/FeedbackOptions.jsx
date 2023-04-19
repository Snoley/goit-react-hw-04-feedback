import React from 'react';
import PropTypes from 'prop-types';
import { Title, ButtonDiv, Button } from './FeedbackStyled.jsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <Title>Please leave feedback</Title>
    <ButtonDiv>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </ButtonDiv>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
