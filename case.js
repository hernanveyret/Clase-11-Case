let diaSemana = prompt("Selecciona un dia de la semana");

    switch(diaSemana) {
        case 'LUNES':
        case 'Lunes':
        case 'lunes': document.write('<h2>LUNES:</h2>');
                        document.write(`<img src="img/lunes.png" alt="Imagen rutina dia Lunes" />`);
                        break;

        case 'Martes':
        case 'MARTES':
        case 'martes': document.write('<h2>MARTES:</h2>');
                        document.write(`<img src="img/martes.png" alt="Imagen rutina dia Martes" />`);
                        break;

        case 'Miercoles':
        case 'MIERCOLES':
        case 'miercoles': document.write('<h2>MIERCOLES:</h2>');
                            document.write(`<img src="img/miercoles.png" alt="Imagen rutina dia Miercoles" />`);
                            break;

        case 'Jueves':
        case 'JUEVES':
        case 'jueves': document.write(`<h2>JUEVES:</h2>`);
                        document.write(`<p>Día de descanso.</p>`);
                         break;

        case 'Viernes':
        case 'VIERNES':
        case 'viernes': document.write('<h2>VIERNES:</h2>');
                        document.write(`<img src="img/viernes.png" alt="Imagen rutina dia Viernes" />`);
                        break;
        
        case 'Sabado':
        case 'SABADO':
        case 'sabado': document.write('<h2>SABADO:</h2>');
                        document.write(`<img src="img/sabado.png" alt="Imagen rutina dia Sabado" />`);
                        break;

        case 'Domingo':
        case 'DOMINGO':
        case 'domingo': document.write(`<h2>DOMINGO:</h2>`);
                        document.write(`<p>Día de descanso.</p>`);
                        break;

        default: document.write(`<p class="error">ERROR: DIA INCORRECTO - Ingrese con Mayuscula, minuscula o con la primera letra en mayuscula.</p>`); break;
    }