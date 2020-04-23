import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Description</th>
          <th>Credit</th>
          <th>Frequency</th>
          <th>Shift</th>
          <th>Hour</th>
          <th>Place</th>
          <th>StartDate</th>
          <th>Amount</th>
          <th>Advantage</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteCourse(course.id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/course/" + course.id}>
                  <button type="button" className="btn btn-outline-secondary">
                      Edit
                    </button>
                </Link>
              </td>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.credit}</td>
              <td>{course.frequency}</td>
              <td>{course.shift}</td>
              <td>{course.hour}</td>
              <td>{course.place}</td>
              <td>{new Date(course.startDate).toLocaleDateString()}</td>
              <td>{course.amount}</td>
              <td>{course.advantage}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
      frequency: PropTypes.string.isRequired,
      shift: PropTypes.string.isRequired,
      hour: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      advantage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CourseList;
