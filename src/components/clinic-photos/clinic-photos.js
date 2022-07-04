import './clinic-photos.css'

import image1 from '../../img/images/Rectangle_1494.jpg';
import image2 from '../../img/images/Rectangle_1495.jpg';
import image3 from '../../img/images/Rectangle_1496.jpg';

const ClinicPhotos = () => {
	return (
		<section className="photos">
			<ul className="photos__list">
				<li className="photos__item item-1">
					<img src={image1} alt="clinic" />
				</li>
				<li className="photos__item item-2">
					<img src={image2} alt="clinic" />
				</li>
				<li className="photos__item item-3">
					<img src={image3} alt="clinic" />
				</li>
			</ul>
		</section>
	)
}

export default ClinicPhotos;