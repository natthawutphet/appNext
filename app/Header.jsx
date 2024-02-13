import React from 'react'


function header() {
  return (
    <>
 
      <header>

    <div className="container">
      <div className="page-banner home-banner">
        <div className="row align-items-center flex-wrap-reverse h-100">
          <div className="col-md-6 py-5 wow fadeInLeft">
            <h1 className="mb-4">โฆษณาออนไลน์สายเทาเพื่อธุรกิจของคุณ</h1>
            <p className="text-lg text-grey mb-5">ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook</p>
            <a href="https://www.youtube.com/channel/UCMSh0LMC_RczXmJ6Qtxo4QA" className="btn btn-primary btn-split">Watch Video <div className="fab"><span className="mai-play"></span></div></a>
          </div>
          <div className="col-md-6 py-5 wow zoomIn">
            <div className="img-fluid text-center">
              <img src="/img/facebook_ads.jpg" width="100%" alt="facebook_ads"/>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </header>
    </>
  )
}

export default header
