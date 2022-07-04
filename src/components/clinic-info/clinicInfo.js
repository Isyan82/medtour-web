
import './clinicInfo.css'

const ClinicInfo = () => {
	return (
		<section className="info">
			<div className="info__container">
				<div className="info__destination">
					<svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.50006 0C9.4892 0 11.3969 0.790182 12.8034 2.19672C14.2099 3.60325 15.0001 5.51092 15.0001 7.50006C15.0001 11.0838 12.5813 14.3826 7.83506 17.4026C7.7349 17.4662 7.6187 17.5 7.50006 17.5C7.38141 17.5 7.26522 17.4662 7.16505 17.4026C2.41877 14.3826 0 11.0838 0 7.50006C0 5.51092 0.790182 3.60325 2.19672 2.19672C3.60325 0.790182 5.51092 0 7.50006 0ZM7.50006 5.00004C6.83701 5.00004 6.20112 5.26343 5.73228 5.73228C5.26343 6.20112 5.00004 6.83701 5.00004 7.50006C5.00004 8.1631 5.26343 8.79899 5.73228 9.26784C6.20112 9.73668 6.83701 10.0001 7.50006 10.0001C8.1631 10.0001 8.79899 9.73668 9.26784 9.26784C9.73668 8.79899 10.0001 8.1631 10.0001 7.50006C10.0001 6.83701 9.73668 6.20112 9.26784 5.73228C8.79899 5.26343 8.1631 5.00004 7.50006 5.00004Z" fill="#828282" />
					</svg>
					<p>Sheikh Zayed Rd - Trade Centre - Trade Centre 2 - Dubai</p>
				</div>
				<h2 className="info__title">Adam dan Hawa Estetika Medicine Klinik</h2>
				<div className="info__description">The American Hospital, located in Aud Meta, has been serving the needs of Dubai residents in the field of health and medicine for many years. This is one of the most popular and reliable hospitals in the city. Offering forty-five medical services, it offers all kinds of treatments to patients from all over the world. Treats auditory problems and urinary tract problems with equal effectiveness. There is high-class equipment, a world-class operating room and cutting-edge equipment, but most importantly, experienced and qualified surgeons and doctors work here, who make sure that patients leave the hospital with a smile.</div>
				<a className="info__more" href="/">More details</a>
			</div>

		</section>
	)
}

export default ClinicInfo;