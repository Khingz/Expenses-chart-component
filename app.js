const chartContainer = document.querySelector('.bar-chart');


window.onload = () => {
  fetch('/data.json')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item, index) => {
        weekExp = data.reduce((a, b) => a + b.amount, 0);
        let chartItems = `<div class="bar-container">
              <div class=${index == 2 ? 'third' : 'bar'} style='height:${
                (item.amount / weekExp) * 921
              }px '></div>
              <span class="bar-figure">$${item.amount}</span>
              <div class="day">${item.day}</div>
              </div>`;
        chartContainer.innerHTML += chartItems;
      });
    })
    .catch(
      (err) => (chartContainer.innerHTML = 'There was an error encountered')
    );
};
