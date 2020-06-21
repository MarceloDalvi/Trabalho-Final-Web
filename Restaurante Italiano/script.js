function enviar() {
 
    var nome = document.getElementById("nome");
    var pessoas = document.getElementById("pessoas");
    var mesa = document.getElementById("mesa");
    var data = document.getElementById("data");
    var horario = document.getElementById("horario");
    if (nome.value == "") {
        alert('Necessário preencher seu nome!');
    }
    else{
        if (pessoas.value == "") {
            alert('Informe o número de pessoas!');
        } 
        else{
            if (mesa.value == "") {
                alert('Informe o número da mesa desejada!');
            }  
            else{
                if (data.value == "") {
                    alert('Informe a data desejada da reserva!');
                }
                else{
                    if (horario.value == "") {
                        alert('Informe o horário desejado!');
                    }
                    else{
                        alert('Obrigado ' + nome.value + ', sua reserva foi solicitada com sucesso');
                    }
                }     
            } 
        }
        }
    }