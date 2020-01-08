import React, {Component} from 'react';
import './WorkItemOption.css'

class WorkItemOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    renderSelection = (type) => {
        switch (type) {
            case 'ListSelection':
                return <p className='optionContent'>{this.state.value === undefined ? this.props.default : this.state.value}</p>;
            case 'NumberSelection':
                return <p className='optionContent'>{this.state.value === undefined ? this.props.default : this.state.value}</p>;
            case 'ColorSelection':
                return <div className='optionContent'><div style={{backgroundColor: this.value === undefined ? this.props.default : this.value}} className='colorOption'/></div>;
            default:
                return <p className='optionContent'>undefined</p>
        }
    };


    render() {
        return (
            <div className='option'>
                <p className='optionTitle'>{this.props.title}</p>
                {this.renderSelection(this.props.type)}
                <div className='optionDivider'/>
            </div>
        );
    }
}

export default WorkItemOption;