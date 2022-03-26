import React from "react";
import '../style/Footer.css';
function Footer() {
  return (
    <div>
      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<ul>
  	 				<li><a href="#">Facebook</a></li>
  	 				<li><a href="#">Twitter</a></li>
  	 				<li><a href="#">Instagram</a></li>
  	 				<li><a href="#">LinkedIn</a></li>
  	 			</ul>
  	 		</div>
         <div className="footer-col">
  	 			<h4>Disclaimer</h4>
  	 			<p id='Disclaimer'>This site is for educational purposes only!!
Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as  teaching, education and research etc...</p>
  	 		</div>
  	 	</div>
       <p id='Disclaimer'>©️Created By Ajal Jose</p>
  	 </div>
  </footer>
    </div>
  );
}

export default Footer;
