import chalk from "chalk";
import { userId } from "../Authentication/Auth.js";
import { Passwords } from "../Db/models/Passwords.js";
import { log } from "../Main.js";
import listMethods from "./listMethods.js";

function formatPassword(password) {

    return chalk.greenBright(`
    Password Id : ${password.id}    
    Site: ${password.sourceOrWebsite}
    Username/Email: ${password.nameOrEmail}
    Password: ${password.psw}
    Created At: ${password.createdAt}
    Updated At: ${password.updatedAt}
    `);
}

export default async function listUserPasswords() {
    try {
        const userPasswords = await Passwords.findAll({ where: { userId: userId } });
        const formattedPasswords = userPasswords.map(pwd => formatPassword(pwd.dataValues)).join("\n\n");

        log(formattedPasswords);
    } catch (error) {
        log("Error fetching passwords: " + error.message);
    }

    listMethods();
}
