<img src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/architecture.png?v=1.0" alt="Full-Stack JavaScript Architecture" />


# Full-Stack JavaScript Architecture
Opinionated project architecture for Full-Stack JavaScript Applications. _(work in progress)_


## About
Using JavaScript for full-stack has always been a challenge especially with architecting various pieces of the application, choosing technologies and managing devOps. This project provides a base for typical project consisting a Landing Website, Web and Mobile Applications, API service and easy deployment of various services. This project uses a microservice architecture where all individual project runs as a service (container).


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
- Legend
    - * represents default values
- Clone repo git clone git@github.com:atulmy/fullstack-javascript-architecture.git fullstack
- Landing
    - Switch to `landing` directory `cd frontend/landing`
    - Dev
        - Configuration
            - Create local environment file `cp .env.dev.example .env`
            - Modify `.env` for
                - PORT
                    - 3000*
                - NODE_ENV 
                    - `development`* | `production`
                - LANDING_URL
                    - http://localhost:3000*
                - WEB_URL
                    - http://localhost:5000*
                - API_URL
                    - http://localhost:8000*
                - CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS
                - GA_TRACKING_ID (Google analytics tracking ID)
        - Setup
            - Install dependencies: `npm install`
        - Run
            - Start Landing server: `npm start`, browse at http://localhost:3000*

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
