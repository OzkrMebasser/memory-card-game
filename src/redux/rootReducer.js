// rootReducer.js
import { combineReducers } from 'redux';
import themeReducer from './reducers/themeReducer';
import languageReducer from './reducers/languageReducer';


const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,

});

export default rootReducer;