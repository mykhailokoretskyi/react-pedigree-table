'use strict';

import React from 'react';

export default class PedigreeCell extends React.Component {

    static displayName = 'PedigreeCell';
    static propTypes = {
        rowSpan:            React.PropTypes.number.isRequired
    };

    render = () => {
        return (
            <td rowSpan={this.props.rowSpan}>
                { this.props.children }
            </td>
        );
    };
}
