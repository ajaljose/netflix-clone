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
  	 				<li><p >our services</p></li>
  	 				<li>< p>privacy policy</p></li>
  	 				<li><p>affiliate program</p></li>
  	 				<li><p>about us</p></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><p>FAQ</p></li>
  	 				<li><p>shipping</p></li>
  	 				<li><p>returns</p></li>
  	 				<li><p>order status</p></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<ul>
  	 				<li><p>Facebook</p></li>
  	 				<li><p>Twitter</p></li>
  	 				<li><p>Instagram</p></li>
  	 				<li><p>LinkedIn</p></li>
  	 			</ul>
  	 		</div>
         <div className="footer-col">
  	 			<h4>Disclaimer</h4>
  	 			<p id='Disclaimer'>This site is for educational purposes only!!
Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as  teaching, education and research etc...</p>
  	 		</div>
  	 	</div>
       <p id='Disclaimer'>Created By Ajal Jose</p>
  	 </div>
  </footer>
    </div>
  );
}

export default Footer;
