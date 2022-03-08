const vardi = ["Ezis","Dzenis","Zirgs","Džahomahameds","Kastanis"];
const balvas = ["Švalbes perm","Draudzeni","M4A4","Aladina paklājs","Divas kinderolas"];
let uzvaretajuSkaits = 5 ;
let rindas= document.querySelector('.rindas');//pievieno mainigo
rindas.innerHTML = ` `;

//let rand= Math.random()*vardi.length;
//Math.random=Math.random()*10;
//rand=Math.floor(rand); //noapaļo uz leju
//console.log(vardi[rand]);

for (let i=0;i<uzvaretajuSkaits;i++){
    let rand= Math.random()*vardi.length;
    rand=Math.floor(rand); //noapaļo uz leju
    let uzvaretajs = vardi[rand];//izvada konsolē
    //let uzvaretajs = vardi[rand];
    let laimests = balvas[rand];
    rindas.innerHTML+=`   
    <tr>
        <td>${i+1}</td>
        <td>${uzvaretajs}</td>
        <td>${laimests}</td>
        </tr>`

}




