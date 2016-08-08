'use strict';

import React from 'react';
import PedigreeCell from './pedigreeCell';

export default class Pedigree extends React.Component {

    static displayName = 'Pedigree';

    static propTypes = {
        pedigreeData:       React.PropTypes.array.isRequired,
        cellGenerator:      React.PropTypes.func
    };

    static defaultProps = {
        cellGenerator:      function(item){
            return (
                <div className="emptyCell" />
            );
        }
    };

    render = () => {
        const pedigreeData = this.props.pedigreeData;
        const cell = this.props.CellComponent;

        var pedigree = pedigreeData.map((value, rowIndex) => {
            var row = value.map((pet, index) => {
                var span = 1 << (value.length - index - 1);
                return (
                    <PedigreeCell key={index} rowSpan={span}>
                        { this.props.cellGenerator(pet) }
                    </PedigreeCell>
                );
            });
            return (
                <tr key={rowIndex}>
                    { row }
                </tr>
            );
        });

        return (
            <div>
                <table>
                    <tbody>
                        { pedigree }
                    </tbody>
                </table>
            </div>
        );
    };
}
