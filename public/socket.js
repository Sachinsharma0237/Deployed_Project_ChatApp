socket.on("chat-join", function(users){
    let chat = document.createElement("div");
        chat.classList.add("join");
        chat.innerHTML = users.userName + " joined the chat !";
        chatList.append(chat);

    let onlineUser = document.createElement("span");
        onlineUser.classList.add("online");
        onlineUser.innerHTML =  "🗣  " + users.userName;
        onlineUser.setAttribute("sid", users.id); 
        onlineBox.append(onlineUser);
    let greenDot = document.createElement("span");
            greenDot.classList.add("green");
            greenDot.innerHTML = "●" ;
            onlineUser.append(greenDot);   
});

socket.on("online-list", function(users){

    for(let i = 0; i < users.length; i++){
        let onlineUser = document.createElement("span");
            onlineUser.classList.add("online");
            onlineUser.innerHTML = "🗣  " + users[i].userName;
            onlineUser.setAttribute("sid", users[i].id);
            onlineBox.append(onlineUser);
        let greenDot = document.createElement("span");
            greenDot.classList.add("green");
            greenDot.innerHTML = "●" ;
            onlineUser.append(greenDot);   

    }
});

socket.on("offline" , function(sid){
    let offlineUser = document.querySelector(`span[sid='${sid}']`);
    console.log(offlineUser);
    offlineUser.remove();
})

socket.on("leave", function(userName){
    let chat = document.createElement("div");
        chat.classList.add("leave");
        chat.innerHTML = userName + " left the chat !";
        chatList.append(chat);
});


socket.on("chat-left", function(messageObj){
    let chat = document.createElement("div");
        chat.classList.add("chat");
        chat.classList.add("left");
        chat.innerHTML = messageObj.userName + ":" + messageObj.message ;
        chatList.append(chat);
});




