import React from 'react';
import './Footer.css';

const Footer = () => {
    return (


        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h2>About</h2>
                        <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h2>Quick Links</h2>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Contribute</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <div className="">
                            <h2>Contact Us</h2>
                            <input className="w-100 p-2 bg-Dark border border-secondary" style={{ background: "none" }} type="text" placeholder="Your Name" autocomplete="off" />
                            <textarea placeholder="Your text" name="" id="" cols="30" rows="4" style={{ background: "none" }} className="my-3 w-100 p-2 bg-Dark border border-secondary" spellcheck="false">
                            </textarea><button type="button" className="btn btn-primary" >Send</button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                            <a href="#" className="text-info"> SoftWeb</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fab fa-dribbble"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;