import { 
  createStore,
  applyMiddleware
} from 'redux';


const reducer = (state = {}, action) => {
  return action;
};

const logger = store => next => action => {
  console.log('start middleware action', action);
  console.log('start middleware state', store.getState());
  next(action);
  console.log('end middleware action', action);
  console.log('end middleware state', store.getState());
};

const store = createStore(
  reducer,
  applyMiddleware(
    logger
  )
);

store.dispatch({ type: 'hi' });
