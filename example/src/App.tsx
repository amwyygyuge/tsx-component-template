import * as React from 'react'
import Hello from './../../dist/'
import { Button, Card } from 'antd'
import './index.css'
class App extends React.Component {
  public render() {
    return (
      <Card title="dadsa">
        <Hello compiler="dadwa" framework="dada" test="s" />
        <Button>dawa</Button>
      </Card>
    )
  }
}

export default App
