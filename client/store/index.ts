import { reducer, RootState } from './reducers/index';
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import thunk, { ThunkDispatch } from 'redux-thunk';


// create a makeStore function
export const makeStore: MakeStore<RootState>
    = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>