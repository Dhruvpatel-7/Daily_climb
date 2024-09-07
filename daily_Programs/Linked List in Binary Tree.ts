// Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
//Output: true
//Explanation: Nodes in blue form a subpath in the binary Tree.  


class ListNode {
    val: number
    next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
      }
  }


  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        }
    }

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {

    //  we check wether the root the null if so we iwll return that time itself it is false
    if(!root) return false;

// here we put 3 condition if any of them become true that time true that will return  or else if all are false ther return false
// here first one is to check the root have the value  , or else we will change the root into left or right
    return dfs(root,head) || isSubPath(head,root.left) || isSubPath(head,root.right);
};


// this functio wil help to find weather there is the linked list situted in the root
function dfs(root:TreeNode | null, head:ListNode |null ):boolean{

    //if head is empty that mean the the end of the linked lst reached and the task completed or we can say that linked list is situated in this bst.
    if(!head) return true;
    //id root is empty that means linkedlist is not situated so we return false
    if(!root) return false;

    //here we check the rooot value us same as head value the we go into the leaf left or right with the next linked list element

    if(root.val === head.val){
        return dfs(root.left,head.next) || dfs(root.right , head.next)
    }

    //both of them return false (means there dont exist the linkedlist   ) so we return false
    return false

}