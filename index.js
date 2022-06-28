window.onload = () => {

    var matriz=[
        [1,2,3,4,5],
        [2,5,6,7,8],
        [5,6,4,3,2],
        [9,4,7,9,7],
        [2,6,3,8,9],
        [7,3,8,2,5]
    ]

    for (let xRow = 0; xRow < matriz.length; xRow++) {
        console.log(matriz[xRow])
        for (let yColumn = 0; yColumn < 6; yColumn++) {
            console.log(matriz[xRow][yColumn])
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

    function pintarTablero(){
        for (let i = 0; i < colores.length; i++) {
            for (let j = 0; j < colores[i].length; j++) {
                
            }
        }
        
    }
}