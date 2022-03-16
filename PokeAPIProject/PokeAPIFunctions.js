function setPokemonURL() {
    const input = new String(document.getElementById("pokemon").value);
    //document.write(document.getElementById("pokemon").value);
    const url = "https://pokeapi.co/api/v2/pokemon/".concat(input.trim(),"/");
    getPokeData(url);
}

function getPokeData(daURL) {
    //document.write(daURL);

    //axios call using the made URL
    axios(
    {
        method: 'get',
        url: daURL
    }
    )
    .then(function (response) {
        var id = response.data.id;
        var name = response.data.name;
        //var types = response.data.types;
        alert(new String(id.concat(",",name)));
    }
    )
        .catch(function (error) {
            console.log("Error during AXIOS call! Please try again later.");
            alert("Error during AXIOS call! Please make sure you ensure your input was valid");
        })

    }