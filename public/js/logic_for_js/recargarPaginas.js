$(Document).ready( function () {
    setTimeout(() => {
        resfrescar()
    }, 20*60*1000);
})

function resfrescar(params) {
    location.reload();
}