import {authReducer} from "../../m2-features/f1-auth/authReducer";
import {profileReducer} from "../../m2-features/f2-profile/profileReducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({

})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
