import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
} from '@ngrx/store';
import { AppState } from '../app.state';
import { counterReducer } from './store/counter.reducer';

export const NGRX_TUTORIAL_FEATURE_NAME = 'ngrx_tutorial';

export interface CountState {
  counter: number;
}

export interface NgrxTutorialState extends AppState {
  counter: CountState;
}

export const reducers: ActionReducerMap<NgrxTutorialState> = {
  counter: counterReducer,
};

export const selectCounterState =
  createFeatureSelector<NgrxTutorialState, CountState>('counter');
