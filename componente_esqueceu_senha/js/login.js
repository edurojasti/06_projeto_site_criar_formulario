class User{
    constructor(usuario, senha ){
        this.user = usuario
        this.senha = senha
    }

    salvarUser1(){
        localStorage.setItem('usuario1', this.user)
        localStorage.setItem('senha1', this.senha)
    }

    salvarUser2(){
        localStorage.setItem('usuario2', this.user)
        localStorage.setItem('senha2', this.senha)
    }

    salvarUser3(){
        localStorage.setItem('usuario3', this.user)
        localStorage.setItem('senha3', this.senha)
    }
}


var user01 = new User('tst@gmail', '1010')
var user02 = new User('wesley@gmail', '2010')
var user03 = new User('ttst@gmail', '123')

user01.salvarUser1()
user02.salvarUser2()
user03.salvarUser3()