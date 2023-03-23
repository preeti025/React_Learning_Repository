import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    login: false
}
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setLogin: (state) =>{
            state.login = true;
        },
        setLogout: (state) =>{
            state.login= false;
        }
    }
});

export default authSlice.reducer;
export const {setLogin, setLogout} = authSlice.actions; 
