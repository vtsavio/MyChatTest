import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
}

interface ChatAreaProps {
  messages?: Message[];
  isStreaming?: boolean;
  onSendMessage?: (message: string) => void;
  disabled?: boolean;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  messages = [
    {
      id: "1",
      content: "Hello! How can I help you today?",
      role: "assistant",
      timestamp: new Date().toISOString(),
    },
  ],
  isStreaming = false,
  onSendMessage = () => {},
  disabled = false,
}) => {
  return (
    <div className="flex h-full w-full flex-col bg-background">
      <div className="flex-1 overflow-hidden">
        <MessageList messages={messages} isStreaming={isStreaming} />
      </div>
      <MessageInput
        onSendMessage={onSendMessage}
        disabled={disabled}
        placeholder="Type your message here..."
      />
    </div>
  );
};

export default ChatArea;
