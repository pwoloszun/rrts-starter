import counterReducer from './counterSlice';
import * as selectors from './counterSelectors';

export type { CounterState } from './counterSlice';

export {
  actions,
  thunks,
  counterSliceId,
} from './counterSlice';

export {
  selectors,
}

export default counterReducer;
