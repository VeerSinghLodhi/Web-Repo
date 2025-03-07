
function f1() {
    date1 = document.getElementById('dateId').value;
    d = new Date();
    // document.getElementById('show').innerHTML=d.getDay()+"/"+ (d.getMonth()+1)+ "/"+ d.getFullYear()+" -->"+date1;
    // document.getElementById('show').innerHTML = date1;
    date2=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDay();
    document.getElementById('show').innerHTML=date2 +" //"+date1;
    if(date1==date2)
        document.getElementById('show').innerHTML="Veer";
}

