import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const DisplayHeading = ({ text }) => {
  return <h2>{text}</h2>;
};

const Statistics = ({ feedback }) => {
  const all = feedback.good + feedback.neutral + feedback.bad + 0;
  const avg = (feedback.good - feedback.bad - 0) / all;
  const positive = (feedback.good * 100) / all;
  // Conditional rendering
  if (all === 0) {
    return <p>No feedback has been given</p>;
  }

  return (
    <table>
      <tbody>
        <Statistic text="good " value={feedback.good} />
        <Statistic text="neutral " value={feedback.neutral} />
        <Statistic text="bad " value={feedback.bad} />
        <Statistic text="all " value={all} />
        <Statistic text="average " value={avg} />
        <Statistic text="positive " value={positive + "%"} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGoodClick = () => {
    setFeedback({ ...feedback, good: feedback.good + 1 });
  };
  const handleNeutralClick = () => {
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  };
  const handleBadClick = () => {
    setFeedback({ ...feedback, bad: feedback.bad + 1 });
  };

  return (
    <>
      <DisplayHeading text="give feedback" />
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <DisplayHeading text="statistics" />
      <Statistics feedback={feedback} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
