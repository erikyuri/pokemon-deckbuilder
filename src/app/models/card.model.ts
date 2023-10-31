export class Card {
    id?: string;
    name?: string;
    supertype?: string;
    subtypes?: string[];
    hp?: string;
    types?: string[];
    evolesFrom?: string;
    evolvesTo?: string[];
    rules?: string[];
    abilities?: IAbility[];
    attacks?: IAttack[];
    weaknesses?: IWeakness[];
    resistances?: IResistance[];
    retreatCost?: string[];
    convertedRetreatCost?: number;
    number?: string;
    artist?: string;
    rarity?: string;
    quantity: number = 0;
    flavorText?: string;
    set?: Set;
    nationalPokedexNumbers?: number[];
    images?: ICardImage;
}

export class Set {
    name?: string;
    series?: string;
}

export class IAbility {
    name?: string;
    text?: string;
    type?: string;
}

export class IAttack {
    cost?: string[];
    name?: string;
    text?: string;
    damage?: string;
    convertedEnergyCost?: number;
}

export class IResistance {
    type?: string;
    value?: string;
}

export class IWeakness {
    type?: string;
    value?: string;
}
export class ICardImage {
    small?: string;
    large?: string;
}