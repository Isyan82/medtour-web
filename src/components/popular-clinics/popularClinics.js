
import './popularClinics.css';

import PopularClinicCard from '../popular-clinic-card/popularClinicCard';

const PopularClinics = () => {
	return (
		<section className='popular'>
			<div className="popular__container">
				<h3 className='popular__title'>The most popular clinics</h3>
				<ul className='popular__list'>
					<PopularClinicCard />
				</ul>
			</div>


		</section>
	)
}
export default PopularClinics;