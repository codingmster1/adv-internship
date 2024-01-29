import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginModal: false,
    signupModal: false,
    sidebarModal: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openLoginModal: (state) => {
            state.loginModal = true;
        },
        closeLoginModal: (state) => {
            state.loginModal = false;
        },
        openSignupModal: (state) => {
            state.signupModal = true;
        },
        closeSignupModal: (state) => {
            state.signupModal = false;
        },
        openSidebarModal: (state) => {
            state.sidebarModal = true;
        },
        closeSidebarModal: (state) => {
            state.sidebarModal = false;
        },
    },
});

export const {
    openLoginModal,
    closeLoginModal,
    openSignupModal,
    closeSignupModal,
    openSidebarModal,
    closeSidebarModal,
} = modalSlice.actions;

export default modalSlice.reducer;