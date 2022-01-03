let blessed = require('blessed');
let contrib = require('blessed-contrib');

let screen = blessed.screen()

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
})




screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

screen.render();
