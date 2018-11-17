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
      │   │   > api.example.com
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
