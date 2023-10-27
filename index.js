import { MongoClient } from "mongodb";
import { getTopPlayers } from "./controller/controller";

const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.MONGODB_URL);

async function init() {
    let topPlayers = [];
    try {
        topPlayers = await getTopPlayers(client);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }

    return topPlayers;
}

document.addEventListener("DOMContentLoaded", async () => {
    init();
    try {
        const topPlayers = await init();

        const resultContainer = document.getElementById("resultContainer");

        if (resultContainer) {
            // Limpia el contenido previo si es necesario
            resultContainer.innerHTML = "";

            // Crea un elemento "pre" para mostrar los resultados en formato JSON
            const preElement = document.createElement("pre");
            preElement.textContent = JSON.stringify(topPlayers, null, 2);

            // Agrega el elemento "pre" al contenedor
            resultContainer.appendChild(preElement);
        } else {
            console.error(
                "El elemento 'resultContainer' no se encontró en el documento HTML."
            );
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
