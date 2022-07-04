import { useState } from 'react';

import './Procedures.css';
import OperationList from '../operation-list/OperationList';

const AccordeonItem = ({ name, operations }) => {

	const [opened, setOpened] = useState(false)
	const onOpen = () => {
		setOpened(!opened)
	}
	let classNames = 'procedures__item'
	let arrowClassName = 'procedures__arrow'

	if (opened) {
		arrowClassName += ' opened'
	}

	return (

		<li className={classNames} onClick={onOpen}>
			{name}
			<svg className={arrowClassName} width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 1.5L8 8L15.5 1.5" stroke="#0C111F" strokeWidth="2" />
			</svg>
			<OperationList operations={operations} opened={opened} />
		</li>

	)
}


const Procedures = ({ procedures, operations }) => {


	const proceduresList = procedures.map((item) => <AccordeonItem key={item.id} name={item.name} operations={operations} />)

	return (
		<section className='procedures'>
			<div className="procedures__container">
				<h3 className='procedures__title'>Suggested procedures</h3>
				<div className='procedures__description'>To see the doctors and the total cost, select the procedures you want to receive.</div>

				<div className='procedures__selected'>
					<p>Selected: 4</p>
					<button>Clear selection</button>
				</div>
				<ul className='procedures__list'>
					{proceduresList}
				</ul>
			</div>
		</section>
	)


}

export default Procedures;