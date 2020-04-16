import React from 'react';
import Nav from '../Nav/Nav';
const appContainer = {
	display: 'flex',
	width: '100%',
}

export default function App() {
  return (
    <div style={appContainer}>
			<Nav />
    </div>
  );
}

