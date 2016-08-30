'use strict';

import React from 'react';
import PedigreeCell from './pedigreeCell';
import PedigreeUtil from './pedigreeUtil';

export default class Pedigree extends React.Component {

    static displayName = 'Pedigree';

    static propTypes = {
        pedigreeData:           React.PropTypes.object.isRequired,
        leftBranchFieldName:    React.PropTypes.string.isRequired,
        rightBranchFieldName:   React.PropTypes.string.isRequired,
        depth:                  React.PropTypes.number.isRequired,
        cellGenerator:          React.PropTypes.func
    };

    static defaultProps = {
        cellGenerator:      function(item){
            return (
                <div className="emptyCell" />
            );
        }
    };

    render = () => {
        const util = new PedigreeUtil(this.props.leftBranchFieldName, this.props.rightBranchFieldName);
        const pedigreeData = util.generatePedigreeData(this.props.pedigreeData, this.props.depth);

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
