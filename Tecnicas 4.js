//Contador de palabras
console.log("Tecnicas_4.js cargado correctamente");

class EditorTexto{
ContadorPalabras(Texto){
    let Cp=0; 
    let i=0; let dentroPalabra= false;
    while (i<Texto.length) {
        if(Texto[i]!== " " && !dentroPalabra){
            Cp++;
            dentroPalabra=true;
        }else if(Texto[i]=== " "){
            dentroPalabra=false;
        }
        i++;
    }
    return Cp;
}
//console.log ("El texto Tiene " + ContadorPalabras("Hola mundo desde Quito")+ " Palabras.");

Contarsignos(Texto){
    let cS=0; let i=0; 
    let signosPuntuacion=".,:;!?¡¿"; let Encontrado=false;
    while (i<Texto.length) {
        let j=0;
        while (j<signosPuntuacion.length) {
            if(Texto[i]===signosPuntuacion[j]){
                cS++;
                Encontrado=true;
            }
            j++;
        }
        i++;
    }
    return cS;
}
//console.log("El texto Tiene "+Contarsignos("Hola, ¿cómo estás?")+" Consonantes")

ContarVocales(Texto){
    let vocales=['a','e','i','o','u','A','E','I','O','U','á','é','í','ó','ú','Á','É','Í','Ó','Ú'];
    let i=0; let cV=0;
    while (i<Texto.length){
        let j=0;
        while(j<vocales.length){
            if(Texto[i]===vocales[j]){
                cV++;
            }
            j++
        }
        i++
    }
    return cV;
}
//console.log("El texto Tiene "+ ContarVocales("Educación")+" Vocales")


contarConsonantes(Texto){
    let cC=0; let i=0;
    let consonantes=['b','c','d','f','g','h','j','k','l','m','n','ñ','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N','Ñ','P','Q','R','S','T','V','W','X','Y','Z'];
    while(i<Texto.length){
        let j=0;
        while (j<consonantes.length) {
            if(Texto[i]=== consonantes[j]){
                cC++;
            }
            j++
        }
        i++
    }
    return cC;
}

contarDigitos(Texto){
    let cD=0; let i=0; 
    let digitos=['0','9','8','7','6','5','4','3','2','1'];
    while(i<Texto.length){
        let j=0;
        while (j<digitos.length) {
            if(Texto[i]=== digitos[j]){
                cD++;
            }
            j++
        }
        i++
    }
    return cD;
}
//console.log(contarDigitos("Mi clave es 1234"));

Contarmayusculas(texto){
    let i=0; let cM=0; let dentroPalabra=false;
    while (i < texto.length){
        if (texto[i] !== " " && !dentroPalabra){
            dentroPalabra = true;
            if (texto[i] >= "A" && texto[i] <= "Z"){
                cM++;
            }
        } else if (texto[i] === " "){
            dentroPalabra = false;
        }
        i++;
    }
    return cM;
}

//console.log (Contarmayusculas("Hola mundo Bonito"));

contarMinusculas(texto){
        let Cm=0; let i=0; let dentroPalabra=false;
            while (i < texto.length){
        if (texto[i] !== " " && !dentroPalabra){
            dentroPalabra = true;
            if (texto[i] >= "a" && texto[i] <= "z"){
                Cm++;
            }
        } else if (texto[i] === " "){
            dentroPalabra = false;
        }
        i++;
    }
    return Cm;
}
//console.log(contarMinusculas("hola Mundo bonito"));

contarParrafos(Texto) {
    let cP = 0;
    let i = 0;

    while (i < Texto.length - 1) {
        // Detecta salto de línea doble (párrafo vacío entre dos líneas)
        if (Texto[i] === '\n' && Texto[i + 1] === '\n') {
            cP++;
            i++; // Salta el segundo \n
        }
        i++;
    }

    // Si hay texto, cuenta el último párrafo
    if (Texto.trim().length > 0) {
        cP++;
    }

    return cP;
}
//console.log(contarParrafos("Hola mundo. Esto es un segundo párrafo."));

Invertido(Texto){
    let i = Texto.length - 1; let Invertida ='';
    while(i >= 0){
        Invertida += Texto[i];
        i--;
    }
    return Invertida;
}
//console.log(Invertido("Hola"));

contarCaracteres(Texto) {
    let vocales = 0, consonantes = 0, digitos = 0, signos = 0, espacios = 0;
    let mayusculas = 0, minusculas = 0, palabras = 0;

    const esVocal = c => "aeiouáéíóúAEIOUÁÉÍÓÚ".includes(c);
    const esLetra = c => (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || "ñÑ".includes(c);
    const esMayuscula = c => (c >= 'A' && c <= 'Z') || "ÁÉÍÓÚÑ".includes(c);
    const esMinuscula = c => (c >= 'a' && c <= 'z') || "áéíóúñ".includes(c);

    for (let i = 0; i < Texto.length; i++) {
        const c = Texto[i];

        if (c === ' ' || c === '\n' || c === '\t') {
            espacios++;
            continue;
        }

        if (c >= '0' && c <= '9') {
            digitos++;
            continue;
        }

        if (esLetra(c)) {
            if (esVocal(c)) vocales++;
            else consonantes++;

            if (esMayuscula(c)) mayusculas++;
            else if (esMinuscula(c)) minusculas++;
        } else {
            signos++;
        }
    }
    palabras = Texto.trim().length ? Texto.trim().split(/\s+/).length : 0;
    const total = vocales + consonantes + digitos + signos + espacios;
    return {
        vocales,
        consonantes,
        digitos,
        signos,
        espacios,
        mayusculas,
        minusculas,
        palabras,
        total
    };

//console.log("Vocales: " + cV);
//console.log("Consonantes: " + cC);
//console.log("Dígitos: " + cD);
//console.log("Signos: " + cS);
//console.log("Espacios: " + cEsp);
//console.log("Mayúsculas: " + cM);
//console.log("Minúsculas: " + cm);
//console.log("Palabras: " + cPalabras);
//console.log("Total caracteres evaluados: " + cE);
}
//contarCaracteres("Hola mundo. ¿Cómo estás? Tengo 2 gatos.")

buscarPalabra(Texto, palabra){
    let i = 0;
    while (i <= Texto.length - palabra.length){
        let j = 0;
        while (j < palabra.length && Texto[i + j] === palabra[j]){
            j++;
        }
        if (j === palabra.length){
            return "La palabra '" + palabra + "' se encuentra en el texto.";
        }
        i++;
    }
    return "La palabra '" + palabra + "' NO se encuentra en el texto.";
}
//console.log(buscarPalabra("Hola mundo", "mundo"));
//console.log(buscarPalabra("Hola mundo", "perro"));

contarCaracterEspecifico(Texto, Caracter){
    let i = 0; let c = 0;
    while(i < Texto.length){
        if(Texto[i] === Caracter){
            c++;
        }
        i++;
    }
    console.log(`El carácter "${Caracter}" aparece ${c} veces en la palabra "${Texto}"`);
    return c++
}
//contarCaracterEspecifico('Hola mundo', 'o');

contarCaracteresPares(Texto){
    let i = 0; let c = 0;
    while(i < Texto.length){
        if(i % 2 === 0){
            c++;
        }
        i++;
    }
    return c++
    //console.log(`El texto "${Texto}" tiene ${c} caracteres en posiciones pares`);
}
//contarCaracteresPares('Hola');

contarCaracteresImpares(Texto){
    let i = 0; let c = 0;
    while(i < Texto.length){
        if(i % 2 !== 0 && i > 0){
            c++;
        }
        i++;
    }return c++
    //console.log(`El texto "${Texto}" tiene ${c} caracteres en posiciones impares`);
}

//contarCaracteresImpares('Hola');

añadirTextoInicioFinal(Texto, Fragmento){
    let TextoModificadoInicio = Fragmento + " " + Texto;
    let TextoModificadoFinal = Texto + " " + Fragmento;
    console.log("Al inicio: " + TextoModificadoInicio);
    console.log("Al final: " + TextoModificadoFinal);
    return {
        inicio: TextoModificadoInicio,
        final: TextoModificadoFinal
    };
}
//añadirTextoInicioFinal("Aprender programación", "Hoy"); */
}
let editor = new EditorTexto();
console.log(editor.ContadorPalabras("Hola mundo desde Quito"));
console.log(editor.Contarsignos("Hola, ¿cómo estás?"));
console.log(editor.ContarVocales("Educación"));
console.log(editor.contarConsonantes("Hola"));
console.log(editor.contarDigitos("Mi clave es 1234"));
console.log(editor.Contarmayusculas("Hola mundo Bonito"));
console.log(editor.contarMinusculas("hola Mundo bonito"));
console.log(editor.contarParrafos("Hola mundo. Esto es un segundo párrafo."));
console.log(editor.Invertido("Hola"));
console.log(editor.contarCaracteres("Hola mundo. ¿Cómo estás? Tengo 2 gatos."));
console.log(editor.buscarPalabra("Hola mundo", "mundo"));
console.log(editor.buscarPalabra("Hola mundo", "perro"));
console.log(editor.contarCaracterEspecifico("Hola mundo", "o"));
console.log(editor.contarCaracteresPares("Hola"));
console.log(editor.contarCaracteresImpares("Hola"));
console.log(editor.añadirTextoInicioFinal("Aprender programación", "Hoy"));

function contarPalabras() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.ContadorPalabras(texto);
    document.getElementById("resultado").innerText = "Número de palabras: " + resultado;
}

