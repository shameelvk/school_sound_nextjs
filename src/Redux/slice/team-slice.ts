import {  createSlice } from "@reduxjs/toolkit";
import {  TeamMember } from "@/modal/modal"; 
import { teamMember } from "@/app/data/teamMember";

export interface TeamState {
  teamMember: TeamMember[];
}

const initialState: TeamState = {
    teamMember: teamMember,
};

const courseSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.teamMember = action.payload;
    },
  },
});

export const { addTeam } = courseSlice.actions;

export default courseSlice.reducer;
