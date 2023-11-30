import { useSelector, useDispatch } from 'react-redux'

import { changeActionFilterType } from '../../store/reducer'
import { FilterType } from '../../constants'

import classes from './Filters.module.scss'

export default function Filters({ className }) {
  const currentFilters = useSelector((state) => state.flights.filters)
  const dispatch = useDispatch()

  const filters = Object.values(FilterType)

  function filtersChangeHandler(evt) {
    const isfilterTypeAllChecked = Boolean(currentFilters.find((filter) => filter.name == FilterType.All.name))
    const isAdding = evt.target.checked

    let updatedFilters = []

    switch (evt.target.value) {
      case FilterType.All.value: {
        if (isAdding) updatedFilters = filters.slice()
        else updatedFilters = []
        break
      }
      default: {
        if (isAdding) {
          const index = filters.findIndex((el) => el.value === evt.target.value)
          updatedFilters = currentFilters.slice()
          updatedFilters.push(filters[index])
          updatedFilters =
            !isfilterTypeAllChecked && updatedFilters.length === filters.length - 1
              ? updatedFilters.concat([FilterType.All])
              : updatedFilters
        } else {
          const index = currentFilters.findIndex((el) => el.value === evt.target.value)
          updatedFilters = [...currentFilters.slice(0, index), ...currentFilters.slice(index + 1)]
          updatedFilters = isfilterTypeAllChecked
            ? updatedFilters.filter((filter) => filter.name !== FilterType.All.name)
            : updatedFilters
        }
        break
      }
    }

    dispatch(changeActionFilterType(updatedFilters))
  }

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
