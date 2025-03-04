import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  objectId: "",
  email: "",
  firstName: "",
  lastName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<User>) => {
      state.objectId = action.payload.objectId;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logoutAction: (state) => {
      state.objectId = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
