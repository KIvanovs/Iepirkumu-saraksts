const CLICKED = document.getElementById('clicked');
let list = [];

window.addEventListener('load', () => {
    list = JSON.parse(localStorage.getItem("gramatas") || "[]");
    console.log(list);
    render();
});

document.getElementById('PievProduktu').addEventListener('click', () => {
    CLICKED.style.display = 'block';

});

document.getElementById('JaunsSaraksts').addEventListener('click', () => {
    CLICKED.style.display = 'none';

    let saraksts = {prece: prece.value, daudzums: daudzums.value};

    prece.value = "";
    daudzums.value = "";

    list.push(saraksts);

    render();
});

function render() {
    let prece_saraksts = document.getElementById('Block');
    prece_saraksts.innerHTML = "";

    for(let i = 0; i < list.length; i++) {
        let saraksts = `
        <div class="figure">
            <h3>Prece: ${list[i].prece}</h3>
            <h4>Daudzums: ${list[i].daudzums}</h4>
            <button class="del">Delete</button>
        </div>`;

        prece_saraksts.innerHTML += saraksts;
    }

    localStorage.setItem("gramatas", JSON.stringify(list));
}

const DeleteList = document.querySelector('#Block')

DeleteList.addEventListener('click', (e) => {
    if(e.target.className == 'del'){
      const dl = e.target.parentElement;
      dl.parentNode.removeChild(dl);
      list.splice(dl, 1);
      localStorage.setItem('list',JSON.stringify(list));
    }
  });

function newList(){
    if(prece.value === ""){
        alert('Ievadiet preci!')
    };

    if(daudzums.value === ""){
        alert('Ievadiet preces daudzumu!')
    };

    if(prece.value && daudzums.value != ''){

        let alarm_list = {prece: prece.value, daudzums: daudzums.value};
        console.log(alarm_list);
        list.push(alarm_list);
        render()
    };
    localStorage.setItem('list',JSON.stringify(list));
}