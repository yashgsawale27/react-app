import RobotProfileImage from '../assets/bot.png';
import UserProfileImage from '../assets/person.png';
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
          // const message = props.message;
          // const sender = props.sender;
          // const{ message, sender } = props;

          /*if (sender === 'bot') {
            return (
              <div>
                <img src="bot.png" width="44" />
                {message}
              </div>
            );
          } */

    return (
        <div className={
            sender === 'user' 
            ? 'chat-message-user' 
            : 'chat-message-bot'
        }>
            {sender === 'bot' && (
                <img src={RobotProfileImage} 
                className="chat-message-profile"
                />
            )}
            
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && (
                <img src={UserProfileImage} 
                className="chat-message-profile"
                />
            )}
        </div>
    );
}
