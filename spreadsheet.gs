var templateSheetName = "Sheet1";
var defaultAnswerMsg = "DEFAULT_ANSWER"; 
var msgReceivedCol = 0;
var responseMsgCol = 1;
var keyboardStartCol = 2;


var cacheEnabled = false;

//Function to retreive all data from Message Template sheet
function getAllData() {
    let cacheName = "sheet_data_1";
    let cache = CacheService.getDocumentCache();
    if(cacheEnabled){
        let cached = cache.get(cacheName);
        if (cached != null) {
          return JSON.parse(cached);
        }
    }
    let ss = SpreadsheetApp.getActiveSpreadsheet(),
      sheet1 = ss.getSheetByName(templateSheetName),
      rowLength = sheet1.getLastRow() - 1, 
      columnLength = sheet1.getLastColumn(), 
      allData = sheet1.getRange(2, 1, rowLength, columnLength).getValues(); // get all sheet data
    if(cacheEnabled){
        cache.put(cacheName, JSON.stringify(allData), 900); // cache for 25 minutes
    }
    return allData;
}

//Extract data
function read_data(rev_msg) {
    let query = rev_msg,
        allData = getAllData(), // get all sheet data
        findRows = [], queryMessage, 
        keyboardList = [], uniqueKeyboardList = [],
        result = {};
  
    // find rows by first fow "Message"
    for (let i in allData) {
        if (allData[i].indexOf(query) == msgReceivedCol) {
            findRows.push(allData[i]);
        }
    }
    // if no message exists on the list
    if(findRows.length == 0){
      for (let i in allData) {
        if (allData[i].indexOf(defaultAnswerMsg) == msgReceivedCol) {
            findRows.push(allData[i]);
        }
      }
    }

    
    result.response = [];
    for(let j = 0; j < findRows.length; j++){
        //set response msg
        result.response.push(findRows[j][responseMsgCol]);
        //filter keyboard list
        for(let i = keyboardStartCol; i < findRows[j].length; i++){
            if(findRows[j][i]){
                keyboardList.push([findRows[j][i]]);
            }
        }
    }     
    //set keyboard list
    keyboardList.forEach(function(item) {
         if(JSON.stringify(uniqueKeyboardList).indexOf(JSON.stringify(item)) < 0) {
             uniqueKeyboardList.push(item);
         }
    });
    result.keyboard = uniqueKeyboardList;
    
    return result;
}
