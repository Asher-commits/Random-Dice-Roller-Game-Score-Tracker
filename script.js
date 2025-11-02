// tracking score

const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

// roll dice to get a random number between 1 - 6

function roll(){
   const rolled = Math.floor(Math.random() * 6 + 1);
   scoreTracker[rolled]++; 
   console.log(rolled);
};


function score(){
    for(const key in scoreTracker){
        console.log(`${key} was rolled ${scoreTracker[key]} times`);
    };
};

// simulating dice rolls
for(let i = 0; i < 100; i++){
    roll();
};


// display score
score();


