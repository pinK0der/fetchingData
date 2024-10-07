//work with fetch() function

async function fetchData()
{
    try
    {
        const pokemonName = document.getElementById("pokemonName")
        .value.toLowerCase();

        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
        if(!responce.ok)
        {
            throw new Error("Could not fetch resource");
        }
        const data = await responce.json();
        
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error)
    {
        console.error(error);
    }
}
