import React from 'react'

export default function page() {
    const metadata = {
        title: "ติดต่อทีมงานบริการ การตลาดGoogleYouTubeFacebook",
        description: "ติดต่อทีมงานบริการโฆษณาออนไลน์ ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook",
        keyword: "รับยิงแอดสายเทา รับทำโฆษณาสายเทา,รับทำโฆษณาFacebook,รับทำโฆษณาGoogle,รับยิงแอดโฆษณาสายเทา,รับยิงโฆษณาสายเทา,รับยิงแอดสายเทา,รับโฆษณาFacebook,รับโฆษณาGoogle,จ้างยิงโฆษณา,จ้างยิงแอดโฆษณา,จ้างยิงแอด,รับจ้างทำโฆษณา,สายเทา,ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,สอนยิงแอด,สอนยิงแอด Conversion,สอนยิงแอดสายเทา,ยิงแอดสายเทา,ยิงโฆษณาสายเทา,รับทำ seo สายเทา,รับทำ seo สายดำ,แอดสายเทา,รับยิงแอดสายเทา,กูเกิ้ลแอดสายเทา,รับทํา google ads,สายเทา seo สายเทา,ตลาดสีเทา,แอดสีเทา,adsสีเทา,กราฟฟิกสายเทา,ยิงแอดเทา,รับยิงแอดfacebookสายเทา,รูปยิงแอดสายเทา,รับจ้างสายเทา,รับโฆษณาสายเทา"
      };
    
      return (
        <>
    
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keyword} />
    
            <meta name="robots" content="index, follow"/>
      <meta name="googlebot" content="index, follow"/>
      <link rel="shortcut icon" href="/img/logo.png" type="image/x-icon"/>
       <link rel="icon" href="/img/logo.png"/> 
       <meta property="og:image" content="/img/logo.jpg"/>
<div className="container contact-page text-center">
    <h2>Contact </h2>
    <h3>ติดต่อทีมงานบริการ การตลาดGoogleYouTubeFacebook</h3>
    <div className="contact-wrapper">
        <div className="form-container">
            <form>
                <input type="text" className="form-control" placeholder="Your Name" /> <br />
                <input type="email" className="form-control" placeholder="Your Email" /><br />
                <textarea placeholder="Your Message" className="form-control"></textarea><br />
                <button type="submit" className="btn btn-info">Send Message</button>
            </form>
        </div>


        <div className="contact-info">
            <p><strong>Address:</strong> Ads Manager 32 Soi 20 Charoenrat Road, <br /> Khlong San District, Bangkok 10160</p>
            <p><strong>Phone:</strong> 0956650050</p> 
            <p><strong>Email:</strong> admin@AdsManager.com</p>
            <p>  <a href="https://lin.ee/JwrDPgA"><img src="/img/line.gif" alt="เพิ่มเพื่อน" width="250" /></a> </p>
            <p> line : @adsmanager </p>
            <a href="tel:0956650050">0956650050</a>
            <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.24115425551034!2d100.50364817151504!3d13.727017342579831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298e65736379f%3A0x1c4595d6cd385a7a!2zMjAg4LiWLiDguYDguIjguKPguLTguI3guKPguLHguJYg4LmB4LiC4Lin4LiH4LiE4Lil4Lit4LiH4LiV4LmJ4LiZ4LmE4LiX4LijIOC5gOC4guC4leC4hOC4peC4reC4h-C4quC4suC4mSDguIHguKPguLjguIfguYDguJfguJ7guKHguKvguLLguJnguITguKMgMTA2MDA!5e0!3m2!1sth!2sth!4v1696165782576!5m2!1sth!2sth"  /* Insert your Google Maps embed link here */
                width="100%" 
                height="200" 
                frameBorder="0" 
              
                aria-hidden="false" 
              
            ></iframe>
        </div>
    </div>
</div>

     
    </>
  )
}


