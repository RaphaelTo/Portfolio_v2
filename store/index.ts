import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerMusic from '@/store/reducer/ReducerMusic';
import reducerProject from '@/store/reducer/ReducerProject';
import reducerSkill from '@/store/reducer/ReducerSkill';
import reducerMail from '@/store/reducer/ReducerMail';

const middleware: any[] = [];

const combine = combineReducers({
  reducerMusic,
  reducerProject,
  reducerSkill,
  reducerMail
})

export const store = createStore(
  combine,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);