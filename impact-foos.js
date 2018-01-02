import { LitElement, html } from './lit-html-element/lit-element.js';
import { ElementRouter, routeTo } from './element-router.js';
import { HomePageElement } from './home-page.js';

export class ImpactFoos extends LitElement {

    render() {
        return html`
            <element-router>
                <element-route path="/" element="home-page"></element-route>
                <element-route path="/add" element="add-match" import="./add-match.js"></element-route>
                <element-route path="/stats" element="tournament-stats" import="./tournament-stats.js"></element-route>
                <element-route path="*" redirect="/"></element-route>
            </element-router>
        `;
    }
}
customElements.define('impact-foos', ImpactFoos);