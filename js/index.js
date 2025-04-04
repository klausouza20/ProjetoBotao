function verificaCor(){
    let colorc = document.getElementById("cor").value.toLowerCase();
    const txt2 = document.getElementById("texto");
    const cores = {
        "vermelho":"red",
        "verde":"green",
        "azul":"blue",
        "rosa":"pink",
        "amarelo":"yellow"
    };
    let colorChange = document.getElementById("fundo");

    if (cores[colorc]){
        colorChange.style.backgroundColor = cores[colorc];
        let txt = document.getElementById("text");
        txt.style.color = "white";
        txt2.innerHTML = ""
    } else{
        txt2.innerHTML = "Cor não reconhecida";
    }

    
}