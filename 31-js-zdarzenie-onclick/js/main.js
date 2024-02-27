let btn = document.querySelector('button')

function showAlert(e) {
    alert('Klik działa!')
    //debug
    console.log(e)
}

btn.onclick = showAlert