
import './Footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__policy polycy">
				<h3 className="policy__title">We are an international clinic <br />
					search platform
				</h3>
				<ul className="policy__list">
					<li className="policy__item">
						<a href="/">Privacy Policy</a>
					</li>
					<li className="policy__item">
						<a href="/">Terms of use of the service</a>
					</li>
					<li className="policy__item">
						<p>© 2022  MedTure, Inc.</p>
					</li>
				</ul>

			</div>
			<div className="footer__explore explore">
				<h4 className="explore__title">Explore</h4>
				<ul className="explore__list">
					<li className="explore__item">
						<a href="/">FAQ</a>
					</li>
					<li className="explore__item">
						<a href="/">About us</a>
					</li>
				</ul>

			</div>
			<div className="footer_about about">
				<h4 className="about__title">Read about us</h4>
				<ul className="about__list">
					<li className="about__item">
						<a href="/">
							What is medical tourism



						</a>
					</li>
					<li className="about__item">
						<a href="/">
							How can we help organize your trip
							{/* <span>How can we help organize your trip</span>
							<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 16L7.5 9L1 1.5" stroke="#0C111F" stroke-width="2" />
							</svg> */}
						</a>
					</li>
				</ul>

			</div>

		</footer>
	)
}

export default Footer;