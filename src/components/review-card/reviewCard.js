
import './reviewCard.css';




const ReviewCard = ({ data }) => {
	const { name, avatar, location, date, text } = data;

	const autorAvatar = (avatar) => {
		if (avatar === '') {
			return (
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="#1490A8" />
				</svg>
			)
		} else {
			return <img src={avatar} alt="ivatar" />
		}
	}
	const autorName = (name) => {
		if (name === '') {
			return 'Anonymous user'
		} else {
			return name
		}
	}


	return (
		<li className='reviews__item review'>
			<div className='review__photo'>
				{autorAvatar(avatar)}
			</div>
			<div className='review__autor autor'>
				<h4 className='autor__name'>{autorName(name)}</h4>
				<p className='autor__location'>{`(${location})`}</p>
			</div>

			<div className='reviews__date'>{date}</div>
			<div className='reviews__text'>{text}</div>
		</li>
	)



}
export default ReviewCard;