/* If left = 0, warning. */
function checkLeft()
{
    value = $("#left").val();
    if(isNaN(parseInt(value)) || value == 0) 
    {
        if(confirm(confirmFinish))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

$(function()
{
    $("a.extension, a.manual").modalTrigger({width:1024, height:600, type:'iframe'});
})
