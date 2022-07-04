
import './reviews.css';

import ReviewCard from '../review-card/reviewCard';



const Reviews = ({ reviewsData }) => {

	const card = reviewsData.map(item => <ReviewCard data={item} key={item.id} />)
	return (
		<section className='reviews'>
			<div className="reviews__container">
				<h3 className='reviews__title'>Reviews about the clinic</h3>
				<div className='reviews__amount'>{`${reviewsData.length} reviews`} </div>
				<ul className='reviews__list'>
					{card}
				</ul>
			</div>


		</section>
	)
}

export default Reviews;