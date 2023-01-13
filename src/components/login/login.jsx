import React from 'react';

const Login = (props) =>{
    return(
		<div class="container">
            <h1 class="justify-content-center d-flex">Login Page</h1>
            <br/>
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					<div class="form-floating">
					  	<input name="UserEmail" type="email" class="form-control" id="floatingEmail" required/>
					  	<label for="floatingEmail">Email</label>
					</div>
				</div>
				<div class="col-md-4"></div>
			</div><br/>
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					<div class="form-floating">
					  	<input name="UserPassword" type="password" class="form-control" id="floatingPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
					  	<label for="floatingPassword">Password</label>
					</div>
				</div>
				<div class="col-md-4"></div>
			</div><br/>
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					<div class="justify-content-center d-flex">
					  	<input name="login" type="submit" class="btn btn-outline-success btn-block"/>
					</div>
				</div><br/><br/>
				<div class="col-md-4"></div>
			</div>
		</div>
    );
};

export default Login;