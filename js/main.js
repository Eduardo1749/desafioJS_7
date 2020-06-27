var array = [6, 5, 10, 3, 2, 1];
function troca(array, n1, n2) {
    var n3 = array[n2];
    array[n2] = array[n1];
    array[n1] = n3;
}
//troca(array, n1, n2);
//console.log(array)
function bublesort(array) {
    for (i = 0; i < array.length; i++) {
        var w = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[w]) {
                w = j;
            }
        }
        if (i != w) {
            troca(array, i, w);
        }
    }
}



