import{createStore} from 'redux';
import rootReducer from './Reducer/indexreducer';

export const store = createStore(rootReducer)