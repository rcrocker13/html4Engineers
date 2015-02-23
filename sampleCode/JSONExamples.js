/* jslint plusplus:true; */

Array.prototype.contains = function (val) {
    "use strict";
    var i = 0;
    for (i; i < this.length; i++) {
        if (this[i] === val) {
            return true;
        }
    }
    return false;
};

var person = {};

person = {
    gerFullName: function () {
        "use strict";
        return this.firstName + " " + this.lastName;
    },
    increaseAge: function () {
        "use strict";
        this.age++;
    }
};

function extend(obj) {
    "use strict";
    function E() {}
    E.prototype = obj;
    return new E();
}

var f = function () {
    "use strict";
    console.log('Hello World');
};