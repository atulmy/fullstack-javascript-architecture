# Full-Stack JavaScript Architecture
Opinionated project architecture for Full-Stack JavaScript Applications. _(work in progress)_

## Backend
- API
- Database
- Proxy

## Frontend
- Landing
- Web
- Mobile
  - iOS
  - Android

## Deployment
- Docker

## Screenshots

View all screenshots [here](https://github.com/atulmy/atulmy.github.io/tree/master/images/fullstack-javascript-architecture).

<table>
  <tbody>
    <tr>
      <td>
        Landing
        <img src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/landing/Screenshot%202018-11-26%20at%208.42.33%20PM.png" />
      </td>
      <td>
        Landing
        <img src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/landing/Screenshot%202018-11-26%20at%208.42.44%20PM.png" />
      </td>
    </tr>
    <tr>
      <td>
        Web
        <img src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/web/Screenshot%202018-11-26%20at%208.43.29%20PM.png" />
      </td>
      <td>
        Web
        <img src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/web/Screenshot%202018-11-26%20at%208.44.25%20PM.png" />
      </td>
    </tr>
    <tr>
      <td>
        Mobile
        <img src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/mobile/Screenshot%202018-11-26%20at%208.47.31%20PM.png" />
      </td>
      <td>
        Mobile
        <img src="https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/fullstack-javascript-architecture/mobile/Screenshot%202018-11-26%20at%208.48.07%20PM.png" />
      </td>
    </tr>
  </tbody>
</table>

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
