import React from 'react'

export default function page() {
  const metadata = {
    title: "รับทำโฆษณาGoogle Ads สายเทา โฆษณาสายเทาเพื่อธุรกิจของคุณ",
    description: "ทำโฆษณา เว็บไซต์ ต่างๆ ด้วยทีมงานมือถือชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาทจบไม่มีค่าใช้จ่ายใดๆเพิ่มเติมทั้งสิ้น มีรีวิวจากลูกค้าจริงให้ชมไม่บิดไม่ทิ้งงานแน่นอน ทางทีมงานมีการรายงานผลงานทุกวัน",
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

       <meta property="og:url" content="https://service-ads.com"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
    </>
  )
}
