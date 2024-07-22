import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
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
                  <a class="nav-link" href="/Services">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/contact">Contact US</a>
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
                <b>
                <div className="row g-3" style={{ color: 'rgb(60,144,255)' }} >
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder='Enter Email' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Subject</label>
                        <input type="text" className="form-control" placeholder='Enter Subject' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Message</label>
                        <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
                </b>
            </div>
        </div>
        <br /><br />
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div class="card p-0">
                                        <div class="card-body p-0">
                                            <img src="https://www.flydenver.com/app/uploads/2023/09/Customer-Service-01-min.jpg" alt="" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                                        </div>
                                        </div>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <h1 style={{ color: 'rgb(60,144,255)' }}>Our Customer Service Agents are ready to assist you, between 6 a.m.-10:30 p.m.</h1>
                <h5>
                <p>When you connect with our agents, you will know you are in good hands. They are knowledgeable about DEN and the products and services DEN has to offer and can even help you navigate the airport.</p>
                <p><font style={{ color: 'rgb(60,144,255)' }}>Text or Video Chat:</font> (720) 902-9381</p>
                <p><font style={{ color: 'rgb(60,144,255)' }}>Call:</font> (720) 730-IFLY (4359)</p>
                <p><font style={{ color: 'rgb(60,144,255)' }}>Email:</font> info@skylift.com</p>
                <p><button className="btn btn-primary">Call</button></p>
                </h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact