
import './bestDoctors.css';

import DoctorCard from '../doctor-card/doctorCard';

const BestDoctors = ({ doctorsData }) => {
	const doctors = doctorsData.map((item, id) => {
		return (
			<DoctorCard data={item} key={id.toString()} />
		)
	})

	return (
		<section className='best-doctors'>
			<div className="best-doctors__container">
				<h3 className='best-doctors__title'>The best doctors of the clinic</h3>
				<ul className='doctors__list'>
					{doctors}
				</ul>
			</div>

		</section>
	)
}

export default BestDoctors;