/**
 * Created by noblind on 06/05/16.
 */

var jogador = "x";
var jogada = 0;

function chkJogo(id){

    var src = chkSrc(id);
    console.log("Retorna "+src);
    var cpu = document.getElementById('cpu').checked;
    if(src == "branco.jpg"){
        document.getElementById(id).src = "img/"+jogador + ".jpg";
        if(chkVitoria()){
            alert("Fim do Jogo! \n Viória do Jogador: "+ jogador);
            location.reload();
        }
        if(jogada >= 9){
            alert("Jogo Empatado");
            location.reload();
        }
        if(jogador == "x"){
            jogador = 'o';
        } else{
            jogador = 'x';
        }
        if(cpu && jogador == 'o'){
            chkJogo(jogadaDoComputador() );
        }

    }
}
function jogadaDoComputador() {
    if(chkSrc('cel5') == 'branco.jpg' ){
        return 'cel5';
    }
    return 'cel' + Math.floor((Math.random() * 9) + 1);
}
function chkSrc(id) {
    var src = document.getElementById(id).src;
    return src.substring(src.length - 10, src.length);
}
function chkVitoria() {
    if((chkSrc('cel1') == chkSrc('cel2') ) && ( chkSrc('cel1') == chkSrc('cel3') ) && ( chkSrc('cel1')  != 'branco.jpg' ) ){
        return true;
    }
    if((chkSrc('cel4') == chkSrc('cel5') ) && ( chkSrc('cel4') == chkSrc('cel6') ) && ( chkSrc('cel4')  != 'branco.jpg' ) ){
        return true;
    }
    if((chkSrc('cel7') == chkSrc('cel8') ) && ( chkSrc('cel7') == chkSrc('cel9') ) && ( chkSrc('cel7')  != 'branco.jpg' ) ){
        return true;
    }
    if((chkSrc('cel1') == chkSrc('cel4') ) && ( chkSrc('cel1') == chkSrc('cel7') ) && ( chkSrc('cel1')  != 'branco.jpg' ) ){
        return true;
    }
    if((chkSrc('cel2') == chkSrc('cel5') ) && ( chkSrc('cel2') == chkSrc('cel8') ) && ( chkSrc('cel2')  != 'branco.jpg' ) ){
        return true;
    }
    if((chkSrc('cel3') == chkSrc('cel6') ) && ( chkSrc('cel3') == chkSrc('cel9') ) && ( chkSrc('cel3')  != 'branco.jpg' ) ){
        return true;
    }
    if((chkSrc('cel1') == chkSrc('cel5') ) && ( chkSrc('cel1') == chkSrc('cel9') ) && ( chkSrc('cel1')  != 'branco.jpg' ) ){
        return true;
    }
    if((chkSrc('cel3') == chkSrc('cel5') ) && ( chkSrc('cel3') == chkSrc('cel7') ) && ( chkSrc('cel3')  != 'branco.jpg' ) ){
        return true;
    }
    return false;

}