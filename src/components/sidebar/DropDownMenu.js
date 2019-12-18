import React, {Component} from 'react';
import MaterialIcon from '@material/react-material-icon';
import './DropDownMenu.css';

class DropDownMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			menuPosition: {x: 0, y: 0}
		}
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick = (e) => {
		if(this.node.contains(e.target)){
			return;
		}

		this.setState({isOpen: false});
	};

	render() {
		return (
			<div ref={node => this.node = node}>
				<MaterialIcon onClick={(e) => this.setState({isOpen: !this.state.isOpen, menuPosition: {x: e.clientX, y: e.clientY}})} icon='more_vert'/>
				{this.state.isOpen && (
				<div className='menu' style={{left: this.state.menuPosition.x - 50, top: this.state.menuPosition.y + 20}}>
					{this.props.options.map((option, index) => <p key={index} onClick={() => this.props.onOptionClick(index)}>{option}</p>)}
				</div>
				)}
			</div>
		);
	}
}

export default DropDownMenu;