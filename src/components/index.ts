/*
Create components in this folder
Import them here
 */
import {define, html, Hybrids} from 'hybrids';

interface SimpleCounter extends HTMLElement {
    count: number;
}


export function increaseCount(host: SimpleCounter) {
  host.count += 1;
}

export const SimpleCounter: Hybrids<SimpleCounter> = {
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `,
};

define('simple-counter', SimpleCounter);