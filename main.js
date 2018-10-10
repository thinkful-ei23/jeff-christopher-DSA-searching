'use strict';

const BinarySearchTree = require('./BST');

function main() {
  const bst = new BinarySearchTree();

  bst.insert(25);
  bst.insert(15);
  bst.insert(50);
  bst.insert(10);
  bst.insert(24);
  bst.insert(35);
  bst.insert(70);
  bst.insert(4);
  bst.insert(12);
  bst.insert(18);
  bst.insert(31);
  bst.insert(44);
  bst.insert(66);
  bst.insert(90);
  bst.insert(22);

  bst.dsfInOrder();
  console.log('-------------------------------------------------------');
  bst.dsfPreOrder();
  console.log('-------------------------------------------------------');
  bst.dsfPostOrder();

  const arr = [128, 97, 121, 123, 98, 97, 105];
  function maxProfit(sharesArr) {
    let currProfit = 0;
    let nextProfit = 0;
    for (let i = 0; i < sharesArr.length; i++) {
      for (let j = 0; j < sharesArr.length; j++)
        currProfit = arr[j + 1] - arr[i];

    }
  }
  maxProfit(arr);

}

main();
