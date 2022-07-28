window.onload = () => {

    var matriz=[
        [1,2,3,4,5],
        [2,5,6,7,8],
        [5,6,4,3,2],
        [9,4,7,9,7],
        [2,6,3,8,9],
        [7,3,8,2,5]
    ]

    for (let irow = 0; irow < matriz.length; irow++) {
             console.log(matriz[irow]);
           for (let icell = 0; icell < matriz.length; icell++) {
           console.log(matriz[irow][icell]);            
            }   
        }
        

    var colores=[
        [1,2,3,0,0],
        [2,2,1,2,1],
        [1,1,3,1,2],
        [3,1,0,0,0],
        [2,1,3,1,3],
        [1,3,2,2,2]
    ]

    // funcion para pintar los input 
    // recorrer la matriz 
    function pintarTablero(){
        for (let i = 0; i < colores.length; i++) {

            for (let c = 0; c < colores[i].length;c++) {

                var colorear = document.getElementById(`f${i}c${c}`);
            
                switch (colores[i][c]) {
                    //case 0:
                    //  colorear.style.backgroundColor="white";
                    //    break;
                    case 1:
                        colorear.style.backgroundColor="green";
                        break;
                    case 2:
                        colorear.style.backgroundColor="yellow";
                        break;
                    case 3:
                        colorear.style.backgroundColor="gray";
                        break;
                    default:
                        colorear.style.backgroundColor="white";
                        break;
                }      
            }
        }
    }
    pintarTablero();
}