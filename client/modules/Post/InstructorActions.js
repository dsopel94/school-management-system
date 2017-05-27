import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_INSTRUCTOR = 'ADD_INSTRUCTOR';
export const ADD_INSTRUCTORS = 'ADD_INSTRUCTORS';
export const DELETE_INSTRUCTOR = 'DELETE_INSTRUCTOR';

// Export Actions
export function addInstructor(instructor) {
  return {
    type: ADD_INSTRUCTOR,
    instructor,
  };
}

export function addInstructorRequest(instructor) {
  return (dispatch) => {
    return callApi('instructors', 'instructor', {
      instructor: {
        fullName: instructor.fullName,
        userName: instructor.userName,
        password: instructor.password,
      },
    }).then(res => dispatch(addInstructor(res.instructor)));
  };
}

export function addInstructors(instructors) {
  return {
    type: ADD_INSTRUCTORS,
    instructors,
  };
}

export function fetchINSTRUCTORs() {
  return (dispatch) => {
    return callApi('INSTRUCTORs').then(res => {
      dispatch(addInstructors(res.instructors));
    });
  };
}

export function fetchInstructor(cuid) {
  return (dispatch) => {
    return callApi(`INSTRUCTORs/${cuid}`).then(res => dispatch(addInstructor(res.instructor)));
  };
}

export function deleteInstructor(cuid) {
  return {
    type: DELETE_INSTRUCTOR,
    cuid,
  };
}

export function deleteINSTRUCTORRequest(cuid) {
  return (dispatch) => {
    return callApi(`instructors/${cuid}`, 'delete').then(() => dispatch(deleteInstructor(cuid)));
  };
}
