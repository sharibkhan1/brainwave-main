import React, { useState, useEffect,useRef  } from 'react';
import axios from 'axios';
import addBtn from '../assets/add-30.png';
import sendBtn from '../assets/send.svg';
import userIcon from '../assets/user-icon.png';
import gptImgLogo from '../assets/c4dd475a926160c734876937ce9aafe4-removebg-preview.png';
import moment from 'moment';
import { motion } from "framer-motion";
 // Import the paper plane icon from react-icons
 import { FaPaperPlane } from 'react-icons/fa'; // Import the paper plane icon from react-icons

import { v4 as uuidv4 } from 'uuid'; 
const Chatbotss = () => {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const [chatSessions, setChatSessions] = useState(() => {
    const storedSessions = localStorage.getItem('chatSessions');
    return storedSessions ? JSON.parse(storedSessions) : [{ id: 1, name: 'Chat 1', messages: [{ text: "Hi there! How can I help you?", isBot: true }] }];
  });
  const [activeSessionId, setActiveSessionId] = useState(chatSessions[0]?.id || null);
  const [editingSessionId, setEditingSessionId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatSessions', JSON.stringify(chatSessions));
  }, [chatSessions]);

  const activeSession = chatSessions.find(session => session.id === activeSessionId);

  const handleInputChange = (e) => {
    setInput(e.target.value);

    // Adjust the height of the textarea to its content
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleNewChat = () => {
    const newSessionId = uuidv4(); // Generate a unique ID
    const newSession = {
      id: newSessionId,
      name: `Chat ${chatSessions.length + 1}`, // Name can still be based on the number of chats
      messages: [{ text: "Hi there! How can I help you?", isBot: true }]
    };
    setChatSessions([...chatSessions, newSession]);
    setActiveSessionId(newSessionId);
  };

  const handleDeleteChat = (id) => {
    const updatedSessions = chatSessions.filter(session => session.id !== id);
    setChatSessions(updatedSessions);
    if (id === activeSessionId && updatedSessions.length > 0) {
      setActiveSessionId(updatedSessions[0].id);
    } else if (updatedSessions.length === 0) {
      setActiveSessionId(null);
    }
  };

  const handleEditChat = (id) => {
    setEditingSessionId(id);
    const sessionToEdit = chatSessions.find(session => session.id === id);
    setEditedName(sessionToEdit.name);
  };

  const handleSaveEdit = () => {
    if (editedName.length > 15) {
      alert("Name cannot exceed 15 characters.");
      return;
    }
    
    const updatedSessions = chatSessions.map(session =>
      session.id === editingSessionId ? { ...session, name: editedName } : session
    );
    setChatSessions(updatedSessions);
    setEditingSessionId(null);
  };

  const handleMessageSend = () => {
    if (input.trim() !== "") {
      sendMessage(input);
      setInput(""); // Clear input after sending message
      textareaRef.current.style.height = 'auto'; // Reset height after sending
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline from Enter
      handleMessageSend();
    }
  };
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    // Clean up the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);
  
  const handleClearStorage = () => {
    localStorage.clear();
    setChatSessions([]);
    setActiveSessionId(null);
    alert('Local storage has been cleared!');
  };

  const sendMessage = async (text) => {
    if (!activeSession) return;

    setInput("");
    const newMessages = [...activeSession.messages, { text, isBot: false }];
    const updatedSession = { ...activeSession, messages: newMessages };

    setChatSessions(chatSessions.map(session =>
      session.id === activeSessionId ? updatedSession : session
    ));

    console.log("Sending request to Flask API with query:", text);

    try {
      const res = await axios.post('https://d2fa-34-81-169-51.ngrok-free.app/generate', {
        query: text
      });

      console.log("Received response from Flask API:", res.data);

      const botMessage = { text: res.data.result, isBot: true };
      const updatedSessionWithBotMessage = {
        ...updatedSession,
        messages: [...newMessages, botMessage]
      };

      setChatSessions(chatSessions.map(session =>
        session.id === activeSessionId ? updatedSessionWithBotMessage : session
      ));
    } catch (error) {
      console.error('Error fetching data from Flask API', error);
    }
  };

  return (
<div className="min-h-screen flex bg-cover bg-center scrollbar-hidden" style={{ backgroundImage: `url('./assets/96c2e8fda549ae99693e87ffeba899ef.jpg')` }}>
       {/* Sidebar toggle button for small screens */}
       <button
        className="lg:hidden fixed top-4 left-4 z-5 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>
  {/* This is sidebar */}
  <div className={`fixed w-64 h-screen bg-black border-r-2 border-red-500 overflow-y-auto z-40 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
  <div className='p-5 h-full flex flex-col'>
      <div className='flex mb-15'>
        {/* <img src={gptImgLogo} className='w-24 h-24 mx-4' alt="Chatbot Logo" /> */}
        <span className='text-4xl left-1/2 font-medium mt-2' style={{ color: '#d8323c' }}>Sekiro</span>
        </div>
        <motion.button
                      initial={{ "--x": "100%", scale: 1 }}
                      animate={{ "--x": "-100%" }}
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 0.1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                          type: "spring",
                          stiffness: 10,
                          damping: 5,
                          mass: 0.1,
                        },
                      }}
                      onClick={handleNewChat}
                      className="w-full py-2 mb-5 rounded-md relative unique-radial-gradient"
                    >
                      <div className='flex items-center justify-center'>
                      <img src={addBtn} className='h-8 mr-4' alt="Add button" />New Chat

                      </div>
                    <span className="block absolute inset-0 rounded-md p-px unique-linear-overlay" />
                    </motion.button> 
      <motion.button
                      initial={{ "--x": "100%", scale: 1 }}
                      animate={{ "--x": "-100%" }}
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 0.1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                          type: "spring",
                          stiffness: 10,
                          damping: 5,
                          mass: 0.1,
                        },
                      }}
                      onClick={handleClearStorage}
                      className="w-full py-3 mb-10 rounded-md relative unique-radial-gradient"
                    >
                      <div className='flex items-center justify-center'>
                      Clear Storage
                      </div>
                    <span className="block absolute inset-0 rounded-md p-px unique-linear-overlay" />
                    </motion.button>
      <div className="space-y-5 flex-grow overflow-auto pr-4 mb-24">
        {chatSessions.map(session => (
     <div
     key={session.id}
     className={`relative p-3 rounded-lg bg-black border-[0.09rem] border-white shadow-lg backdrop-blur-md cursor-pointer ${session.id === activeSessionId ? 'bg-gray-800 font-medium' : 'hover:bg-gray-600'}`}
     onClick={() => setActiveSessionId(session.id)}
   >
   
            {session.id === editingSessionId ? (
              <input
                type="text"
                className='w-full bg-transparent text-white outline-none whitespace-nowrap overflow-hidden text-ellipsis'
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onBlur={handleSaveEdit}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSaveEdit();
                  }
                }}
                autoFocus
                maxLength={15}
              />
            ) : (
              <span className="text-white">{session.name}</span>
            )}
            <div className='mt-2 text-[0.9rem] opacity-70'>
              {moment(session.created_at).calendar(null, {
                sameDay: '[Today]',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'MMMM Do YYYY',
              })}
            </div>
            <button className="absolute bg-transparent border-none right-12 top-2" onClick={(e) => { e.stopPropagation(); handleEditChat(session.id); }}><i className="fa-solid fa-pen-to-square fa-lg hover:text-green-500"></i></button>
            <button className="absolute bg-transparent border-none right-2 top-2" onClick={(e) => { e.stopPropagation(); handleDeleteChat(session.id); }}><i className="fa-solid fa-trash fa-lg hover:text-red-500"></i></button>
          </div>
        ))}
      </div>
    </div>
  </div>
  {/* This is ChatScreen */}
  <div className={`flex-1 flex flex-col transition-transform duration-300 ease-in-out ${isSidebarOpen ? "ml-0 blur-md opacity-50 pointer-events-none" : "ml-0"} lg:ml-64 mb-12`}>
  <div className="flex-1  overflow-x-hidden  p-4  shadow-lg backdrop-blur-md">
      {activeSession ? (
        activeSession.messages.map((message, i) => (
<div
  key={i}
  className={`flex ${message.isBot ? "justify-start" : "justify-end"} mb-4`}
>
  {message.isBot && (
    <img
      className='chatImg w-7 h-7 mr-3 lg:w-14 lg:h-14'
      src={gptImgLogo}
      alt="Chatbot avatar"
    />
  )}
  <div
    className={`inline-flex ${message.isBot ? "bg-[#d8323da1] rounded-t-2xl rounded-br-2xl" : "bg-[#eee9e9bd] rounded-t-2xl rounded-bl-2xl"} shadow-lg backdrop-blur-md p-3 max-w-[75%]`}
    style={{ 
      maxWidth: 'calc(100% - 50px)', 
      whiteSpace: 'pre-wrap',  // Preserve whitespace and line breaks
      wordWrap: 'break-word',  // Break long words
      color: message.isBot ? 'white' : '#0c0e0c',
    }}
  >
    <p className='text-xs lg:text-xl'>{message.text}</p>
  </div>
</div>


        ))
      ) : (
        <p>No active chat session</p>
      )}
    </div>
    {/* This is input */}
    <div className="fixed z-50 bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4">
  <div
    className={`w-full max-h-32 max-w-4xl p-1.5 mb-3 bg-[#40414F] flex items-center rounded-3xl ${isSidebarOpen ? 'opacity-50 pointer-events-none' : ''}`}
  >
    <textarea
      ref={textareaRef}
      rows={1}
      placeholder={isSidebarOpen ? '' : 'Enter your prompt'}
      value={input}
      onChange={handleInputChange}
      onKeyPress={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleMessageSend();
        }
      }}
      className='flex-grow px-3 py-2 text-lg text-white bg-transparent border-none resize-none focus:outline-none overflow-y-auto'
      style={{
        caretColor: 'white',
        maxHeight: '8rem', // Set maximum height
        overflowY: 'auto', // Show scrollbar when needed
        transition: 'height 0.2s ease',
        height: textareaRef.current ? `${textareaRef.current.scrollHeight}px` : 'auto',
      }}
      disabled={isSidebarOpen}  // Disable the textarea when sidebar is open
    />
    {!isSidebarOpen && ( // Conditionally render the send button
      <button
        onClick={handleMessageSend}
        className={`bg-transparent border-none flex items-center justify-center p-2 ${input.trim() ? 'text-white' : 'text-gray-500'}`}
        disabled={!input.trim()} // Disable button if there's no input
      >
        <FaPaperPlane className={`text-lg ${input.trim() ? 'text-white' : 'text-gray-500'}`} />
      </button>
    )}
  </div>
</div>




  </div>
</div>

  );
};

export default Chatbotss;
