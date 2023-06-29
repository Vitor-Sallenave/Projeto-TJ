function acesso(form) {
    /*
    verificação do nome e da senha
    */
    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()

    if (form.nome.value == "vitor" && form.senha.value == "vitoruerj") {
        location = "index.html"
    }
    else {
        form.nome.value = ""
        form.nome.value = ""
        window.alert("The information is not valid!")
    }
}
var nome = window.prompt('What is your name?')
window.alert('Welcome ' + nome + '!')
