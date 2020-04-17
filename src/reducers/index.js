const reducer = (state = {}, action) => {
  switch (action.type) {
     case 'GET_TOURNAMENTS_REQUEST':
        return { ...state, loading: true };

    case 'GET_TOURNAMENTS_SUCCESS':
      return { ...state, tournaments: action.json, loading: false }

      /*
    case 'SET_TOURNAMENT_WEBSITE':
      console.log('action', action);
      return {
        ...state,
        newTournament: {
          ...state.newTournament,
          website: action.website
        }
      }

    case 'SET_TOURNAMENT_URL':
      return {
        ...state,
          newTournament: {
          ...state.newTournament,
          url: action.url
        }
      }
       */
    case 'SET_NEW_TOURNAMENT_FIELD':
      console.log('reducer', action);
      return {
        ...state,
        newTournament: {
          ...state.newTournament,
          [action.field]: action.value
        }
      }
     default:
        return state;
   }
};
export default reducer;
