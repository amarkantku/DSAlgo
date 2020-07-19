Array.prototype.push = (function(){
    var push = Array.prototype.push;
    return function() {
        return push.apply(this, arguments);
    };
})();

Array.prototype.pop = (function(){
    var pop = Array.prototype.pop;
    return function() {
        return pop.apply(this);
    };
})();

Array.prototype.pushElement = function() {
    this[this.length] = arguments[0];
}
  

Array.prototype.myMap = function(func) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(func(this[i], i, this));
  }
  return res;
}

  
  
console.log([1, 2, 3, 4, 5].myMap(x => {
  return x * x
}));

Array.prototype.myFilter = function(func) {
  var res = [];
  for (var i = 0; i < this.length; i++) {
      if(func(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
}

console.log([1, 2, 3, 4, 5].myFilter(x => {
  return x%2===0
}));

  
Array.prototype.popElement = function() {
  if (!this.length) return;
  const len = this.length - 1;
  const item = this[len];
  this.length = len;
  return item;
}
  
  let a = new Array();
  /* a.pushElement([5, 55, 7]);
  a.pushElement([4, 55, 7]);
  a.pushElement([3, 55, 7]); */
  console.log(a.popElement());
  console.log(a);
  
  a.pushElement(8);
  a.pushElement({
    a: 12,
    b: 24
  });
  a.pushElement(28);
  console.log(a.popElement());
  console.log(a.length);
  


  Array.prototype.itemIndexOf = function(searchElement, fromIndex) {

  if (this === null) {
    throw new TypeError('"this" is null or not defined');
  }

  var o = Object(this);
  var len = o.length;
  var n = fromIndex | 0;

  // if len is zero or search index is greater than len of array return -1.
  if (len === 0 || n >= len) {
    return -1;
  }

  // If n >= 0, then Let k be n.
  // Else, n<0, Let k be len - abs(n).
  // 	If k is less than 0, then let k be 0.
  var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  for (; k < len; k++) {
    if (k in o && o[k] === searchElement)
      return k;
  }

  return -1;
}

console.log([1, 2, 3, 4, 5].itemIndexOf(5,-1));
