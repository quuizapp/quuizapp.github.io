let url = 'https://docs.google.com/spreadsheets/d/19Ep-TK4Pcqz44gHZ8qd3fvxG6nN_xs5liEmW0COqFJY/gviz/tq?';
const query = encodeURIComponent('SELECT A,B,C,D');
const lkjs = document.querySelector('.lkjs');
const bdsy = document.querySelector('.body');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
  const data = array();
  const container = document.createElement('pre');
  const mpks = data.table.rows;
  const buls = json_encode(array('video' => mpks));
  bdsy.innerHTML = buls;
  console.log(buls);
  bdsy.append(container);
})
