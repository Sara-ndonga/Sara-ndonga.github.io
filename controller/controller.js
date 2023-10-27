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
exports.getTopPlayers = void 0;
const getTopPlayers = (client) => __awaiter(void 0, void 0, void 0, function* () {
    let players = [];
    try {
        yield client.connect();
        const response = yield client
            .db("test")
            .collection("pruebita")
            .find()
            .limit(20)
            .sort({ record: -1 })
            .toArray();
        players = [...response];
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield client.close();
    }
    return players;
});
exports.getTopPlayers = getTopPlayers;
