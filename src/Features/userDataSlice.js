import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjects: [],
  topics: [],
  questions: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,

  reducers: {
    addAllData: (state, action) => {
      const data = action.payload;

      if (Array.isArray(data?.subjects)) {
        state.subjects = data.subjects;
      }

      if (Array.isArray(data?.topics)) {
        state.topics = data.topics;
      }

      if (Array.isArray(data?.questions)) {
        state.questions = data.questions;
      }
    },

    addSubs: (state, action) => {
      const data = action.payload;

      if (data && Object.keys(data).length > 0) {
        state.subjects.push(data);
      }
    },

    addTopics: (state, action) => {
      const data = action.payload;

      if (data && Object.keys(data).length > 0) {
        state.topics.push(data);
      }
    },

    addQuestion: (state, action) => {
      const data = action.payload;

      if (data && Object.keys(data).length > 0) {
        state.questions.push(data);
      }
    },

    updateQuestions: (state, action) => {
      const data = action.payload;

      if (!data?.id) return;

      state.questions = state.questions.map((question) =>
        question.id === data.id ? data : question
      );
    },
  },
});

export const {
  addAllData,
  addQuestion,
  addSubs,
  addTopics,
  updateQuestions,
} = userDataSlice.actions;

export default userDataSlice.reducer;