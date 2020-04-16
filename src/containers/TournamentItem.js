import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const tournamentStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}

let TournamentItem = ({ tournament }) => {
	console.log('tournament', tournament);

	return (
		tournament ?
		tournament.map((single, i) => (
			<article style={tournamentStyle} key={i}>
				<div>
					<h1>{single.title}</h1>
					<img style={imgStyle} src={single.urlToImage} alt="" />
					<h4>{single.description}</h4>
					<a href={single.url} target="_blank" rel="noopener noreferrer" >READ MORE</a>
				</div>
			</article>
		))
		:
		null
	)
}

const mapStateToProps = (state) => ({
  tournament: state.tournaments,
});

TournamentItem = connect(mapStateToProps, null)(TournamentItem);
export default TournamentItem;
