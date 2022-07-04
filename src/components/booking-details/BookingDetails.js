import { useState } from 'react';
import './BookingDetails.css';

import BookingServisesItem from '../booking-servises-item/BookingServisesItem';

const BookingDetails = ({ services }) => {
	let amountNum = 0
	const [num, setNum] = useState(amountNum);

	const onInc = () => {
		setNum(num + 1)
	}
	const onDec = () => {
		if (num > 0) setNum(num - 1)
	}

	const servicesItems = services.map(item => {
		return (
			<BookingServisesItem data={item} key={item.id} />
		)
	})

	return (
		<section className='booking-details'>
			<div className="booking-details__container">
				<h3 className='booking-details__title'>Booking Details</h3>
				<form action="#" className='booking-details__form' type="submit">
					<div className="form">
						<div className='form__date'>
							<div className='form__item'>
								<label htmlFor="arrival">Arrival date</label>
								<input type="text" name='arrival' placeholder='04.02' />

							</div>
							<div className='form__item'>
								<label htmlFor="departure">Departure date</label>
								<input type="text" name='departure' placeholder='07.02' />

							</div>
						</div>
						<div className='form__guests guests'>
							<div className="guests__title">Guests</div>
							<div className="guest__amount">
								<div className="guest__amount-dec" onClick={onDec}>-</div>
								<div className="guest__amount-num">{num}</div>
								<div className="guest__amount-inc" onClick={onInc}>+</div>
							</div>
						</div>
					</div>

					<div className='form__services services'>
						<h4 className='services__title'>List of services guest</h4>
						<ul className='services__list'>
							{servicesItems}
						</ul>
					</div>

					<button className='booking-details__button'>Book now</button>
				</form>
			</div>
		</section>
	)
}

export default BookingDetails;
