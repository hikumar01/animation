var { plot, stack, clear, Plot } = require('nodeplotlib');

const trace1 = {x: [1, 2], y: [1, 2], type: 'scatter'};
const trace2 = {x: [3, 4], y: [9, 16], type: 'scatter'};
plot([trace1, trace2]);