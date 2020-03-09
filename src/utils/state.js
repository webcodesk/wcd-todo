import { createStore } from 'redux';

const initialState = {};
const stateChangeCounters = {};
let store;

function reducer(state = initialState, action) {
  const {type: stateKey, data} = action;
  if (stateKey) {
    stateChangeCounters[stateKey] = stateChangeCounters[stateKey] > 0
      ? stateChangeCounters[stateKey] + 1
      : 1;
    return { ...state, ...{ [stateKey]: data } };
  }
  return state;
}

function getStore() {
  if (!store) {
    store = createStore(reducer);
  }
  return store;
}

/**
 * Stores the value to global state under some key
 */
export function putIntoState(key, value) {
  getStore().dispatch({type: key, data: value});
}

/**
 * Adds the listener for some key in the global state
 *
 * @param key
 * @param callback
 */
export function addStateListener (key, callback) {
  if (key && callback) {
    let listenerChangeCounter = 0;
    getStore().subscribe(() => {
      const stateChangeCounter = stateChangeCounters[key];
      if (stateChangeCounter > listenerChangeCounter) {
        const newState = getStore().getState();
        callback(newState[key]);
      }
    });
  }
}

/**
 * Gets the value under specified key from the global state.
 *
 */
export function getFromState(key) {
  const newState = getStore().getState();
  return newState[key];
}
