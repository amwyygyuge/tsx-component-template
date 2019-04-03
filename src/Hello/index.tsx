import React from 'react'
import { Card } from 'antd'
import './../../static/index.css'
export interface HelloProps {
	compiler: string
	framework: string
}
const Hello = (props: HelloProps) => (
	<Card>
		<div>
			Hello from {props.compiler} and {props.framework}!
		</div>
	</Card>
)

export default Hello
