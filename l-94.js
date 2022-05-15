/**
 * 94. 二叉树的中序遍历
 */

// 前序遍历：根结点 ---> 左子树 ---> 右子树
// 中序遍历：左子树---> 根结点 ---> 右子树
// 后序遍历：左子树 ---> 右子树 ---> 根结点
// 层次遍历：只需按层次遍历即可

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (root !== null) {
      inorder(root.left);
      res.push(root.val);
      inorder(root.right);
    }
  };

  inorder(root);
  return res;
};

function cret(val, left, right) {
  return new TreeNode(val, left, right);
}

const test = cret(
  1,
  cret(2, cret(4), cret(5, cret(7), cret(8))),
  cret(3, undefined, cret(6))
);

console.log("====中序遍历");
var a = inorderTraversal(test);
console.log(a);

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (root !== null) {
      res.push(root.val);
      inorder(root.left);
      inorder(root.right);
    }
  };

  inorder(root);
  return res;
};

console.log("====前序遍历");
console.log(preorderTraversal(test));

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (root !== null) {
      inorder(root.left);
      inorder(root.right);
      res.push(root.val);
    }
  };

  inorder(root);
  return res;
};

console.log("====后序遍历");
console.log(postorderTraversal(test));

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelTraverse = function (root) {
  const res = [];
  const inorder = (root, level) => {
    if (root !== null) {
      res[level] = res[level] || [];
      res[level].push(root.val);

      inorder(root.left, level + 1);
      inorder(root.right, level + 1);
    }
  };

  inorder(root, 0);
  return res;
};

console.log("====层次遍历");
console.log(levelTraverse(test));
