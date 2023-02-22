import { pool } from './db.js'
import { response } from '../response.js'

async function execSQL(strSQL) {
    try {
        const [rows, fields] = await pool.query(strSQL)
        response.status = "success"
        response.data = [rows]
        response.dataLenght = rows.length
        response.message = [rows, fields].affectedRows
        response.source = strSQL

        return response
    } catch (error) {
        response.status = "error"
        response.message = "Error SQL"
        response.errors = [{ "code": error.errno, "title": error.code, "detail": error.sqlMessage, "query": error.sql }]

        return response
    }
}

export default execSQL