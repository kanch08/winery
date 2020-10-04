import { autobind } from 'core-decorators';
import React, { Component, Children, cloneElement } from 'react';

import ModalWrapper from './ModalWrapper';

export default class ModalTrigger extends Component {
    state = {
        toggled: false
    }

    open(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ toggled: true });
    }

    close() {
        this.setState({ toggled: false });
    }

    render() {
        const { children } = this.props;

        // ensure that we have only one child (control element)
        return [
            <ModalWrapper {...this.props} show={this.state.toggled} onHide={this.close} key="modal-dialog" />
        ];
    }
}