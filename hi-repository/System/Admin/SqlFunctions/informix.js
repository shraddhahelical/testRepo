function setQueryOffsetLimit(query, offset, limit) {
    
	query = query.split("\"").join("");
    var selectIndex = query.indexOf('\n\t');
   

   var catalog = getCatalogName(query).trim();
    var requiredQuery = query.split(catalog).join("");
	
	
	if(limit==0){
		return requiredQuery;
	}
    
	if (offset == 0) {
        query = insertFirst(requiredQuery, limit);
    }else{
		query=insertFirstAndOffset(requiredQuery, limit, offset);
		
	}
	return query;
}

function getCatalogName(query){
	 var fromIndex = query.indexOf("\nfrom\n");
var whereIndex = query.indexOf("\nwhere\n");
    var groupByIndex = query.indexOf("\ngroup by\n");
    var havingIndex = query.indexOf("\nhaving\n");
    var orderByIndex = query.indexOf("\norder by\n");


	  var fromEndIndex;
    if (whereIndex > -1) {
        fromEndIndex = whereIndex
    } else if (groupByIndex > -1) {
        fromEndIndex = groupByIndex;
    } else if (havingIndex > -1) {
        fromEndIndex = havingIndex;
    } else if (orderByIndex > -1) {
        fromEndIndex = orderByIndex
    } else {
        fromEndIndex = query.length;
    }
    var fromClause = query.substring(fromIndex, fromEndIndex);
	 
	 if(fromClause.indexOf("(")>-1){
		 return "";
	 }
	return fromClause.substring(fromClause.indexOf("\n\t"),fromClause.indexOf(".")+1)
	
}

function insertFirst(query, limit) {
    var index = getIndexOfSelect(query);
    if (index > 0)
        return query.substring(0, index) + " first " + limit + " " + query.substring(index+1, query.length);
    else
        return query;
};

function insertFirstAndOffset(query, limit, offset) {
    var index = getIndexOfSelect(query);
    if (index > 0)
        return query.substring(0, index) + " skip " + offset + " limit " + limit + " " + query.substring(index, query.length);
    else
        return query;
};
function getIndexOfSelect(query) {
    return query.toLowerCase().indexOf('select') + 6;
}
