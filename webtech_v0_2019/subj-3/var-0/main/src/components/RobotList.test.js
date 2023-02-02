import React from 'react'
import ReactDOM from 'react-dom'
import RobotList from './RobotList'
import Robot from './Robot'
import { shallow, mount, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

it ('renders a list of robots', () => {
	const component = shallow(<RobotList />)
	expect(component.find(Robot).length).toEqual(2)	
})

it ('valid props on robot', () => {
	const component = mount(<RobotList />)
	let firstRobot = component.find(Robot).first()
	expect(firstRobot.props().item).toEqual({"id": 1, "mass": 1000, "name": "tim", "type": "worker"})
	expect(typeof firstRobot.props().onDelete).toEqual('function')
})

it ('delete a robot', () => {
	const component = mount(<RobotList />)
	let firstRobot = component.find(Robot).first()
	let button = firstRobot.find('[value="delete"]').first()
	button.simulate('click')
	expect(component.find(Robot).length).toEqual(1)	
})

