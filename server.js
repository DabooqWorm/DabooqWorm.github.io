
$(document).ready(function() {
    $.getJSON('data.json', function(data) {
      $.each(data, function(key, items) {
        // Create a section for each key with a title
        var $keyDiv = $('<div>', {class: 'title'});
        var $h1 = $('<h1>', {id: 'tableTitle', text: key});
        $keyDiv.append($h1);
        $('#container').append($keyDiv);
  
        // Create table structure
        var $centerDiv = $('<div>', {class: 'center'});
        var $tableDiv = $('<div>');
        var $table = $('<table class="table-ar">', {id: 'infoTable'});
        var $thead = $('<thead>', {id: 'tableHead'});
        var $tbody = $('<tbody>', {id: 'tableBody'});
        $table.append($thead, $tbody);
        $tableDiv.append($table);
        $centerDiv.append($tableDiv);
        $('#container').append($centerDiv);
  
        var headersSet = false;
  
        items.forEach(function(item, index) {
          if (!headersSet) {
            // Creating header row dynamically from item keys
            var $trHead = $('<tr>');
            $.each(item, function(field, value) {
              $trHead.append($('<th>', {text: field}));
            });
            $thead.append($trHead);
            headersSet = true; // Ensure headers are set only once per category
          }
  
          // Creating body row dynamically from item values
          var $tr = $('<tr>');
          $.each(item, function(field, value) {
            $tr.append($('<td>', {text: value}));
          });
          $tbody.append($tr);
        });
      });
    });
  });