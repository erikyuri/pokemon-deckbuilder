import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxOverlayService } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { DecksService } from 'src/app/components/decks.service';
import { Deck } from 'src/app/models/deck.model';

@Component({
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss']
})
export class DecksComponent implements OnInit {

  decks: Deck[] = [];
  cards: any;
  isModal = false;
  selectedDeck: any = [];
  protected _overlayId?: string = '';
  @ViewChild('cardList', { read: ElementRef })
  private cardList?: ElementRef;
  constructor(
    private deckService: DecksService,
    private router: Router,
    @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
  ) {
    this.decks = this.deckService.decks;
  }

  ngOnInit(): void {
    // this.deckService.decks.push(this.deckService.generateDeck());
  }

  newDeck() {
    this.router.navigateByUrl('deck-builder/new');
  }

  searchDecks(event: any) {
    this.decks = this.decks.filter((deck) => deck.name?.includes(event));
  }

  resetPesquisa() {
    this.decks = this.deckService.decks;
  }

  deleteDeck(index: number) {
    this.deckService.deletarDeck(index);
    this.decks = this.deckService.decks;
  }

  editDeck(name: string) {
    this.router.navigateByUrl(`deck-builder/${name}`);
  }

  checkDetails(deck: Deck) {
    this.isModal = true;
    this.selectedDeck = deck;
    if (!this._overlayId) {
      this._overlayId = this.overlayService.attach(this.cardList!)
    } else {
      this.overlayService.hide(this._overlayId);
      this.isModal = false;
    }
    this.overlayService.show(this._overlayId);
  }

  getTrainer() {
    if (this.selectedDeck?.cards?.length > 0) {
      let newArray: any = [];
      this.selectedDeck.cards.forEach((card: any) => {
        if (card.supertype == 'Trainer') {
          newArray.push(card.supertype)
        }
      });
      return new Set(newArray).size;
    } else {
      return 0;
    }
  }

  getPokemon() {
    if (this.selectedDeck?.cards?.length > 0) {
      let newArray: any = [];
      this.selectedDeck.cards.forEach((card: any) => {
        if (card.supertype == 'Pokémon') {
          newArray.push(card.supertype)
        }
      });
      return newArray.length;
    } else {
      return 0;
    }
  }

  getEnergy() {
    if (this.selectedDeck?.cards?.length > 0) {
      let newArray: any = [];
      this.selectedDeck.cards.forEach((card: any) => {
        if (card.supertype == 'Energy') {
          newArray.push(card.supertype)
        }
      });
      return newArray.length;
    } else {
      return 0;
    }
  }

  getTypes() {
    if (this.selectedDeck?.cards?.length > 0) {
      let newArray: any = [];
      this.selectedDeck.cards.forEach((card: any) => {
        if (card.supertype == 'Energy') {
          newArray.push(card.supertype)
        }
      });
      return newArray.length;
    } else {
      return 0;
    }
  }
}
