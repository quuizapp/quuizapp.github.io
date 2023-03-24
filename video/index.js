let url = 'https://docs.google.com/spreadsheets/d/19Ep-TK4Pcqz44gHZ8qd3fvxG6nN_xs5liEmW0COqFJY/gviz/tq?';
const query = encodeURIComponent('SELECT A,B,C,D');
const lkjs = document.querySelector('body');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const container = document.createElement('div');
    container.setAttribute('class', 'row uvh');
    data.table.rows.forEach((main)=>{
    lkjs.append(container);
    console.log(main.c[0]);
    const imgna = main.c[0];
    console.log(main.c[1]);
    const titlena = main.c[1];
    console.log(main.c[2]);
    const descna = main.c[2];
    console.log(main.c[3]);
    const linkna = main.c[3];

    lkjs.appendChild(lkjs);
  })
  console.log(data);
})
