import { createPool, } from 'mysql2/promise'

const response = {
    "status": "", //fail, success, error
    "code": 0, // code response
    "data": {},
    "reng": {},
    "dataLenght": 0,
    "response": "",
    "params": "",
    "message": "",
    "affectedRows": "",
    "insertId": "",
    "source": "",
    "errors": {}
}

export default response