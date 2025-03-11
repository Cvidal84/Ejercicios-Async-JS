document.getElementById("getPokemon").addEventListener("click", async () => {

    try {
        // Generar un número aleatorio entre 1 y 151, la pagina es igual solo cambia el numero
        const randomId = Math.floor(Math.random() * 151) + 1;
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
        
        // Obtener datos del Pokémon
        const response = await fetch(apiUrl);
        const pokemon = await response.json();
        
        // Mostrar datos en la página, en el h2, y en la imagen, src y alt
        document.getElementById("pokemonName").textContent = pokemon.name.toUpperCase();
        document.getElementById("pokemonImage").src = pokemon.sprites.front_default;
        document.getElementById("pokemonImage").alt = pokemon.name;
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
    }
});