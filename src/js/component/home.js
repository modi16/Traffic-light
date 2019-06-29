import React from "react";

//create your first component
export class Traffic extends React.Component {
	constructor() {
		super();
		this.state = { clicked: null };
	}

	render() {
		console.log(this.state);
		let addRedClass = "";
		if (this.state.clicked == "red") {
			addRedClass = "selected";
		}

		let addGreenClass = "";
		if (this.state.clicked == "green") {
			addGreenClass = "selected";
		}

		let addYellowClass = "";
		if (this.state.clicked == "yellow") {
			addYellowClass = "selected";
		}

		return (
			<div>
				<div className="sup text-center" />
				<div className="container">
					<div
						className={"red-light " + addRedClass}
						onClick={() => this.setState({ clicked: "red" })}
					/>
					<div
						className={"yellow-light " + addYellowClass}
						onClick={() => this.setState({ clicked: "yellow" })}
					/>
					<div
						className={"green-light " + addGreenClass}
						onClick={() => this.setState({ clicked: "green" })}
					/>
				</div>
			</div>
		);
	}
}
