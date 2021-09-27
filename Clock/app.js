function updateTime(){
    var now = new Date();
    var dname = now.getDay(),
        dnum = now.getDate(),
        mo = now.getMonth(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = 'AM';
    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }
        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["date-name", "date-month", "date-day", "date-year", "time-hour", "time-min", "time-sec", "time-period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0 ; i < ids.length; i++){
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        }
    }
function initTime(){
    updateTime()
    window.setInterval('updateTime()',1);
}