$(document).ready( () => {
  $('#telefone').mask('(00) 00000-0000', {
	  placeholder: '(61) 12345-6789'
  });
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('000.000.000-00');

  // n funciona?
  // $('form').validate({
  //   rules: {
  //     nome: {
  //       required: true
  //     },
  //     email: {
  //       required: true,
  //       email: true
  //     },
  //     telefone: {
  //       required: true
  //     },
  //     cpf: {
  //       required: true
  //     },
  //     endereco: {
  //       required: true
  //     },
  //     cep: {
  //       required: true
  //     }
  //   }
  // });
});