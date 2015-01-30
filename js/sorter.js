/**
 * Created by eugen on 1/25/15.
 */
var Sorter = (function () {
    var
        NOT_ARRAY_EXCEPTION_MESSAGE = 'the argument is not an array';

    var Sorter = function (array) {

        if (!Array.isArray(array)) {
            throw NOT_ARRAY_EXCEPTION_MESSAGE;
        }

        this.array = array;

    };

    Sorter.prototype = {
        array: null,
        bubbleSorting: function () {

            var bool;
            do {
                bool = false;
                for (var i = 0; i < this.array.length - 1; i++) {
                    if (this.array[i] > this.array[i + 1]) {
                        var temp = this.array[i];
                        this.array[i] = this.array[i + 1];
                        this.array[i + 1] = temp;
                        bool = true;
                    }
                }
                var uu = 0;
            } while (bool);

            return this.array;
        }

    };
    c


    return Sorter;

}());