(function() {
  console.log("hello from a require'd coffee file (via assets/js/_helper.coffee)");

}).call(this);

(function() {
  require.config({
    paths: {
      jquery: 'jquery-1.9.1.min'
    }
  });

  require(['jquery'], function($) {
    console.log('jquery loaded (via assets/js/main.coffee)');
    return $(".borderwrap").height($(document).height() - 40);
  });

}).call(this);
