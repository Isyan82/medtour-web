
import './popularClinicCard.css';

import PopularClinic from '../../img/images/popular-clinic.jpg'

const PopularClinicCard = () => {
	return (
		<li className='popular__item clinic'>
			<div className='clinic__image'>
				<img src={PopularClinic} alt="clinic" />
				<div className='clinic__rating'>5.0</div>
				<div className='popular__price'>$4 007 - 5 724</div>
			</div>
			<div className='clinic__title'>Klinik Anadolu</div>
			<div className='clinic__location'>
				<svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 0.75C6.19347 0.75 7.33807 1.22411 8.18198 2.06802C9.02589 2.91193 9.5 4.05653 9.5 5.25C9.5 7.40025 8.04875 9.3795 5.201 11.1915C5.1409 11.2297 5.07119 11.2499 5 11.2499C4.92881 11.2499 4.8591 11.2297 4.799 11.1915C1.95125 9.3795 0.5 7.40025 0.5 5.25C0.5 4.05653 0.974106 2.91193 1.81802 2.06802C2.66193 1.22411 3.80652 0.75 5 0.75ZM5 3.75C4.60217 3.75 4.22064 3.90803 3.93934 4.18934C3.65803 4.47064 3.5 4.85217 3.5 5.25C3.5 5.64782 3.65803 6.02935 3.93934 6.31066C4.22064 6.59196 4.60217 6.75 5 6.75C5.39782 6.75 5.77935 6.59196 6.06066 6.31066C6.34196 6.02935 6.5 5.64782 6.5 5.25C6.5 4.85217 6.34196 4.47064 6.06066 4.18934C5.77935 3.90803 5.39782 3.75 5 3.75Z" fill="#989898" />
				</svg>
				<p>Sheikh Zayed Rd - Trade Centre - Trade Centre 2 - Dubai </p>
			</div>


		</li>
	)
}

export default PopularClinicCard;