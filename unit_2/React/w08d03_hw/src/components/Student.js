import React from 'react';

function Student(props) {
  // Use props to access the student object
  const { student } = props;

  // Display the student's name, bio, and scores
  return (
    <div className="Student">
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      <ul>
        {student.scores.map(score => (
          <li key={score.date}>Date: {score.date}, Score: {score.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Student;