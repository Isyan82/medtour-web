
import './Clinic.css';

import Navigation from '../navigation/Navigation';
import BookingModal from '../booking-modal/BookingModal';
import Promo from '../promo/Promo';
import ClinicInfo from '../clinic-info/clinicInfo';
import Procedures from '../procedures/Procedures';
import BestDoctors from '../best-doctors/bestDoctors';
import Location from '../location/location';
import Reviews from '../reviews/reviews';
import BookingDetails from '../booking-details/BookingDetails';
import PopularClinics from '../popular-clinics/popularClinics';
import Footer from '../footer/Footer';


const Clinic = ({ doctorsData, procedures, operations, reviewsData, services }) => {
	return (
		<div className='clinic'>
			<Navigation />
			<BookingModal services={services} />
			<Promo />
			<ClinicInfo />
			<Procedures procedures={procedures} operations={operations} />
			<BestDoctors doctorsData={doctorsData} />
			<Location />
			<Reviews reviewsData={reviewsData} />
			<BookingDetails services={services} />
			<PopularClinics />
			<Footer />
		</div>
	)
}
export default Clinic;