import React from 'react';
import { useDispatch } from 'react-redux';
import { setNewTournamentField } from '../../../actions';
// import Datepicker from '../../DatePicker/Datepicker';

const OnlineForm = () => {
  const dispatch = useDispatch();
  function updateState(field, value) {
    dispatch(setNewTournamentField({ field, value }));
  }
  return (
    <div>
      <h2>online</h2>
      <label> website: </label>
      <input name='website' type='text' onChange={e => updateState('website', e.target.value)} />

      <label> URL: </label>
      <input name='url' type='text' onChange={e => updateState('url', e.target.value)} />

      <label> Date: </label>
      {/*<Datepicker />*/}
    </div>
  )
}
export default OnlineForm;