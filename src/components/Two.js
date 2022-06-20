import React from 'react'
import { Fragment } from 'react-is'
import styles from './Two.module.css'
import Three from './Three'
import { useSelector } from 'react-redux'
const Two = () => {
  const counter = useSelector((state) => state.counter)
  return (
    <Fragment>
      <div className={styles.square}>
        <div className={styles.squareText}>
          Component Two <h3>STATE: {counter}</h3>
        </div>

        <Three />
      </div>
    </Fragment>
  )
}
export default Two
