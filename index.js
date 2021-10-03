const corpo = document.getElementsByTagName('body')[0];
const container = document.createElement('div');
container.id='containerLabirinto';
corpo.appendChild(container);

const map = [
    
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];


function criarLabirinto(){

    for(let i=0; i<map.length; i++){
        let linha = document.createElement('div');
        container.appendChild(linha);
        linha.classList.add('linhas');

    
            for (let j=0; j< map[i].length; j++){
                let coluna  = document.createElement('div');
                linha.appendChild(coluna);
                coluna.className ='colunas';
                coluna.id=`[${i}][${j}]`; 
                console.log


                if(map[i][j] === 'W'){
                    coluna.classList.add('wall');
                }
                else if(map[i][j] === 'S' || map[i][j] === 'F' ){
                    coluna.classList.add('startEnd');
                }
                else{
                    coluna.classList.add('road');
                }
            }           
    } 
}
criarLabirinto()


const inicio = document.querySelectorAll('.startEnd')[1];
const final = document.querySelectorAll('.startEnd')[0];
const avatar = document.createElement('div');

avatar.id = 'avatar';
inicio.appendChild(avatar);


let linhaAtual=9
let colunaAtual=0
let divAtual;



function moveAvatar(){
    
    document.addEventListener('keydown', (event)=>{
        const keyName = event.key;
        
        if(keyName === 'ArrowDown'){
            divAtual = document.getElementById(`[${linhaAtual+1}][${colunaAtual}]`);
            if(divAtual.className === 'colunas road'){
                divAtual.appendChild(avatar);
                linhaAtual ++;
            }
        }

        else if(keyName ==='ArrowUp'){
            divAtual = document.getElementById(`[${linhaAtual-1}][${colunaAtual}]`);
                
            if(divAtual.className === 'colunas road'){
                divAtual.appendChild(avatar);
                linhaAtual--;
            }   
        }

        else if(keyName ==='ArrowLeft'){
            divAtual = document.getElementById(`[${linhaAtual}][${colunaAtual-1}]`);
            if(divAtual.className === 'colunas road'){
                divAtual.appendChild(avatar);
                colunaAtual-- ;
            }
        }

        else if(keyName === 'ArrowRight'){
            divAtual = document.getElementById(`[${linhaAtual}][${colunaAtual+1}]`);
            if(divAtual.className === 'colunas road' || divAtual.className === 'colunas startEnd'){
                divAtual.appendChild(avatar);
                colunaAtual ++ ;
            }            
        }
    })
}
moveAvatar();

console.log(divAtual);
console.log(final);

//ESCREVER ESSA FUNÇÃO DE WINNER


// function winner (){

//     if(divAtual === final){
//         console.log('VC AGNHOU')       
//     }
// }
// winner()