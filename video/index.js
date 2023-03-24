let url = 'https://docs.google.com/spreadsheets/d/19Ep-TK4Pcqz44gHZ8qd3fvxG6nN_xs5liEmW0COqFJY/gviz/tq?';
const query = encodeURIComponent('SELECT A,B,C,D');
const lkjs = document.querySelector('.lkjs');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
  const data = JSON.parse(rep.substr(47).slice(0,-2));
  const container = document.createElement('div');
  data.table.rows.forEach((main)=>{
    lkjs.append(container);
    console.log(main.c[0]);
    const badak = main.c[0];
    lkjs.innerHTML = badak;
  })
  console.log(data);
  lkjs.append(container);
  lkjs.innerHTML = data.c[0];
})
