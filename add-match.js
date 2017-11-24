import { LitElement, html } from './node_modules/lit-html-element/lit-element.js';
import { createMatch, getAllUsers } from './api.js';

export class AddMatch extends LitElement {
   
    async connectedCallback() {
        super.connectedCallback();
        this.users = await getAllUsers();
        this.createMatch = this.createMatch.bind(this);
        this.invalidate();
    }

    createMatch() {
        createMatch(this.tournament, {
            "Fraction1Name": "",
            "OffensiveFraction1Username": this.$('off-1').value,
            "DefensiveFraction1Username": this.$('def-1').value,
            "Fraction2Name": "",
            "OffensiveFraction2Username": this.$('off-2').value,
            "DefensiveFraction2Username": this.$('def-2').value,
            "Fraction1Score": this.$('score1').value,
            "Fraction2Score": this.$('score2').value
        });
    }

    player(id) {
        return html`
            <select id="${id}">
                <option value="">-</option>
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
            <h1>Add Match</h1>
            1-Defence: ${this.player('def-1')}<br/>
            1-Offence: ${this.player('off-1')}<br/>
            2-Defence: ${this.player('def-2')}<br/>
            2-Offence: ${this.player('off-2')}<br/>
            1-Score: <input type="number" min="0" max="10" id="score1" value="0" />
            2-Score: <input type="number" min="0" max="10" id="score2" value="0" /><br/>
            <button on-click="${this.createMatch}">Send</button>
        `;
    }
}
customElements.define('add-match', AddMatch);

