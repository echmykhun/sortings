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
        setArray: function (array) {
            this.array = array;
        },
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
        },
        shakerSorting: function () {
            var i, j, tmp;
            for (i = 0; i < this.array.length / 2; i++) {
                var swapped = false;
                for (j = i; j < this.array.length - i - 1; j++) {
                    if (this.array[j] > this.array[j + 1]) {
                        tmp = this.array[j];
                        this.array[j] = this.array[j + 1];
                        this.array[j + 1] = tmp;
                        swapped = true;
                    }
                }
                for (j = this.array.length - 2 - i; j > i; j--) {
                    if (this.array[j] < this.array[j - 1]) {
                        tmp = this.array[j];
                        this.array[j] = this.array[j - 1];
                        this.array[j - 1] = tmp;
                        swapped = true;
                    }
                }
                if (!swapped) break;
            }

            return this.array;
        },

        stupidSort: function () {
            var tmp, i = 0;
            while (i < this.array.length) {
                if (this.array[i + 1] < this.array[i]) {
                    tmp = this.array[i];
                    this.array[i] = this.array[i + 1];
                    this.array[i + 1] = tmp;
                    i = 0;
                } else {
                    i++;
                }
            }

            return this.array;
        }


    };


    return Sorter;

}());