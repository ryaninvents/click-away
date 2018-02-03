import React from 'react';
import ReactDOM from 'react-dom';
import callOnClickAway from '../..';

function Modal({isOpen, onClose, children}) {
    const className = `modal modal-${isOpen ? 'open' : 'closed'}`;
    return (
        <div className={className} ref={callOnClickAway(onClose)}>
            {children}
        </div>
    );
}

class ModalDemo extends React.Component {
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
                <h1>Basic modal</h1>
                <p>Modal opens when you click the button, and closes if you click elsewhere on the page</p>
                <button onClick={handleOpen}>Open modal</button>
                <div className="demo-wrapper">
                    <Modal isOpen={isOpen} onClose={handleClose}>
                        <h2>Hello world!</h2>
                        <p>Click anywhere inside the modal, and it won't go away.</p>
                        <p>Click outside the modal, and it will close.</p>
                    </Modal>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ModalDemo />, document.querySelector('#root'));