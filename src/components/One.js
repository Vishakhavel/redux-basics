import React, { Fragment } from 'react'
import styles from './One.module.css'
import Two from './Two'
import { useSelector, useDispatch } from 'react-redux'
const One = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  // const increment = () => {
  //   dispatch({ type: 'INC' })
  // }

  const decrement = () => {
    dispatch({ type: 'DEC' })
  }

  return (
    <Fragment>
      <div className={styles.square}>
        <div className={styles.squareText}>
          Component One <h3>STATE: {counter}</h3>
        </div>

        <Two />
        {/* <input
          className={styles.customInput}
          type='text'
          placeholder='Enter value here to see the magic'
        /> */}

        {/* <button onClick={increment}>Add</button> */}
        <button className={styles.subButton} onClick={decrement}>
          Subtract Button from Component One
        </button>
      </div>
    </Fragment>
  )
}

export default One
