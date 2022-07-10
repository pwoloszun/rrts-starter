import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from 'src/app/hooks';

import {
  actions,
  thunks,
  selectors
} from './counterSlice';

import styles from './Counter.module.css';

export function Counter(): React.ReactElement {
  const count = useAppSelector(selectors.selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(actions.increment())}
        >
          +
        </button>

        <h2 aria-label="Current Value" className={styles.value}>{count}</h2>

        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(actions.decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(actions.incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(thunks.incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
