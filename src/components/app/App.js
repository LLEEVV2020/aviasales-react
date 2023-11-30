import React from 'react'
import { useSelector } from 'react-redux'
import { Progress, Spin, Space, Alert } from 'antd'

import Logo from '../Logo'
import Filters from '../Filters'
import Sorting from '../Sorting'
import Airlines from '../Airlines'

import classes from './App.module.scss'

function App() {
  const isLoading = useSelector((state) => state.flights.isDataLoadig)
  const loadingProgress = useSelector((state) => state.flights.loadingProgress)
  const error = useSelector((state) => state.flights.error)
  const isError = error ? true : false
  const errorMessage = error?.response?.status ? `${error?.response?.status}: ${error.code}` : error?.code
  const errorDesc = error?.message

  const progressStyles = loadingProgress < 100 && !isError ? { visibility: 'visible' } : { visibility: 'hidden' }

  console.log(isLoading, 'isLoading---app')
  console.log(loadingProgress, 'loadingProgress---app')
  console.log(progressStyles, 'progressStyles---app')
  console.log(errorMessage, 'errorMessage---app')
  console.log(errorDesc, 'errorDesc---app')
  return (
    <section className={classes['app']}>
      <Logo />
      <div className={classes['app__body']}>
        <div className={classes['app__left-column']}>
          <Filters className={classes['app__filters']} />
        </div>
        <div className={classes['app__right-column']}>
          <Sorting className={classes['app__sorting']} />
          <Progress
            className={classes['app__progress']}
            percent={loadingProgress}
            showInfo={false}
            strokeColor={'#2196F3'}
            style={progressStyles}
          />
          {isLoading ? (
            <Space className={classes['app__spinner-container']}>
              <Spin size="large" />
            </Space>
          ) : isError ? (
            <Alert message={errorMessage} description={errorDesc} type="error" />
          ) : (
            <Airlines />
          )}
        </div>
      </div>
    </section>
  )
}

export default App
