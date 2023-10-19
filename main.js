var imagem = ["RobloxScreenShot20220425_235623464 (2).png", "RobloxScreenShot20221220_231706751.png", "RobloxScreenShot20230117_221557197.png"];
var danone = ["robertin", "AMOGUS", "tropa dos superpatos selvagens"];
var i = 0;
function proximo(){
    i++;
    var imgs = 2;
    if (i> imgs) {
        i = 0;
    }
    var atualizar1 = imagem[i];
    var atualizar2 = danone[i];
    document.getElementById("img").src = atualizar1;
    document.getElementById("nomes").innerHTML = atualizar2;
}
