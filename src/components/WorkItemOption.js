import React, {Component} from 'react';
import './WorkItemOption.css'
import {toJS} from "mobx";
import EditableTitle from "./EditableTitle";
import SimpleBar from 'simplebar-react';

class WorkItemOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            isOpen: false,
            colors: ['#d32f2f', '#7B1FA2', '#2196F3', '#2E7D32', '#F9A825'],
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

    changeValue = (value) => {
        if( value === null || value === '') return;

        this.setState({value: value, isOpen: false});
        if(this.props.onValueChanged) this.props.onValueChanged(value);
    };

    getValue = () => {
        return this.state.value !== undefined && this.state.value !== null ? this.state.value : this.props.default;
    };

    getListValue = () => {
        return this.state.value !== undefined && this.state.value !== null ? this.props.options.find(x => x.id === this.state.value).title : this.props.default;
    };

    renderSelection = (type) => {
        switch (type) {
            case 'ListSelection':
                return <p className='optionContent' onClick={() => this.setState({isOpen: true})}>{this.getListValue()} </p>;
            case 'NumberSelection':
                return	<EditableTitle number singleClick placeholder='0' title={this.state.value} titleChanged={(x) => this.changeValue(x)} className='numSelector'/>;
            case 'ColorSelection':
                return <div className='optionContent' onClick={() => this.setState({isOpen: true})}>
                    <div style={{backgroundColor: this.getValue()}} className='colorOption'/>
                </div>;
            case 'TextSelection':
                return	<EditableTitle singleClick placeholder={this.props.placeholder} title={this.state.value} titleChanged={(x) => this.changeValue(x)} className='numSelector'/>;
            default:
                return <p className='optionContent'>undefined</p>;
        }
    };

    renderSelector = (type) => {
        switch (type) {
            case 'ListSelection':
                return <div><p key={0} className='optionContent' onClick={() => this.changeValue(undefined)}>{this.props.default}</p>
                    {this.props.options.map(x => <p key={x.id} className='optionContent' onClick={() => this.changeValue(x.id)}>{x.title}</p>)}
                </div>;
            case 'NumberSelection':
                break;
            case 'ColorSelection':
                return <div>
                    <div className='optionContent'>
                        <div style={{backgroundColor: '#ccc'}} className='colorOption' onClick={() => this.changeValue(undefined)}/>
                    </div>
                    {this.state.colors.map(x =>
                    <div className='optionContent'>
                        <div style={{backgroundColor: x}} className='colorOption' onClick={() => this.changeValue(x)}/>
                    </div>
                )}
                </div>;
            default:
                return <p className='optionContent'>undefined</p>
        }
    };

    render() {
        return (
            <div className='option' ref={node => this.node = node}>
                <p className='optionTitle'>{this.props.title}</p>
                <div>
                    {this.renderSelection(this.props.type)}
                </div>
                <div className='optionDivider'/>
                {
                    this.state.isOpen &&
                    <SimpleBar className='optionPopup'  forceVisible="x" autoHide="true">
                            {this.renderSelector(this.props.type)}
                    </SimpleBar>
                }
            </div>
        );
    }
}

export default WorkItemOption;