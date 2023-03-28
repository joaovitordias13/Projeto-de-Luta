let char = new Knight('João Ribeiro');
let monster = new LittleMonster();


const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector("#monster"),
)

stage.start();