let url = 'https://docs.google.com/spreadsheets/d/19Ep-TK4Pcqz44gHZ8qd3fvxG6nN_xs5liEmW0COqFJY/gviz/tq?';
const query = encodeURIComponent('SELECT A,B,C,D');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then((response)=>response.json())
.then((json)=>console.log(json))
