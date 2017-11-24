import { LitElement, html } from './node_modules/lit-html-element/lit-element.js';
import { getTournaments } from './api.js';


export class ImpactFoos extends LitElement {

    connectedCallback() {
        super.connectedCallback();

        getTournaments().then(tournaments => {
            this.tournaments = tournaments;
            this.invalidate()
        })
    }

    render() {
        return html`
            <h1>IMPACT-foos</h1>
            <p>Select a tourmanent</p>
            ${this.tournaments && 
                html`<ul>${ 
                    this.tournaments.map(tournament => html`
                        <li>${tournament.name}</li>
                    `)}
                </ul>`
            }
        `;
    }
}
customElements.define('impact-foos', ImpactFoos);

