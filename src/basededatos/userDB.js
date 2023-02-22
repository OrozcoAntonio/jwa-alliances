import execSQL from './execSQL.js'

const dbGetAllUser = () => {
    const query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo
     FROM player PL
     INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance`;
    const result = execSQL(query)
    return result
}

const dbGetUser = (user) => {
    const query = `SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo, PL.idAlliance 
        FROM player PL 
        INNER JOIN alliance AL ON AL.idAlliance = PL.idAlliance
        WHERE PL.idAlliance = ${user.idAlliance}
        AND PL.jwaPlayer = '${user.jwaPlayer}'`;
    const result = execSQL(query)

    return result
}

const dbInsertUser = (newUser) => {
    const query = `INSERT INTO player 
    (idAlliance, jwaPlayer, discordID, pseudonimo) 
    VALUES 
    (${newUser.idAlliance}, '${newUser.jwaPlayer}', '${newUser.discordID}', '${newUser.pseudonimo}')`;
    const result = execSQL(query)
    return result
}

//const dbGetAllUser = console.log('algo')
export { dbGetAllUser, dbGetUser, dbInsertUser }

//     code: 'ER_PARSE_ERROR',
//     errno: 1064,
//     sql: 'SELECT PL.idPlayer, AL.Alliance, PL.jwaPlayer, PL.discordID, PL.pseudonimo, PL.idAlliance, \n' +
//     sqlState: '42000',
//     sqlMessage: "You have an error in your SQL syntax; check the manual that corresponds to your
//   MariaDB server version for the right syntax to use near 'FROM player PL \n" +




// const result = await db.query(
//     `DELETE FROM programming_languages WHERE id=${id}`
//   );

//   let message = 'Error in deleting programming language';

//   if (result.affectedRows) {
//     message = 'Programming language deleted successfully';
//   }

//   return {message};



// const result = await db.query(
//     `UPDATE programming_languages
//     SET name="${programmingLanguage.name}", released_year=${programmingLanguage.released_year}, githut_rank=${programmingLanguage.githut_rank},
//     pypl_rank=${programmingLanguage.pypl_rank}, tiobe_rank=${programmingLanguage.tiobe_rank}
//     WHERE id=${id}`
//   );

//   let message = 'Error in updating programming language';

//   if (result.affectedRows) {
//     message = 'Programming language updated successfully';
//   }

//   return {message};





// const result = await db.query(
//     `INSERT INTO programming_languages
//     (name, released_year, githut_rank, pypl_rank, tiobe_rank)
//     VALUES
//     (${programmingLanguage.name}, ${programmingLanguage.released_year}, ${programmingLanguage.githut_rank}, ${programmingLanguage.pypl_rank}, ${programmingLanguage.tiobe_rank})`
//   );

//   let message = 'Error in creating programming language';

//   if (result.affectedRows) {
//     message = 'Programming language created successfully';
//   }

//   return {message};




// const offset = helper.getOffset(page, config.listPerPage);
// const rows = await db.query(
//   `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank
//   FROM programming_languages LIMIT ${offset},${config.listPerPage}`
// );
// const data = helper.emptyOrRows(rows);
// const meta = {page};

// return {
//   data,
//   meta
// }