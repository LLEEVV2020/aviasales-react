import classes from './Sorting.module.scss'

export default function Sorting({ className }) {
  return (
    <section className={`${className} ${classes['sorting']}`}>
      <ul className={classes['sorting__list']}>
        <li className={classes['sorting__item']} key={'sortType.id'}>
          <input
            type="radio"
            className={classes['sorting__input']}
            id={'sortType.id'}
            name={'sortType.name'}
            value={'sortType.value'}
            defaultChecked={true}
            onChange={(evt) => console.log(evt)}
          />
          <label className={classes['sorting__label']} htmlFor={'sortType.id'}>
            {'sortType.text'}
          </label>
        </li>
        <li className={classes['sorting__item']} key={'sortType.id2'}>
          <input
            type="radio"
            className={classes['sorting__input']}
            id={'sortType.id'}
            name={'sortType.name'}
            value={'sortType.value'}
            defaultChecked={false}
            onChange={(evt) => console.log(evt)}
          />
          <label className={classes['sorting__label']} htmlFor={'sortType.id'}>
            {'sortType.text'}
          </label>
        </li>

        <li className={classes['sorting__item']} key={'sortType.id3'}>
          <input
            type="radio"
            className={classes['sorting__input']}
            id={'sortType.id'}
            name={'sortType.name'}
            value={'sortType.value'}
            defaultChecked={false}
            onChange={(evt) => console.log(evt)}
          />
          <label className={classes['sorting__label']} htmlFor={'sortType.id'}>
            {'sortType.text'}
          </label>
        </li>
      </ul>
    </section>
  )
}
