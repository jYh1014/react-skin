import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { SketchPicker } from 'react-color'
import { Pagination, Tabs, Button } from 'antd'
const TabPane = Tabs.TabPane
class Color extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Pagination defaultCurrent={6} total={500} />
        <br />
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
        <br />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <br />
        <br />
        <SketchPicker />
      </div>
    )
  }
}
export default Color