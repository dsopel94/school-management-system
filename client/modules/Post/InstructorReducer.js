import { ADD_INSTRUCTOR, ADD_INSTRUCTORS, DELETE_INSTRUCTOR } from './InstructorActions';

// Initial State
const initialState = { data: [] };

const InstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INSTRUCTOR :
      return {
        data: [action.instructor, ...state.data],
      };

    case ADD_INSTRUCTORS :
      return {
        data: action.instructors,
      };

    case DELETE_INSTRUCTOR :
      return {
        data: state.data.filter(instructor => instructor.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getInstructors = state => state.instructors.data;

// Get post by cuid
export const getInstructor = (state, cuid) => state.instructors.data.filter(instructor => instructor.cuid === cuid)[0];

// Export Reducer
export default InstructorReducer;
