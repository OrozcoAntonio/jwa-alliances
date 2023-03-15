"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
const config_js_1 = require("../config.js");
exports.pool = (0, promise_1.createPool)({
    user: config_js_1.DB_USER,
    password: config_js_1.DB_PASSWORD,
    host: config_js_1.DB_HOST,
    database: config_js_1.DB_DATABASE,
    port: config_js_1.DB_PORT
});
//# sourceMappingURL=db.js.map