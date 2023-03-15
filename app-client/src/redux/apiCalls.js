import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await

    dispatch(loginSuccess())
    }
    catch(error){
        dispatch(loginFailure())
    }
}