import React from 'react';
import './main.scss';

const Main = ({ servicesSectionRef }) => {
    return (
        <main>
            <section className="page-section bg-primary" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">About Us</h2>
                            <hr className="divider divider-light" />
                            <p className="text-white-75 mb-4">Our goal at TrucKonnection Logistics is to not only provide dispatching services, but we also specialize in
                                freight hauling. We are family owned and operated looking to take your business to new heights with our
                                trusted partnerships.</p>
                            <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section" id="services" ref={servicesSectionRef}>
                <div className="container px-4 px-lg-5">
                    <h2 className="text-center mt-0">Services</h2>
                    <hr className="divider" />
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-lg-3 col-md-6 text-center mobile">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Broker Credit Check</h3>
                                <p className="text-muted mb-0">Assessing individuals' financial credibility for brokered transactions through credit evaluation and analysis.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mobile">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-hand-thumbs-up fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">No Forced Dispatching</h3>
                                <p className="text-muted mb-0">Negotiating top payment rates for fair compensation without compulsion.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mobile">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-file-earmark-plus fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">New Carrier Set-Up</h3>
                                <p className="text-muted mb-0">Streamlined setup process for new carriers entering the network.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mobile">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-pencil-square fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">E-Sign Available</h3>
                                <p className="text-muted mb-0">Electronic signature option for convenience and efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-lg-3 col-md-6 text-center mobile">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-chat-dots fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Consistent Communication with broker</h3>
                                <p className="text-muted mb-0">Ensuring open and effective communication with brokers to maintain a smooth workflow and address any concerns promptly.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mobile">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-currency-dollar fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Profitable Routes Towards Las</h3>
                                <p className="text-muted mb-0">Identifying and prioritizing routes that yield higher profits, leading to optimized and efficient transportation operations.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mobile">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-file-earmark-spreadsheet fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Detailed Earnings Spreadsheet</h3>
                                <p className="text-muted mb-0">Providing a comprehensive and organized spreadsheet that outlines earnings, expenses, and financial performance for better financial management.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center mobile">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-telephone fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Direct Access to Dispatcher</h3>
                                <p className="text-muted mb-0">Offering direct and immediate contact with dispatchers for real-time updates, quick problem-solving, and enhanced coordination during transport operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;