function contarVocales() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.ContarVocales(texto);
    document.getElementById("resultado").innerText = "Número de vocales: " + resultado;
}

function contarConsonantes() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.contarConsonantes(texto);
    document.getElementById("resultado").innerText = "Número de consonantes: " + resultado;
}

function contarDigitos() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.contarDigitos(texto);
    document.getElementById("resultado").innerText = "Número de dígitos: " + resultado;
}

function contarSignos() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.Contarsignos(texto);
    document.getElementById("resultado").innerText = "Número de signos de puntuación: " + resultado;
}

function contarMayusculas() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.Contarmayusculas(texto);
    document.getElementById("resultado").innerText = "Mayúsculas al inicio de palabra: " + resultado;
}

function contarMinusculas() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.contarMinusculas(texto);
    document.getElementById("resultado").innerText = "Minúsculas al inicio de palabra: " + resultado;
}

function contarParrafos() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.contarParrafos(texto);
    document.getElementById("resultado").innerText = "Número de párrafos: " + resultado;
}

function invertirTexto() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.Invertido(texto);
    document.getElementById("resultado").innerText = "Texto invertido: " + resultado;
}

function contarCaracteres() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.contarCaracteres(texto);
    document.getElementById("resultado").innerText =
        "Vocales: " + resultado.vocales + "\n" +
        "Consonantes: " + resultado.consonantes + "\n" +
        "Dígitos: " + resultado.digitos + "\n" +
        "Signos: " + resultado.signos + "\n" +
        "Espacios: " + resultado.espacios + "\n" +
        "Mayúsculas: " + resultado.mayusculas + "\n" +
        "Minúsculas: " + resultado.minusculas + "\n" +
        "Palabras: " + resultado.palabras + "\n" +
        "Total caracteres evaluados: " + resultado.total;
}

