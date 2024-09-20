function formatCPF(input) {
  let value = input.value.replace(/\D/g, "");

  if (value.length <= 3) {
    value = value.replace(/^(\d{1,3})$/, "$1");
  } else if (value.length <= 6) {
    value = value.replace(/^(\d{3})(\d{0,3})$/, "$1.$2");
  } else if (value.length <= 9) {
    value = value.replace(/^(\d{3})(\d{3})(\d{0,3})$/, "$1.$2.$3");
  } else {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2})$/, "$1.$2.$3-$4");
  }

  input.value = value;
}

function formatTelefone(input) {
  let value = input.value.replace(/\D/g, "");

  if (value.length <= 11) {
    input.maxLength = 15;
    if (value.length <= 2) {
      value = value.replace(/^(\d{0,2})$/, "($1");
    } else if (value.length <= 7) {
      value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
    } else {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    }
  }

  input.value = value;
}

function formatCurrency(input) {
  let value = input.value.replace(/\D/g, "");

  if (value) {
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    input.value = `R$ ${value}`;
  } else {
    input.value = "";
  }
}
