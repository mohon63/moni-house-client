import React from 'react';
import { Container } from 'react-bootstrap';

const Pay = () => {
    return (
        <Container>
            <div style={{ height: '60vh' }} className="d-flex align-items-center justify-content-between">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://utshobbd.com/wp-content/uploads/2019/12/payment.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <h4>Select Method</h4>

                            <fieldset className="row mb-3">
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <div className="redio-group d-flex justify-content-evenly py-3">
                                            <div className="redio">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                <label class="form-check-label" for="gridRadios1">
                                                    bKash
                                                </label>
                                            </div>
                                            <div className="redio">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                <label class="form-check-label" for="gridRadios1">
                                                    Roket
                                                </label>
                                            </div>
                                            <div className="redio">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                <label class="form-check-label" for="gridRadios1">
                                                    Upay
                                                </label>
                                            </div>
                                        </div>

                                        <div class="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Accoutn Number" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-danger" type="button" id="button-addon2">Button</button>
                                        </div>

                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Pay;