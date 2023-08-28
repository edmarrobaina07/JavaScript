/*Object - Objetos */

const name = "Edmar"

const age = 38

const address = "Rua vilma de fátima ribeiro vicente n° 277"

const edmar = {
    name: "Edmar",
    age: 38,
    address: {
        street: "Rua vilma de fátima ribeiro vicente",
        number: 277,
        city: "Jandaia do sul",
        state: "PR",
        country: "Brasil"
    }

}

edmar.address.number = 297

console.log(edmar)