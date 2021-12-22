const body = document.querySelector('body');
const div = document.createElement('div');

div.classList.add('color');
body.appendChild(div);

const user = [
  {
    name:'Lena',
    age: 18
  },
  {
    name:'Pasha',
    age: 20
  },
  {
    name:'Vika',
    age: 40
  },
  {
    name:'Misha',
    age: 67
  }
];

user.forEach (({name,age}) => {
  const p = document.createElement('p');

  p.innerText = `Name ${name}, age ${age}.`;
  div.appendChild(p);

  p.onclick = () => {
    p.remove();
  }
});
