import Airline from '../Airline'
import Button from '../Button'

import classes from './Airlines.module.scss'

export default function Airlines() {
  return (
    <section className={classes['airlines']}>
      <Airline className={classes['airlines__item']} key={'ticket.id'} />
      <Airline className={classes['airlines__item']} key={'ticket.id'} />
      <Airline className={classes['airlines__item']} key={'ticket.id'} />

      <Button onClick={() => {}} isShown={true} />
    </section>
  )
}
