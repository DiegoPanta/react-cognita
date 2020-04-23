import React from "react";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <div className="field">
          <input
            id="name"
            type="text"
            name="name"
            onChange={props.onChange}
            className="form-control"
            value={props.course.name}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <div className="field">
          <textarea
            id="description"
            type="text"
            name="description"
            onChange={props.onChange}
            className="form-control"
            value={props.course.description}
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="credit">Credit</label>
        <div className="field">
          <input
            type="text"
            id="credit"
            name="credit"
            onChange={props.onChange}
            className="form-control"
            value={props.course.credit}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="frequency">Frequency</label>
        <div className="field">
          <input
            type="text"
            id="frequency"
            name="frequency"
            onChange={props.onChange}
            className="form-control"
            value={props.course.frequency}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="shift">Shift</label>
        <div className="field">
          <input
            type="text"
            id="shift"
            name="shift"
            onChange={props.onChange}
            className="form-control"
            value={props.course.shift}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="hour">Hour</label>
        <div className="field">
          <input
            type="text"
            id="hour"
            name="hour"
            onChange={props.onChange}
            className="form-control"
            value={props.course.hour}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="place">Place</label>
        <div className="field">
          <input
            type="text"
            id="place"
            name="place"
            onChange={props.onChange}
            className="form-control"
            value={props.course.place}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="startDate">StartDate</label>
        <div className="field">
          <input
            type="date"
            id="startDate"
            name="startDate"
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
            onChange={props.onChange}
            className="form-control"
            value={'props.course.startDate'}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <div className="field">
          <input
            type="text"
            id="amount"
            name="amount"
            onChange={props.onChange}
            className="form-control"
            value={props.course.amount}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="advantage">Advantage</label>
        <div className="field">
          <input
            type="text"
            id="advantage"
            name="advantage"
            onChange={props.onChange}
            className="form-control"
            value={props.course.advantage}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  credit: PropTypes.number,
  frequency: PropTypes.string,
  shift: PropTypes.string,
  hour: PropTypes.string,
  place: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  amount: PropTypes.number,
  advantage: PropTypes.number,
};

export default CourseForm;
