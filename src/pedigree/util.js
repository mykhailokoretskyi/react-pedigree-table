'use strict';

class PedigreeUtil {
    constructor(topField, bottomField){
        this.pedigreeData = [];
        this.topField = topField;
        this.bottomField = bottomField;
    }

    generatePedigreeData(object, depth){
        if (this.pedigreeData.length)
            return this.pedigreeData;

        this.process(obj, depth);
        return this.pedigreeData;
    }

    getMockObject(){
        return {
            [this.topField]: null,
            [this.bottomField]: null
        };
    }

    process(obj, depth){
        if (depth <= 0)
            return;

        if (this.pedigreeData.length == 0)
            this.pedigreeData.push([]);

        let father = obj[this.topField] || new CatModel();
        let mother = obj[this.bottomField] || new CatModel();

        var row = this.pedigreeData[this.pedigreeData.length - 1];
        row.push(father);
        this.process(father, depth - 1);

        this.pedigreeData.push([ mother ]);
        this.process(mother, depth - 1);
    }
}

export default PedigreeUtil;
