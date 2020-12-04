/**
 * 打印出一个二叉树数据结构中，所有的 value
 * @method buildTree
 * @param {object} tree 二叉树结构对象
 * @returns {Array} 遍历二叉树值的数组
 */
function buildTree(tree) {
  // 如果传入的树为空，直接返回空数组
  if (!tree) {
    return [];
  }
  let result = [];
  // 二叉树深度优先搜索，利用一个辅助栈来实现
  let stack = [tree];
  while (stack.length) {
    // 弹栈的顺序为：中 左 右
    let current = stack.pop();
    result.push(current.value);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return result;
}

const tree = {
  left: {
    left: {
      value: 3
    },
    right: { value: 4 },
    value: 1
  },
  right: {
    left: { value: 5 },
    right: { value: 6 },
    value: 2
  },
  value: 0
};
buildTree(tree);
