import React from 'react';
import Navbar from './Navbar';

const Faq = () => {
    return (
            <div className="container">
               <nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand"> <font style={{ color: 'rgb(60,144,255)' }} >
              <img src="https://www.skylift.com.mx/wp-content/uploads/2017/11/skylift-logo.png" alt="Bootstrap" width="40" height="40" />
              SkyLift</font> <font style={{ color: 'rgb(60,144,255)' }}>I</font>nternational <font style={{ color: 'rgb(60,144,255)' }}>A</font>irport
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About">About US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Services">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
                <br />
                <div className="row justify-content-center" style={{marginTop:'80px'}}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <h3 style={{ color: 'rgb(60,144,255)' }}>These are the most frequently asked questions:</h3>
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1. How early should I arrive at the airport before my flight?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        We recommend arriving at least 2 hours before domestic flights and 3 hours before international flights to allow enough time for check-in, security screening, and boarding.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        2. Can I bring liquids in my carry-on luggage?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Passengers are allowed to carry liquids in containers of 100ml or less in their carry-on luggage. All liquids must be placed in a clear, resealable plastic bag for security screening.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        3. Is there parking available at the airport?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, Skylift International Airport offers a range of parking options including short-term, long-term, premium, and valet parking services. Reservations can be made online for added convenience.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        4. Are there facilities for families traveling with children?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, our airport provides family-friendly amenities including play areas, stroller rentals, and priority boarding for families. We also offer assistance with carrying luggage and equipment for parents traveling with infants or young children.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        5. Can I access Wi-Fi at the airport?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, complimentary Wi-Fi is available throughout Skylift International Airport. Passengers can connect to the network by selecting "Skylift_WiFi" and following the on-screen instructions.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        6. Are there dining options available at the airport?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, our airport offers a variety of dining options including restaurants, cafes, and fast-food outlets serving a range of cuisines. Vegetarian, vegan, and gluten-free options are also available.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        7. What happens if my flight is delayed or canceled?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        In the event of a flight delay or cancellation, passengers should contact their airline for assistance with rebooking or accommodations. Our airport staff are available to provide support and guidance as needed.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        8. Is there public transportation available from the airport to the city center?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, Skylift International Airport is served by public buses, taxis, and ride-sharing services for transportation to the city center and other destinations. Information on transportation options is available at the airport.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        9. Are there currency exchange services at the airport?
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, currency exchange counters and ATMs are available at Skylift International Airport for passengers needing to convert currency or withdraw cash.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        10. Are there facilities for passengers with disabilities?
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Yes, our airport is equipped with facilities for passengers with disabilities including accessible restrooms, elevators, and designated parking spaces. Assistance is available upon request for passengers requiring additional support.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Faq;