import React, { Fragment } from 'react'
import styles from './Four.module.css'
import Five from './Five'
import { useSelector } from 'react-redux'
const Four = () => {
  const counter = useSelector((state) => state.counter)
  return (
    <Fragment>
      <div className={styles.square}>
        <div className={styles.squareText}>
          {' '}
          Component Four <h3>STATE: {counter}</h3>
        </div>

        <Five />
      </div>
    </Fragment>
  )
}

export default Four
