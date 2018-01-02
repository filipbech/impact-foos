import { LitElement, html } from './lit-html-element/lit-element.js';
import { getTournaments } from './api.js';

export class TournamentList extends LitElement {

    connectedCallback() {
        super.connectedCallback();
        getTournaments().then(tournaments => {
            this.tournaments = tournaments;
            this.invalidate().then(_=>{
                this.change();
            })
        });

        this.change = this.change.bind(this);
    }

    change() {
        this.dispatchEvent(new CustomEvent('settournament',{
            detail:{
                id: this.$('select').value
            }
        }));
    }

    render() {
        return html`
            ${this.tournaments &&
            html`<select on-change="${this.change}" id="select">${
                this.tournaments.map(tournament => html`
                        <option value="${tournament.id}">${tournament.name}</option>
                    `)}
                </select>`
            }
        `;
    }
}
customElements.define('tournament-list', TournamentList);

