import { useState } from 'react'
import { useSelector } from 'react-redux'

import Airline from '../Airline'
import Button from '../Button'

import classes from './Airlines.module.scss'

const TICKETS_PAGE = 5
const SHOW_TICKETS_CLICK = 5

export default function Airlines() {
  const [showedTicketsAmount, setShowedTicketsAmount] = useState(TICKETS_PAGE)
  const allTickets = useSelector((state) => state.flights.currentTickets)
  const tickets = allTickets.slice(0, showedTicketsAmount)
  return (
    <section className={classes['airlines']}>
      {tickets.length === 0 ? (
        <p className={classes['airlines__no-flights']}>Рейсов, подходящих под заданные фильтры, не найдено.</p>
      ) : (
        <ul className={classes['airlines__list']}>
          {tickets.map((ticket) => (
            <Airline className={classes['airlines__item']} ticket={ticket} key={ticket.id} />
          ))}
        </ul>
      )}

      <Button
        onClick={() => setShowedTicketsAmount((prev) => prev + SHOW_TICKETS_CLICK)}
        isShown={tickets.length ? true : false}
      />
    </section>
  )
}
