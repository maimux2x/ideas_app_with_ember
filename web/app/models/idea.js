import Model, { attr } from '@ember-data/model';

export default class IdeaModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('date') createdAt;
}
