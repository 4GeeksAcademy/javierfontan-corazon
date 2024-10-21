/*Funciones a elaborar:

* animateByLine: 
Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerdas que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?*/

const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
];

const animateByChart = (ms) => {
    let currentLine = 0;
    let currentChar = 0;

    const printNextChar = () => {
        if (currentLine < asciiHeart.length) {
            const line = asciiHeart[currentLine]; // Obtiene la línea actual como string

            if (currentChar < line.length) {
                process.stdout.write(line[currentChar]); // Imprime el siguiente carácter sin salto de línea
                currentChar++;
            } else {
                process.stdout.write('\n'); // Salto de línea al terminar la línea actual
                currentLine++;
                currentChar = 0;
            }

            setTimeout(printNextChar, ms); // Llama a sí misma después de 'ms'
        }
    };

    printNextChar(); // Inicia la animación
};

animateByChart(100); // Llama a la función con 100ms de retraso por carácter

