# Pe_Uta_Backend_PSQL

<p align="center">
  <img src="public/careers-with-coding.jpg" alt="Pe_Uta_Backend_PSQL"/>
</p>

The **Pe_Uta_Backend_PSQL** project is the backend for the **[Pe Uta](https://github.com/IgnacioBarraza/Pe_uta)** frontend. Built with **NestJS** and **TypeScript**, this backend provides a robust API for managing subjects, projects, questions, evaluations, and user authentication.

---

## Features

### 🚀 API Functionality

- **Subjects**: Full CRUD operations to manage event subjects.
- **Projects**: Manage and retrieve project data seamlessly.
- **Questions**: Administer questions used in evaluations.
- **Evaluations**: 
  - Submit and view evaluations of projects.
  - Fetch evaluations by specific users.
- **User Authentication**: Register and authenticate users securely.

---

## Installation

### Requirements

- **Node.js**: v18 or later
- **PostgreSQL**: Database instance with credentials
- **npm**: Package manager

### Steps
> [!NOTE]
> All of the following commands are assumed to be executed within the root folder of the repository.

1. Clone the repository:
   ```bash
   git clone https://github.com/IgnacioBarraza/Pe_Uta_Backend_PSQL.git
   cd Pe_Uta_Backend_PSQL
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables by creating a `.env` file:
   ```env
   HOST=<your_database_host>
   DB_PORT=<your_database_port>
   USERDB=<your_database_user>
   PASSWORD=<your_database_password>
   DATABASE=<your_database_name>
   PORT=3000
   JWT_SECRET=<jwt_secret_token>
   JWT_EXPIRATION=1h
   ```
> [!NOTE]
> You also can copy and rename the `.env.example` file to `.env`

4. Start the development server:
   ```bash
   npm run start:dev
   ```

---

## API Documentation

### 🔑 Authentication
| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| POST   | `/api/user/register`| Register a user   |
| POST   | `/api/user/login`   | Login a user      |

### 📘 Subjects
| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| GET    | `/api/subjects`     | Get all subjects  |
| POST   | `/api/subjects`     | Create a subject  |
| PUT    | `/api/subjects/:id` | Update a subject  |
| DELETE | `/api/subjects/:id` | Delete a subject  |

### 📂 Projects
| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| GET    | `/api/projects`     | Get all projects  |
| POST   | `/api/projects`     | Create a project  |
| PUT    | `/api/projects/:id` | Update a project  |
| DELETE | `/api/projects/:id` | Delete a project  |

### ❓ Questions
| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| GET    | `/api/questions`    | Get all questions |
| POST   | `/api/questions`    | Create a question |
| PUT    | `/api/questions/:id`| Update a question |
| DELETE | `/api/questions/:id`| Delete a question |

### 📝 Evaluations
| Method | Endpoint                       | Description              |
|--------|--------------------------------|--------------------------|
| POST   | `/api/evaluations`             | Submit an evaluation     |
| GET    | `/api/evaluations`             | Get all evaluations      |
| GET    | `/api/evaluations/user/:userId`| Get evaluations by user  |

---

## Development Workflow

1. **Run in Development Mode**:
   ```bash
   npm run start:dev
   ```

2. **Run Tests**:
   ```bash
   npm run test
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## Project Structure

```plaintext
Pe_Uta_Backend_PSQL/
├── src/
│   ├── modules/       # Feature-specific modules
│   ├── entities/      # Database entities
│   ├── controllers/   # API controllers
│   ├── services/      # Business logic
│   └── main.ts        # Entry point
├── test/              # Unit and integration tests
├── .env.example       # Example environment configuration
└── package.json       # Project metadata
```


## Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a feature branch: `git switch -c feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.


## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

![NestJS](https://nestjs.com/img/logo-small.svg) ![PostgreSQL](https://via.placeholder.com/100x50?text=PostgreSQL)  
Powered by **NestJS** and **PostgreSQL** to deliver a reliable backend solution.
---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
