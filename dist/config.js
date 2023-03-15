"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_USER = exports.DB_PORT = exports.DB_HOST = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.DB_HOST = process.env.DB_HOST || '141.148.155.239';
exports.DB_PORT = 3306;
exports.DB_USER = process.env.DB_USER || 'root';
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'MariaDBpwd';
exports.DB_DATABASE = process.env.DB_DATABASE || 'jwa_alliance';
//# sourceMappingURL=config.js.map