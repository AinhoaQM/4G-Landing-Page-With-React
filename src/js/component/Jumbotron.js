import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light m-3 p-1 rounded">
      <h1 className="display-4"> A warm welcome!</h1>
      <p className="fs-5 justify-content center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <a className="btn btn-primary btn-lg  mb-3 ">Call to action!</a>
    </div>
	);
};

export default Jumbotron;