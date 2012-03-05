$(document).ready(function(){

  (function($){
    var ListView = Backbone.View.extend({    
      el: $('body div div'),
      initialize: function(){
        _.bindAll(this, 'render'); 
        this.render(); 
      },

      render: function(){
        var that = this;
        $.ajax({
          url: 'data.json' ,
          dataType: 'json',
          success: function(data){
            
            var str = "";
            _.each(data.lines, function(line){
              str += line + "<br>";  
            });
            that.el.html(str);
          } 
        });
      }
    });

    var listView = new ListView();      
  })(jQuery);

});
