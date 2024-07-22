import React from 'react'
import Navbar from './Navbar'

const Services = () => {
    return (
        <div>
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
                  <a class="nav-link active" href="/Services">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
                <br />
                <div className="row" style={{marginTop:'80px'}}>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="accordion" id="accordionPanelsStayOpenExample">
                                    <div class="accordion-item">
                                        <h1 class="accordion-header" style={{ color: 'rgb(60,144,255)' }}>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                <font style={{ color: 'rgb(60,144,255)' }}> <b>Restaurents And Foods</b> </font>
                                            </button>
                                        </h1>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                Find information about the restaurants, fast food options and food stores located in Toronto Pearson Airport terminals.
                                                <h1 style={{ color: 'rgb(60,144,255)' }}>Terminal 1</h1>
                                                <li>Subway</li>
                                                <li>Upper Crust</li>
                                                <li>Starbucks</li>
                                                <li>Air Canada Cafe</li>
                                                <li>Vinifera</li>
                                                <li>Burger Federation.</li>
                                                <li>Starbucks (YYZ T1 Gate D20 Domestic)</li>
                                                <br />
                                                <h1 style={{ color: 'rgb(60,144,255)' }}>Terminal 2</h1>
                                                <li>American Airlines Admirals Club</li>
                                                <li>Beerhive</li>
                                                <li>Heirloom Bakery Café</li>
                                                <li>Nobel Burger Bar</li>
                                                <li>UrbanCrave</li>
                                                <li>Maple Leaf Lounge</li>
                                                <li>Smoke's burritorie</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h1 class="accordion-header" style={{ color: 'rgb(60,144,255)' }}>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                                <font style={{ color: 'rgb(60,144,255)' }}><b>Aviation Interfaith Ministry</b></font>
                                            </button>
                                        </h1>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                There are places to pray and relax at both Terminals.

                                                Passengers will find weekly services: Roman Catholic Holy Mass, Interdenominational Christian Worship Service, among others, at Terminals 1 and 3.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h1 class="accordion-header" style={{ color: 'rgb(60,144,255)' }}>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                                                <font style={{ color: 'rgb(60,144,255)' }}><b>Lost And Found</b></font>
                                            </button>
                                        </h1>
                                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                If you have left a personal belonging at Toronto Airport facilities, you can contact Lost & Found Service. Lost and Found office is located in Terminal 1,before security. You will find it between doors R and S VIEW MAP. Operating hours: Monday to Friday: from 10:00 am to 6:00 pm. You can ask for more information at: lostandfound@gtaa.com
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h1 class="accordion-header" style={{ color: 'rgb(60,144,255)' }}>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                                                <font style={{ color: 'rgb(60,144,255)' }}><b>Hotels</b></font>
                                            </button>
                                        </h1>
                                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                <p>Passengers will find several hotels near Pearson Airport.</p>

                                                <h2 style={{ color: 'rgb(60,144,255)' }}>ALT Hotel</h2>

                                                <p>It is located next Viscount station, and passengers can get there through Terminal Link. </p>

                                                <h2 style={{ color: 'rgb(60,144,255)' }}>Sheraton Gateway Hotel</h2>

                                                <p>This hotel is directly connected to Terminal 3.</p>

                                                <p>Lots of shuttles cover the route between the Airport and hotels.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span class="material-symbols-outlined">
                                        restaurant
                                    </span>
                                    <h2 style={{ marginLeft: '8px', color: 'rgb(60,144,255)' }}>Restaurents:</h2>
                                </div>
                                <p>
                                    <h5 style={{ marginLeft: '35px' }}>
                                        Airports offer a diverse range of food services to cater to travelers' needs and preferences. These include:

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Quick-Service Restaurants (QSRs):</h4>
                                        <li>Fast food options for travelers in a hurry, like McDonald’s and Starbucks.</li>
                                        <li>Grab-and-go items such as sandwiches, salads, and coffee.</li>

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Casual and Fine Dining:</h4>
                                        <li>Sit-down restaurants like TGI Fridays and Wolfgang Puck Express.</li>
                                        <li>Menus featuring various cuisines, from American to international dishes.</li>

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Bars and Lounges:</h4>
                                        <li>Relaxed settings for drinks and light snacks</li>
                                        <li>Lounges offering complimentary food and beverages for premium passengers.</li>
                                    </h5>
                                </p>
                            </div>
                            <br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span class="material-symbols-outlined">
                                        wifi
                                    </span>
                                    <h2 style={{ marginLeft: '8px', color: 'rgb(60,144,255)' }}>Wifi Services:</h2>
                                </div>
                                <p>
                                    <h5 style={{ marginLeft: '35px' }}>
                                        Skylift International Airport is committed to providing top-notch Wi-Fi services to ensure that all passengers stay connected during their travel. Whether for communication, entertainment, or work, our Wi-Fi network is designed to meet the diverse needs of our travelers.
                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Free Wifi:</h4>
                                        <li>Skylift International offers complimentary Wi-Fi access to all passengers. Our free Wi-Fi provides unlimited browsing time and reliable speeds to accommodate basic internet needs such as checking emails, browsing the web, and using social media.</li>

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Premium Wifi:</h4>
                                        <li>For travelers who require higher speeds and more robust connectivity, Skylift offers premium Wi-Fi services for a nominal fee. This service is ideal for business travelers and those needing uninterrupted streaming or large file downloads. Subscription and one-time payment options are available.</li>

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Lounge Wifi:</h4>
                                        <li>Passengers with access to our exclusive airport lounges can enjoy high-speed, secure Wi-Fi as part of their lounge benefits. This service ensures a seamless and productive experience, perfect for business travelers and frequent flyers.</li>
                                    </h5>
                                </p>
                            </div>
                            <br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span class="material-symbols-outlined">
                                        local_parking
                                    </span>
                                    <h2 style={{ marginLeft: '8px', color: 'rgb(60,144,255)' }}>Parking:</h2>
                                </div>
                                <p>
                                    <h5 style={{ marginLeft: '35px' }}>
                                        Skylift International Airport offers a range of parking services designed to meet the diverse needs of our travelers. Our parking facilities are secure, convenient, and accessible, providing both short-term and long-term solutions for all passengers.

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Short-Term Parking:</h4>
                                        <li>Ideal for picking up or dropping off passengers.</li>
                                        <li>Located close to the terminal for maximum convenience.</li>
                                        <li>Hourly rates available, perfect for stays of a few hours.</li>

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Long-Term Parking:</h4>
                                        <li>Cost-effective options for travelers leaving their vehicles for several days or weeks.</li>
                                        <li>Shuttle services to and from the terminal ensure ease of access.</li>
                                        <li>Daily and weekly rates to accommodate extended stays.</li>

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Valet Parking:</h4>
                                        <li>Provides the utmost convenience with drop-off directly at the terminal entrance.</li>
                                        <li>Professional valet staff ensure your vehicle is parked securely.</li>
                                        <li>Perfect for those in a hurry or looking for premium service.</li>
                                    </h5>
                                </p>
                            </div>
                            <br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span class="material-symbols-outlined">
                                        child_care
                                    </span>
                                    <h2 style={{ marginLeft: '8px', color: 'rgb(60,144,255)' }}>Travelling With Children:</h2>
                                </div>
                                <p>
                                    <h5 style={{ marginLeft: '35px' }}>
                                        Skylift International Airport understands the unique needs of families traveling with children and is committed to providing a range of services to ensure a smooth and enjoyable journey for parents and their little ones. From dedicated facilities to specialized assistance, we strive to make traveling with children as stress-free as possible.

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Stroller Rental Services:</h4>
                                        <li>Convenient stroller rental services available for families who prefer not to bring their own.</li>
                                        <li>High-quality strollers suitable for infants, toddlers, and young children, ensuring comfortable transportation throughout the airport.</li>

                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Kids' Play Areas:</h4>
                                        <li>Fun and engaging play areas within the airport terminals where children can burn off energy and enjoy interactive games and activities.</li>
                                        <li>Supervised play zones with age-appropriate toys and entertainment to keep children entertained while waiting for flights.</li>


                                        <h4 style={{ color: 'rgb(60,144,255)' }}>Priority Boarding for Families:</h4>
                                        <li>Priority boarding for families traveling with children, allowing them to board the aircraft early and settle in comfortably.</li>
                                        <li>Dedicated boarding lanes and assistance from airport staff to help families navigate the boarding process smoothly.</li>
                                    </h5>
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services