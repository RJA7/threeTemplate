import Observer from '../observer';

export default class MainModel extends Observer {
  constructor(properties) {
    super();
    Object.assign(this, properties);
  }
}
