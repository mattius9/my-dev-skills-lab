skillList = window.localStorage;

$('button').click(handleAddSkills);

function handleAddSkills(){
    if ($('input:text').val()!= ""){
        var $btn = $('<button></button>');
        $btn.text('X').css({'background-color':'red','color':'white','display':'inline','border': '0','padding': '5px', 'margin': '10px'});
        $btn.click(function(){
            $(this).parent('li').remove();
            $(this).remove();
        })
        var $li = $("<li></li>");
        $li.append($btn);
        var $p = $('<p></p>');
        $p.text($('input:text').val()).css('display','inline');
        // $li.text($('input:text').val()).css({'list-style-type': 'none','display':'inline'});
        $li.append($p);
        $li.css({'list-style-type': 'none','display':'inline', 'color':'var(--orange)'});
        
        $("ul").append($li);
    }
      }
      