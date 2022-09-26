import React from 'react';

const ChartsHeader = ({ category, title }) => (
	<div className='mb-10'>
		<p className='text-gray-400 dark:text-gray-400'>{category}</p>
		<p className='dark:text-gray-200 text-3xl font-extrabold tracking-tight text-slate-900'>
			{title}
		</p>
	</div>
);

export default ChartsHeader;
