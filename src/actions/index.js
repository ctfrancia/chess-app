export const getTournamentsAsync = () => ({
  type: 'GET_TOURNAMENTS_REQUEST',
});

export const setTournamentWebsite = (value) => ({
  type: 'SET_TOURNAMENT_WEBSITE',
  website: value,
});
export const setTournamentUrl= (value) => ({
  type: 'SET_TOURNAMENT_URL',
  url: value,
});
