# SecPass Password Manager CLI 

A command-line password manager developed with pure Node.js, enabling users to create, list, update, delete, import, and export passwords.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Features](#features)
- [Usage Example](#usage-example)
- [Contributing](#contributing)

## Prerequisites
- **Node.js**: Make sure to have [Node.js](https://nodejs.org/) installed on your machine.
- **npm**: Used to install Node.js packages.

## Installation
1. Clone this repository:
    ```bash
    git clone https://github.com/ysrael12/SecPass
    cd SecPass
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the password manager, run:
```bash
node Main.js


# Features
Main Menu (listMethods.js)
When running the password manager, users will see a menu with the following actions:

Create Password: Creates a new password and saves it in the system.
My Passwords: Displays a list of all saved passwords.
Delete Password (need the ID): Deletes a specific password by its ID.
Update Password (need the ID): Updates an existing password by its ID.
Import passwords from browser: Imports passwords from a CSV file exported from the browser.
Export Passwords to CSV: Exports all saved passwords to a CSV file compatible with browsers.
Exit: Closes the application.


## Usage Example
Start the application with the command:

bash
node Main.js
Select an action using the interactive menu. For example, choose "Create Password" to add a new password.

Follow the prompts based on the chosen action, such as providing an ID when deleting or updating a password.

# Contributing
Feel free to contribute to this project. Please open an issue or submit a pull request with improvements or new features.