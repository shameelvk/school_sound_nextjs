import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { course } from "@/modal/modal"; 
import { courseData } from "@/app/data/courseData";

export interface CourseState {
  courses: course[];
}

const initialState: CourseState = {
  courses: courseData,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { addCourse } = courseSlice.actions;

export default courseSlice.reducer;
