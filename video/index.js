let url = 'https://docs.google.com/spreadsheets/d/19Ep-TK4Pcqz44gHZ8qd3fvxG6nN_xs5liEmW0COqFJY/gviz/tq?';
const query = encodeURIComponent('SELECT A,B,C,D');
const lkjs = document.querySelector('#body');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
  const data = JSON.parse(rep.substr(47).slice(0,-2));
  const container = document.createElement('.body');
  data.table.rows.forEach((main)=>{
    lkjs.append(container);
    const huah = document.createElement(body);
    huah.innerHTML = data;
    lkjs.appendChild(huah);
  })
  console.log(data);
})
