import React, { useState } from "react";
import ChatLayout from "./chat/ChatLayout";

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

const Home = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      title: "Getting Started",
      lastMessage: "Hello! How can I help you today?",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Project Discussion",
      lastMessage: "Let's talk about the new features.",
      timestamp: new Date().toISOString(),
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you today?",
      role: "assistant",
      timestamp: new Date().toISOString(),
    },
  ]);

  const [selectedConversationId, setSelectedConversationId] =
    useState<string>("1");
  const [isStreaming, setIsStreaming] = useState(false);

  const handleNewChat = () => {
    const newId = (conversations.length + 1).toString();
    const newConversation = {
      id: newId,
      title: "New Conversation",
      lastMessage: "Start a new conversation",
      timestamp: new Date().toISOString(),
    };
    setConversations([...conversations, newConversation]);
    setSelectedConversationId(newId);
    setMessages([]);
  };

  const handleSelectConversation = (id: string) => {
    setSelectedConversationId(id);
    // In a real app, you would load the messages for this conversation
    setMessages([
      {
        id: "1",
        content: `Viewing conversation ${id}`,
        role: "assistant",
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const handleDeleteConversation = (id: string) => {
    setConversations(conversations.filter((conv) => conv.id !== id));
    if (selectedConversationId === id) {
      setSelectedConversationId(conversations[0]?.id || "");
    }
  };

  const handleRenameConversation = (id: string) => {
    // In a real app, you would show a dialog to get the new name
    const newTitle = `Renamed Conversation ${id}`;
    setConversations(
      conversations.map((conv) =>
        conv.id === id ? { ...conv, title: newTitle } : conv,
      ),
    );
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      content,
      role: "user",
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    setIsStreaming(true);

    // Simulate streaming response
    setTimeout(() => {
      const responseMessage: Message = {
        id: (messages.length + 2).toString(),
        content: "This is a simulated response to your message.",
        role: "assistant",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, responseMessage]);
      setIsStreaming(false);
    }, 2000);
  };

  return (
    <div className="h-screen w-full bg-background">
      <ChatLayout
        conversations={conversations}
        messages={messages}
        isStreaming={isStreaming}
        onNewChat={handleNewChat}
        onSelectConversation={handleSelectConversation}
        onDeleteConversation={handleDeleteConversation}
        onRenameConversation={handleRenameConversation}
        onSendMessage={handleSendMessage}
        selectedConversationId={selectedConversationId}
        disabled={isStreaming}
      />
    </div>
  );
};

export default Home;
