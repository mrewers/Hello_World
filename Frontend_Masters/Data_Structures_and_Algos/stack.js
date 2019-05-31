var Stack = function() {
  this.storage = '';
};

Stack.prototype.push = function(val) {
  this.storage = this.storage.concat( '***', val );
};

Stack.prototype.pop = function() {
  const last = this.storage.lastIndexOf('***');
  const str = this.storage.slice( last + 3 );

  this.storage = this.storage.substring( 0, last )

  return str;
};

Stack.prototype.size = function() {
  const count = (this.storage.match(/\*\*\*/g) || []).length;
  return count;
};

var myWeeklyMenu = new Stack();

myWeeklyMenu.push('RedBeans');