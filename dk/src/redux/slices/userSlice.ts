import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: any = {
    accessToken:""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
    //   console.log(state.value);
      console.log(action.payload);

      state.accessToken = action.payload;
    },

    removeUser: (state, action: PayloadAction<any>) => {},
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
