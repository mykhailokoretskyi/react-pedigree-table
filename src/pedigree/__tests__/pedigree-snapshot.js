import React from 'react';
import Pedigree from '../pedigree';
import PedigreeUtil from '../util';
import Cell from '../__mocks__/cell';
import renderer from '../../../node_modules/react/lib/ReactTestRenderer';

var instance = {
    father: {
        father: {
            father: {
                father: {
                    father: {},
                    mother: {}
                },
                mother: {
                    father: {},
                    mother: {}
                }
            },
            mother: {
                father: {
                    father: null,
                    mother: null
                },
                mother: {
                    father: null,
                    mother: null
                }
            }
        },
        mother: {
            father: {
                father: {
                    father: null,
                    mother: null
                },
                mother: {
                    father: null,
                    mother: null
                }
            },
            mother: {
                father: {
                    father: null,
                    mother: null
                },
                mother: {
                    father: null,
                    mother: null
                }
            }
        }
    },
    mother: {
        father: {
            father: {
                father: {
                    father: null,
                    mother: null
                },
                mother: {
                    father: null,
                    mother: null
                }
            },
            mother: {
                father: {
                    father: null,
                    mother: null
                },
                mother: {
                    father: null,
                    mother: null
                }
            }
        },
        mother: {
            father: null,
            mother: {
                father: {
                    father: null,
                    mother: null
                },
                mother: null
            }
        }
    }
};

var util = new PedigreeUtil("father", "mother");
var data = util.generatePedigreeData(instance, 5);
data = util.generatePedigreeData(instance, 5);

describe('Pedigree', () => {
    it('matches snapshot with default generator', () => {
        const component = renderer.create(
            <Pedigree pedigreeData={data} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('matches snapshot with custom', () => {
        const generator = function(item){
            return (
                <div className="item">
                    <span>Real generator</span>
                </div>
            );
        };

        const component = renderer.create(
            <Pedigree pedigreeData={data} cellGenerator={generator} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});