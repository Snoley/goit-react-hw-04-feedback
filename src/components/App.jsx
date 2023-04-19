import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import { GlobalStyle } from './GlobalStyles';
import { String } from './AppStyle';

export function App({ title }) {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback.good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section>
        <GlobalStyle />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section>
        {total ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <String>Please leave feedback</String>
        )}
      </Section>
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

 
