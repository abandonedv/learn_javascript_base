"use strict";

// call

let car = {
    model: "mercedes",
    getModel(model) {
        if(model) console.log(model);
        else console.log(this.model);
    }
};

let func = car.getModel;
func.call(car); // mercedes
func.call(car, "opel"); // opel