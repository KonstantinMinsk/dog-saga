// action types
// const API_CALL_REQUEST = "API_CALL_REQUEST";
// const API_CALL_SUCCESS = "API_CALL_SUCCESS";
// const API_CALL_FAILURE = "API_CALL_FAILURE";

import { createActions, handleActions } from "redux-actions";

// action types
const actions = createActions({
	apiCallRequest: undefined,
	apiCallSuccess: undefined,
	apiCallFailure: undefined,
});

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case API_CALL_REQUEST:
//       return { ...state, fetching: true, error: null };
//     case API_CALL_SUCCESS:
//       return { ...state, fetching: false, dog: action.dog };
//     case API_CALL_FAILURE:
//       return { ...state, fetching: false, dog: null, error: action.error };
//     default:
//       return state;
//   }
// }

const reducer = handleActions(
	new Map([

		[
			actions.apiCallRequest,
			(state) => (
				{ ...state, fetching: true, error: null	}
			),
		],

		[
			actions.apiCallSuccess,
			(state, action) => (
				{ ...state, fetching: false, dog: action.payload, error: null }
			),
		],

		[
			actions.apiCallFailure,
			(state, action) => (
				{ ...state, fetching: false, dog: null, error: action.payload }
			),
		],

	]),

	initialState,
);

export { actions, reducer };