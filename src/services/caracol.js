// const estados = {
//     0: "A",
//     1: "Q",
//     2: "D",
//     3: "Q",
// }

function calcEstado(estado){
    if(estado < 3){
        return estado+ 1
    }

    return 0;
}

function iterar(num, estado){
    if(estado == 0){
        return num+1
    }

    if(estado == 2){
        return num-1
    }

    return num
}

function crearArrayInicial(n){
    let result = []
    for(let i = 0; i < n; i++){
        let row = []
        for(let j = 0; j < n; j++){
            row.push(0);
        }
        result.push(row);
    }

    return result
}

function caracol(n){
    let result = crearArrayInicial(n)

    let i = 0;
    let estadoI = 3;
    let j = 0;
    let estadoJ = 0;

    
    let cambiador = n
    let disminuidor = 1
    let cambiadorCount = 0;

    for(let iteracion = 1; iteracion <= n*n; iteracion++){
        result[i][j] = iteracion;

        if(iteracion % cambiador == 0){
            if(cambiadorCount % 2 == 0 && cambiadorCount != 0){
                disminuidor++
            }
            cambiador = cambiador + (n-disminuidor);
            estadoI = calcEstado(estadoI)
            estadoJ = calcEstado(estadoJ)

            cambiadorCount++
        }

        i = iterar(i, estadoI);
        j = iterar(j, estadoJ);
    }

    return result
}

module.exports = caracol