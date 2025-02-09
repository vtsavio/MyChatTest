import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, MessageSquare, MoreVertical, Trash2, Edit } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

interface ConversationSidebarProps {
  conversations?: Conversation[];
  onNewChat?: () => void;
  onSelectConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
  onRenameConversation?: (id: string) => void;
  selectedConversationId?: string;
}

const ConversationSidebar: React.FC<ConversationSidebarProps> = ({
  conversations = [
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
  ],
  onNewChat = () => {},
  onSelectConversation = () => {},
  onDeleteConversation = () => {},
  onRenameConversation = () => {},
  selectedConversationId = "",
}) => {
  return (
    <div className="flex h-full w-[320px] flex-col border-r bg-background">
      <div className="p-4">
        <Button
          onClick={onNewChat}
          className="w-full justify-start gap-2"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      <ScrollArea className="flex-1 px-2">
        <div className="space-y-2 p-2">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`group flex cursor-pointer items-center justify-between rounded-lg p-3 hover:bg-accent ${
                selectedConversationId === conversation.id ? "bg-accent" : ""
              }`}
              onClick={() => onSelectConversation(conversation.id)}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <div className="flex flex-col overflow-hidden">
                  <span className="truncate font-medium">
                    {conversation.title}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {conversation.lastMessage}
                  </span>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => onRenameConversation(conversation.id)}
                  >
                    <Edit className="mr-2 h-4 w-4" />
                    Rename
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onDeleteConversation(conversation.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ConversationSidebar;
