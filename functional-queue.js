const Queue = {
  empty: [],
  
  enqueue: (queue, item) => [...queue, item],
  
  dequeue: queue => queue.length === 0 
    ? [null, queue] 
    : [queue[0], queue.slice(1)],
  
  isEmpty: queue => queue.length === 0,
  
  peek: queue => queue.length === 0 ? null : queue[0],
  
  size: queue => queue.length
};

module.exports = Queue;