import React, { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { MessageCircle, Send, Bot, User, X, Minimize2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Amazon College\'s AI assistant. I can help you with information about our programs, admissions, fees, and more. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const quickActions = [
    'Tell me about your programs',
    'What are the admission requirements?',
    'What are the tuition fees?',
    'How can I apply?',
    'Where is the campus located?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulated AI responses based on common queries about Amazon College
    const responses: { [key: string]: string } = {
      'programs': 'Amazon College offers various programs including:\n\n• Bachelor\'s Degrees (Business Administration, IT, Psychology, Education)\n• Diploma Programs (Digital Marketing, English Language, Teacher Training)\n• HND Programs (Business Management, IT, Psychology & Counselling)\n• Certificate Programs (Childcare, Elderly Care)\n• Short Courses and Professional Development\n\nWould you like more details about any specific program?',
      
      'admission': 'Our admission requirements vary by program:\n\n• For Degree Programs: A/L passes or equivalent qualifications\n• For Diploma Programs: O/L passes or equivalent\n• For Certificate Programs: Basic educational qualifications\n• English proficiency is required for all programs\n\nWe also consider work experience and prior learning. Would you like information about a specific program\'s requirements?',
      
      'fees': 'Our fee structure is competitive and varies by program:\n\n• Certificate Programs: Starting from LKR 25,000\n• Diploma Programs: Starting from LKR 45,000\n• Degree Programs: Starting from LKR 75,000\n• HND Programs: Starting from LKR 65,000\n\nWe offer flexible payment plans and scholarships for eligible students. Contact us for detailed fee information.',
      
      'apply': 'You can apply through multiple channels:\n\n• Online Application: Visit our Apply page\n• In-Person: Visit our campus at No. 390, Galle Road, Colombo 03\n• Phone: Call +94 114-386-126\n• Email: info@amazoncollege.lk\n\nOur admissions team will guide you through the process step by step.',
      
      'location': 'Amazon College is located at:\n\n📍 No. 390, Galle Road, Colombo 03, Sri Lanka\n\n🚌 Easily accessible by public transport\n🚗 Parking facilities available\n🏢 Modern campus with state-of-the-art facilities\n\nWe\'re in the heart of Colombo, making it convenient for students from all areas.',
      
      'contact': 'You can reach us through:\n\n📞 Phone: +94 114-386-126\n✉️ Email: info@amazoncollege.lk\n📍 Address: No. 390, Galle Road, Colombo 03\n🕒 Office Hours: Monday to Friday, 8:00 AM - 5:00 PM\n\nOur team is here to help with any questions you have!'
    };

    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key) || 
          (key === 'programs' && (lowerMessage.includes('course') || lowerMessage.includes('study'))) ||
          (key === 'fees' && (lowerMessage.includes('cost') || lowerMessage.includes('price'))) ||
          (key === 'location' && (lowerMessage.includes('where') || lowerMessage.includes('address'))) ||
          (key === 'contact' && (lowerMessage.includes('phone') || lowerMessage.includes('email')))) {
        return response;
      }
    }

    // Default response for unmatched queries
    return 'Thank you for your question! For specific inquiries, I recommend:\n\n• Calling us at +94 114-386-126\n• Emailing info@amazoncollege.lk\n• Visiting our campus for a personal consultation\n\nOur education counselors will be happy to provide detailed information tailored to your needs.';
  };

  const handleSendMessage = async (content?: string) => {
    const messageContent = content || inputValue.trim();
    if (!messageContent) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageContent,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await generateAIResponse(messageContent);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Open chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg w-[95vw] max-h-[90vh] h-[600px] flex flex-col p-0 gap-0">
        <DialogDescription className="sr-only">
          AI chatbot for Amazon College assistance with programs, admissions, and general inquiries
        </DialogDescription>
        <DialogHeader className="shrink-0">
          <div className="flex items-center justify-between p-4 border-b bg-primary text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-white text-sm sm:text-base">Amazon College AI Assistant</DialogTitle>
                <p className="text-xs text-white/80">Online • Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(true)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
                aria-label="Minimize chat"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 min-h-0">
          <div className="space-y-4 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 sm:gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                )}
                
                <Card className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 ${
                  message.sender === 'user' 
                    ? 'bg-primary text-white' 
                    : 'bg-muted'
                }`}>
                  <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </Card>

                {message.sender === 'user' && (
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2 sm:gap-3 justify-start">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                  <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <Card className="bg-muted p-2 sm:p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {messages.length === 1 && (
          <div className="px-4 pb-2 shrink-0 border-t bg-muted/30">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2 pt-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(action)}
                  className="text-xs h-7 px-2"
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="border-t p-3 sm:p-4 bg-background shrink-0">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 text-sm"
              maxLength={500}
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              size="sm"
              className="px-3 shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBot;