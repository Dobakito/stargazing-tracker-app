import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { messierReducer } from '../Reducers/messiersReducer';
import { observationReducer } from '../Reducers/observationsReducer';
import { userReducer } from '../Reducers/userReducer';

const rootReducer = combineReducers({
  messierReducer,
  userReducer,
  observationReducer,
});
const persistConfig = {
  key: 'root',
  storage: storage,
};
const pReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
