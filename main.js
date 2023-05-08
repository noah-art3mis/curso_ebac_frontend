function Animal(patas) {
  this._patas = patas;
}

function Gato(pelo) {
  this._patas = 4;
  Animal.call(this, this._patas);

  this._pelo = pelo;
  this.getCor = () => this._pelo;
  this.setCor = (cor) => {
    this._pelo = cor;
  };
  this.fazSom = () => 'miau';
}

function Cachorro(pelo) {
  this._patas = 4;
  Animal.call(this, this._patas);

  this._pelo = pelo;
  this.getCor = () => this._pelo;
  this.setCor = (cor) => {
    this._pelo = cor;
  };

  this.fazSom = () => 'au';
}

const persefone = new Gato('preto');
const artemis = new Gato('branco');
const pantufa = new Cachorro('branco');

//herança
console.log('\nherança:');
console.log(persefone instanceof Gato);
console.log(artemis instanceof Gato);
console.log(pantufa instanceof Gato);

//encapsulamento
console.log('\nencapsulamento:');
console.log(persefone.getCor());
persefone.setCor('azul');
console.log(persefone.getCor());

//polimorfismo
console.log('\npolimorfismo:');
console.log(persefone.fazSom());
console.log(artemis.fazSom());
console.log(pantufa.fazSom());
