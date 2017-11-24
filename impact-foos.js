import { LitElement, html } from './node_modules/lit-html-element/lit-element.js';

import { TournamentList }  from './tournament-list.js';

import { AddMatch } from './add-match.js';

export class ImpactFoos extends LitElement {

    render() {
        return html`
            <h1>IMPACT-foos</h1>
            <add-match></add-match>
        `;
    }
}
customElements.define('impact-foos', ImpactFoos);