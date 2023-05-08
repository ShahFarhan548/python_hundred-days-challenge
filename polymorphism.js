class Bird {
    useWings() {
        console.log('Flying ');
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings();// calling the method of the parent class
        console.log('to fly in the sky');
    }
}

class Penguin extends Bird {
    useWings() {
        console.log('to swim in the sea');
    }
}

var baldEagle = new Eagle(); // creating an instance for the Eagle class
var kingPenguin = new Penguin(); // creating an instance for the Penguin class
baldEagle.useWings();
kingPenguin.useWings();
