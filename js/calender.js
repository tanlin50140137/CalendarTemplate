/**
 * js
 */
$(function(){
	var myDate = new Date();
	//设置年
	var yyyy = $("#yyyy");
	var miny = parseInt(myDate.getFullYear())-118;
	var maxy = parseInt(myDate.getFullYear())+32;
	var yhtml = '';
	yyyy.empty();
	for(var y=miny;y>=miny&&y<=maxy;y++)
	{
		if( y == myDate.getFullYear() )
		{	
			yhtml += '<option value="'+y+'" selected="selected">'+y+'年</option>';
		}
		else
		{
			yhtml += '<option value="'+y+'">'+y+'年</option>';
		}	
	}	
	yyyy.append(yhtml);
});