const mysql = require('mysql')
const pool = mysql.createPool({
    host    :   '129.28.204.126',
    user    :   'root',
    password:   'winface',
    database:   'test'
})
let query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
  
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            connection.release()
          })
        }
      })
    })
  }
  
  module.exports = { query }
  