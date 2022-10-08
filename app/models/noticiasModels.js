module.exports = function(){
    this.getNoticias = function (connection, callbak) {
        connection.query('select * from noticias', callbak)
    }

    this.getNoticias = function(connection, callbak) {
        connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callbak)
    }

    return this
}