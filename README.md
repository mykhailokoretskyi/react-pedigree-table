# react-pedigree-table

This library helps to build table view of tree object (pet`s pedigree) using ReactJS.

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Pedigree, PedigreeUtil } from 'react-pedigree-table';

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


/* Let`s create an instance of util with following parameters: field names of branches of the tree  */
const util = new PedireeUtil("father","mother");

/* Now we can build the data for pedigree: @tree - tree instance, @depth - depth of the tree to process  */
const pedigreeData = util.generatePedigreeData(tree, 4);

/* Lets drow it */
ReactDOM.render(
  <Pedigree pedigreeData={pedigreeData} cellGenerator={cellGenerator} />, container
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
