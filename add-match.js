import { LitElement, html } from './node_modules/lit-html-element/lit-element.js';
import { createMatch, getAllUsers } from './api.js';
import { routeTo } from './element-router.js';
import { TOURNAMENT } from './state.js';

export class AddMatch extends LitElement {
   
    async connectedCallback() {
        super.connectedCallback();
        this.users = await getAllUsers();
        this.createMatch = this.createMatch.bind(this);
        this.invalidate();
    }

    createMatch() {
        const off1 = this.$('off-1').value;
        const off2 = this.$('off-2').value;
        const def1 = this.$('def-1').value;
        const def2 = this.$('def-2').value;

        if(!(off1 && off2 && def1 && def2)) {
            return;
        }
        
        createMatch(TOURNAMENT, {
            "Fraction1Name": "",
            "OffensiveFraction1Username": this.$('off-1').value,
            "DefensiveFraction1Username": this.$('def-1').value,
            "Fraction2Name": "",
            "OffensiveFraction2Username": this.$('off-2').value,
            "DefensiveFraction2Username": this.$('def-2').value,
            "Fraction1Score": this.$('score-1').value,
            "Fraction2Score": this.$('score-2').value
        }).then(_ => {
            routeTo('/');
        });
    }

    player(id, title) {
        return html`
            <select id="${id}">
                <option value="">${title}</option>
                ${ this.users && 
                    this.users.map(user=> html`
                        <option value="${user.username}">${user.name}</option>
                    `)
                }
            </select>
        `
    }

    render() {
        return html`
            <link rel="stylesheet" href="add-match.css" />
            <h1>Add Match</h1>
            <div class="game">
                ${this.player('def-1','1. Forsvar')}
                ${this.player('off-1','1. Angreb')}
                ${this.player('def-2','2. Forvar')}
                ${this.player('off-2','2. Angreb')}
            </div>
            <br/>
            <div class="scoreboard">
                <label for="score-1">Team 1</label>
                <input type="text" min="0" max="10" id="score-1" value="0" pattern="\d*">
                <label for="score-2">Team 2</label>
                <input type="text" min="0" max="10" id="score-2" value="0" pattern="\d*">
            </div>
            <br/>
            <button on-click="${this.createMatch}">Gem kamp</button>
            <button on-click="${e => { routeTo('/')}}">go back</button>
        `;
    }
}
customElements.define('add-match', AddMatch);

