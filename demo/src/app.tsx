import React, { Component, Fragment } from 'react'
import Hello from './../../dist/'
import { Button, Card } from 'antd'
import './index.less'
class App extends Component {
	render() {
		return (
			<Card title='dwda'>
				<Hello compiler='1' framework={100} />
				<Button>dawa</Button>
			</Card>
		)
	}
}

export default App
