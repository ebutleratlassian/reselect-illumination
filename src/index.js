import React, { Component } from 'react'
import { render } from 'react-dom'
import { Admins } from './Admins'
import { Users } from './Users'
import { Reporters } from './Reporters'
import { AdminBadge } from './AdminBadge'
import { Logs, loggerSpy } from './Logs'

console.log = loggerSpy

const styles = {
  fontFamily: 'sans-serif',
}

let appState = {
  currentUser: 'Alice',
  users: [
    {
      name: 'Alice',
      isAdmin: true,
      reports: 1
    },
    {
      name: 'Bob',
      isAdmin: false,
      reports: 17
    },
    {
      name: 'Cathy',
      isAdmin: false,
      reports: 6
    },
    {
      name: 'Daniel',
      isAdmin: false,
      reports: 25
    },
    {
      name: 'Elaine',
      isAdmin: true,
      reports: 0
    }
  ]
}
class App extends Component {
  state = { showAdmins: true }

  toggle = () => {
    this.setState({ showAdmins: !this.state.showAdmins })
  }

  stateChange = () => {
    alert('You should NOT see any filtering that has already ran since no relevant state changed')
    appState = { ...appState }
  }

  stateShakeUp = () => {
    alert('You should see filtering events again since relevant state changed')
    appState = {
      ...appState,
      users: [...appState.users]
    }
  }

  render() {
    return (
      <div style={styles}>
        <h1>Reselect Examples</h1>
        <AdminBadge state={appState} />
        <Users state={appState} />
        <section style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <button onClick={this.toggle}>Toggle Lists</button>
            <button onClick={this.stateChange}>Non-Impacting State Update</button>
            <button onClick={this.stateShakeUp}>Impacting State Update</button>
            {
              this.state.showAdmins
                ? <Admins state={appState} />
                : <Reporters state={appState} />
            }
          </div>
          <aside style={{ flex: 1 }}>
            <Logs />
          </aside>
        </section>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
