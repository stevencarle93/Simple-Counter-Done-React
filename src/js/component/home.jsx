import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Home(props) {

	const counterStyle = {
		color: "white", 
		fontSize: "8rem", 
		padding: "1rem"
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<div className="d-flex justify-content-center bg-dark" style={{ height: "15rem" }}>
						<div className="text-justify" style={{ color: "white", fontSize: "8rem" }}>
							<FontAwesomeIcon icon={faClock} />
						</div>
						<div className = "text-justify" style={ counterStyle }> {props.digitSix} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digitFive} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digitFour} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digitThree} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digitTwo} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digitOne} </div>
					</div>
				</div>
			</div>
		</div>
	)
};
