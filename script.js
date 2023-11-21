const socket = io('localhost:3001');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container')

const username = prompt("Enter username: ");
appendText('You joined');
socket.emit('new-user', username);

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

messageForm.addEventListener('submit', event => {
    event.preventDefault();

    console.log(event);
    console.log(messageInput)
    const text = messageInput.value;
    appendText(`You: ${text}`);
    socket.emit('send-chat-message', { text: text, receiver: receiver_id});
    messageInput.value = "";
});

function appendText(message){
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}

