//import { Flight } from '../Flight/Flight'
import classes from './Airline.module.scss'
import companyLogo from './images/company-logo.png'

export default function Airline({ className }) {
  return (
    <li className={`${className} ${classes['airline']}`}>
      <div className={classes['airline__header']}>
        <div className={classes['airline__price']}>formattedPrice &#8381;</div>
        <div className={classes['airline__company-logo']}>
          <img
            className={classes['airline__logo-image']}
            src={companyLogo}
            width="110"
            height="36"
            alt="company logo"
          />
        </div>
      </div>
      <div className={classes['airline__body']}>
        <ul className={classes['airline__flights-list']}>Flight</ul>
      </div>
    </li>
  )
}
//<Flight className={classes['airline__flights-item']} segment={segment} key={segment.date} />
