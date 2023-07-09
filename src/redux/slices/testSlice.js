import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: {
    count: 0,
    popularNews: [],
    latestNews: [],
    popularNewsError: '',
    latestNewsError: '',
    isLoading: false,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    getLatestNews(state) {
      state.isLoading = true;
    },
    setLatestNews(state, action) {
      state.latestNews.push(...action.payload);
      state.isLoading = false;
    },
    setLatestNewsError(state, action) {
      state.latestNewsError = action.payload;
      state.isLoading = false;
    },
    getPopularNews(state) {
      state.isLoading = true;
    },
    setPopularNews(state, action) {
      state.popularNews.push(...action.payload);
      state.isLoading = false;
    },
    setPopularNewsError(state, action) {
      state.popularNewsError = action.payload;
      state.isLoading = false;
    },
    getNews(state) {
      state.isLoading = true;
    },
  },
});

export const {
  increment,
  decrement,
  setLatestNews,
  getLatestNews,
  getPopularNews,
  setPopularNews,
  getNews,
  setLatestNewsError,
  setPopularNewsError,
} = testSlice.actions;

export default testSlice.reducer;
