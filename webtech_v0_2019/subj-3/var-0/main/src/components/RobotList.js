import React, { Component } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot.js'

// TODO : adăugați o componentă Robot 
// afișați o componentă Robot pentru fiecare robot din stare 
// o componentă robot ar trebui să afișeze un robot și să permită ștergerea lui

// TODO : add a Robot component 
// show a Robot component for each robot in the state
// a robot component should show a robot and allow deletion of a robot


class RobotList extends Component {
	constructor(){
		super()
		this.state = {
			robots : []
		}
		this.deleteRobot = (id) => {
			this.store.deleteRobot(id)
		}
	}
	componentDidMount(){
		this.store = new RobotStore()
		this.setState({
			robots : this.store.getRobots()
		})
		this.store.emitter.addListener('UPDATE', () => {
			this.setState({
				robots : this.store.getRobots()
			})			
		})
	}

  render() {
	const deleteRobot = async(id)=>{
		this.deleteRobot(id)
	}

    return (
      <div>
      	{
      		this.state.robots.map(robot=><Robot key={robot.id} item={robot} onDelete={deleteRobot}/>)
      	}
      </div>
    )
  }
}

export default RobotList
