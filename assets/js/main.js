
    var data = new Date();
    var _year = data.getFullYear();
    var _month = data.getMonth()+1;
    var _today = data.getDate();
  


    document.getElementById('to_year').value=_year;
    document.getElementById('to_month').value=_month;
    document.getElementById('today').value=_today;

function calculation(){
    var _old_year = document.getElementById("old_year").value;
    var _old_month = document.getElementById("old_month").value;
    var _old_today = document.getElementById("old_today").value;
    var  _new_year,_new_month,_new_today;
    

    if(_today < _old_today){
        _new_today = ((_today+30)-_old_today);
        document.getElementById('new_today').value=_new_today;
        _month = (_month-1);


        if (_month < _old_month ){
            _new_month =((_month+12)-_old_month);
            document.getElementById('new_month').value =_new_month;
            _new_year=((_year-1)-_old_year);
            document.getElementById('new_year').value =_new_year;                 
        }


        else{
            _new_month=_month -_old_month;
            document.getElementById('new_month').value =_new_month;
            _new_year=_year -_old_year;
            document.getElementById('new_year').value =_new_year;
        }
        
    }

    else if(_month < _old_month ){
        _new_today = _today -_old_today ;
        document.getElementById('new_today').value =_new_today;
        _new_month = ((_month+12)-_old_month);
        
        document.getElementById('new_month').value =_new_month;
        _new_year =((_year-1) -_old_year)

        document.getElementById('new_year').value =_new_year;
    }
     else {
        _new_month = _month - _old_month ;
        document.getElementById('new_month').value =_new_month;

        _new_year = _year - _old_year ;
        document.getElementById('new_year').value =_new_year;
     }

    }