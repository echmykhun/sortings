/**
 * Created by eugen on 1/25/15.
 */
document.addEventListener('DOMContentLoaded', function () {

    var arrayCount = 20;
    var array = [];
    for(var i = 0; i < arrayCount; i++){
        array[i] = Math.floor((Math.random() * 100) + 1)
    }

    console.log(array);

    var sorter = new Sorter(array);

    console.log(sorter);
    console.log(sorter.bubbleSorting());


});