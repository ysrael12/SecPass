<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Manager CLI Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #0056b3;
        }
        pre {
            background: #f8f8f8;
            padding: 15px;
            border: 1px solid #ddd;
            overflow-x: auto;
        }
        code {
            color: #d63384;
            font-weight: bold;
        }
        a {
            color: #0056b3;
        }
        ul {
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <h1>Password Manager CLI</h1>
    <p>A command-line password manager developed with pure Node.js, enabling users to create, list, update, delete, import, and export passwords.</p>
    
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#file-structure">File Structure</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#usage-example">Usage Example</a></li>
        <li><a href="#contributing">Contributing</a></li>
    </ul>

    <h2 id="prerequisites">Prerequisites</h2>
    <ul>
        <li><strong>Node.js</strong>: Make sure to have <a href="https://nodejs.org/">Node.js</a> installed on your machine.</li>
        <li><strong>npm</strong>: Used to install Node.js packages.</li>
    </ul>

    <h2 id="installation">Installation</h2>
    <p>1. Clone this repository:</p>
    <pre><code>git clone &lt;REPOSITORY_URL&gt;
cd &lt;PROJECT_DIRECTORY&gt;
</code></pre>
    
    <p>2. Install dependencies:</p>
    <pre><code>npm install</code></pre>

    <h2 id="usage">Usage</h2>
    <p>To start the password manager, run:</p>
    <pre><code>node &lt;MAIN_FILE_NAME&gt;.js</code></pre>

    <h2 id="file-structure">File Structure</h2>
    <p>The following is the file and folder structure for the project:</p>
    <pre><code>.
├── src
│   ├── createPassword.js       # Function to create a new password
│   ├── listUserPasswords.js    # Function to list all stored passwords
│   ├── deletePassword.js       # Function to delete a password by ID
│   ├── updatePassword.js       # Function to update a password by ID
│   ├── importPasswords.js      # Function to import passwords from a CSV file
│   ├── exportPassword.js       # Function to export passwords to a CSV file
│   └── listMethods.js          # Main function that lists and executes actions based on user choice
├── .env.example                # Example configuration file (if applicable)
└── README.md                   # Project documentation
</code></pre>

    <h2 id="features">Features</h2>
    <h3>Main Menu (listMethods.js)</h3>
    <p>When running the password manager, users will see a menu with the following actions:</p>
    <ul>
        <li><strong>Create Password</strong>: Creates a new password and saves it in the system.</li>
        <li><strong>My Passwords</strong>: Displays a list of all saved passwords.</li>
        <li><strong>Delete Password (need the ID)</strong>: Deletes a specific password by its ID.</li>
        <li><strong>Update Password (need the ID)</strong>: Updates an existing password by its ID.</li>
        <li><strong>Import passwords from browser</strong>: Imports passwords from a CSV file exported from the browser.</li>
        <li><strong>Export Passwords to CSV</strong>: Exports all saved passwords to a CSV file compatible with browsers.</li>
        <li><strong>Exit</strong>: Closes the application.</li>
    </ul>

    <h2 id="usage-example">Usage Example</h2>
    <p>1. <strong>Start the application</strong> with the command:</p>
    <pre><code>node &lt;MAIN_FILE_NAME&gt;.js</code></pre>

    <p>2. <strong>Select an action</strong> using the interactive menu. For example, choose "Create Password" to add a new password.</p>

    <p>3. <strong>Follow the prompts</strong> based on the chosen action, such as providing an ID when deleting or updating a password.</p>

    <h2 id="contributing">Contributing</h2>
    <p>Feel free to contribute to this project. Please open an <strong>issue</strong> or submit a <strong>pull request</strong> with improvements or new features.</p>
</body>
</html>
