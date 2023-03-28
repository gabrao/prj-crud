const bcrypt = require('bcrypt')


async function criptografarSenha(pwd) {

    const salt = await bcrypt.genSalt()

    const senhaCripto = await bcrypt.hash(pwd, salt)
    
    return senhaCripto
}


module.exports = {
    criptografarSenha
}