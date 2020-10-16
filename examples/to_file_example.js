const fs = require('fs');

const ChartJsImage = require('../index');

const chart = new ChartJsImage();

chart.setConfig({
  type: 'bar',
  data: { labels: ['Hello world', 'Foo bar'], datasets: [{ label: 'Foo', data: [1, 2] }] },
});
chart.setWidth(500).setHeight(300).setBackgroundColor('transparent');

async function saveChart() {
  // Write file to disk
  await chart.toFile('/tmp/chart.png');
}
saveChart();
