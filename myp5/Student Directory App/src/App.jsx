import React, { useState } from 'react';

let StudentDirectory = () => {
  let [students] = useState([
    { id: 1, name: 'meet', course: 'ReactJS' },
    { id: 2, name: 'maan', course: 'NodeJS' },
    { id: 3, name: 'neel', course: 'ReactJS' },
    { id: 4, name: 'mohit', course: 'Angular' },
    { id: 5, name: 'yagnik', course: 'ReactJS' },
  ]);

  let [selectedCourse, setSelectedCourse] = useState('All');
  let [studentId, setStudentId] = useState('');
  let [foundStudent, setFoundStudent] = useState(null);

  let handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  let handleIdChange = (e) => {
    setStudentId(e.target.value);
  };

  let findStudentById = () => {
    let student = students.find((s) => s.id === parseInt(studentId));
    setFoundStudent(student);
  };

  let filteredStudents = selectedCourse === 'All'
    ? students
    : students.filter((student) => student.course === selectedCourse);

  return (
    <div>
      <h1>Student Directory</h1>

      <div>
        <label htmlFor="course">Filter by Course: </label>
        <select id="course" value={selectedCourse} onChange={handleCourseChange}>
          <option value="All">All</option>
          <option value="ReactJS">ReactJS</option>
          <option value="NodeJS">NodeJS</option>
          <option value="Angular">Angular</option>
        </select>
      </div>

      <h2>Students List</h2>
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>

      <div>
        <h2>Find Student by ID</h2>
        <input
          type="number"
          value={studentId}
          onChange={handleIdChange}
          placeholder="Enter Student ID"
        />
        <button onClick={findStudentById}> Find Student </button>
      </div>

      {foundStudent && (
        <div>
          <h3>Student Details</h3>
          <p>ID: {foundStudent.id}</p>
          <p>Name: {foundStudent.name}</p>
          <p>Course: {foundStudent.course}</p>
        </div>
      )}
    </div>
  );
};

export default StudentDirectory;