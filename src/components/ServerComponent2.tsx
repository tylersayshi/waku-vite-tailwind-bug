// "use client"

import React from 'react';

export const ServerComponent2: React.FC = () => {

	return (
		<>
			<h1>--- ServerComponent2 runs on {typeof window !== 'undefined' ? 'Client' : 'Server'} ---</h1>
			<h2 className={'bg-green-200'}>ServerComponent2 used color</h2>
			<h2 className={'bg-green-300'}>ServerComponent2 new color</h2>
		</>
	);
};
