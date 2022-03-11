/* Date对象 */
 
function showYear(){
	var d = new Date();
	var x = document.getElementById("myYear");
	x.innerHTML=d.getFullYear();
} 
function time1970(){
	var d = new Date();
	var x = document.getElementById("my1970");
	x.innerHTML=d.getTime();
}
function setYear(){
	var d = new Date();
	d.setFullYear(2022,02,11);//月份要减一
	var x = document.getElementById("setYear1");
	x.innerHTML=d;
}

function timeUTC(){
	var d = new Date();
	var x = document.getElementById("timeUTC1");
	x.innerHTML=d.toUTCString();
}

function timeWeek(){
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]="周日";
	weekday[2]="周一";
	weekday[3]="周二";
	weekday[4]="周三";
	weekday[5]="周四";
	weekday[6]="周五";
	weekday[7]="周六";
	var x = document.getElementById("timeWeek1");
	x.innerHTML=weekday[d.getDay()]
}


function dateType(){
	var today = new Date()
	var d1 = new Date("October 13, 1975 11:13:00")
	var d2 = new Date(79,5,24)
	var d3 = new Date(79,5,24,11,33,0)
	document.getElementById('dateType1').innerHTML=today;
	document.getElementById('dateType2').innerHTML=d1;
	document.getElementById('dateType3').innerHTML=d2;
	document.getElementById('dateType4').innerHTML=d3;
	
}




function checkDate2(){

	var x=new Date();
	x.setFullYear(2022,2,30);
	var today = new Date();

	if (x>today)
	{
		alert("今天是2022年3月30日之前");
	}
	else
	{
		alert("今天是2022年3月30日之前");
	}
}

function checkDate(){
	var markDate = new Date();
	markDate.setFullYear(2022,2,30);
	var today = new Date();
	z = markDate.getDate()-today.getDate()
	alert("距离3月结束还有" + z + "天");
}
function checkDate1(){
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]="周日";
	weekday[2]="周一";
	weekday[3]="周二";
	weekday[4]="周三";
	weekday[5]="周四";
	weekday[6]="周五";
	weekday[7]="周六";
	todayWeek=weekday[d.getDay()]
	var today = new Date();
	today.setDate(today.getDate()+7)
	alert("下"+ todayWeek + "是" + today);
}




/* 钟表 */
function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();// 在小于10的数字前加一个‘0’
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('myClock').innerHTML=h+":"+m+":"+s;
	t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;// 在小于10的数字前加一个‘0’
	}
	return i;
}

