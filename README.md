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
      │   │   │   > iOS
      │   │   │   > Android
      │   │   │
      │   │   └── web
      │   │       > React
      │   │       > PORT 5000
      │   │       > app.example.com
      │   │
      │   └── landing
      │       > Static HTML
      │       > PORT 3000
      │       > example.com
      │
      └── README.md (you are here)
