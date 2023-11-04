import React from 'react'
import { Progress } from 'antd'

import Logo from '../Logo'
import Filters from '../Filters'
import Sorting from '../Sorting'
import Airlines from '../Airlines'

import classes from './App.module.scss'

function App() {
  return (
    <section className={classes['app']}>
      <Logo />
      <div className={classes['app__body']}>
        <div className={classes['app__left-column']}>
          <Filters className={classes['app__filters']} />
        </div>
        <div className={classes['app__right-column']}>
          <Sorting className={classes['app__sorting']} />
          <Progress className={classes['app__progress']} percent={7} showInfo={false} strokeColor={'#2196F3'} />
          <Airlines />
        </div>
      </div>
    </section>
  )
}

export default App
