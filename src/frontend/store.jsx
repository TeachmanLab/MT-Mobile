import { createAsyncThunk, combineReducers, createSlice, configureStore } from '@reduxjs/toolkit';
import api from './apiServices.jsx';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  token: '',
  error: false,
  errorMessage: '',
  formIndex: -1,
  questionIndex: -1,
  forms: [],
};

export const login = createAsyncThunk('users/login', async (loginData, { rejectWithValue }) => {
  const response = await api.login(loginData);
  console.log(response);
  if (response.code === 'success') {
    return response;
  }
  return rejectWithValue('There was an error logging you in, please try again');
});

const progress = createAsyncThunk('users/progress', async (token) => {
  const response = await api.progress(token);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.formindex = action.payload.formindex;
      state.questionindex = action.payload.questionindex;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      console.log(action);
      state.errorMessage = action.payload;
    },
    [progress.fulfilled]: (state, action) => {
      state.token = action.payload.token;
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
