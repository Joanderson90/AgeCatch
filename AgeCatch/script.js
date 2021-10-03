function verificar(){
    var data     = new Date()
    var anoAtual = data.getFullYear()
    var fAno     = document.getElementById("txtAno")
    var res      = document.querySelector("div#resul")

    if(fAno.value == 0 || fAno.value > anoAtual){
        window.alert("Verifique os dados e tente novamente.")
    }else{
        var idade    = anoAtual - (fAno.value)
        var sexo     = document.getElementsByName("radsex")
        var genero   = ""
        var img      = document.createElement("img")
        img.setAttribute("id", "foto")

        if(sexo[0].checked) genero = "Masculino"
        else{
            genero = "Feminino"
        }

        if(genero == "Masculino"){
            if(idade >=0 && idade <=10){
                img.setAttribute("src", "CriançaM.jpg")
            }else if(idade <21){
                img.setAttribute("src", "JovemM.jpg")
            }else if(idade < 50){
                img.setAttribute("src", "AdultoM.jpg")
            }else{
                img.setAttribute("src", "Idoso.jpg")
            }

        }else{
            if(idade >=0 && idade <=10){
                img.setAttribute("src", "CriançaF.jpg")
            }else if(idade <21){
                img.setAttribute("src", "JovemF.jpg")
            }else if(idade < 50){
                img.setAttribute("src", "AdultaM.jpg")
            }else{
                img.setAttribute("src", "idosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }

}