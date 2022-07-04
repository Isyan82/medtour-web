import { useState } from 'react';

const BookingGuestsAmount = () => {

	let amountNum = 0
	const [num, setNum] = useState(amountNum);

	const onInc = () => {
		setNum(num + 1)
	}
	const onDec = () => {
		if (num > 0) setNum(num - 1)
	}
	return (
		<div className="guest__amount">
			<div className="guest__amount-dec" onClick={onDec}>-</div>
			<div className="guest__amount-num">{num}</div>
			<div className="guest__amount-inc" onClick={onInc}>+</div>
		</div>
	)
}

export default BookingGuestsAmount;