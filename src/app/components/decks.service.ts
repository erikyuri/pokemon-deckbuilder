import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Deck } from '../models/deck.model';

@Injectable({
  providedIn: 'root'
})
export class DecksService {

  decks: Deck[] = [
    {
      deckSize: 24,
      imageUrl: "https://images.pokemontcg.io/dp3/3.png",
      name: "Sample Deck",
      cards: [
        {
          id: "dp3-3",
          name: "Charizard",
          supertype: "Pokémon",
          subtypes: [
            "Stage 2"
          ],
          hp: "130",
          types: [
            "Fire"
          ],
          abilities: [
            {
              name: "Fury Blaze",
              text: "If your opponent has 3 or less Prize cards left, each of Charizard's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
              type: "Poké-Body"
            }
          ],
          attacks: [
            {
              name: "Blast Burn",
              cost: [
                "Fire",
                "Fire",
                "Fire",
                "Colorless"
              ],
              convertedEnergyCost: 4,
              damage: "120",
              text: "Flip a coin. If heads, discard 2 Energy cards attached to Charizard. If tails, discard 4 Energy cards attached to Charizard. (If you can't, this attack does nothing.)"
            }
          ],
          weaknesses: [
            {
              "type": "Water",
              "value": "+40"
            }
          ],
          resistances: [
            {
              "type": "Fighting",
              "value": "-20"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 3,
          set: {

            name: "Secret Wonders",
            series: "Diamond & Pearl",
          },
          number: "3",
          artist: "Daisuke Ito",
          rarity: "Rare Holo",
          flavorText: "It is said that CHARIZARD's fire burns hotter if it has experienced harsh battles.",
          nationalPokedexNumbers: [
            6
          ],
          images: {
            "small": "https://images.pokemontcg.io/dp3/3.png",
            "large": "https://images.pokemontcg.io/dp3/3_hires.png"
          },
          quantity: 4
        },
        {
          id: "base4-2",
          name: "Blastoise",
          supertype: "Pokémon",
          subtypes: [
            "Stage 2"
          ],
          hp: "100",
          types: [
            "Water"
          ],
          abilities: [
            {
              name: "Rain Dance",
              text: "As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
              type: "Pokémon Power"
            }
          ],
          attacks: [
            {
              name: "Hydro Pump",
              cost: [
                "Water",
                "Water",
                "Water"
              ],
              convertedEnergyCost: 3,
              damage: "40+",
              text: "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
            }
          ],
          weaknesses: [
            {
              type: "Lightning",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 3,
          set: {
            name: "Base Set 2",
            series: "Base",
          },
          number: "2",
          artist: "Ken Sugimori",
          rarity: "Rare Holo",
          flavorText: "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
          nationalPokedexNumbers: [
            9
          ],
          images: {
            small: "https://images.pokemontcg.io/base4/2.png",
            large: "https://images.pokemontcg.io/base4/2_hires.png"
          },
          "quantity": 4
        },
        {
          id: "gym1-18",
          name: "Misty",
          supertype: "Trainer",
          rules: [
            "Discard 2 of the other cards in your hand in order to play this card. If this turn's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), and if the attacking Pokémon has Misty in its name, the attack does 20 more damage to the Defending Pokémon."
          ],
          set: {
            name: "Gym Heroes",
            series: "Gym",
          },
          number: "18",
          artist: "Ken Sugimori",
          rarity: "Rare Holo",
          images: {
            small: "https://images.pokemontcg.io/gym1/18.png",
            large: "https://images.pokemontcg.io/gym1/18_hires.png"
          },
          "quantity": 4
        },
        {
          id: "det1-4",
          name: "Charmander",
          supertype: "Pokémon",
          subtypes: [
            "Basic"
          ],
          hp: "60",
          types: [
            "Fire"
          ],
          evolvesTo: [
            "Charmeleon"
          ],
          attacks: [
            {
              name: "Reckless Charge",
              cost: [
                "Colorless"
              ],
              convertedEnergyCost: 1,
              damage: "20",
              text: "This Pokémon does 10 damage to itself."
            }
          ],
          weaknesses: [
            {
              type: "Water",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            name: "Detective Pikachu",
            series: "Sun & Moon",
          },
          number: "4",
          artist: "MPC Film",
          rarity: "Common",
          flavorText: "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
          nationalPokedexNumbers: [
            4
          ],
          images: {
            small: "https://images.pokemontcg.io/det1/4.png",
            large: "https://images.pokemontcg.io/det1/4_hires.png"
          },
          "quantity": 4
        },
        {
          id: "sm75-2",
          name: "Charmeleon",
          supertype: "Pokémon",
          subtypes: [
            "Stage 1"
          ],
          hp: "80",
          types: [
            "Fire"
          ],
          evolvesTo: [
            "Charizard"
          ],
          abilities: [
            {
              name: "Burning Fighter",
              text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 5 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.",
              type: "Ability"
            }
          ],
          attacks: [
            {
              name: "Flamethrower",
              cost: [
                "Fire",
                "Fire",
                "Colorless"
              ],
              convertedEnergyCost: 3,
              damage: "80",
              text: "Discard an Energy from this Pokémon."
            }
          ],
          weaknesses: [
            {
              type: "Water",
              "value": "×2"
            }
          ],
          retreatCost: [
            "Colorless",
            "Colorless"
          ],
          convertedRetreatCost: 2,
          set: {
            name: "Dragon Majesty",
            series: "Sun & Moon",
          },
          number: "2",
          artist: "kodama",
          rarity: "Uncommon",
          flavorText: "When it swings its burning tail, it elevates the air temperature to unbearably high levels.",
          nationalPokedexNumbers: [
            5
          ],
          images: {
            small: "https://images.pokemontcg.io/sm75/2.png",
            large: "https://images.pokemontcg.io/sm75/2_hires.png"
          },
          quantity: 4
        },
        {
          id: "bw10-14",
          name: "Squirtle",
          supertype: "Pokémon",
          subtypes: [
            "Basic"
          ],
          hp: "50",
          types: [
            "Water"
          ],
          evolvesTo: [
            "Wartortle"
          ],
          attacks: [
            {
              name: "Bubble",
              cost: [
                "Water"
              ],
              convertedEnergyCost: 1,
              damage: "",
              text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
            },
            {
              name: "Water Gun",
              cost: [
                "Water",
                "Colorless"
              ],
              convertedEnergyCost: 2,
              damage: "20",
              text: ""
            }
          ],
          weaknesses: [
            {
              type: "Grass",
              value: "×2"
            }
          ],
          retreatCost: [
            "Colorless"
          ],
          convertedRetreatCost: 1,
          set: {
            name: "Plasma Blast",
            series: "Black & White",
          },
          number: "14",
          artist: "Akira Komayama",
          rarity: "Common",
          flavorText: "It shelters itself in its shell then strikes back with spouts of water at every opportunity.",
          nationalPokedexNumbers: [
            7
          ],
          images: {
            small: "https://images.pokemontcg.io/bw10/14.png",
            large: "https://images.pokemontcg.io/bw10/14_hires.png"
          },
          quantity: 4,
        },
      ]
    },
  ];

  constructor() { }


  deletarDeck(index: number) {
    this.decks.splice(index, 1)
  }


}

