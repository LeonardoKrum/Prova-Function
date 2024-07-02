let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let soma = 0;
let media = 0;
let maiorNota = notas[0];
let menorNota = notas[0];
let notasAcimaMedia = 0;
let notasAbaixoMedia = 0;

function total(num) {
    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }
    return soma;
}
function Media(array) {
    for (let i = 0; i < array.length; i++) {
        media += array[i];
    }
    media = media / array.length;
    return media;
}

function Maior(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNota) {
            maiorNota = array[i];
        }
    }
    return maiorNota;
}

function Menor(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menorNota) {
            menorNota = array[i];
        }
    }
    return menorNota;
}

function Acima(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 6) {
            notasAcimaMedia++;
        }
    }
    return notasAcimaMedia;
}
function Abaixo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 6) {
            notasAbaixoMedia++;
        }
    }
    return notasAbaixoMedia;
}
function adicionar(array) {
    notas.push(8.0);
}

function imprimir(array) {
    for (let i = 0; i < notas.length; i++) {
        console.log(notas[i]);
    }
}

adicionar();
console.log(total());
console.log(Maior());
console.log(Menor());
console.log(`temos ${Acima()} notas acima da média`);
console.log(`temos ${Abaixo()} notas abaixo da média`);
console.log(`aqui está a lista de notas:`);
imprimir();
