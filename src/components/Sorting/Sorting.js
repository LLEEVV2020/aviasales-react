import { useSelector, useDispatch } from 'react-redux'

import { changeActionSortType } from '../../store/reducer'
import { SortType } from '../../constants'

import classes from './Sorting.module.scss'

export default function Sorting({ className }) {
  const currentSortType = useSelector((state) => state.flights.sortType)
  const dispatch = useDispatch()
  const sortTypes = Object.values(SortType)

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
              defaultChecked={sortType.id === currentSortType.id}
              onChange={(evt) => dispatch(changeActionSortType(SortType[evt.target.value]))}
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
