import React from 'react';

export default function ErrorMessage ({ error }) {
  if (error) {
    switch (error.type) {
      case 'tournamentName':
        return <p>Tournament name is required</p>;
      case 'required':
        return <p>This is required</p>;
      case 'minLength':
        return <p>Your last name need minimum 2 characters</p>;
      case 'pattern':
        return <p>Enter a valid email address</p>;
      case 'min':
        return <p>Minimum age is 18</p>;
      case 'validate':
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }
  return null;
}