import React, { useState } from 'react';
import { 
  Users, 
  MessageCircle, 
  Send, 
  Plus, 
  Search,
  Menu,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const dummyDoctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', avatar: '/api/placeholder/32/32', status: 'online' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'General Physician', avatar: '/api/placeholder/32/32', status: 'offline' },
  { id: 3, name: 'Dr. Emily Wilson', specialty: 'Nutritionist', avatar: '/api/placeholder/32/32', status: 'online' },
];

const dummyCommunities = [
  { id: 1, name: 'Heart Health Support', members: 1234 },
  { id: 2, name: 'Wellness & Nutrition', members: 856 },
  { id: 3, name: 'Mental Health Care', members: 2341 },
];

const dummyMessages = [
  { id: 1, user: 'Dr. Sarah Johnson', content: 'Hello! How have you been feeling since our last appointment?', timestamp: '10:30 AM', type: 'received' },
  { id: 2, user: 'You', content: 'Hi Dr. Johnson! My blood pressure readings have been stable this week.', timestamp: '10:31 AM', type: 'sent' },
  { id: 3, user: 'Dr. Sarah Johnson', content: "That's excellent news! Have you been maintaining the recommended exercise routine?', timestamp: '10:32 AM", type: 'received' },
];

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className={`bg-background border-r w-72 flex-shrink-0 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:static h-full z-20`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              <h1 className="text-xl font-bold">HealthChat</h1>
            </div>
            <Button variant="ghost" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="direct" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="direct" className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                Doctors
              </TabsTrigger>
              <TabsTrigger value="community" className="flex-1">
                <Users className="h-4 w-4 mr-2" />
                Support Groups
              </TabsTrigger>
            </TabsList>

            <TabsContent value="direct" className="mt-0">
              <div className="space-y-2">
                {dummyDoctors.map(doctor => (
                  <div
                    key={doctor.id}
                    className="flex items-center p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                    onClick={() => setSelectedChat(doctor)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={doctor.avatar} />
                        <AvatarFallback>{doctor.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                        doctor.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                      }`} />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{doctor.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {doctor.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-0">
              <div className="space-y-2">
                {dummyCommunities.map(community => (
                  <div
                    key={community.id}
                    className="flex items-center p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                  >
                    <Avatar>
                      <AvatarFallback>{community.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="font-medium">{community.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {community.members} members
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Chat Header */}
        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <h2 className="font-semibold">Dr. Sarah Johnson</h2>
                <p className="text-sm text-muted-foreground">Cardiologist</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {dummyMessages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.type === 'sent' ? 'justify-end' : 'justify-start'
                } animate-in slide-in-from-bottom-2`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`max-w-[70%] ${
                    msg.type === 'sent'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  } rounded-lg p-3`}
                >
                  {msg.type === 'received' && (
                    <p className="text-sm font-medium mb-1">{msg.user}</p>
                  )}
                  <p>{msg.content}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button size="icon">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;