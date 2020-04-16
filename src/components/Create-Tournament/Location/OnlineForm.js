import React from 'react';
import { useDispatch } from 'react-redux';
import { setTournamentWebsite, setTournamentUrl } from '../../../actions';

const OnlineForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>online</h2>
      <label> website: </label>
      <input type='text' onChange={event => dispatch(setTournamentWebsite((event.target.value)))} />

      <label> URL: </label>
      <input type='text' onChange={event => dispatch(setTournamentUrl(event.target.value))}/>

      <label> Date: </label>
    </div>
  )
}
export default OnlineForm;