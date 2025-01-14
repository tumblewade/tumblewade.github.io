function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
 
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

Plotly.d3.csv('https://tumblewade.github.io/openingData.csv', function(err, rows) {
  if (err) {
      console.error('Error loading CSV:', err);
      return;
  }

  console.log('Loaded data:', rows);

  function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
  }

  var data = [{
      type: 'bar',
      x: unpack(rows, 'Opening Move'),
      y: unpack(rows, '# of Games'),
  }];

  var layout = {
      title: 'Games Played per Opening Move',
  };

  Plotly.plot('barPlot', data, layout);
});
