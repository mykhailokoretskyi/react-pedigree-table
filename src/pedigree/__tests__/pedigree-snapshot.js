import React from 'react';
import Pedigree from '../pedigree';
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

describe('Pedigree', () => {
    it('matches snapshot with default generator', () => {
        const component = renderer.create(
            <Pedigree pedigreeData={instance}
                      leftBranchFieldName={"father"}
                      rightBranchFieldName={"mother"}
                      depth={5} />
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
            <Pedigree pedigreeData={instance}
                      cellGenerator={generator}
                      leftBranchFieldName={"father"}
                      rightBranchFieldName={"mother"}
                      depth={5} />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});