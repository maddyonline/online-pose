import React from 'react'
import MyApp from './live-video'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, handlePoses }) => {
  return <div className={styles.test}>Component: {text}
    <div><MyApp handlePoses={handlePoses} /></div>
  </div>
}
