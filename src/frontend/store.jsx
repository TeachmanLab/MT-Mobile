import { createAsyncThunk, combineReducers, createSlice, configureStore } from '@reduxjs/toolkit';
import api from './apiServices.jsx';

const initialState = {
  error: false,
  errorMessage: '',
  isLoggedIn: false,
  isLoading: false,
  token: '',
  formIndex: -1,
  questionIndex: -1,
  name: '',
  forms: [],
};

export const login = createAsyncThunk('users/login', async (loginData, { rejectWithValue }) => {
  const response = await api.login(loginData);
  console.log('Login response; ' + response);
  if (response.code === 'success') {
    return response;
  }
  return rejectWithValue('There was an error logging you in, please try again');
});

export const getForms = createAsyncThunk('users/getForms', async (_, { getState, rejectWithValue }) => {
  const { token } = getState().userReducer;
  console.log('user token: ' + token);
  const response = await api.getForms(token);
  if (response.code === 'success') {
    return response;
  }
  return rejectWithValue('There was an error fetching forms, please try again');
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      console.log(state.token);
      state.name = action.payload.name;
      state.formIndex = action.payload.formIndex;
      state.questionIndex = action.payload.questionIndex;
      state.isLoggedIn = true;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
    [getForms.fulfilled]: (state, action) => {
      console.log('get forms fulfilled');
      console.log(action.payload);
      state.isLoading = false;
      state.forms = action.payload.forms;
    },
    [getForms.pending]: (state) => {
      state.isLoading = true;
    },
    [getForms.rejected]: (state, action) => {
      console.log('get forms rejected');
      console.log(action.payload);
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;

const rootReducer = combineReducers({
  userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
