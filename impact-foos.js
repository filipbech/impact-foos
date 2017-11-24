import { LitElement } from './node_modules/lit-html-element/lit-element.js';
import { html } from './node_modules/lit-html/lib/lit-extended.js';

import { TournamentList }  from './tournament-list.js';

import { AddMatch } from './add-match.js';

export class ImpactFoos extends LitElement {

    connectedCallback() {
        super.connectedCallback();
        this.setTournament = this.setTournament.bind(this);
    }

    setTournament(event) {
        this.tournament = event.detail.id;
        this.invalidate();
    }

    render() {
        return html`
            <tournament-list on-settournament="${this.setTournament}"></tournament-list>
            <h1>IMPACT-foos</h1>
            <add-match tournament=${this.tournament}></add-match>
        `;
    }
}
customElements.define('impact-foos', ImpactFoos);