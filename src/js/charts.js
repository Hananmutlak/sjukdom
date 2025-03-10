// charts.js
import Chart from 'chart.js/auto';

export function renderCharts() {
  const ctx = document.getElementById('covidChart');
  
  fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
    .then(response => response.json())
    .then(data => {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Object.keys(data.cases),
          datasets: [{
            label: 'COVID-19 Cases',
            data: Object.values(data.cases),
            borderColor: $secondary-color,
            tension: 0.4
          }]
        }
      });
    });
}