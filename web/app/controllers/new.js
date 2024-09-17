import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IdeasNewController extends Controller {
  @tracked name = '';
  @tracked description = '';

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateDescription(event) {
    this.description = event.target.value;
  }

  @action
  async createIdea(event) {
    event.preventDefault();

    const newIdea = {
      name: this.name,
      description: this.description,
    };

    try {
      const response = await fetch('http://localhost:3000/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ idea: newIdea }),
      });

      if (!response.ok) {
        throw new Error('Failed to create idea');
      }

      const result = await response.json();
      console.log('Idea created:', result);
    } catch (error) {
      console.error('Error creating idea:', error);
    }
  }
}
