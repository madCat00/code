/*console.log()

//Selezionare elemetno della pagina
 const header = document.querySelector('h1');
 header.innerText ='';

 //selezionare elementi della pagina

 const list = document.querySelectorAll('h1');
 header[0].innerText ='';

 //selezionare elemento tramite paragrafo
const parag = document.getElementById('parag');

*/

//Per fare le stesse operazioni si fanno delle funzioni

function selectElement(selector){
        const element = selectElement("h1");
        const tags = ['h1','h2','h3'];
        if (tags.includes(selector) ) {
            return    document.getElementsByTagName(selector)[0];
        }
        return document.getElementById(selector);
    }


