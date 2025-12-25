'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const history = [];
  let currentState = state;

  for (const action of actions) {
    let tempState;

    switch (action.type) {
      case 'clear':
        tempState = {};
        break;

      case 'addProperties':
        tempState = { ...currentState, ...action.extraData };
        break;

      case 'removeProperties':
        tempState = { ...currentState };

        for (const key of action.keysToRemove) {
          delete tempState[key];
        }
        break;

      default:
        tempState = { ...currentState };
    }

    history.push(tempState);
    currentState = tempState;
  }

  return history;
}

module.exports = transformStateWithClones;
