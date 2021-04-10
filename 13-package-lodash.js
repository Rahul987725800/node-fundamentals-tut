const _ = require('lodash');
console.log(_.range(0, 10));
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
