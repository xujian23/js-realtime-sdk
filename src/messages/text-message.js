import TypedMessage from './typed-message';
import { messageType } from './helpers';

export default class TextMessage extends TypedMessage {
  /**
   * 文类类型消息
   * @extends TypedMessage
   * @param  {String} [text='']
   * @throws {TypeError} text 不是 String 类型
   */
  constructor(text = '') {
    if (typeof text !== 'string') {
      throw new TypeError(`${text} is not a string`);
    }
    super();
    this.setText(text);
  }

  // IE10- hack: https://phabricator.babeljs.io/T116
  static parse(...args) {
    return super.parse(...args);
  }
}
messageType(-1)(TextMessage);
