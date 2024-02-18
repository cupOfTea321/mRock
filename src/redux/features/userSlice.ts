import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    // username: null,
    // password: null,
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (
            state,
            {payload}
        ) => {
            state.user = payload
        },
        setPage: (
            state,
            {payload}
        ) => {
            state.page = payload
        },
        clearUser: (state) => {
            state.user = null;
        },
        // setState: (state, {payload}) => {
        //     state = payload;
        // },
    },
});

// Action creators are generated for each case reducer function
export const { setUser, setPage, clearUser } = userSlice.actions;

export default userSlice.reducer;
export const getUser = (state) => state?.user?.data
export const getPage = (state) => state?.user?.page

