import { Action, createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from "./actions";

// initial state
const initialState:AuthStateInterface = {
  isSubmitting:false
}

const authReducer = createReducer(initialState,
  //on function from ngrx when register action happens,get init state and modify 
  on(
      registerAction,
      (state): AuthStateInterface => ({
    // merge states
    ...state,
    isSubmitting: true
  })
 )
)
   
// for ahead of time compilation, code in production

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state,action)
}



