import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest';
import { ActionTypes } from './actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request:RegisterRequestInterface }>()
);