
const BookingServisesItem = ({ data }) => {
	const { title, price } = data;
	return (
		<li className='services__item service'>
			<p className='service__title'>{title}</p>
			<p className='service__price'>{`$${price}`}</p>
		</li>
	)
}

export default BookingServisesItem;