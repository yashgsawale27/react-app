import { useState } from 'react'
import { ChatInput } from './component/ChatInput';
import ChatMessages from './component/ChatMessages';
import './App.css'


function App() {
  const [chatMessages, setChatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user', 
    id: 'id1'
    }, {
      message: 'hello! how can I help you?',
      sender: 'bot',
      id: 'id2'
    }, {
      message: 'Can you get me todays date?', 
      sender: 'user',
      id: 'id3'
    }, {
      message: 'Todays date is October 15',
      sender: 'bot',
      id: 'id4'
    }]);
        //const [chatMessages, setChatMessages] = array;
        //const chatMessages = array[0];
        //const setChatMessages = array[1];


      return (
        <div className="app-container">
              
          <ChatMessages 
            chatMessages={chatMessages}
          />
          <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages} 
          />
        </div>
      );
}


export default App
