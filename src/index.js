import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'  <Provider>
import './index.css'

import App from './components/app'
//import store from './store/store'
import { createApi } from './api'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

//()(console.log("dddddssaa"))

let fggfgg = createApi()
let jjjjjjjj = fggfgg()
  .then((film) => {
    console.log(film.data.searchId)
    return film.data.searchId
  })
  .then((film2) => {
    console.log(film2, "jhjjjj")
  })
  .catch((err) => {
    console.error('Отсутствие фильмов', err)
  })
console.log(jjjjjjjj)

/*
import { createStore } from 'redux'
//bindActionCreators - https://platform.kata.academy/user/courses/3/3/4/10

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'RND':
      return state + action.payload
    default:
      return state
  }
}

const store = createStore(reducer)
const { dispatch } = store
const inc = () => ({ type: 'INC' })
const rnd = (payload) => {
  return { type: 'RND', payload }
}

// subscribe - после каждого изменения, будет вызываться этот код
store.subscribe(() => {
  console.log(store.getState())
})

// производит изменение
dispatch(inc())
dispatch(inc())

const payload = Math.floor(Math.random() * 10) // ще 0 до 9
dispatch(rnd(payload))
*/
/*
let state = reducer(undefined, {})
state = reducer(state, { type: 'INC' })
console.log(state)
state = reducer(state, { type: 'INC' })
console.log(state)
*/
