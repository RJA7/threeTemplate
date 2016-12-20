export default class Observable {
  constructor() {
    this.map = new Map();
  }

  on(event, handler) {
    this.map.has(event) || this.map.set(event, []);
    this.map.get(event).push(handler);
  }

  emit(event, params) {
    if (!this.map.has(event)) return;

    for (let handler of this.map.get(event)) {
      handler(params);
    }
  }
}
