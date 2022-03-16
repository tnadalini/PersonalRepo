// JavaScript source code
function getPokemon() {
    //needs a lot of editing
    //let link = 'www.google.com';
} axios(
    {
        method: 'get',
        url: 'https://v2.jokeapi.dev/joke/Programming'
    }
)
    .then(function (response) {
        let type = response.data.type;
        let placement = document.querySelector(".Joke");
        let ResultLocation = document.querySelector(".Result");
        ResultLocation.style.visibility = 'hidden'
        if (type.includes("single", 0)) {
            let joke = response.data.joke
            placement.innerText = joke;
        }
        else if (type.includes("twopart", 0)) {
            let setup = response.data.setup;
            let delivery = response.data.delivery;
            placement.innerText = setup;
            let ResultLocation = document.querySelector(".Result");
            ResultLocation.style.visibility = 'hidden'
            ResultLocation.innerText = delivery;
            setTimeout(JokeResult, 4000);
        }
        else {
            placement.innerText = "try again in a few moments";
        }
    }
    )
    .catch(function (error) {
        console.log("error: try again in a few moments.");
    }
    );