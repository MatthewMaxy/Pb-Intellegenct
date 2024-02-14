<template>
    <div class="chat-box">
      <div class="message-list">
        <div class="message" v-for="(message, index) in messages" :key="index">
          <div class="message-content" :class="{ 'self': message.self }">
            <span v-if="!message.self" class="message-user">{{ message.user }}</span>
            <div class="message-text">{{ message.text }}</div>
          </div>
        </div>
      </div>
      <div class="input-box">
        <input type="text" v-model="messageText" @keydown.enter="addMessage" placeholder="请输入消息内容">
        <button @click="addMessage">发送</button>
      </div>
    </div>
  </template>
   
  <script>
  export default {
    data() {
      return {
        messages: [
          { user: 'AI', text: '你好啊', self: false },
          { user: 'Matthew', text: '你好', self: false}
        ],
        messageText: ''
      };
    },
    methods: {
      addMessage() {
        if (!this.messageText) return;
        this.messages.push({
          user: 'Matthew',
          text: this.messageText,
          self: false
        });
        this.messageText = '';
      }
    }
  };
  </script>
   
  <style>
  .chat-box {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
   
  .message-list {
    flex: 1;
    overflow-y: auto;
  }
   
  .message {
    display: flex;
    margin: 4px 0;
  }
   
  .self .message-content {
    justify-content: flex-end;
  }
   
  .message-content {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    padding: 6px 10px;
    background-color: #d9edf7;
    border-radius: 15px;
  }
   
  .message-user {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 6px;
  }
   
  .message-text {
    font-size: 14px;
  }
  .input-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  }
   
  .input-box input {
    flex: 1;
    margin-right: 10px;
    padding: 6px 10px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    outline: none;
  }
   
  .input-box button {
    padding: 6px 20px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
   
  .input-box button:hover {
    background-color: #388e3c;
  }
  </style>