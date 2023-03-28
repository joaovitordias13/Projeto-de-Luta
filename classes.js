class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life(){
        return this._life
    }
    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this._life;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 4;
        this.maxLife = this.life
}
}

class LittleMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 40;
        this.attack = 4;
        this.defense = 5;
        this.maxLife = this.life

    }
}
class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life = 120;
        this.attack = 14;
        this.defense = 7;
        this.maxLife = this.life

    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1E1, fighter2E1) {
       this.fighter1 = fighter1;
       this.fighter2 = fighter2;
       this.fighter1E1 = fighter1E1;
       this.fighter2E1 = fighter2E1;
    }
    start() {
        this.update();

        this.fighter1E1.querySelector('.attackButton').addEventeListener('click', () => this.doAttack(this.fighter1,this.fighter2))
        this.fighter2E1.querySelector('.attackButton').addEventeListener('click', () => this.doAttack(this.fighter2,this.fighter1))

    }
    update() {
        // Fighter 1
        this.fighter1E1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1E1.querySelector('.bar').style.width = `${f1Pct}%`;
        //Fighter 2
        this.fighter2E1.querySelector('.name').innerHTML =  `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2E1.querySelector('.bar').style.width = `${f2Pct}%`;
    }


    doAttack(attacking, attacked) {
        `${attacking.name} está atacando ${attacked.name}`
        this.update();
    }
}