import { useSelector, useDispatch } from 'react-redux'

import { changeFilterTypeAction } from '../../store/reducer'
import { FilterType } from '../../constants'

import classes from './Filters.module.scss'

export default function Filters({ className }) {
  const currentFilters = useSelector((state) => state.flights.filters)
  const dispatch = useDispatch()

  const state2 = useSelector((state) => state.flights)
  console.log(currentFilters, 'hhhhhhh')
  console.log(state2, 'aaaaaa')

  const filters = Object.values(FilterType)
  function filtersChangeHandler(evt) {
    const isfilterTypeAllChecked = Boolean(currentFilters.find((filter) => filter.name == FilterType.All.name))
    const isAdding = evt.target.checked
    console.log(isAdding, 'isAdding')
    console.log(isfilterTypeAllChecked, 'isfilterTypeAllChecked')
  }

  dispatch(changeFilterTypeAction(currentFilters))

  return (
    <section className={`${className} ${classes['filters']}`}>
      <h2 className={classes['filters__title']}>Количество пересадок</h2>
      <ul className={classes['filters__list']}>
        {filters.map((filter) => (
          <li className={classes['filters__item']} key={filter.name}>
            <input
              type="checkbox"
              className={classes['filters__input']}
              id={filter.name}
              name={filter.name}
              value={filter.value}
              checked={currentFilters.find((el) => el.value === filter.value) ? true : false}
              onChange={filtersChangeHandler}
            />
            <label className={classes['filters__label']} htmlFor={filter.name}>
              {filter.text}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
