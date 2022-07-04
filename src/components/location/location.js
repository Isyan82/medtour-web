import './location.css';
const Location = () => {
	return (
		<section className="location">
			<div className="location__container">
				<h3 className="location__title">Location</h3>
				<div className='location__coordinates'>
					<div className="location__map">
						<img className='location-map__map' src="/img/map.jpg" alt="map" />
						<img className='location-map__point' src="/img/point.png" alt="point" />
					</div>
					<div className='location__description description'>
						<div className='description__text'>Adam dan Hawa Estetika Medicine Klinik of is directly adjacent to Jumeirah Emirates Towers in Dubai, United Arab Emirates.</div>
						<div className='location__exact'>Our exact location can be found here</div>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Location;