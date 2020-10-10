import React from 'react'
import axios from 'axios'

import StudentList from './StudentList'
import SingleStudent from './SingleStudent'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      selectedStudent: {},
    }

    // remember to bind your functions so they can be refereced using the "this" keyword
    this.selectStudent = this.selectStudent.bind(this)
  }

  // set inital local state
  componentDidMount() {
    this.getStudents()
  }

  // fetch all students data with an axios call to our student route
  async getStudents() {
    try {
      const allStudents = await axios.get('/student')
      this.setState({ students: allStudents.data })
    } catch (err) {
      console.error(err)
    }
  }

  // set local state with the selected student (to render using SingleStudent component)
  selectStudent(student) {
    return this.setState({ selectedStudent: student })
  }

  render() {
    const students = this.state.students
    const selectedStudent = this.state.selectedStudent
    return (
      <div>
        <h1>Students</h1>

        {/* render StudentList component passing in students and selectStudent function as props */}
        <StudentList students={students} selectStudent={this.selectStudent} />

        {/* ternary expression so that we don't try to render SingleStudent before we have our selected student on state */}
        {selectedStudent.id ? <SingleStudent student={selectedStudent} /> : ''}
      </div>
    )
  }
}
