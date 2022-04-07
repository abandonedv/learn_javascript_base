let car = {
    model: "toyota",
    color: "black",
    go: function () {
        console.log("машина едет");
    },

    // так тоже можно 
    gogo(name) {
        console.log(`${name} едет`);
    },

    getModel() {
        return this.model;
    }

}

car.go();
car.gogo("Максим");
console.log(car.getModel())