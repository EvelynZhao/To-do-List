$(document).ready(function() {
    $("#hamburger").click(function(){
        $("#menu").toggle();
    });

    $("#add").click(function(){
    	console.log("added");

    	var itemName = $("#inp").val();
        $("#itemList").append('<div class="item"><input type="checkbox" id="box" style="margin-left:10px;"></input><name>' + itemName + '</name></div>');
        $("#inp").val("");
    });

    $('.itemList').delegate(':checkbox', 'change', function(){
    	console.log("box checked");
        var $this = $(this);
        $("#completed").append($this.parent());
        
        if($this.prop('checked')){
            $this.parent().hide();
        }
        
        });
   
    $("#retrieve").click(function(){
        console.log("show all");
        $( "div.item:hidden" ).show();
    });

    $('.completed').delegate(':checkbox', 'change', function(){
        console.log("box checked");
        var $this = $(this);
        $("#itemList").append($this.parent());
        if($this.prop('unchecked')){
            $this.parent().show();
        }    
        });

    $("#newGroup").click(function(){
        window.location.href = './add_group.html';
    });

});











