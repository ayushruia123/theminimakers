document.addEventListener('DOMContentLoaded', () => {
    const yourChatBox = document.getElementById('your-chat-box');
    const yourMessageInput = document.getElementById('your-message-input');
    const yourSendButton = document.getElementById('your-send-button');

    yourSendButton.addEventListener('click', () => {
        const message = yourMessageInput.value.trim();
        if (message !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            yourChatBox.appendChild(messageElement);
            yourMessageInput.value = '';
            yourChatBox.scrollTop = yourChatBox.scrollHeight;
        }
    });

    yourMessageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            yourSendButton.click();
            event.preventDefault();
        }
    });
});
