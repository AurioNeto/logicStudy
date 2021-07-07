import { Node } from './linked-list.js'
import { SinglyLinkedList } from './linked-list.js'

const linkedList = new SinglyLinkedList

linkedList.push(10)
linkedList.push(100)
linkedList.push(50)
linkedList.push(70)
linkedList.push(35)
linkedList.push(20)
linkedList.push(22)
linkedList.push(99)
linkedList.push(72)

function removeNodes(list, x) {
  let newList = list
  let index = 0
  let current = newList.head
  
  while(current.next) {
    if (current.val > x) {
      current = current.next
      newList.remove(index)
    } else {
      current = current.next
      index++
    }
  }

  if(newList.tail.val > x) {
    newList.pop()
  }

  return newList
}


const removedList = removeNodes(linkedList, 23
  )

console.log(removedList)