import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TournamentItem from '../../containers/TournamentItem';
import { getTournamentsAsync } from '../../actions';

let Home = ({ getTournamentsAsync }) => {

	useEffect(() => {
		getTournamentsAsync();
	}, [getTournamentsAsync]);
	return(
		<div>
			<h2> home </h2>
			<TournamentItem />
		</div>
	)
}

const mapDispatchToProps = {
	getTournamentsAsync: getTournamentsAsync,
}

Home = connect(null, mapDispatchToProps)(Home);

export default Home;
