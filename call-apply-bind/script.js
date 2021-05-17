// call(), apply(), bind()

/*function displayName() {
    console.log("Veronika");
}

displayName.call(); // === displayName();
displayName.apply(); //*/

/*let p1 = {
    name: 'Lily',
    battery: 70,
    chargeBattery: function () {
        this.battery = 100;
    }
}
p1.chargeBattery();*/

const b1 = document.querySelector('.b-1');
const b2 = document.querySelector('.b-2');

//b1.onclick = test;

function test() {
    this.style.background = 'orange'; //this denotes an elemnt on  where the event happened
};

test.call(b1); // this == b1