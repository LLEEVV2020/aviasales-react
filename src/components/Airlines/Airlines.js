import Airline from '../Airline'
import Button from '../Button'

import classes from './Airlines.module.scss'

export default function Airlines() {
  return (
    <section className={classes['airlines']}>
      <Airline className={classes['airlines__item']} key={'ticket.id1'} />
      <Airline className={classes['airlines__item']} key={'ticket.id2'} />
      <Airline className={classes['airlines__item']} key={'ticket.id3'} />

      <Button onClick={() => {}} isShown={true} />
    </section>
  )
}
