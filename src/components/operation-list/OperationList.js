import './OperationList.css'

import OperationListItem from '../operation-list-item/OperationListItem'

const OperationList = ({ operations, opened }) => {

	const elements = operations.map((item, id) => {
		return (
			<OperationListItem {...item} key={id.toString()} />
		)
	})

	let classNames = 'operations__list';
	if (!opened) {
		classNames += ' operations__list--hidden'
	}
	return (
		<ul className={classNames}>{elements}</ul>

	)
}

export default OperationList;