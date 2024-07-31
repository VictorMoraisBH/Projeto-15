class Carro {
    constructor() {
        if (new.target === Carro) {
            throw new TypeError("Não é possível instanciar objetos diretamente da classe Carro");
        }
    }

    ligarMotor() {
        throw new Error("Este método deve ser sobrescrito!");
    }

    dirigir() {
        throw new Error("Este método deve ser sobrescrito!");
    }
}

class Sedan extends Carro {
    ligarMotor() {
        return "Motor do Sedan ligado!";
    }

    dirigir() {
        return "Sedan está dirigindo suavemente.";
    }
}

class SUV extends Carro {
    ligarMotor() {
        return "Motor do SUV ligado!";
    }

    dirigir() {
        return "SUV está dirigindo fora de estrada.";
    }
}

const sedan1 = new Sedan();
const sedan2 = new Sedan();
const suv1 = new SUV();

console.log(sedan1.ligarMotor()); 
console.log(sedan1.dirigir());    

console.log(sedan2.ligarMotor()); 
console.log(sedan2.dirigir());    

console.log(suv1.ligarMotor());   
console.log(suv1.dirigir());      
