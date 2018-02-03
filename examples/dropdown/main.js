import React from 'react';
import ReactDOM from 'react-dom';
import callOnClickAway from '../..';

function Dropdown({isOpen, onOpen, onClose, buttonText, children}) {
    const openClass = isOpen ? 'open' : 'closed';
    const className = `dropdown-wrapper dropdown-${openClass}`;
    const menuClassName = `dropmenu dropmenu-${openClass}`;
    return (
        <div className={className}>
            <button onClick={onOpen}>{buttonText}</button>
            <div className={menuClassName} ref={callOnClickAway(onClose)}>
                {children}
            </div>
        </div>
    );
}

class DropdownDemo extends React.Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {isOpen: false};
    }

    render() {
        const {isOpen} = this.state;

        const handleClose = () => {
            this.setState({isOpen: false});
        }

        const handleOpen = () => {
            this.setState({isOpen: true});
        }
        
        return (
            <div>
                <h1>Basic dropdown</h1>
                <p>Dropdown opens when you click the button, and closes if you click elsewhere on the page</p>
                <Dropdown isOpen={isOpen} onOpen={handleOpen} onClose={handleClose} buttonText="Dropdown">
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                </Dropdown>
            </div>
        );
    }
}

ReactDOM.render(<DropdownDemo />, document.querySelector('#root'));