using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication_C
{
    function FuncaoBotao() {

        var nome = document.getElementById("nomeId");
        var senha = document.getElementById("senhaId");
        var email = document.getElementById("emailId");
        if (nome.value != "" & senha.value != "" & email.value != "") {
            alert('Obrigado sr(a) ' + nome.value + ' seu email ' + email.value + ' foi cadastrado com sucesso');
        } else {
            alert('Você não preencheu todos os campos obrigatórios');
        }
    }

    function FuncaoFormulario() {
        var nome = document.getElementById("nomeId");
        var senha = document.getElementById("senhaId");
        var email = document.getElementById("emailId");
        if (nome.value != "" & senha.value != "" & email.value != "") {
            document.getElementById("confirmacao").innerHTML = alert("Realize o Cadastro clicando em \"Enviar\"");
        } else {
            document.getElementById("confirmacao").innerHTML = alert("Complete todos os dados");
        }

    }

    function Funcaerrologin() {

        alert('Login invalido tente novamente!')

    }
