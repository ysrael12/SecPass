import { input } from "@inquirer/prompts";
import { Passwords } from "../Db/models/Passwords.js";
import chalk from "chalk";
import { log } from "../Main.js";
import listMethods from "./listMethods.js";

export default async function deletePassword(){
    const passId = await input({message: "Type your Password Id"})
    try{
        await Passwords.destroy({where: {id : passId}});
        log(chalk.redBright.bold.bgBlack("Password deleted"))
    }catch (error){
        log(chalk.redBright("Error deleting Password: " + error.message));
    }
    listMethods();
};
