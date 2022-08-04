import React from 'react'
// import Link from 'next/link';


const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h2>About Us</h2>
          <p>Capristo has pioneered a variety of improvements in the design of performance exhaust systems and carbon fiber accessories.</p>
          <p>100 Sharpstown Center, suite #1168, Houston, Texas 77036</p>
          {/* <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p> */}
        </div>

        <div className="right">
          <h2>Contact Us</h2>
          <p>Instagram: @aaaaa</p>
          <p>Phone Numbers: 333-333-333</p>
          <p>Email: aaaa@gmail.com</p>

          {/* <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link> */}
      
        </div>

      </div>
    </div>
  )
}

export default FooterBanner