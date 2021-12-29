import React from 'react';

// Comps
import Borgverse from '../components/BotborgsPage';

export default function Home() {

	React.useEffect(() => {
	  window.scrollTo(0, 0)
	});
	
	return (
		<React.Fragment>
			<Borgverse />
		</React.Fragment>
	);
};