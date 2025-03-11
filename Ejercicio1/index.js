document.addEventListener("DOMContentLoaded", async () =>{
    const apiUrl = "https://thronesapi.com/api/v2/Characters"
    const selectElement = document.getElementById("character-list")
    const selectImage = document.querySelector(".character-image")

    try {
        //obtener los personajes dese la API
        const response = await fetch(apiUrl)
        const characters = await response.json()

        //Llenar el select con los nombres de los personajes
        characters.forEach(character => {
            const option = document.createElement("option");
            option.value = character.imageUrl;
            option.textContent = character.fullName;
            selectElement.appendChild(option);
        });

        // Mostrar imagen del primer personaje por defecto
        if (characters.length > 0) {
            selectImage.src = characters[0].imageUrl;
        }

        // Evento para cambiar la imagen cuando se selecciona un personaje
        selectElement.addEventListener("change", (event) => {
            selectImage.src = event.target.value;
        });
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error)

    }


})