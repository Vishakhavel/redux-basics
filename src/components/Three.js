import React, { Fragment } from 'react'
import styles from './Three.module.css'
import Four from './Four'
import { useSelector } from 'react-redux'
const Three = () => {
  const counter = useSelector((state) => state.counter)
  return (
    <Fragment>
      <div className={styles.square}>
        <div className={styles.squareText}>
          Component Three
          <h3>STATE: {counter}</h3>
        </div>

        <Four />
      </div>
    </Fragment>
  )
}

export default Three
