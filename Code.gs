var token = "<bot token>";

function doGet() {

}


function doPost(e) {
  // Parse to json
  var chat = JSON.parse(e.postData.contents);
  
  // If any message there
  if(chat.message) {
    
    // Retrieve sender's id
    var id = chat.message.from.id;
    
    // Retrieve sender's message
    var message = chat.message.text;
    if(typeof pushData === "function"){
        pushData('/user/' + id + '/message', message);
    }

    let result = read_data(message);
    result.response.forEach(function(response, index){
      sendMessage(id, response, result.keyboard);
    })
    
  }
}

function sendMessage(id, message, keyboardList) {
  let reply_markup = {
      resize_keyboard: true
  }

  //use normal keyboard
  reply_markup.keyboard = keyboardList;
  
  var data = {
    chat_id: id,
    text: message,
    //parse_mode: 'HTML',
    reply_markup: JSON.stringify(reply_markup)
  };
  var option = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(data)
  };
  
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/sendMessage', option);
  
}
