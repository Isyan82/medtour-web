
import './Navigation.css'
import Back from "../back/Back";
import Login from "../login/Login";



const Navigation = () => {
	return (
		<section className="navigation">
			<div className="navigation__container">
				<Back />
				<Login />
			</div>

		</section>
	)
}
export default Navigation;