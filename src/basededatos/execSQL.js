import { pool } from './db.js'
import response from '../response.js'

async function execSQL(strSQL) {
    try {
        const [rows, fields] = await pool.query(strSQL)
        response.status = "success"
        response.data = [rows]
        response.dataLenght = rows.length
        response.message = [rows, fields].serverStatus
        response.affectedRows = [rows, fields].affectedRows
        response.insertId = [rows, fields].insertId
        response.source = strSQL
        return response
    } catch (error) {
        response.status = "error"
        response.message = "Error SQL"
        response.errors = { "code": error.errno, "title": error.code, "detail": error.sqlMessage, "query": error.sql }
        return response
    }
}
export default execSQL
//     code: 'ER_PARSE_ERROR',
//     errno: 1064,
//     sql: 'SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo, PL.idAlliance, \n' +
//     sqlState: '42000',
//     sqlMessage: "You have an error in your SQL syntax; check the manual that corresponds to your
//   MariaDB server version for the right syntax to use near 'FROM player PL \n" +