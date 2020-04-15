const reducer = (state = {}, action) => {
  switch (action.type) {
			/*
     case 'GET_TOUNRMANETS_REQUEST':
        return { ...state, loading: true };

    case 'GET_TOURNAMENTS_SUCCESS':
      return { ...state, tournaments: action.json, loading: false }
			*/
     default:
        return state;
   }
};
export default reducer;
