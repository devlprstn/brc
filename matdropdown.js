$(document).ready(function(){
    var $cat = $('select[name=worktype]'),
    $items = $('select[name=materialtype]');

    $cat.change(function(){
        
        var $this = $(this).find(':selected'),
        rel = $this.attr('rel');
                
        // Hide all
        $items.find("option").hide();
          
        // Find all matching accessories
        // Show all the correct accesories
        // Select the first accesory
        $set = $items.find('option.' + rel);
        $set.show().first().prop('selected', true);
        
    });
});