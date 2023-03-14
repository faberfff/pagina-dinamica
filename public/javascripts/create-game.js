const inputPlayer1 = document.querySelector('#player1');
const inputPlayer2 = document.querySelector('#player2');
const inputPlayer3 = document.querySelector('#player3');

console.log( { player1: inputPlayer1, player2: inputPlayer2, player3: inputPlayer3 });

const button = document.querySelector('button');

console.log( { button });


button.addEventListener('click', (e) => {
    const player1 = inputPlayer1.value;
    const player2 = inputPlayer2.value;
    const player3 = inputPlayer3.value;

    fetch('/', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                player1,
                player2,
                player3,
           
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
    });
   
});

const tirarDados = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


    p1 = tirarDados(1, 6);
    p2 = tirarDados(1, 6);
    p3 = tirarDados(1, 6);

    console.log({p1, p2, p3});




/**

button.addEventListener('click', (e) => {
    const player1 = inputPlayer1.value;
    const player2 = inputPlayer2.value;
    const player3 = inputPlayer3.value;

   //'http://localhost:3000/game'
    //const players = [player1, player2, player3];

   fetch('/', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        player1,
                        player2,
                        player3,
                   
                })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                })
            });
           // console.log(e);
           
    
}); 
*/
