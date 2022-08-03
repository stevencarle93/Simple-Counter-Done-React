import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";

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
							<FontAwesomeIcon icon={faHeartPulse} />
						</div>
						<div className = "text-justify" style={ counterStyle }> {props.digit_Six} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digit_Five} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digit_Four} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digit_Three} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digit_Two} </div>
						<div className = "text-justify" style={ counterStyle }> {props.digit_One} </div>
					</div>
				</div>
			</div>
		</div>
	)
};
