function getPokeData() {

    //call helper method to get specified URL for API searching
    const daURL = setPokemonURL();

    var limits = checkPokeGen();


    //axios call using the URL created in setPokemonURL()
    axios(
    {
        method: 'get',
        url: daURL
    }
    )
    .then(function (response) {
        var id = response.data.id; //ID number of the pokemon

        //if the pokemon ID is out of the limit range, exit early and alert the user of the error.
        if (id < limits[0] || id > limits[1]) {
            alert("Your Pokemon is outside the selected generation!");
            return;
        }

        var name = response.data.name; //name of the pokemon
        let types = response.data.types.map(pokemon => {
            return pokemon.type.name;
        });
        types = types.join("/"); //if the pokemon has multiple typings, join with a "/"

        //pull move data and output first 4 moves available 
        let moves = response.data.moves.map(pokeMoves => {
            return pokeMoves.move.name;
        });
        moves = moves.join("|");
        var moveList = moves.split("|");
        moves = "";
        for (let i = 0; i < 4; i++) {
            if (i != 3) {
                moves += moveList[i] + " | ";
            }
            else {
                moves += moveList[i];
            }
        }

        //alert(moveList[0] + " | " + moveList[1]);

        var sprite = response.data.sprites.front_default; //link the to sprite image
        var height = response.data.height; //height of pokemon
        var weight = response.data.weight; //weight of pokemon


        //write the data back to the original html page

        //create tags first
        const tagP1 = document.createElement("p");
        const tagP2 = document.createElement("p");
        const tagP3 = document.createElement("p");
        const tagP4 = document.createElement("p");
        const tagP5 = document.createElement("p");
        const tagP6 = document.createElement("p");

        const tagBR = document.createElement("br");
        const tagImg = document.createElement("img");

        var outDiv = document.getElementById("output");

        //clear out the output div
        outDiv.innerHTML = "";

        //use the created tags to add output to the original HTML page
        tagP1.innerHTML = "Pokemon Name: " + name;
        outDiv.appendChild(tagP1);

        outDiv.appendChild(tagBR);

        tagP2.innerHTML = "Pokemon ID: " + id;
        outDiv.appendChild(tagP2);

        outDiv.appendChild(tagBR);

        tagP3.innerHTML = "Pokemon Type(s): " + types;
        outDiv.appendChild(tagP3);

        outDiv.appendChild(tagBR);

        tagImg.src = sprite;
        outDiv.appendChild(tagImg);

        outDiv.appendChild(tagBR);

        tagP5.innerHTML = "Height: " + height + " decimetres";
        outDiv.appendChild(tagP5);

        tagP6.innerHTML = "Weight: " + weight + " hectograms";
        outDiv.appendChild(tagP6);

        //add in the moves to output
        tagP4.innerHTML = "Moves: " + moves;
        outDiv.appendChild(tagP4);

    }
    )
    .catch(function (error) {
        console.log("Error during AXIOS call! Please try again later.");
        alert("Error during AXIOS call! Please make sure you ensure your input was valid");
    })
    
} //end getPokeData



//helper function for getPokeData; sets up the proper URL for axios call
function setPokemonURL() {
    const input = new String(document.getElementById("pokemon").value);
    const url = "https://pokeapi.co/api/v2/pokemon/".concat(input.trim(), "/");

    return url;
} //end setPokemonURL



//helper function for getPokeData; validates generation data from user
function checkPokeGen() {
    var limits = new Array();
    switch (document.getElementById("gen").value) {
        case "none":
            limits[0] = 1;
            limits[1] = 721;
            break;
        case "gen1":
            limits[0] = 1;
            limits[1] = 151;
            break;
        case "gen2":
            limits[0] = 152;
            limits[1] = 251;
            break;
        case "gen3":
            limits[0] = 252;
            limits[1] = 386;
            break;
        case "gen4":
            limits[0] = 387;
            limits[1] = 493;
            break;
        case "gen5":
            limits[0] = 494;
            limits[1] = 649;
            break;
        case "gen6":
            limits[0] = 650;
            limits[1] = 721;
            break;
    }

    return limits;
} //end checkPokeGen


//*****************************************************************************************
//*              Method for getting default data on initial page load/reload              *
//*              98% copy of the existing getPokeData() method                            *
//*****************************************************************************************

function getDefaultPokeData() {
    axios(
        {
            method: 'get',
            url: "https://pokeapi.co/api/v2/pokemon/pikachu/"
        }
    )
        .then(function (response) {
            var id = response.data.id; //ID number of the pokemon

            var name = response.data.name; //name of the pokemon
            let types = response.data.types.map(pokemon => {
                return pokemon.type.name;
            });
            types = types.join("/"); //if the pokemon has multiple typings, join with a "/"

            //pull move data and output first 4 moves available 
            let moves = response.data.moves.map(pokeMoves => {
                return pokeMoves.move.name;
            });
            moves = moves.join("|");
            var moveList = moves.split("|");
            moves = "";
            for (let i = 0; i < 4; i++) {
                if (i != 3) {
                    moves += moveList[i] + " | ";
                }
                else {
                    moves += moveList[i];
                }
            }
            //alert(moves);

            var sprite = response.data.sprites.front_default; //link the to sprite image
            var height = response.data.height; //height of pokemon
            var weight = response.data.weight; //weight of pokemon


            //write the data back to the original html page

            //create tags first
            const tagP1 = document.createElement("p");
            const tagP2 = document.createElement("p");
            const tagP3 = document.createElement("p");
            const tagP4 = document.createElement("p");
            const tagP5 = document.createElement("p");
            const tagP6 = document.createElement("p");

            const tagBR = document.createElement("br");
            const tagImg = document.createElement("img");

            var outDiv = document.getElementById("output");

            //clear out the output div
            outDiv.innerHTML = "";

            //use the created tags to add output to the original HTML page
            tagP1.innerHTML = "Pokemon Name: " + name;
            outDiv.appendChild(tagP1);

            outDiv.appendChild(tagBR);

            tagP2.innerHTML = "Pokemon ID: " + id;
            outDiv.appendChild(tagP2);

            outDiv.appendChild(tagBR);

            tagP3.innerHTML = "Pokemon Type(s): " + types;
            outDiv.appendChild(tagP3);

            outDiv.appendChild(tagBR);

            tagImg.src = sprite;
            outDiv.appendChild(tagImg);

            outDiv.appendChild(tagBR);

            tagP5.innerHTML = "Height: " + height + " decimetres";
            outDiv.appendChild(tagP5);

            tagP6.innerHTML = "Weight: " + weight + " hectograms";
            outDiv.appendChild(tagP6);

            tagP4.innerHTML = "Moves: " + moves;
            outDiv.appendChild(tagP4);

        }
        )
        .catch(function (error) {
            console.log("Error during AXIOS call! Please try again later.");
            alert("Error during AXIOS call! Please make sure you ensure your input was valid");
        })

} //end getDefaultPokeData
