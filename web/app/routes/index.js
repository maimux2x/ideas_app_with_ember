import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('http://localhost:3000/ideas');
    let parsed = await response.json();
    return parsed;
  }
}
