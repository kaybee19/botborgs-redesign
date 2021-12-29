import React from 'react';

// Comps
import Botborgs from '../components/Botborgs';
import Borgverse from '../components/Borgverse';
import Offering from '../components/Offering';
import Milestones from '../components/Milestones';
import FAQ from '../components/FAQ';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Metaverse from '../components/Metaverse';

export default function Home() {

	React.useEffect(() => {
	  window.scrollTo(0, 0)
	});
	
	return (
		<React.Fragment>
			<Botborgs />
			<Borgverse />
			<Offering />
			<Milestones />
			<FAQ />
			<Team />
			<Clients />
			<Metaverse />
		</React.Fragment>
	);
};