export const getTournamentsAsync = () => ({
  type: 'GET_TOURNAMENTS_REQUEST',
});

export const setNewTournamentField = (payload) => ({
    type: 'SET_NEW_TOURNAMENT_FIELD',
    field: payload.field,
    value: payload.value,
});
