import classes from './Filters.module.scss'

export default function Filters({ className }) {
  function filtersChangeHandler(evt) {
    console.log(evt)
  }

  return (
    <section className={`${className} ${classes['filters']}`}>
      <h2 className={classes['filters__title']}>Количество пересадок</h2>
      <ul className={classes['filters__list']}>
        <li className={classes['filters__item']}>
          <input
            type="checkbox"
            className={classes['filters__input']}
            id={'test1'}
            name={'test1'}
            value={'test1'}
            checked={true}
            onChange={filtersChangeHandler}
          />
          <label className={classes['filters__label']} htmlFor={'filter.name'}>
            {'все'}
          </label>
        </li>

        <li className={classes['filters__item']}>
          <input
            type="checkbox"
            className={classes['filters__input']}
            id={'test1'}
            name={'test1'}
            value={'test1'}
            checked={true}
            onChange={filtersChangeHandler}
          />
          <label className={classes['filters__label']} htmlFor={'filter.name'}>
            {'часть'}
          </label>
        </li>
      </ul>
    </section>
  )
}
