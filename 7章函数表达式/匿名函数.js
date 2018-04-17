function createComparisonFunction(propertyName) {
    return function (obj1, obj2) {
        var v1 = obj1[propertyName];
        var v2 = obj2[propertyName];

        if (v1 < v2) {
            return -1;
        } else if (v1 > v2) {
            return 1;
        } else {
            return 0;
        }
    }
}