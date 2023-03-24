let url = 'https://docs.google.com/spreadsheets/d/19Ep-TK4Pcqz44gHZ8qd3fvxG6nN_xs5liEmW0COqFJY/gviz/tq?';
const query = encodeURIComponent('SELECT A,B,C,D');
const lkjs = document.querySelector('.lkjs');
const bdsy = document.querySelector('.body');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
  const data = JSON.parse(array());
  const container = document.createElement('pre');
  const mpks = data.table.rows;
  console.log(data.table.rows);
  bdsy.innerHTML = mpks;
  bdsy.append(container);
})
