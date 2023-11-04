import Airline from '../Airline/Airline'
//import Button from '../Button'

import classes from './Airlines.module.scss'

export default function Airlines() {
  return (
    <section className={classes['airlines']}>
      <Airline className={classes['airlines__item']} key={'ticket.id'} />
    </section>
  )
}

/*<Button
        onClick={() => setShowedTicketsAmount((prev) => prev + SHOW_TICKETS_PER_CLICK)}
        isShown={tickets.length ? true : false}
      />*/
