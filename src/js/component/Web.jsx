import React from "react";
import Navbar from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import Card from "./Card.js";
import Footer from "./Footer.js";


const Web = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="container-xxl">
				<div class="row">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					
				</div>
        	</div>
			<Footer/>
		</div>
	);
};

export default Web;
