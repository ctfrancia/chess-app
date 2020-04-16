import React from 'react';
import { useDispatch } from 'react-redux';
import { setTournamentWebsite, setTournamentUrl } from '../../../actions';
import Datepicker from 'react-datetime'

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
      <Datepicker />
    </div>
  )
}
export default OnlineForm;