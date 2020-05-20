import React from "react"
import { BoxLogo } from './Logo'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-column">
          <div className="footer-item">
            <div className="footer-logo"><BoxLogo></BoxLogo></div>
          </div>
          <div className="footer-item">
            <h4>お問い合わせ</h4>
            <p> 108-8345 東京都港区三田2-15-45</p>
            <p> 電話 03-5427-1621 </p>
            <p>Fax 03-5427-1620</p>
            <p>メールでのお問い合わせ</p>
            <p>info@culnarra.com</p>
            <div id="copyright">
              <p>© 1993-2019 慶應義塾大学アート・センター Keio University Art Center </p>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <a
            className="twitter-timeline"
            href="https://twitter.com/culnarra?ref_src=twsrc%5Etfw"
            data-theme="dark"
            data-height="500"
          >
            Tweets by culnarra
          </a>
        </div>

      </div>
      <style jsx>
          {`
            footer {
              background-color: black;
              color: white;
            }
            .footer-wrap {
               display:flex;
               flex-direction:row;
               justify-content:space-between;
               margin-left: auto;
               margin-right: auto;
            }
            .footer-item{
            }
            .footer-column{
               padding-top:85px;
               padding-bottom:85px;
            }
            .footer-logo {
               max-width:233px;
               height:auto;
            }
          `}
        </style>
    </footer>
  )
}

export default Footer
