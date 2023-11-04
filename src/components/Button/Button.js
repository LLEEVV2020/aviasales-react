import classes from './Button.module.scss'

export default function Button({ onClick, isShown }) {
  return (
    <button
      className={classes['airline__show-more-button']}
      onClick={onClick}
      style={{ display: isShown ? 'block' : 'none' }}
    >
      Показать еще 5 билетов!
    </button>
  )
}
