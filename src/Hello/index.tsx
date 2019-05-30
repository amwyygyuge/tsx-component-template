import * as React from 'react'
import { Card } from 'antd'
import './../../assets/index.css'
interface HelloProps {
  compiler: string
  framework: string
  test: string
}
const Hello = (props: HelloProps) => (
  <Card>
    <div>
      Hello from {props.compiler} and {props.framework}!</div>
  </Card>
)

export default Hello
