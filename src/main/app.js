let blessed = require('blessed');
let contrib = require('blessed-contrib');

let screen = blessed.screen();

let grid = new contrib.grid({rows: 14, cols: 14, screen: screen});

let statdisp = grid.set(0, 0, 3, 5, contrib.donut, 
  {
  label: 'Status',
  radius: 8,
  arcWidth: 3,
  yPadding: 1,
  data: [
    {label: 'HP', percent: 87, color: 'red'},
    {label: 'MP', percent: 35, color: 'blue'},
    {label: 'STA', percent: 92, color: 'green'},
  ]
});

let invdisp = grid.set(0, 5, 3, 6, contrib.table,
  {
    keys: true,
    fg: 'white',
    selectedFg: 'white',
    selectedBg: 'blue',
    interactive: true,
    label: 'Inventory',
    width: '30%',
    height: '30%',
    border: {type: "line", fg: "cyan"},
    columnSpacing: 10,
    columnWidth: [16, 12, 12] /*in chars*/
  });

invdisp.setData(
  {
    headers: ['Item', 'Weight', 'Count'],
    data: 
    [
      ["Supplies", 1, 10],
      ["Arrows", 3, 5]
    ]
  });

invdisp.focus()

let storylog = grid.set(3, 0, 5, 11, contrib.log,
  {
    fg: "green",
    label: "Journal",
  });

const loremIpsum = require("lorem-ipsum").loremIpsum;


screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

screen.render();

setInterval(logthings, 1000)

function logthings() {
  storylog.log(loremIpsum());
}
