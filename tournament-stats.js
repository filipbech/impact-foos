import { LitElement, html } from './lit-html-element/lit-element.js';
import { routeTo } from './element-router.js';

import { TOURNAMENT } from './state.js';

export class TournamentStatsElement extends LitElement {

    render() {
        return html`
            <h1>Moar stats...</h1>
            <p>there are probably more stats to show here..? </p>
            <p>off/def ranks</p>
            <p>graphs (burndown graphs)</p>
            <p>userMatchUp</p>
            <p>user statistics</p>
            
        `;
    }
}
customElements.define('tournament-stats', TournamentStatsElement);

