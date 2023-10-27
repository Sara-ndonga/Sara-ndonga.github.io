"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const controller_1 = require("./controller/controller");
const dotenv = require("dotenv");
dotenv.config();
const client = new mongodb_1.MongoClient(process.env.MONGODB_URL);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        let topPlayers = [];
        try {
            topPlayers = yield (0, controller_1.getTopPlayers)(client);
        }
        catch (error) {
            console.error("Error:", error);
        }
        finally {
            yield client.close();
        }
        return topPlayers;
    });
}
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const topPlayers = yield init();
        const resultContainer = document.getElementById("resultContainer");
        if (resultContainer) {
            // Limpia el contenido previo si es necesario
            resultContainer.innerHTML = "";
            // Crea un elemento "pre" para mostrar los resultados en formato JSON
            const preElement = document.createElement("pre");
            preElement.textContent = JSON.stringify(topPlayers, null, 2);
            // Agrega el elemento "pre" al contenedor
            resultContainer.appendChild(preElement);
        }
        else {
            console.error("El elemento 'resultContainer' no se encontró en el documento HTML.");
        }
    }
    catch (error) {
        console.error("Error:", error);
    }
}));
