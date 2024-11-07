document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = "";
        respondToUser(userInput);
    }
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        var userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== "") {
            addMessage(userInput, 'user');
            document.getElementById('user-input').value = "";
            respondToUser(userInput);
        }
    }
});

function addMessage(message, sender) {
    var chatBox = document.getElementById('chat-box');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add(sender + '-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto scroll to bottom
}

function respondToUser(input) {
    let botResponse = "";
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        botResponse = "Hello! How can I help you today?";
    } else if (input.includes("how are you")) {
        botResponse = "I'm doing great, thank you! How about you?";
    } else if (input.includes("bye")) {
        botResponse = "Goodbye! Have a great day!";
    } else {
        botResponse = "Sorry, I didn't understand that.";
    }

    setTimeout(function() {
        addMessage(botResponse, 'bot');
    }, 1000);
}
