# react-pedigree-table

This library helps to build table view of tree object (pet`s pedigree) using ReactJS.

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import Pedigree from 'react-pedigree-table';

// Let`s say, you have a cat:
const tree = {
  name: "Cat",
  mother: {
    name: "Mother cat",
    mother: {...},
    father:{...}
  },
  father: {
    name: "Father cat",
    mother: {...},
    father:{...}
  }
};

/* Lets drow it */
ReactDOM.render(
  <Pedigree pedigreeData={tree}
            cellGenerator={generator}
            leftBranchFieldName={"father"}
            rightBranchFieldName={"mother"}
            depth={5} />, container
);

/* Function which receives a cat instance and returns content of the cell */
function cellGenerator(item){
  return (
    <span>{item.name}</span>
  );
}


```

That`s it!

Have a good time using it...

## V2.0.0 - Util moved into Pedigree
