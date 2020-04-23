import { handleResponse, handleError } from "./apiResponse";
const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

export function getCourses() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCourseById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(courses => {
        if (courses.length !== 1) throw new Error("Course not found: " + id);
        return courses[0];
      });
    })
    .catch(handleError);
}

export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...course
    }),
    success: resp => console.log(resp),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
