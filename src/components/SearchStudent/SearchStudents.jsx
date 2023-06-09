import React, { Component } from 'react'
import './SearchStudents.css'

class SearchStudents extends Component {
	state = { value: '' }

	onChangeHandler = (e) => {
		this.setState({ value: e.target.value }, () => {
			this.props.searchStudents(this.state.value)
		})
	}

	render() {
		return (
			<input
				type='text'
				placeholder='Filtrar por nombre...'
				name='name'
				onChange={this.onChangeHandler}
				className='Search-Student-Input'
			/>
		)
	}
}

export default SearchStudents
