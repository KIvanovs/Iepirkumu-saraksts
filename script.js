const CLICKED = document.getElementById('clicked');
let gramatas = [];

window.addEventListener('load', () => {
    gramatas = JSON.parse(localStorage.getItem("gramatas") || "[]");
    console.log(gramatas)
    render();
});

document.getElementById('PievProduktu').addEventListener('click', () => {
    CLICKED.style.display = 'block';

})

document.getElementById('JaunsSaraksts').addEventListener('click', () => {
    CLICKED.style.display = 'none';

    let gramata = {prece: prece.value, daudzums: daudzums.value};

    prece.value = "";
    daudzums.value = "";

    gramatas.push(gramata);

    render();
})

function render() {
    let biblioteka = document.getElementById('Block');
    biblioteka.innerHTML = "";

    for(let i = 0; i < gramatas.length; i++) {
        let gramata = `
        <div class="figure">
            <h3>Prece: ${gramatas[i].prece}</h3>
            <h4>Daudzums: ${gramatas[i].daudzums}</h4>
        </div>`;

        biblioteka.innerHTML += gramata;
    }

    localStorage.setItem("gramatas", JSON.stringify(gramatas))
}