import { input } from "@inquirer/prompts";
import { Passwords } from "../Db/models/Passwords.js";
import { log } from "../Main.js";
import chalk from "chalk";
import listMethods from "./listMethods.js";

export default async function updatePassword(){
    const newPassword = await input({message: "Type your new password"});
    const passId = await input({message: "type your id password (this pass will be modified)"});

    try {
        await Passwords.update({psw : newPassword}, {where: {id : passId}});
        log(chalk.blueBright.bold("Password Updated"));
    }catch (error) {
        log(chalk.redBright.bold.bgBlack(`failed to update your password ${error}`))
    }
    listMethods();
}