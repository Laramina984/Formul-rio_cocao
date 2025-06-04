const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmesenha = document.getElementById("confirmesenha");
const telefone = document.getElementById("telefone");
const data = document.getElementById("data");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validarDadosDeEntrada();
  successSubmit();
});

const errorMessage = (input, message) => {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');
  formControl.className = 'form-control error';
  span.innerText = message;
};


const successMessage = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

function validarDadosDeEntrada() {
  if (nome.value.trim() === '') {
    errorMessage(nome, "O nome do usuário deve ser informado");
  } else {
    successMessage(nome);
  }

  if (email.value.trim() === '') {
    errorMessage(email, "O email do usuário deve ser informado");
  } else {
    successMessage(email);
  }

  if (senha.value.trim() === '') {
    errorMessage(senha, "A senha do usuário deve ser informada");
  } else {
    successMessage(senha);
  }

  if (confirmesenha.value.trim() === '') {
    errorMessage(confirmesenha, "A confirmação da senha deve ser informada");
  } else {
    successMessage(confirmesenha);
  }

  if (telefone.value.trim() === '') {
    errorMessage(telefone, "O telefone do usuário deve ser informado");
  } else {
    successMessage(telefone);
  }

  if (data.value.trim() === '') {
    errorMessage(data, "A data de nascimento deve ser informada");
  } else {
    successMessage(data);
  }
}

function successSubmit() {
  const formControls = document.getElementsByClassName('form-control');
  let total = formControls.length;
  let validos = 0;

  for (let i = 0; i < total; i++) {
    if (formControls[i].classList.contains('success')) {
      validos++;
    }
  }

  sendData(total, validos);
}

function sendData(total, validos) {
  if (total === validos) {
    console.log('Dados enviados com sucesso!');
  }
  form.reset();
    Array.from(document.getElementsByClassName("form-control")).forEach((fc) =>
      fc.classList.remove("success")
    );
}
