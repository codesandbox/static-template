/**
 * L2. 两数相加.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createListDate(arrs) {
  if (Array.isArray(arrs) && arrs.length > 0) {
    let l = null;
    arrs.forEach((item) => {
      if (l === null) {
        l = new ListNode(item);
      } else {
        l.next = new ListNode(item);
      }
    });
  }

  return null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const root = new ListNode(0);
  let cursor = root;
  let carry = 0;
  debugger;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let l1Val = l1 !== null ? l1.val : 0;
    let l2Val = l2 !== null ? l2.val : 0;
    let sumVal = l1Val + l2Val + carry;
    carry = Math.floor(sumVal / 10);

    let sumNode = new ListNode(sumVal % 10);
    cursor.next = sumNode;
    cursor = sumNode;

    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  return root.next;
};

const a1 = createListDate([2, 4, 3]);

const a2 = createListDate([5, 6, 4]);

const res = addTwoNumbers(a1, a2);
console.log(res);
