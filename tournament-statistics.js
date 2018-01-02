import { LitElement, html } from './lit-html-element/lit-element.js';

import { getTournament, getTournamentUserRanks } from './api.js';
import { routeTo } from './element-router.js';

export class TournamentStatistics extends LitElement {

    normalizeRanks(userRanks) {
        this.ranking = Object.keys(userRanks)
            .map(key => {
                return {
                    user:key,
                    totalRank: userRanks[key][userRanks[key].length - 1].totalRank,
                    ranks: userRanks[key]
                }
            }).sort((user2, user1) => user1.totalRank - user2.totalRank);
    }

    set tournamentid(tournamentid) {
        if (!tournamentid) return;
        this._tournamentid = tournamentid;
        this.invalidate();

        getTournamentUserRanks(tournamentid).then(tournament => {
            this.normalizeRanks(tournament.userRanks);
            this.invalidate();
        })
    }
    get tournamentid() {
        return this._tournamentid;
    }

    render() {
        return html`
            <h3>Statistics</h3>
            ${this.ranking && 
                html`<ul>
                ${this.ranking.map(user=>html`
                    <li>${user.user}: ${Math.round(user.totalRank)}</li>
                `)}
                </ul>`
            }
            <button on-click="${e=>{ routeTo('/stats') }}">More statistics...</button>
        `;
    }
}
customElements.define('tournament-statistics', TournamentStatistics);
