function getPokeData() {
    //call helper method to get specified URL for API searching
    const daURL = setPokemonURL();

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
        let types = response.data.types.map(pokemon => {
            return pokemon.type.name;
        });
        types = types.join("/");
        var sprite = response.data.sprites.front_default;
        //alert(name + "," + id + "," + types + "," + sprite);
        var resultString = "<p>" + name + "," + id + "," + types + "," + sprite + "</p>";
        //return resultString;
        document.write(resultString);
    }
    )
    .catch(function (error) {
        console.log("Error during AXIOS call! Please try again later.");
        alert("Error during AXIOS call! Please make sure you ensure your input was valid");
    })

}

//helper function for getPokeData
function setPokemonURL() {
    const input = new String(document.getElementById("pokemon").value);
    const url = "https://pokeapi.co/api/v2/pokemon/".concat(input.trim(), "/");

    return url;
}