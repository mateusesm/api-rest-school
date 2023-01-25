### API Rest of School

A simple school API Rest make with JavaScript/NodeJS using Express for setting server, Sequelize for consults and updates and relational database Maria DB.

### Installation

After downloading this project, make sure you have Node JS installed on your machine by running the following command:

```bash
node --version
```

The command should return the version of Node JS installed. If not, download it.

After installing Node JS, you will need to download the necessary modules, for that, inside the terminal, in the project folder execute the command:

Use your preferred package manager (npm, yarn, etc.) to install all dependencies, in my case, I used npm:

```bash
npm install
```

### Running the project

Before running this project certify that you created .env file and it has a variables containing your adress of data base Maria DB (DATABASE, HOST, USER, PASSWORD, PORT) for that the connection make it. And that also containing a variables for setting security tokens (TOKEN_SECRET, TOKEN_EXPIRATION).

For running express server, run the next command:

```bash
npm run dev
```
