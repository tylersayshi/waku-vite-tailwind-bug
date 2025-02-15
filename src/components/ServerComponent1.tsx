// "use client"

import React from 'react';
import { ServerComponent2 } from './ServerComponent2';

export const ServerComponent1: React.FC = () => {

	return (
		<>
			<h1>--- ServerComponent1 runs on {typeof window !== 'undefined' ? 'Client' : 'Server'} ---</h1>
			<h2 className={'bg-green-100'}>ServerComponent1 new color</h2>
			<h2 className={'bg-green-200'}>ServerComponent1 new color</h2>
			<ServerComponent2/>
		</>
	);
};
