import React from 'react'

const StudentList = props => {
  const { students, selectStudent } = props

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Grades</th>
          </tr>

          {/* map through students array to display full name as a row in our table */}
          {/* grabbed this mapping function from our Main.js file from cycle-1 */}
          {students.map(student => {
            return (
              <tr key={student.id}>
                <td>{student.fullName}</td>

                {/* set the selected student on local state when click on the button */}
                <td>
                  <button onClick={() => selectStudent(student)}>
                    Click for details
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
