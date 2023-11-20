import { useSelector } from 'react-redux'

import { SortType } from '../../constants'

import classes from './Sorting.module.scss'

export default function Sorting({ className }) {
  const currentSortType = useSelector((state) => state.flights.sortType)
  const sortTypes = Object.values(SortType)

  console.log(currentSortType)

  return (
    <section className={`${className} ${classes['sorting']}`}>
      <ul className={classes['sorting__list']}>
        {sortTypes.map((sortType) => (
          <li className={classes['sorting__item']} key={sortType.id}>
            <input
              type="radio"
              className={classes['sorting__input']}
              id={sortType.id}
              name={sortType.name}
              value={sortType.value}
              defaultChecked={true}
              onChange={(evt) => console.log(evt)}
            />
            <label className={classes['sorting__label']} htmlFor={sortType.id}>
              {sortType.text}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
