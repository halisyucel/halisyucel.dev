import React from 'react';
import Paper from './paper';

const NavBar = () => {
	return (
		<Paper className={'w-[320px] mr-10'}>
			<nav>
				<div
					className={'w-full h-[280px] rounded-2xl bg-cover bg-no-repeat bg-center'}
					style={{
						backgroundImage: 'url(/pp.jpeg)',
					}}
				/>
				<h1>Halis Yücel</h1>
			</nav>
		</Paper>
	);
};

export default NavBar;
