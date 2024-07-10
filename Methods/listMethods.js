import chalk from 'chalk';
import { rawlist } from '@inquirer/prompts';
import createPassword from './createPassword.js';
import listUserPasswords from './listUserPasswords.js';
import deletePassword from './deletePassword.js';
import updatePassword from './updatePassword.js';
import importPasswords from './importPasswords.js'
import exportPasswords from './exportPassword.js';

export default async function listMethods(){

    const actions = await rawlist({
        message: "select a action",

        choices : [
            {name: "Create Password", value : 1},
            {name: "My Passwords", value: 2},
            {name: "Delete Password (need the id)", value: 3},
            {name: "Update Password (need the id)", value : 4},
            {name : "Import passwords from browser (generate the csv in the browser)", value : 5},
            {name : "Export Passwords to CSV (Compatible whith browsers)", value:6},
            {name: chalk.redBright("Exit"), value:7},
        ]
    })
    //retorna o valor da escolha TODO -> criar condicionais para selecionar cada açao
    if(actions == 1) await createPassword();
    if(actions == 2) await listUserPasswords();
    if(actions == 3) await deletePassword();
    if(actions == 4) await updatePassword();
    if(actions == 5) await importPasswords(); 
    if(actions == 6) await exportPasswords();
    if(actions == 7) await process.exit();
}