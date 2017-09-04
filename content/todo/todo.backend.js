
(function (window) {
  function Backend() {
    this.todoItems = new Array();
    this.load();
    this.idCounter = this.todoItems.length;
  }

  Backend.prototype.load = function () {
    this.todoItems.push({
      id: "0",
      text: "breakfast at Panera Bread",
      completed: false
    });
    this.todoItems.push({
      id: "1",
      text: "lunch meeting at Universal Cafe",
      completed: false
    });
    this.todoItems.push({
      id: "2",
      text: "remember the milk",
      completed: false
    });
    this.todoItems.push({
      id: "3",
      text: "Don't forget Chips",
      completed: false
    });
  };

  Backend.prototype.listItems = function () {
    return this.todoItems;
  };

  Backend.prototype.clearItems = function () {
    this.todoItems = new Array();
  };

  Backend.prototype.getItem = function(id) {
    var item = null;
    this.todoItems.forEach(function(element) {
      if (id === element.id) {
        item = element;
      }
    });
    return item;
  };

  Backend.prototype.addItem(id, item) {
    this.todoItems.push(item);
  }
})(window);

