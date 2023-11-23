/// declaring port number
const socket = io('localhost:3001');

/// getting html elements
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container')

/// asking for user1
const username = prompt("Enter senderID: ");
appendText('You joined');
socket.emit('new-user', username);

/// asking for user2
const receiver_id = prompt("Enter receiverID: ");
socket.emit('receiver-user', receiver_id);

socket.on('chat-message', data => {
    appendText(`${data.name}: ${data.message}`);
});

socket.on('user-connected', name => {
    appendText(`${name} connected`);
});

socket.on('user-disconnected', name => {
    appendText(`${name} disconnected`);
});

/// adding event to button
messageForm.addEventListener('submit', event => {
    /// prevent default to avoid refreshing
    event.preventDefault();
    const text = messageInput.value;
    appendText(`You: ${text}`);
    socket.emit('send-chat-message', { text: text, receiver: receiver_id});
    messageInput.value = "";
});

/// function to append text in the container
function appendText(message){
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}

