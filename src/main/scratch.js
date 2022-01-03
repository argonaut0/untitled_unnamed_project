let blessed = require('blessed');
let contrib = require('blessed-contrib');

let screen = blessed.screen({
  smartCSR: true
});

let line = contrib.line(
  { style:
    { line: "yellow"
    , text: "green"
    , baseline: "black"}
  , xLabelPadding: 3
  , xPadding: 5
  , label: 'Title'});

screen.title = 'untitled_unnamed';

// Create a box perfectly centered horizontally and vertically.
let box = blessed.box({
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  content: 'Hello {bold}world{/bold}!',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'magenta',
    border: {
      fg: '#f0f0f0'
    }
  }
});

// Append our box to the screen.
screen.append(box);

let data = {
  x: ['t1', 't2', 't3', 't4'],
  y: [5, 1, 7, 5]
};

box.append(line) //must append before setting data
line.setData([data])

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();
