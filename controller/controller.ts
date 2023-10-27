import { MongoClient } from "mongodb";
import IPlayer from "../schema/IPlayer";

export const getTopPlayers = async (
    client: MongoClient
): Promise<IPlayer[]> => {
    let players: IPlayer[] = [];
    try {
        await client.connect();
        const response: any = await client
            .db("test")
            .collection("pruebita")
            .find()
            .limit(20)
            .sort({ record: -1 })
            .toArray();
        players = [...response];
    } catch (error: any) {
        console.log(error);
    } finally {
        await client.close();
    }
    return players;
};
