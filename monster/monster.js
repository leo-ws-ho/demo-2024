// This is the half-baked demo for the Monster Game shown online.

const config = {
    WEREWOLF_ATTACK_POINT: 35,
    WEREWOLF_MAX_HEALTH: 100,
    VAMPIRE_ATTACK_POINT: 35,
    VAMPIRE_MAX_HEALTH: 100,
    VAMPIRE_BITE_CHANCE: 0.3,
    VAMPIRE_BITE_HEALTH_RECOVER: 10,
};

class Monster {
    constructor(attackPoint, maxHealth) {
        this.attackPoint = attackPoint;  // how much damage it will make
        this.health      = maxHealth; // the current health of the monster
        this.maxHealth   = maxHealth; // its max health
    }

    takeHit(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    print() {
        console.log("Monster: " + this.attackPoint, this.health, this.maxHealth);
    }
}

class Werewolf extends Monster {
    constructor() {
        super(config.WEREWOLF_ATTACK_POINT, config.WEREWOLF_MAX_HEALTH);
    }

    attack(m2) { // attack the monster m2
        m2.takeHit(this.attackPoint);
    }
}

class Vampire extends Monster {
    constructor() {
        super(config.VAMPIRE_ATTACK_POINT, config.VAMPIRE_MAX_HEALTH);
        this.biteChance = config.VAMPIRE_BITE_CHANCE;
        this.biteRecovery = config.VAMPIRE_BITE_HEALTH_RECOVER;
    }

    attack(m2) {
        m2.takeHit(this.attackPoint);
        if (Math.random() < this.biteChance) {
            this.health += this.biteRecovery;
            if (this.health > this.maxHealth)
                this.health = this.maxHealth;
        }
    }
}

class Mummy extends Monster {}

// test cases
// let m = new Monster(20, 100);  // we can create a new monster like this, but

// let w1 = new Werewolf();
// w1.print();

// let w2 = new Werewolf();
// w2.print();

// w1.attack(w2);
// w2.print();
// w1.attack(w2);
// w2.print();
// w1.attack(w2);
// w2.print();

let v1 = new   Vampire();
let v2 = new Vampire();

v1.attack(v2);
v1.print();
v2.print();
v1.attack(v2);
v1.print();
v2.print();
v1.attack(v2);
v1.print();
v2.print();

// const config = {
//     WEREWOLF_MAX_HEALTH: 100,
//     WEREWOLF_ATTACK: 20,
//     VAMPIRE_MAX_HEALTH: 100,
//     VAMPIRE_ATTACK: 20,
//     VAMPIRE_BITE_RATE: 0.3,
//     VAMPIRE_HEAL_RATE: 0.3,
// };

// class Monster {
//     constructor(maxHealth, attack) {
//         this.health = maxHealth;
//         this.maxHealth = maxHealth;
//         this.attackPoint = attack;
//     }

//     // updates health and returns actual damage done.
//     takesDamage(x) {
//         let damage = 0;
//         if (this.health < x) {
//             damage = this.health;
//             this.health = 0;
//         }
//         else {
//             damage = x;
//             this.health -= x;
//         }
//         return damage;
//     }
// };

// class Werewolf extends Monster {
//     constructor() {
//         super(config.WEREWOLF_MAX_HEALTH, config.WEREWOLF_ATTACK);
//     }

//     attack(m) { // m is a monster
//         m.takesDamage(this.attackPoint);
//     }
// };

// class Vampire extends Monster {
//     constructor() {
//         super(config.VAMPIRE_MAX_HEALTH, config.VAMPIRE_ATTACK);
//         this.biteRate = config.VAMPIRE_BITE_RATE;
//         this.healRate = config.VAMPIRE_HEAL_RATE;
//     }

//     attack(m) { // m is a monster
//         let damageDone = m.takesDamage(this.attackPoint);
//         if (Math.random() < this.biteRate) {
//             // bitten

//         }
//     }
// }
