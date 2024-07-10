import chalk from "chalk";
import { Passwords } from "../Db/models/Passwords.js";
import { log } from "../Main.js";
import figlet from "figlet";
import { input, password } from "@inquirer/prompts";
import listMethods from "./listMethods.js";
import { userId } from "../Authentication/Auth.js";


export default async function createPassword() {
    log(chalk.bgWhiteBright.greenBright.bold(figlet.textSync("Create Password")));
    const nameOrEmail = await input({message: "Type your Email or username (void if you don't have)"});
    const sourceOrWebsite = await input({message:"type the Source(origin site) of your password using this pattern https://www.example.com"});
    const psw = await password({message: "Type your password ",mask: "-"});

    try {
        await Passwords.create({
            name: nameOrEmail,
            url: sourceOrWebsite,
            username: nameOrEmail,
            psw: psw,
            note: "",
            userId: userId // Certifique-se de que userId está definido corretamente
          });
        log(chalk.green("Password Created"));

    } catch (error) {
        log(chalk.redBright("Error registering Password: " + error.message));
    }
    listMethods();
}
