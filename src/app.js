console.clear()

import express from 'express'
import morgan from 'morgan'
import { PORT } from './config.js'
import { APP_GLOBAL } from './globals.js'

import v1RouterHome from './v1/rutas/routeHomes.js'
import v1RouterUser from './v1/rutas/routeUsers.js'
const app = express()

app.removeAllListeners()
app.set('appName', APP_GLOBAL.APP_NAME)
app.set('idAlliance', APP_GLOBAL.ID_ALLIANCE)

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1', v1RouterHome)
app.use('/api/v1', v1RouterUser)

app.listen(PORT, () => { console.log(`Server en puerto ${PORT}`) })

// Autenticación
// Exec SQL separado para todos los modulos
// Como crear un servidor node para despliegues 