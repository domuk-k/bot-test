const Queue = {
  empty: [],
  
  enqueue: (queue, item) => [...queue, item],
  
  dequeue: queue => queue.length === 0 
    ? [null, queue] 
    : [queue[0], queue.slice(1)],
  
  isEmpty: queue => queue.length === 0,
  
  peek: queue => queue.length === 0 ? null : queue[0],
  
  size: queue => queue.length,
  
  // Additional utility methods
  clear: () => Queue.empty,
  
  toArray: queue => [...queue],
  
  from: items => Array.isArray(items) ? [...items] : Queue.empty,
  
  map: (queue, fn) => queue.map(fn),
  
  filter: (queue, predicate) => queue.filter(predicate),
  
  contains: (queue, item) => queue.includes(item)
};

module.exports = Queue;