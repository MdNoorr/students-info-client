import React from "react";
import fb from "../../images/icon/fb.png"
import google from "../../images/icon/google.png"

const LoginWithOthers = (props) => {
	return (
		<div>
			<div className="form-divider text-center">
				<p>Or</p>
			</div>

			<div className="tg-thirdparty-login">
				<button className="btn btn-secondary" onClick={props.facebook}>
					<span>
						<img src={fb} style={{ maxWidth: "35px" }} alt="fb logo" />
					</span>
					<span>Continue with Facebook</span>
				</button>
				<button className="btn btn-secondary" onClick={props.google}>
					<span>
						<img src={google} style={{ maxWidth: "32px" }} alt="fb logo" />
					</span>
					<span>Continue with Google</span>
				</button>
			</div>
		</div>
	);
};

export default LoginWithOthers;