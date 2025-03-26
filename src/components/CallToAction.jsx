'use client'
import { useState, useRef, useEffect } from 'react'
import { X, Send } from 'lucide-react'
import Sent from "../assets/icons/sent"
import {ShowAvatar} from "./avatar";
import {ChatScreen} from "../components/avatar";

const API_BASE_URL = 'http://192.168.1.22:6001'
let LastIndex = null;
export const api = {
    streamResponse: async ({ role, content }, onChunk, onError, onComplete) => {
      try {
        const response = await fetch(`${API_BASE_URL}/generate/stream`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role, content }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
  
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            onComplete();
            break;
          }
  
          buffer += decoder.decode(value, { stream: true });
          
        //   const messages = buffer.split('\n\n');
        // console.log({messages});
        onChunk(buffer);

        // buffer = messages.pop() |  | '';
        }
      } catch (error) {
        onError(error);
      }
    }
  };

export default function ContactSection() {
  const [projectIdea, setProjectIdea] = useState('')
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMsg , setisLoadingMsg] = useState(false);
  const messagesEndRef = useRef(null)
  
  const projectTypes = [
    'Custom website for e-commerce...',
    'Modern redesign for tech companies...',
    'Unique AI-powered portfolio website...'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  const handleStreamResponse = ({ role, content }, onChunk, onError = () => {}, onComplete) => {
    api.streamResponse(
      { role, content },
      (data) => {
        console.log("ris2:", data);
        onChunk(data);

        // if (data && data.text) {
        //   console.log("ris:", data, data.text);
        //   // Accumulate text chunks in a single variable
        // }
      },
      (error) => {
        console.error('Streaming error:', error);
        onError(error); // Call the onError callback if provided
      },
      () => {
        LastIndex = null;
        console.log(LastIndex , " :  LastIndex = null;")
        // Once the streaming is completed, call the onComplete callback
        onComplete();
      }
    );
  };
  
  const handleSendProjectIdea = async () => {
    if (projectIdea.trim()) {
      setisLoadingMsg(true);
      setMessages([{ id: 1, text: projectIdea, sender: 'user' }]);
      setShowChat(true);
  
      let fullMessage = ''; // Store the full message
  
      await handleStreamResponse(
        { role: 'user', content: projectIdea },
        (data) => {
          setisLoadingMsg(false);
            console.log("data fin : " , data)
          fullMessage = data; // Accumulate the full message
          if(!LastIndex){
            LastIndex = messages.length + 1;
            console.log({LastIndex  } , "kmv okvn")
            setMessages((prev) => [
                ...prev,
                { id: prev.length + 1, text: fullMessage, sender: 'assistant' }, // Update with full message
              ]);
          }else{
            console.log({LastIndex  } , "kmv 1")
            setMessages((prev) => [
                ...prev.slice(0, -1),
                { id: LastIndex , text: fullMessage, sender: 'assistant' }, // Update with full message
              ]);
          }
         
        },
        (error) => {
          console.error('Error during streaming', error);
        },
        () => {
        LastIndex = null;
          console.log('Streaming completed');
        }
      );
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() && !isLoading) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text: newMessage, sender: 'user' },
      ]);
      setisLoadingMsg(true);
      const messageToSend = newMessage;
      setNewMessage('');
  
      let fullMessage = ''; // Store the full message
  
      await handleStreamResponse(
        { role: 'user', content: messageToSend },
        (data) => {
          setisLoadingMsg(false);
            console.log("data fin : " , data)
            fullMessage = data; // Accumulate the full message
            if(!LastIndex){
              LastIndex = messages.length;
              console.log({LastIndex  } , "kmv okvn")
              setMessages((prev) => [
                  ...prev,
                  { id: prev.length + 1, text: fullMessage, sender: 'assistant' }, // Update with full message
                ]);
            }else{
              console.log({LastIndex  } , "kmv 1")
              setMessages((prev) => [
                  ...prev.slice(0, -1),
                  { id: LastIndex , text: fullMessage, sender: 'assistant' }, // Update with full message
                ]);
            }  
        },
        (error) => {
          console.error('Error during streaming', error);
        },
        () => {
            LastIndex = null;
          console.log('Streaming completed');
        }
      );
    }
  };

  const redirectToContactUs = () => {
    window.location.href = '/contact-us'; // Redirect to Contact Us page
  }

  const closeChat = () => {
    setShowChat(false);
  }

  if (showChat) {
    return (
      <ChatScreen closeChat={closeChat} initialMessage={projectIdea} />
    )
  }

  return (
    <div className="z-10 relative min-h-screen bg-transparent px-4 sm:p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4 max-w-3xl leading-tight">
        <span className="bg-gradient-to-r from-[#FF7A33] to-[#FFFFFF] text-transparent bg-clip-text">
          CONTACT US FOR A
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          FREE CONSULTATION
        </span>
      </h1>
      
      <p className="text-gray-400 text-center mb-6 sm:mb-8 text-sm sm:text-base px-4">
        Generate a stunning website tailored to your needs.
      </p>

      <div className="relative w-full max-w-2xl mb-6 px-4 sm:px-0">
        <button 
          onClick={redirectToContactUs}
          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#FF7A33] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        >
          Contact Us
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl px-4 sm:px-0">
        {projectTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => {
              setProjectIdea(type)
              handleSendProjectIdea()
            }}
            className={`text-left px-3 sm:px-4 py-2 bg-[#1a1a1a] rounded-lg text-gray-300 hover:bg-[#252525] transition-colors flex items-center justify-between group text-xs sm:text-sm ${
              index === 2 ? 'col-span-1 sm:col-span-2 w-full sm:w-1/2 mx-auto' : ''
            }`}
          >
            <span>{type}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-500 group-hover:text-gray-300 transition-colors ml-2 sm:w-4 sm:h-4"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  )
}