document.getElementById('matsel').onchange = function () 
{
    if (this.name == 'ashingles') 
    {
        document.getElementsByName("hipNridge").disabled = false;
    }

    else 
    {
        document.getElementsByName("hipNridge").disabled = true;
    }
}