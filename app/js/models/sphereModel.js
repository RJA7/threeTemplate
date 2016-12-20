import MainModel from './mainModel';

export default class SphereModel extends MainModel {
  constructor(properties) {

    properties = properties || {
      radius: 50,
      segments: 12,
      rings: 12
    };

    super(properties);
  }
}
