<img src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/architecture.png?v=1.0" alt="Full-Stack JavaScript Architecture" />


# Full-Stack JavaScript Architecture
Opinionated project architecture for Full-Stack JavaScript Applications. _(work in progress)_


## About
Using JavaScript for full-stack has always been a challenge especially with architecting various pieces of the application, choosing technologies and managing devOps. This project provides a base for typical project consisting a Landing Website, Web and Mobile Applications, API service and easy deployment of these services. This project uses a microservice architecture where all individual project runs as a service (container).

A typical product (SaaS, etc.) usually consists of following services:
- Landing page
    - Used for introducing your business to customers
    - Provide links to download the mobile application
    - Provide link to access web application
    - Contact page
    - Privacy policy page
    - Terms of use page
    - SEO friendly (should support server side rendering)
    
- Web Application
    - Your actual application for your customers to use
    - Desktop browser
    - Tablet and mobile browser via responsive design
    
- Mobile Application
    - Your actual application for your customers to use
    - Android (Mobile/Tablet)
    - iOS (Mobile/Tablet)


## Core Structure
    fsja
      ├── backend
      │   ├── api
      │   │   > NodeJS
      │   │   > PORT 8000
      │   │   > api.example.com
      │   │
      │   ├── database
      │   │   > MongoDB
      │   │   > PORT 27017
      │   │
      │   └── proxy
      │       > NGINX
      │
      ├── deployment
      │   > Docker Compose
      │
      ├── frontend
      │   ├── app
      │   │   ├── mobile
      │   │   │   > React Native
      │   │   │   > iOS (Apple App Store)
      │   │   │   > Android (Google Play Store)
      │   │   │
      │   │   └── web
      │   │       > React
      │   │       > Single page application
      │   │       > PORT 5000
      │   │       > app.example.com
      │   │
      │   └── landing
      │       > React
      │       > Server side rendered
      │       > PORT 3000
      │       > example.com
      │
      └── README.md (you are here)


## Stack

### Backend
- API
    - Technologies
        - NodeJS
        - Express
- Database
    - Technologies
        - MongoDB
- Proxy
    - Technologies
        - NGINX

### Frontend
- Landing
    - Technologies
        - NodeJS
        - Express
        - React
        - React Router
        - Server Side Rendering
        - Material UI

- Web
    - Technologies
        - React
        - Redux
        - React Router
        - Server Side Rendering
        - Material UI
        
- Mobile (iOS, Android)
    - Technologies
        - React Native
        - Redux
        - React Navigation

### Deployment
- Technologies
    - Docker
    - Docker compose


## Setup and Running
- Clone repo `git clone git@github.com:atulmy/fullstack-javascript-architecture.git fullstack`

- **API**
    - Info
      - Authentication strategy: [JWT](https://jwt.io/introduction/) (JSON Web Token)
      - Uses [RPC](https://www.jsonrpc.org/) (Remote Procedure Call) for API endpoints (one endpoint URL, multiple operations)
      - Resources
        - [Lightweight RPC API pattern](https://github.com/atulmy/wispy)
    - Switch to `api` directory `cd backend/api`
    - Configuration
        - Create local environment file `cp .env.dev.example .env`
        - Modify `.env` for
            - PORT `8000`
            - NODE_ENV `development` | `production`
            - SECURITY_SECRET (Use [passwordsgenerator](https://passwordsgenerator.net))
            - SECURITY_SALT_ROUNDS `10`
            - MONGO_URL `mongodb://localhost:27017/example`
            - LANDING_URL `http://localhost:3000`
            - WEB_URL `http://localhost:5000`
            - API_URL `http://localhost:8000`
            - EMAIL_ON `0` | `1` (in development, you can toggle to send emails or not)
            - EMAIL_TEST (send test emails to this address)
            - EMAIL_HOST, EMAIL_USER, EMAIL_PASSWORD (use any email servive, eg. [mailgun.com](https://www.mailgun.com/) and get info to start sending emails
    - Setup
        - Install packages and seed database `npm run setup`
    - Run
        - Start API server: `npm start` (http://localhost:8000)

- **Landing**
    - Switch to `landing` directory `cd frontend/landing`
    - Configuration
        - Create local environment file `cp .env.dev.example .env`
        - Modify `.env` for
            - PORT `3000`
            - NODE_ENV `development` | `production`
            - LANDING_URL `http://localhost:3000`
            - WEB_URL `http://localhost:5000`
            - API_URL `http://localhost:8000`
            - CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS
            - GA_TRACKING_ID (Google analytics tracking ID)
    - Setup
        - Install dependencies: `npm install`
    - Run
        - Start Landing server: `npm start`, browse at http://localhost:3000

- **Web**
    - Switch to `web` directory `cd frontend/app/web`
    - Configuration
        - Create local environment file `cp .env.dev.example .env`
        - Modify `.env` for
            - PORT `5000`
            - REACT_APP_LANDING_URL `http://localhost:3000`
            - REACT_APP_WEB_URL `http://localhost:5000`
            - REACT_APP_API_URL `http://localhost:8000`
    - Setup
        - Install dependencies: `npm install`
    - Run
        - Start Web server: `npm start`, browse at http://localhost:5000

- **Deployment**
    - Switch to `deployment` directory `cd deployment`
    - Get the latest code `git pull`
    - Build containers `docker-compose up --build -d`
        - `up` = Builds, (re)creates, starts, and attaches to containers for a service.
        - `--build` = Build images before starting containers
        - `-d` = Detached mode: Run containers in the background, print new container names


## Screenshots

View all screenshots [here](https://github.com/atulmy/atulmy.github.io/tree/master/images/fullstack-javascript-architecture).

<table>
  <tbody>
    <tr>
      <td colspan="2">Landing</td>
    </tr>
    <tr>
      <td>
        <img alt="Landing" src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/landing/Screenshot%202018-11-26%20at%208.42.33%20PM.png" />
      </td>
      <td>
        <img alt="Landing" src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/landing/Screenshot%202018-11-26%20at%208.42.44%20PM.png" />
      </td>
    </tr>
    <tr>
      <td colspan="2">Web</td>
    </tr>
    <tr>
      <td>
        <img alt="Web" src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/web/Screenshot%202018-11-26%20at%208.43.29%20PM.png" />
      </td>
      <td>
        <img alt="Web" src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/web/Screenshot%202018-11-26%20at%208.44.25%20PM.png" />
      </td>
    </tr>
    <tr>
      <td colspan="2">Mobile</td>
    </tr>
    <tr>
      <td>
        <img alt="Mobile" src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/mobile/Screenshot%202018-11-26%20at%208.47.31%20PM.png" />
      </td>
      <td>
        <img alt="Mobile" src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/mobile/Screenshot%202018-11-26%20at%208.48.07%20PM.png" />
      </td>
    </tr>
  </tbody>
</table>


## Authors
- Atul Yadav - [GitHub](https://github.com/atulmy) · [Twitter](https://twitter.com/atulmy)
- [YOUR NAME HERE] - Feel free to contribute to the codebase by resolving any open issues, refactoring, adding new features, writing test cases or any other way to make the project better and helpful to the community. Feel free to fork and send pull requests.


## Hire me
Looking for a developer to build your next idea or need a developer to work remotely? Get in touch: [atul.12788@gmail.com](mailto:atul.12788@gmail.com)


## License
Copyright (c) 2018 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
