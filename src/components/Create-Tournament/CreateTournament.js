import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from './FormErrors';
import Location from './Location/Location';

export default function CreateTournament() {
  const [isOnline, setOnline ] = useState(false);
  const toggleOnline = () => setOnline(!isOnline)
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = (data) => {
    console.log('data from submit', data);
  }
  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h2>Create Tournament:</h2>
      <label>Tournament Name</label>
      <input name='tournamentName' ref={register({required: true})} />
      <ErrorMessage error={errors.tournamentName} />

      <label>is online?</label>
      <input type='checkbox' onClick={toggleOnline}/>
      <Location isOnline={isOnline} />
    </form>
  )
}

