/**
 * Created by eugen on 1/25/15.
 */
document.addEventListener('DOMContentLoaded', function () {

    var arrayCount = 20;
    var array = generateRandoArray(arrayCount);
    console.log(array);
    var sorter = new Sorter(array);
    console.log(sorter);
    console.log(sorter.shakerSorting());


    array = generateRandoArray(arrayCount);
    console.log(array);
    sorter.setArray(array);
    console.log(sorter);
    console.log(sorter.bubbleSorting());


    array = generateRandoArray(arrayCount);
    console.log(array);
    sorter.setArray(array);
    console.log(sorter);
    console.log(sorter.stupidSort());



});

function generateRandoArray(arrayCount){
    var array = [];
    for(var i = 0; i < arrayCount; i++){
        array[i] = Math.floor((Math.random() * 100) + 1)
    }

    return array;
}