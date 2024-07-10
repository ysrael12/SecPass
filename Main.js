import chalk from "chalk";
import figlet from "figlet";
import { Auth } from "./Authentication/Auth.js";



export const log = console.log;
const secPassLogo = chalk.bold.greenBright(figlet.textSync("SecPass"));

// Sec pass message 
export default  function homeView(){
    log(secPassLogo);
    let msg = chalk.blueBright("Welcome to SecPass ! please create a password to use your password bank");
    log(msg);
    Auth()
}
homeView();

