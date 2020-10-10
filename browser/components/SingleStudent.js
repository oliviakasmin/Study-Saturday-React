import React from 'react'

const SingleStudent = props => {
  const { student } = props
  const tests = student.tests

  // helper function
  const avgGrade = tests => {
    return Math.round(
      tests.map(test => test.grade).reduce((x, y) => x + y) / tests.length
    )
  }

  return (
    <div>
      <h2>Student Details</h2>
      <h3>{student.fullName}</h3>
      <h4>Average grade: {avgGrade(tests)}% </h4>
      <table>
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          {tests.map(test => {
            return (
              <tr key={test.id}>
                <td>{test.subject}</td>
                <td>{test.grade}%</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default SingleStudent
