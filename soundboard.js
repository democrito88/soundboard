
$(function(){
    $(".botao").click(function(){
        tocaSom(this.classList[1]);
    })
});

function tocaSom(tecla) {
    document.querySelector('#som_tecla_'+tecla).play();
}