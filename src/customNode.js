/**
 * 1. 自定义 html node，继承 HtmlNode, HtmlNodeModel 类实现
 */

import { HtmlNode, HtmlNodeModel, h } from '@logicflow/core'

class CustomNode extends HtmlNode {
  setHtml(rootEl) {
    // code here...
  }

  // other functions
}

class CustomNodeModel extends HtmlNodeModel {
  setAttributes() {
    // code here...
  }

  // other functions
}

export default {
  type: 'custom-node',
  view: CustomNode,
  model: CustomNodeModel
}

