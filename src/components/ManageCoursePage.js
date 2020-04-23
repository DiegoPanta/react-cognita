/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    name: "",
    description: "",
    credit: "",
    frequency: "",
    shift: "",
    hour: "",
    place: "",
    startDate: "",
    amount: "",
    advantage: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const id = props.match.params.id;
    
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (id){
      setCourse(courseStore.getCourseById(id));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.id]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!course.name) _errors.name = "Name is Required";
    if (!course.description) _errors.description = "Description is required.";
    if (!course.credit) _errors.credit = "Credit is required.";
    if (!course.place) _errors.place = "Place is required.";
    if (!course.amount) _errors.amount = "Amount is required.";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
