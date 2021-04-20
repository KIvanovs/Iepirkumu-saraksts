document.getElementById("PievProduktu").addEventListener('click', ClickedButton);

function ClickedButton() {
    console.log("Nazal knopku");

    let clicked = document.getElementById('clicked');

    clicked.style.display = 'block'
}