function buscarPalabra() {
    const texto = document.getElementById("texto").value;
    const palabra = prompt("¿Qué palabra deseas buscar?");
    if (!palabra) return;
    const editor = new EditorTexto();
    const resultado = editor.buscarPalabra(texto, palabra);
    document.getElementById("resultado").innerText = resultado;
}

function contarCaracterEspecifico() {
    const texto = document.getElementById("texto").value;
    const caracter = prompt("¿Qué carácter deseas contar?");
    if (!caracter) return;
    const editor = new EditorTexto();
    const resultado = editor.contarCaracterEspecifico(texto, caracter);
    document.getElementById("resultado").innerText =
        `El carácter "${caracter}" aparece ${resultado} veces en el texto.`;
}

function contarCaracteresPares() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.contarCaracteresPares(texto);
    document.getElementById("resultado").innerText = "Caracteres en posiciones pares: " + resultado;
}

function contarCaracteresImpares() {
    const texto = document.getElementById("texto").value;
    const editor = new EditorTexto();
    const resultado = editor.contarCaracteresImpares(texto);
    document.getElementById("resultado").innerText = "Caracteres en posiciones impares: " + resultado;
}

function añadirFragmento() {
    const texto = document.getElementById("texto").value;
    const fragmento = document.getElementById("fragmento").value;
    const editor = new EditorTexto();
    const resultado = editor.añadirTextoInicioFinal(texto, fragmento);
    document.getElementById("resultado").innerText =  "Texto modificado: " + resultado.inicio + "\nTexto final: " + resultado.final;
        "Al inicio: " + resultado.inicio + "\nAl final: " + resultado.final;
}

function prueba() {
    alert("¡Funciona!");
}