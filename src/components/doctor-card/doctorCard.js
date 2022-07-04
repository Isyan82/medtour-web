
import './doctorCard.css';

const DoctorCard = ({ data }) => {
	const { name, img, speciality, education, languages, experience } = data;
	const languagesList = languages.map((item, id) => {
		return (

			<li className='languages__item' key={id.toString()}>
				<img src={item.icon} alt="flag" />
				<p>{item.descr.toUpperCase()}</p>
			</li>

		)
	})

	return (
		<li className='doctors__item doctor'>
			<img className='doctor__img' src={img} alt="doctor" />
			<div className='doctor__description'>
				<h4 className='doctor__name'>{name}</h4>
				<div className='doctor__speciality'>{speciality}</div>
				<div className='doctor__education'>{education}</div>
				<div className='doctor__skills'>
					<div className='doctor__languages languages'>
						<div className='languages__title'>Languages</div>
						<ul className='languages__list'>
							{languagesList}
						</ul>

					</div>
					<div className='doctor__experience experience'>
						<div className='experience__title'>Experience</div>
						<div className='experience__years'>{experience} years</div>
					</div>
				</div>
			</div>
		</li>
	)

}

export default DoctorCard
