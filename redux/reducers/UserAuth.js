import { createSlice } from '@reduxjs/toolkit'

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: {
        name: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
        },
        removeUser: (state, action) => {
            state.name = null;
        }
    }
})
// case under reducers becomes an action 
export const { setUser, removeUser } = userAuthSlice.actions
export default userAuthSlice.reducer 