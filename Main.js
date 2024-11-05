import chalk from "chalk";
import figlet from "figlet";
import { Auth } from "./Authentication/Auth.js";

//logo and log function creation
export const log = console.log;
const secPassLogo = chalk.bold.greenBright(figlet.textSync("SecPass"));

// Sec pass HomePage
export default  function homeView(){
    // show the logo
    log(secPassLogo);

    // show this message
    let msg = chalk.blueBright("Welcome to SecPass ! please create a password to use your password bank");
    log(msg);
    
    // call the Authentication method
    Auth();
}
homeView();

