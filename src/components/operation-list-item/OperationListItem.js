import { useState } from 'react'
import './OperationListItem.css'

const OperationListItem = ({ name }) => {

	const [selected, setSelected] = useState(false)

	const onSelect = (evt) => {
		evt.stopPropagation();
		setSelected(!selected)
	}


	let classNames = 'operation'
	if (selected) {
		classNames += ' selected'
	}

	return (

		<li className={classNames} onClick={onSelect}>{name}</li>
	)

}

export default OperationListItem;