import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
}

interface MessageListProps {
  messages?: Message[];
  isStreaming?: boolean;
}

const MessageList: React.FC<MessageListProps> = ({
  messages = [
    {
      id: "1",
      content: "Hello! How can I help you today?",
      role: "assistant",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      content: "I have a question about the service.",
      role: "user",
      timestamp: new Date().toISOString(),
    },
  ],
  isStreaming = false,
}) => {
  return (
    <div className="h-full w-full bg-background">
      <ScrollArea className="h-full w-full px-4">
        <div className="flex flex-col space-y-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex w-full",
                message.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={cn(
                  "flex max-w-[80%] items-start gap-3 rounded-lg p-4",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted",
                )}
              >
                <Avatar
                  className="h-8 w-8"
                  src={
                    message.role === "user"
                      ? "https://api.dicebear.com/7.x/avataaars/svg?seed=user"
                      : "https://api.dicebear.com/7.x/avataaars/svg?seed=assistant"
                  }
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">
                    {message.role === "user" ? "You" : "Assistant"}
                  </span>
                  <p className="text-sm">{message.content}</p>
                  <span className="mt-1 text-xs opacity-50">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {isStreaming && (
            <div className="flex justify-start">
              <div className="flex max-w-[80%] items-center gap-3 rounded-lg bg-muted p-4">
                <Avatar
                  className="h-8 w-8"
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=assistant"
                />
                <div className="flex space-x-2">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-foreground/50 [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default MessageList;
