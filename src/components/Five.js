import React, { Fragment } from 'react'
import styles from './Five.module.css'
import { useSelector, useDispatch } from 'react-redux'
const Five = () => {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch()
  const increment = () => {
    dispatch({ type: 'INC' })
  }

  // const decrement = () => {
  //   dispatch({ type: 'DEC' })
  // }

  return (
    <Fragment>
      <div className={styles.square}>
        <div className={styles.squareText}>
          Component Five <h3>STATE: {counter}</h3>
          <button className={styles.addButton} onClick={increment}>
            +
          </button>
        </div>
      </div>

      {/* <button onClick={decrement}>Sub</button> */}
    </Fragment>
  )
}
export default Five
