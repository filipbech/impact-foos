import { LitElement, html } from './lit-html-element/lit-element.js';
import { routeTo } from './element-router.js';

import { TournamentStatistics } from './tournament-statistics.js';
import { TOURNAMENT } from './state.js';

export class HomePageElement extends LitElement {

    render() {
        return html`
            <h1>IMPACT FOOS</h1>
            <button on-click="${e=>routeTo('/add')}">Add game now</button>

            <tournament-statistics tournamentid="${TOURNAMENT}"></tournament-statistics>
        `;
    }
}
customElements.define('home-page', HomePageElement);

