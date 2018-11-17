// Imports
import { Server } from 'http'
import Express from 'express'

// App Imports
import loadModules from './setup/server/load-modules'
import loadRoutes from './setup/server/load-routes'
import startServer from './setup/server/start-server'

// Create new server
const app = new Express()
const server = new Server(app)

// Load express modules
loadModules(app)

// Load routes and SSR
loadRoutes(app)

// Start Server
startServer(server)
