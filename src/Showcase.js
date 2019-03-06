import React from 'react';
import styled from '@emotion/styled';

const ShowcaseContainer = styled('div')`
	margin: 2em;
	padding: 0.8em 6em 0.8em 2em;
`;

class ShowCase extends React.Component {
	render() {
		return (
			<ShowcaseContainer>
				<div>showcase</div>
			</ShowcaseContainer>
		);
	}
}

export default ShowCase;
