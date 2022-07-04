import { useState } from 'react';

import './BookingModal.css';
import BookingServisesItem from '../booking-servises-item/BookingServisesItem';
import BookingGuestsAmount from '../booking-guests-amount/BookingGuestsAmount';


const BookingModal = ({ services }) => {

	const totalPrice = services.reduce((acc, element) => {
		acc += element.price;
		return acc
	}, 0);

	const [modalClassName, setModalClassName] = useState('booking-modal');


	window.addEventListener('scroll', () => {
		if (window.scrollY > 1800) {
			setModalClassName(modalClassName + ' hidden')
		}
		if (window.scrollY < 1800) {
			setModalClassName('booking-modal')
		}
	})

	const servicesItems = services.map(item => {
		return (
			<BookingServisesItem data={item} key={item.id} />
		)
	})

	return (
		<section className={modalClassName}>
			<h3 className='booking__title'>Booking Details</h3>
			<form action="#" className='booking__form form' type="submit">
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
				<div className='form__guests'>
					<div className='guests__title'>Guests</div>
					<BookingGuestsAmount />
				</div>

				<div className='form__services modal-services'>
					<h4 className='modal-services__title'>List of services guest</h4>
					<ul className='services__list'>
						{servicesItems}
					</ul>
				</div>

				<div className='form__total total'>
					<p className='total__title'>Total price</p>
					<p className='total__price'>{totalPrice}</p>
				</div>
				<button className='form__button'>Check available date</button>
			</form>
		</section>
	)
}

export default BookingModal;