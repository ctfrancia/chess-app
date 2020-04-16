import React from 'react';
import AddressForm from './AddressForm';
import OnlineForm from './OnlineForm';

export default function Location({ isOnline }) {
  if (isOnline === true) return <OnlineForm />;
  else return <AddressForm />;
}