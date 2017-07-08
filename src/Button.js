import React from 'react'

export default class Button extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
				clicked: false
			}
	}
	onClick(event) {
		this.setState({clicked: true});
	}

	render() {
		if (!this.state.clicked) {
			return (
					<span><button onClick={() => this.setState({clicked: true})}>Suprise!</button></span>
					)
		}
		return (<span className=""><img src="https://media.giphy.com/media/10dV5LFkPenFxm/giphy.gif" alt="Suprise!"/></span>)
	}
}
