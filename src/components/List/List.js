import React, { useState } from 'react';
import './list.css';
import birthdays from './birthdays';
import Item from './Item';

const List = () => {
	const [reactiveBirthdays, setReactiveBirthdays] = useState(birthdays);

	return (
		<div className='b-list'>
			<h3 className='title'>{reactiveBirthdays.length} birthdays today</h3>
			<main>
				{reactiveBirthdays.map(birthday => {
					return <Item key={birthday.id} birthday={birthday} />;
				})}
			</main>
			<button
				className='btn clear-btn'
				onClick={() => setReactiveBirthdays([])}
			>
				Clear All
			</button>
		</div>
	);
};

export default List;
