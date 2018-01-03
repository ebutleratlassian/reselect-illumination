import React, { Component } from 'react'

window.logs = []

export const loggerSpy = function(msg) {
  window.logs = [...window.logs, msg]
}

const styles = {
  list: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  li: {
    opacity: 0,
    animation: 'fadein .5s forwards',
  },
  filtering: {
    background: '#FF4136',
  },
  selecting: {
    background: 'lightblue',
  },
  rendering: {
    background: '#FFDC00',
  },
}

export class Logs extends Component {
  render() {
    return (
      <div>
        <h3>Selector and Lifecycle Events</h3>
        <ol style={styles.list}>
          {window.logs.map((loggee, index) => {
            let logStyles = { ...styles.li }

            if (loggee.indexOf('Filtering') !== -1) {
              logStyles = { ...logStyles, ...styles.filtering }
            }
            if (loggee.indexOf('Selecting') !== -1) {
              logStyles = { ...logStyles, ...styles.selecting }
            }
            if (loggee.indexOf('Rendering') !== -1) {
              logStyles = { ...logStyles, ...styles.rendering }
            }

            return (
              <li key={loggee + index} style={logStyles}>
                {loggee}
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}
