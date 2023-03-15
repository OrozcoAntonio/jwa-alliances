"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const globals_1 = require("../../globals");
const router = (0, express_1.Router)();
router.all('/', (req, res) => {
    res.send(globals_1.APP_GLOBAL.APP_NAME);
});
// router.all('/', (req, res) => {
//     let isActive = true
//     const users = [{
//         id: 1,
//         nombre: "yomero",
//         apellidoP: "tumero"
//     },
//     {
//         id: 2,
//         nombre: "dylan",
//         apellidoP: "su apelli"
//     }]
//     res.render('index', {
//         title: "Este es el comienzo",
//         isActive,
//         users
//     })
// })
// router.get('/posts', async (req, res) => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     console.log(response.data)
//     res.render('postesitos', {
//         posts: response.data
//     })
// })
exports.default = router;
//# sourceMappingURL=routeHomes.js.map