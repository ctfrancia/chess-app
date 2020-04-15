import React from 'react';
// import './App.css';
import Nav from './Nav';
const appContainer = {
	display: 'flex',
	width: '100%',
}

function App() {
  return (
    <div style={appContainer}>
			<Nav />
    </div>
  );
}

export default App;
