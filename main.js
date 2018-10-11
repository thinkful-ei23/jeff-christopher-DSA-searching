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

  // bst.dsfInOrder();
  // console.log('-------------------------------------------------------');
  // bst.dsfPreOrder();
  // console.log('-------------------------------------------------------');
  // bst.dsfPostOrder();

  'use strict';
  const arr = [128, 97, 121, 123, 98, 97, 105];
  //     temp = -31 < -7
  //        temp = -7
  function maxProfit(sharesArr) {
    let firstNum = 0;
    let secondNum = 0;
    let newArr = [];
    let profit = 0;
    for (let i = 0; i < sharesArr.length; i++) {
      for (let j = 0; j < sharesArr.length; j++) {
        if (i < sharesArr.length - 1) {
          firstNum = sharesArr[j + 1] - sharesArr[i];
          secondNum = sharesArr[j + 2] - sharesArr[i];
          if (firstNum < secondNum) {
            firstNum = secondNum;
            newArr.push(firstNum);
            // console.log('I am first', firstNum);
          }
        }
      }
    }
    // console.log('new Arr', newArr);
    return Math.max(...newArr);
  }

  console.log(maxProfit(arr));

}

main();
