export class Queue<T> {
   items: T[]

   constructor() {
      this.items = [];
   }

   // Add an element to the end of the queue
   enqueue(element: T) {
      this.items.push(element);
   }

   // Add an element to the end of the queue
   remove(element:T) {
      const index = this.items.indexOf(element);
      if(index === -1) return false

      this.items.splice(index, 1)
      return true
   }

   // Remove and return the first element of the queue
   dequeue() {
      if (this.isEmpty) {
         throw new Error("Queue is empty");
      }
      return this.items.shift();
   }

   // Peek at the first element of the queue without removing it
   get front() {
      if (this.isEmpty) {
         throw new Error("Queue is empty");
      }
      return this.items[0];
   }

   // Check if the queue is empty
   get isEmpty() {
      return this.items.length === 0;
   }

   // Get the size of the queue
   get size() {
      return this.items.length;
   }

   // Clear the queue
   clear() {
      this.items = [];
   }
}
