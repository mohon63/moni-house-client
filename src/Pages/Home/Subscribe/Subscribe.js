import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className="cus-bg-2 w-100">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center" style={{ height: "60vh", width: "100%" }}>
                    <div className="w-100">
                        <div className="row align-items-center">
                            <div className="col-12 text-light cus-pos">
                                <section className="newsletter">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="content">
                                                    <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                                                    <div className="input-group">
                                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                                        <span className="input-group-btn">
                                                            <button className="btn" type="submit">Subscribe Now</button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Subscribe;