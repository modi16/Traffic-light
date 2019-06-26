import React from "react";

//create your first component
export class Traffic extends React.Component {
	constructor() {
		super();
		this.state = { selected: false };
	}

	onchange = e => {
		this.setState = { selected: !this.state.selected };
	};

	render() {
		return (
			<div>
				<div className="sup text-center" />
				<div className="container">
					<div className="red-light" onClick={this.onchange} />
					<div className="yellow-light" onClick={this.onchange} />
					<div className="green-light" onClick={this.onchange} />
				</div>
			</div>
		);
	}
}
