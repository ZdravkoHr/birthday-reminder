import React from 'react';

const Item = props => {
	const { img, name, age } = props.birthday;
	return (
		<div className='item'>
			<div className='img-wrapper'>
				<img src={img} alt={name} />
			</div>
			<div className='info'>
				<p className='name'>{name}</p>
				<p className='age'>{age}</p>
			</div>
		</div>
	);
};

export default Item;
