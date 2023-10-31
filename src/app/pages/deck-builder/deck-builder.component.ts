import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecksService } from 'src/app/components/decks.service';
import { PagesService } from '../pages.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IgxOverlayService, IgxToastComponent, VerticalAlignment } from 'igniteui-angular';
import { Card } from 'src/app/models/card.model';
import { Deck } from 'src/app/models/deck.model';

@Component({
  templateUrl: './deck-builder.component.html',
  styleUrls: ['./deck-builder.component.scss']
})
export class DeckBuilderComponent implements OnInit {

  form = new FormGroup({
    deckName: new FormControl('Novo Deck', Validators.required),
  });
  currentAction: string = '';
  deckList = [];
  cards: any;
  deck: Deck = {
    deckSize: 0,
    cards: [] = [],
    imageUrl: '',
    name: ''
  };
  url: string = '';
  protected _overlayId?: string = '';
  isModal = false;
  isLoading = false;
  @ViewChild('cardList', { read: ElementRef })
  private cardList?: ElementRef;
  @ViewChild('toast', { read: IgxToastComponent }) public toast!: IgxToastComponent;
  @ViewChild('toastAdd', { read: IgxToastComponent }) public toastAdd!: IgxToastComponent;


  constructor(
    private route: ActivatedRoute,
    private deckService: DecksService,
    private pagesService: PagesService,
    private router: Router,
    @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
  ) {

  }


  ngOnInit(): void {
    this.setCurrentAction();
  }

  getDeck(deckName: string) {
    this.deck = this.deckService.decks.find((deck) => deck.name == deckName)!;
    this.form.patchValue({
      deckName: this.deck.name
    })
  }

  buscarCards(event: string) {
    this.isModal = true;
    this.isLoading = true;
    this.pagesService.getCards(event).subscribe((res) => {
      this.cards = res;
      if (res.length != 0) {
        console.log('entrou')
        this.showOverlay();
      } else {
        this.openToast('Não foi encontrado cartas com esse nome');
      }
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      this.openToast('Ocorreu um erro durante a requisição');
    })
  }

  saveDeck() {
    if (this.form.valid && this.deck.deckSize >= 24) {
      this.deck.name = this.form.value.deckName!;
      this.deck.imageUrl = this.deck.cards[0].images?.small!;
      this.deckService.decks.push(this.deck);
      this.router.navigateByUrl('decks');
    } else {
      if (this.form.invalid) {
        this.openToast('Adicione um nome para o deck');
      } else {
        this.openToast('O deck deve ter no mínimo 24 cartas');
      }
    }
  }

  editDeck() {
    if (this.form.valid && this.deck.deckSize >= 24) {
      const index = this.deckService.decks.findIndex((deck) => deck.name == this.form.value.deckName);
      this.deck.name = this.form.value.deckName!;
      this.deckService.decks[index] = this.deck;
      this.router.navigateByUrl('decks');
    } else {
      if (this.form.invalid) {
        this.openToast('Adicione um nome para o deck');
      } else {
        this.openToast('O deck deve ter no mínimo 24 cartas');
      }
    }
  }

  addCard(card: Card) {
    let inDeck = this.deck.cards?.find((cardInDeck) => cardInDeck.name == card.name);

    if (!inDeck?.quantity! && this.deck.deckSize! < 60) {
      card.quantity = 1;
      this.deck.cards?.push(card);
      this.deck.deckSize++;
      this.openToast('Carta adicionada ao deck');

    } else if (inDeck?.quantity! < 4 && inDeck?.name && this.deck.deckSize! < 60) {
      inDeck.quantity++;
      this.deck.deckSize++;
      this.openToast('Carta adicionada ao deck');
    } else {
      if (inDeck?.quantity == 4) {
        this.openToast('Quantidade máxima de cópias da carta atingida');
      } else if (this.deck.deckSize == 60) {
        this.openToast('O deck pode ter no máximo 60 cartas');
      }
    }
  }

  removeCard(card: Card) {
    const i = this.deck.cards.findIndex((cardInDeck) => cardInDeck.name == card.name)
    if (card.quantity == 1) {
      this.deck.cards.splice(i, 1);
      this.deck.deckSize--;
    } else {
      let cardInDeck = this.deck.cards.find((cardInDeck) => cardInDeck.name == card.name);
      cardInDeck?.quantity! - 1;
    }
  }

  getTrainer() {
    if (this.deck.cards.length > 0) {
      let newArray: any = [];
      this.deck.cards.forEach((card) => {
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
    if (this.deck.cards.length > 0) {
      let newArray: any = [];
      this.deck.cards.forEach((card) => {
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
    if (this.deck.cards.length > 0) {
      let newArray: any = [];
      this.deck.cards.forEach((card) => {
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
    if (this.deck.cards.length > 0) {
      let newArray: any = [];
      this.deck.cards.forEach((card) => {
        if (card.supertype == 'Energy') {
          newArray.push(card.supertype)
        }
      });
      return newArray.length;
    } else {
      return 0;
    }
  }

  displayImage(url: string) {
    this.url = url;
  }


  public showOverlay() {
    if (!this._overlayId) {
      this._overlayId = this.overlayService.attach(this.cardList!)
    } else {
      this.overlayService.hide(this._overlayId);
    }
    this.overlayService.show(this._overlayId);
  }

  public closeOverlay() {
    this.overlayService.hide(this._overlayId!)
  }

  public ngOnDestroy(): void {
    if (this._overlayId) {
      this.overlayService.detach(this._overlayId);
      delete this._overlayId;
    }
  }

  protected openToast(message: string) {
    this.toast.positionSettings.verticalDirection = VerticalAlignment.Top;
    this.toast.open(message);
  }


  protected openToastCard(message: string) {
    this.toast.positionSettings.verticalDirection = VerticalAlignment.Top;
    this.toastAdd.open(message);
  }


  protected submit() {
    if (this.currentAction == 'new') {
      this.saveDeck();
    } else {
      this.editDeck();
    }
  }

  protected setCurrentAction() {
    let deckName = this.route.snapshot.paramMap.get('name');
    if (!deckName) {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
      this.getDeck(deckName!);
    }
  }
}