import React, { useState, useEffect } from 'react';
import { ToastContainer, toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const form = document.getElementById('contactForm');
        const formInputs = form.querySelectorAll('input, textarea');

        const checkFormValidity = () => {
            const allFieldsFilled = Array.from(formInputs).every(input => input.value.trim() !== '');
            setIsFormValid(allFieldsFilled);
        };

        formInputs.forEach(input => {
            input.addEventListener('input', checkFormValidity);
        });

        return () => {
            formInputs.forEach(input => {
                input.removeEventListener('input', checkFormValidity);
            });
        };
    }, []);

    const handleFormValidity = (e) => {
        const formInputs = e.currentTarget.querySelectorAll('input, textarea');
        const allFieldsFilled = Array.from(formInputs).every(input => input.value.trim() !== '');
        setIsFormValid(allFieldsFilled);
    };

    const handleEmail = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent('Contact Form Submission');
        const body = encodeURIComponent(`Name: ${e.target.name.value}\nEmail: ${e.target.email.value}\nPhone number: ${e.target.mobile.value}\nMessage: ${e.target.message.value}`);

        const mailtoLink = `mailto:dionte.johnson0407@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;

        toast.success('Email opened successfully!', {
            position: toast.POSITION.TOP_RIGHT,
          });
    };

    return (
        <>
            <ToastContainer />
            <section className="page-section" id="contact">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6 text-center">
                            <h2 className="mt-0">Let's Get In Touch!</h2>
                            <hr className="divider" />
                            <p className="text-muted mb-5">
                                Ready to get started with TrucKonnection Logistics? Send us a message, and we'll get back to you as soon as possible!
                            </p>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                        <div className="col-lg-6">
                            <form id="contactForm" onSubmit={handleEmail} onChange={handleFormValidity}>
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name..."
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">
                                        A name is required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="text"
                                        placeholder="Enter your email..."
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="name">Email</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">
                                        An email is required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        className="form-control"
                                        id="mobile"
                                        type="number"
                                        placeholder="Enter your phone number..."
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="name">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="mobile:required">
                                        An email is required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        placeholder="Enter your message..."
                                        style={{ height: '10rem' }}
                                        data-sb-validations="required"
                                    />
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">
                                        A message is required.
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button className={`btn btn-primary btn-xl ${isFormValid ? '' : 'disabled'}`} id="submitButton" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-4 text-center mb-5 mb-lg-0">
                            <i className="bi-envelope fs-2 mb-3 text-muted"></i>
                            <div>1-855-329-2900 or <a href="mailto:truckonnectionlogistics@gmail.com">truckonnectionlogistics@gmail.com</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
