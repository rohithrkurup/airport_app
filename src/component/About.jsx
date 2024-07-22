import React from 'react'
import Navbar from './Navbar'

const About = () => {
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
                                    <a class="nav-link active" href="/About">About US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/Services">Services</a>
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
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3" style={{ marginTop: '80px' }}>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="row g-3">
                                    <div class="card p-0">
                                        <div class="card-body p-0">
                                            <img src="https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?cs=srgb&dl=airport-indoors-people-804463.jpg&fm=jpg" alt="" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="row g-3">
                                    <div class="card p-0">
                                        <div class="card-body p-0">
                                            <img src="https://gbdmagazine.com/wp-content/uploads/2021/06/airport-design-lax-gbd-magazine-west-gates-at-Tom-Bradley-international-terminal-glass-walls.jpg" alt="" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <h1 style={{ color: 'rgb(60,144,255)' }}><b>What Makes SKY Unique?</b></h1>
                                <h4>
                                    <li>SKY served 4 million international passengers in 2023</li>
                                    <br />
                                    <li>SKY serves 200+ nonstop destinations</li>
                                    <br />
                                    <li>Average daily passengers: 213,254 (2023)</li>
                                    <br />
                                    <li>Total number of gates: 148 narrow-body contact gates
                                        and 21 apron-load positions for commuter/regional aircraft</li>
                                    <br />
                                    <li>The Jeppesen Terminal features 2.6 million square feet of space</li>
                                    <br />
                                    <li>The approximately 240,000 square-foot tent roof is held up by 34 masts and is large enough to cover more than four football fields</li>
                                    <br />
                                    <li>SKY has approximately 300 lane miles of roads (more than the distance from SKYver to the Utah border)</li>
                                    <br />
                                    <li>The airport has more than 31,000 public parking spaces</li>
                                    <br />
                                    <li>SKY is the largest airport site in North America and the second-largest in the world</li>
                                    <br />
                                </h4>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="row g-3">
                                    <div class="card p-0">
                                        <div class="card-body p-0">
                                            <img src="http://media.cntraveler.com/photos/57d2cde8b77fe35639ae19e2/master/pass/atlanta-airport-terminal-GettyImages-506237798.jpg" alt="" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                            <br /><br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <h1 style={{ color: 'rgb(60,144,255)' }}><b>The Skylift International Airport (SKY) Master Plan</b></h1>
                                <h4>
                                    <p>
                                        Our airport master plan provides a road map for us to efficiently meet aviation demands through the foreseeable future while preserving the flexibility to respond to changing industry conditions.
                                    </p>
                                    <p>
                                        Our original Master Plan was developed in 1988 and provided guidance for the airport through 50 million annual passengers. We passed that threshold and have created a master plan to take the airport’s development to the year 2030.
                                    </p>
                                </h4>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <h1 style={{ color: 'rgb(60,144,255)', textAlign: 'center' }}>About the Master Plan</h1>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://www.flydenver.com/app/uploads/2023/09/Master-Plan-01-768x432.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{ color: 'rgb(60,144,255)' }}>Master Plan Purpose</h3>
                                        <p class="card-text">Our master plan provides the framework needed to guide airport development that allows the airport to keep pace with aviation growth and demand cost effectively, while also considering potential environmental and socioeconomic impacts. It also provides the airport with the tools to react to uncertainties by examining key trends in the aviation industry, such as changing airline business models, improvements in technology and local/regional economics that could affect airport activity.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://www.flydenver.com/app/uploads/2023/09/Master-Plan-04-768x513.jpg" class="card-img-top" alt="..." height={357} />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{ color: 'rgb(60,144,255)' }}>Airport Layout Plan</h3>
                                        <p class="card-text">Our Airport Layout Plan (ALP) is a scaled drawing showing existing and proposed future facilities and property necessary for the operation and development of the airport. The Federal Aviation Administration (FAA) requires SKY to have an approved ALP before development can begin. Development depicted on the ALP in green indicates future planned on-airport development. The ALP is updated to reflect changes to the master plan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <h1 style={{ color: 'rgb(60,144,255)' }}>A brief history</h1>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h4>
                                    <p>With the incorporation of the SkyLift Flying Club on January 14th, 1928, the industry gained momentum; the first airport licence was granted to the Club on July 26th of the same year, and the airfield’s name was once again changed – this time to the Uplands Aerodrome.</p>
                                    <p>In November 1936, the first Ministry of Transport was formed by the federal government, with C.D. Howe at the helm. Minister Howe was tasked with developing connections to the rest of the country and with the British Commonwealth. To accomplish this daunting task, he established Trans-Canada Airlines in April 1937. The success of Trans-Canada was contingent on establishing a cross-country service, which would require suitable landing fields along the way. The SkyLift Flying Club, not financially able to make the necessary improvements to the landing strip, eventually abandoned the site. Fortunately, Laurentian Air Services, one of the oldest bush flying services in Canada, saved the day when they leased the airfield site in 1937.</p>
                                    <p>Over the next few years, enhancements were made to the site by Laurentian Air, including a hangar and other facilities, and the SkyLift Flying Club returned to the site under an extended lease. Ultimately, the work required to serve Trans-Canada proved too much and the Department of Transport purchased the 300-acre aerodrome from Laurentian Air. DOT set about, almost immediately, to construct new facilities and two hard-surfaced runways. On August 20th, 1938, Transport Minister Howe cut the ribbon inaugurating the Uplands Airport.</p>
                                    <p>With the outbreak of World War II, the Department of National Defence acquired the airport land and established its own facilities. Uplands became a Service Flying Training School for the Royal Canadian Air Force (RCAF), and additional lands to the east of the airport were acquired for the eventual construction of five hangars and a military camp.</p>
                                    <p>On August 1st, 1940, the British Commonwealth Air Training Program School opened at Uplands. The sky was filled with RCAF Harvards and various other training aircraft during the war, and many earned their wings and took their newfound talent to the skies over Europe.</p>
                                </h4>
                            </div>
                        </div>
<br />
                        <div className="row g-3">
                            <h1 style={{ color: 'rgb(60,144,255)' }}>Meet Our Creators:</h1>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.c0GTqHSPgp9rz7Pn2Aw_8wHaF7&pid=Api&P=0&h=180" class="card-img-top" alt="..." height={'250'} />
                                    <div class="card-body">
                                        <h5 class="card-title">Philip </h5>
                                        <p class="card-text">Chief Executive Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://c.pxhere.com/photos/76/4e/business_people_meeting_office_work_corporate_job_male-1079382.jpg!d" class="card-img-top" alt="..." height={'250'} />
                                    <div class="card-body">
                                        <h5 class="card-title">Steve Jaquite</h5>
                                        <p class="card-text">Chief Operating Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d" class="card-img-top" alt="..." height={'250'} />
                                    <div class="card-body">
                                        <h5 class="card-title">Mike Nakoran</h5>
                                        <p class="card-text">Chief Financial Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://wallpapercrafter.com/desktop3/1017357-daniel-craig-businessman-business-males-men-business.jpg" class="card-img-top" alt="..." height={'250'} />
                                    <div class="card-body">
                                        <h5 class="card-title">Jim Starling</h5>
                                        <p class="card-text">Chief Commercial Officer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About