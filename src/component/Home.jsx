import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <div className="container">
                <Navbar/>
                <br />
                <div className="row" style={{marginTop:'80px'}}>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card text-bg-dark">
                                    <img src="https://airportix.com/wp-content/uploads/2021/05/Dubai-International-Airport-DXB.jpg" class="card-img" alt="..." style={{ opacity: '0.6', backgroundColor: 'rgba(0, 0, 255, 0.5)' }} />
                                    <div class="card-img-overlay">
                                        <h1 class="card-title" style={{ textAlign: 'center', marginTop: '100px'}}>
                                            <p style={{ color: 'rgb(255,269,0)' }}>Welcome To</p>
                                            <p style={{ color: 'rgb(60,144,255)' }}>Skylift</p>
                                            <p><font style={{ color: 'rgb(60,144,255)' }}>I</font>nternational <font style={{ color: 'rgb(60,144,255)' }}>A</font>irport</p>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h1 style={{ color: 'rgb(60,144,255)' }}>3rd Busiest</h1>
                                                <br />
                                                <p>Airport in the US and 6th busiest in the world</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h1 style={{ color: 'rgb(60,144,255)' }}>77.8 Million</h1>
                                                <br />
                                                <p>Passengers served in 2023, an all-time record</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h1 style={{ color: 'rgb(60,144,255)' }}>4+ Million</h1>
                                                <br />
                                                <p>International travelers in 2023, a 21.5% increase as compared to 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h1 style={{ color: 'rgb(60,144,255)' }}>280 Million</h1>
                                                <br />
                                                <p>Pounds of cargo volume in 2023, a 5.9% decrease as compared to 2022 but a 1.4% increase as compared to 2019</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <h1 style={{ color: 'rgb(60,144,255)' }}>Skylift International Airport By The Numbers</h1>
                                <p style={{ fontSize: '1.5rem' }}>Skylift International Airport is one of the busiest airports in the world. With over 77 million passengers traveling through the airport in 2026, SKY is one of the busiest airline hubs in the world’s largest aviation market. SKY is the primary economic engine for the state of Colorado, generating $66.4 billion for the region annually.</p>
                                <p style={{ fontSize: '1.5rem' }}>To balance out the reality of record-setting passengers traveling through SKY, we’ve been working hard to improve our travelers’ experience by opening new, expanded areas throughout the airport.</p>
                            </div>
                        </div>
                        <br /><br />
                        <div className="row g-3">
                            <div class="card" style={{backgroundColor:'black', color:'white'}}>
                                <div class="card-body">
                                    <h1 style={{ textAlign: 'center' }}><b>Our Services</b></h1>
                                    <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card text-bg-dark">
                                                <img src="https://www.flydenver.com/app/uploads/2023/10/Homepage-Wheelchair-min.jpg" class="card-img" alt="..." width={2001} height={400}/>
                                                    <div class="card-img-overlay">
                                                        <h5 className="card-title" style={{ color: 'rgb(60,144,255)', backgroundColor: 'white', padding: '10px', position: 'absolute', bottom: 0, width: '90%', textAlign:'center'  }}><b>Wheelchair Requests</b></h5>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card text-bg-dark">
                                                <img src="https://www.flydenver.com/app/uploads/2023/09/WiFi-and-Technology-Hero.jpg" class="card-img" alt="..." height={400}/>
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title" style={{ color: 'rgb(60,144,255)', backgroundColor: 'white', padding: '10px', position: 'absolute', bottom: 0, width: '90%', textAlign:'center' }}><b>Wifi Facilities</b></h5>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card text-bg-dark">
                                                <img src="https://www.flydenver.com/app/uploads/2023/09/Airport-Facilities-and-Grounds-22-min.jpg" class="card-img" alt="..."/>
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title" style={{ color: 'rgb(60,144,255)', backgroundColor: 'white', padding: '10px', position: 'absolute', bottom: 0, width: '90%', textAlign:'center'   }}><b>Airport Facilities</b></h5>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card text-bg-dark">
                                                <img src="https://www.flydenver.com/app/uploads/2023/09/Lost-and-Found-Hero-1.jpg" class="card-img" alt="..."/>
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title" style={{ color: 'rgb(60,144,255)', backgroundColor: 'white', padding: '10px', position: 'absolute', bottom: 0, width: '90%', textAlign:'center'   }}><b>Lost And Found</b></h5>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card text-bg-dark">
                                                <img src="https://www.flydenver.com/app/uploads/2023/09/Children-and-Families-01.jpg" class="card-img" alt="..."/>
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title" style={{ color: 'rgb(60,144,255)', backgroundColor: 'white', padding: '10px', position: 'absolute', bottom: 0, width: '90%', textAlign:'center'   }}><b>Travelling With Children</b></h5>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card">
                                            <div class="card text-bg-dark">
                                                <img src="https://www.flydenver.com/app/uploads/2023/09/Parking-Lots-05.jpg" class="card-img" alt="..." height={415}/>
                                                    <div class="card-img-overlay">
                                                        <h5 class="card-title" style={{ color: 'rgb(60,144,255)', backgroundColor: 'white', padding: '10px', position: 'absolute', bottom: 0, width: '90%', textAlign:'center'   }}><b>Parking Options</b></h5>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Home