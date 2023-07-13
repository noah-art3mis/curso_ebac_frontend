class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}

let data = [
  {
    nome: 'João',
    nota: 8,
  },
  {
    nome: 'Maria',
    nota: 7,
  },
  {
    nome: 'Pedro',
    nota: 9,
  },
  {
    nome: 'Ana',
    nota: 6,
  },
  {
    nome: 'Carlos',
    nota: 5,
  },
  {
    nome: 'Laura',
    nota: 9,
  },
  {
    nome: 'Tiago',
    nota: 3,
  },
  {
    nome: 'Sofia',
    nota: 8,
  },
  {
    nome: 'Guilherme',
    nota: 7,
  },
  {
    nome: 'Gabriela',
    nota: 10,
  },
];

let array = data.map((item) => new Aluno(item.nome, item.nota));
let filtered = array.filter((aluno) => aluno.nota >= 6);
console.log(filtered);
