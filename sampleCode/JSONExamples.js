Array.prototype.contains = function (val) {
    "use strict";
    var i = 0;
    for (i; i < this.length; i = i + 1) {
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
        this.age = this.age + 1;
    }
};