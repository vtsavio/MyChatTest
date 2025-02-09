import React from "react";
import ConversationSidebar from "./ConversationSidebar";
import ChatArea from "./ChatArea";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
}

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

interface ChatLayoutProps {
  conversations?: Conversation[];
  messages?: Message[];
  isStreaming?: boolean;
  onNewChat?: () => void;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
  onRenameConversation?: (id: string) => void;
  onSendMessage?: (message: string) => void;
  selectedConversationId?: string;
  disabled?: boolean;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({
  conversations = [
    {
      id: "1",
      title: "Getting Started",
      lastMessage: "Hello! How can I help you today?",
      timestamp: new Date().toISOString(),
    },
  ],
  messages = [
    {
      id: "1",
      content: "Hello! How can I help you today?",
      role: "assistant",
      timestamp: new Date().toISOString(),
    },
  ],
  isStreaming = false,
  onNewChat = () => {},
  onSelectConversation = () => {},
  onDeleteConversation = () => {},
  onRenameConversation = () => {},
  onSendMessage = () => {},
  selectedConversationId = "",
  disabled = false,
}) => {
  return (
    <div className="flex h-full w-full bg-background">
      <div className="absolute right-4 top-4 z-50">
        <ThemeToggle />
      </div>
      <ConversationSidebar
        conversations={conversations}
        onNewChat={onNewChat}
        onSelectConversation={onSelectConversation}
        onDeleteConversation={onDeleteConversation}
        onRenameConversation={onRenameConversation}
        selectedConversationId={selectedConversationId}
      />
      <div className="flex-1">
        <ChatArea
          messages={messages}
          isStreaming={isStreaming}
          onSendMessage={onSendMessage}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ChatLayout;
