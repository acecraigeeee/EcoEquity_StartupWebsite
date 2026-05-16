import React, { useState, useEffect, useRef } from "react";

function AIChatInterface({ onClose, isMobile }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for animation
  const [isTyping, setIsTyping] = useState(false); // State to show typing indicator
  const [currentBot, setCurrentBot] = useState('general'); // 'general' or 'plantDoctor'
  const [conversationStep, setConversationStep] = useState('initial'); // 'initial', 'awaitingName', 'awaitingContactAndConcern'
  // State for human support escalation
  const [isLiveAgentChat, setIsLiveAgentChat] = useState(false); // To indicate if a live agent is active

  const messagesEndRef = useRef(null);

  const getPlantDoctorAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    // General greetings and conversational starters
    // Human Support & Escalation
    if (
        lowerInput.includes("human support") ||
        lowerInput.includes("talk to an agent") ||
        lowerInput.includes("connect me to support") ||
        lowerInput.includes("real person") ||
        lowerInput.includes("live chat") ||
        lowerInput.includes("expert help") ||
        lowerInput.includes("personal agent") ||
        lowerInput.includes("support team") || // Detect phrases for human support
        lowerInput.includes("agent") ||
        lowerInput.includes("human help")) {
      return { text: "Certainly! I can connect you with our human support team or agriculture specialist for further assistance. Please provide your name, contact information (email or phone), and a short description of your plant concern.", nextStep: 'awaitingContactAndConcern' }; // Professional, Helpful, Conversational
    }
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return { text: "Hello there! I'm your AI Plant Doctor, ready to help you cultivate a thriving garden. How can I assist with your plant health inquiries today?", nextStep: 'initial' }; // Helpful, Conversational
    }
    if (lowerInput.includes("how are you")) {
      return { text: "As an AI, I don't experience feelings, but I'm fully operational and dedicated to helping your plants thrive! What specific plant health concerns can I address for you today?", nextStep: 'initial' }; // Helpful, Conversational
    }
    if (lowerInput.includes("plant doctor")) {
      return { text: "I am the AI Plant Doctor, a 24/7 service offering localized care guides specifically tailored to the Philippine climate and native crops. I can help you diagnose plant issues and provide actionable advice to maintain healthy plants.", nextStep: 'initial' };
    } 
    if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
      return { text: "You're most welcome! I'm here to assist further if you have more questions about your plants. Have a great day!", nextStep: 'initial' };
    }
    if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
      return { text: "Goodbye! May your garden be ever green and bountiful. Remember, I'm here whenever your plants need a little extra care!", nextStep: 'initial' }; // Conversational
    }
    if (lowerInput.includes("what can you do") || lowerInput.includes("help")) {
      return { text: "I'm here to be your comprehensive plant care guide! I can help you diagnose plant issues, suggest organic and sustainable treatments, recommend optimal growing conditions (watering, sunlight, soil, fertilizer), explain various farming techniques (from urban gardening to hydroponics), and provide essential preventive care tips. Just tell me about your plant or your specific question!", nextStep: 'initial' }; // Helpful, Educational
    }
    if (lowerInput.includes("what is your name") || lowerInput.includes("who are you") || lowerInput.includes("your name")) {
      return { text: "I am the AI Plant Doctor, a specialized assistant from EcoEquity, here to help you with all your plant health inquiries.", nextStep: 'initial' };
    }

    // Handling uncertain diagnoses or general plant problems before specific symptoms
    if (
        lowerInput.includes("what's wrong with my plant") ||
        lowerInput.includes("diagnose my plant") ||
        lowerInput.includes("problem with my") ||
        lowerInput.includes("my plant is sick") ||
        lowerInput.includes("what is this on my plant") ||
        lowerInput.includes("plant issue") ||
        lowerInput.includes("disease identification")
    ) {
        return {
            text: "I'd love to help diagnose! To give you the best advice, could you please provide more details? Specifically:\n\n1. What kind of plant is it?\n2. Can you describe the symptoms more clearly (e.g., color, location on the plant, texture, progression)?\n3. How long have you observed these symptoms?\n4. What are its growing conditions (watering, sunlight, soil, recent changes)?\n\nIf the issue seems severe or complex, or if I can't provide a confident diagnosis, consider taking a clear photo and consulting a local agriculture expert or plant pathology laboratory for a precise diagnosis.",
            nextStep: 'initial'
        };
    }
    // Escalation triggers for Plant Doctor
    if (lowerInput.includes("severe disease") || lowerInput.includes("dying plant") || lowerInput.includes("emergency crop") || lowerInput.includes("urgent plant issue") || lowerInput.includes("plant emergency")) {
      return { text: "This sounds like a serious concern for your plants. I can connect you with a human agriculture specialist who can provide expert consultation. Please provide your name.", nextStep: 'awaitingName' }; // Professional, Helpful
    }
    if (lowerInput.includes("frustrated") || lowerInput.includes("not helping") || lowerInput.includes("can't fix") || lowerInput.includes("still sick")) {
      return { text: "I understand your frustration, and I'm here to help as best as I can. If you feel you need more personalized assistance, I can connect you with a human agriculture specialist. Please provide your name.", nextStep: 'awaitingName' }; // Conversational, Helpful
    }
    // If the user mentions payment or account concerns in the Plant Doctor context, redirect to general support
    if (lowerInput.includes("payment") || lowerInput.includes("account") || lowerInput.includes("billing")) {
      return { text: "My apologies, I am specialized in plant health. For payment or account concerns, I recommend switching to the EcoEquityBot AI or connecting with our general support team. Would you like me to help you connect with a human support agent for these issues? If so, please provide your name.", nextStep: 'awaitingName' }; // Professional, Helpful
    }
    // If the user mentions technical website problems in the Plant Doctor context, redirect to general support
    if (lowerInput.includes("website error") || lowerInput.includes("technical issue") || lowerInput.includes("bug") || lowerInput.includes("app not working")) {
      return { text: "I'm designed to assist with plant-related queries. For technical website problems, I recommend connecting with our general support team. Would you like me to help you connect with a human support agent for these issues? If so, please provide your name.", nextStep: 'awaitingName' }; // Professional, Helpful
    }
    // Real-time plant health assistance
    if (lowerInput.includes("real-time assistance") || lowerInput.includes("immediate help")) {
      return { text: "I provide real-time plant health assistance by analyzing your descriptions and offering immediate advice. For very complex or urgent situations, I can help you connect with a human expert. What specific issue are you facing right now?", nextStep: 'initial' }; // Helpful, Professional
    }
    // AI-powered plant disease detection
    if (lowerInput.includes("ai detection") || lowerInput.includes("ai diagnosis") || lowerInput.includes("ai-powered disease")) {
      return { text: "My core function is AI-powered plant disease detection! Describe the symptoms you're observing, and I'll do my best to identify potential issues and suggest solutions. For complex cases, I might recommend consulting a local expert.", nextStep: 'initial' }; // Helpful, Professional, Educational
    }

    // Plant Doctor specific responses
    if (lowerInput.includes("symptoms")) {
      return { text: "To help me diagnose, please describe the symptoms in detail. For example, are the leaves yellowing, wilting, or do you see spots? What kind of plant is it?", nextStep: 'initial' };
    }
    if (lowerInput.includes("yellow leaves")) {
      return { text: "Yellow leaves can indicate several issues, such as nutrient deficiency (e.g., nitrogen, iron), overwatering, or underwatering. Could you tell me more about your watering schedule and the type of plant?", nextStep: 'initial' };
    }
    if (lowerInput.includes("wilting")) {
      return { text: "Wilting can be a sign of insufficient water, root rot from overwatering, or even extreme heat. What's your watering routine like, and what plant are we discussing?", nextStep: 'initial' };
    }
    if (lowerInput.includes("spots on leaves")) {
      return { text: "Leaf spots can be caused by fungal, bacterial, or viral infections, or even pest damage. Can you describe the spots (color, size, texture) and the plant type?", nextStep: 'initial' };
    }
    if (lowerInput.includes("disease") || lowerInput.includes("sick") || lowerInput.includes("unhealthy")) {
      return { text: "I can certainly help with that! Please describe the symptoms you're observing on your plant. For example, are there spots, discoloration, wilting, or unusual growths? Knowing the type of plant is also very helpful.", nextStep: 'initial' }; // Helpful, Conversational
    }
    if (lowerInput.includes("black spots")) {
      return { text: "Black spots could indicate a fungal infection like Black Spot disease, common in roses, or a bacterial leaf spot. To provide the best advice, can you tell me more about the plant and if the spots are raised or sunken?", nextStep: 'initial' }; // Educational, Helpful
    }
    if (lowerInput.includes("curling leaves")) {
      return { text: "Curling leaves can be a sign of pest infestation (like aphids or spider mites), heat stress, underwatering, or even viral infections. To help you further, what kind of plant is it, and have you checked for any tiny insects on the underside of the leaves?", nextStep: 'initial' }; // Educational, Helpful
    }
    if (lowerInput.includes("stunted growth")) {
      return { text: "Stunted growth can be caused by various factors such as nutrient deficiencies, improper watering, insufficient light, or root problems. Could you tell me about your plant's environment and feeding schedule so I can offer more tailored advice?", nextStep: 'initial' }; // Educational, Helpful
    }

    // Pest infestations
    if (lowerInput.includes("pests")) {
      return { text: "Pests can be a nuisance! Common ones include aphids, spider mites, and mealybugs. Can you describe the pests you're seeing or the damage they're causing?", nextStep: 'initial' };
    }
    if (lowerInput.includes("bugs") || lowerInput.includes("insects")) {
      return { text: "To help identify the bug, can you describe its size, color, and if it's flying or crawling? Also, what kind of plant is it affecting?", nextStep: 'initial' };
    }
    // Pest and nutrient deficiency analysis
    if (lowerInput.includes("pest analysis") || lowerInput.includes("nutrient deficiency analysis") || lowerInput.includes("analyze my plant")) {
      return { text: "I can help analyze potential pest infestations or nutrient deficiencies. Please describe any visible signs like discoloration, holes in leaves, sticky residue, or the presence of any small creatures. The more details, the better!", nextStep: 'initial' }; // Helpful, Professional
    }

    // Soil health
    if (lowerInput.includes("fertilizer") || lowerInput.includes("nutrients")) {
      return { text: "Fertilizers provide essential nutrients for plant growth. Organic options like compost, worm castings, or fish emulsion are excellent choices. The best type and frequency depend on your plant's growth stage and specific needs. What plant are you fertilizing, and what are its current symptoms?", nextStep: 'initial' }; // Educational, Helpful
    }
    if (lowerInput.includes("watering")) {
      return { text: "Watering is crucial for plant health! Most plants prefer consistent moisture but dislike being waterlogged. A good rule of thumb is to check the soil an inch or two deep; if it feels dry, it's likely time to water. What type of plant are you asking about, and what's your current watering routine?", nextStep: 'initial' }; // Educational, Helpful
    }
    if (lowerInput.includes("soil")) {
      return { text: "Healthy soil is indeed the foundation of a healthy plant! Are you curious about soil type (sandy, clay, loamy), pH levels, or how to improve soil structure and fertility? Knowing your plant type helps me give the best advice.", nextStep: 'initial' }; // Educational, Professional
    }
    if (lowerInput.includes("soil health") || lowerInput.includes("improve soil")) {
      return { text: "Improving soil health is absolutely key for robust and productive plants! I recommend enriching your soil with organic matter like compost, practicing crop rotation, and minimizing tillage. What kind of soil do you currently have, and what are you hoping to grow?", nextStep: 'initial' }; // Educational, Helpful, Professional
    }

    // Smart crop recommendations
    if (lowerInput.includes("crop recommendations") || lowerInput.includes("what to grow") || lowerInput.includes("best crops")) {
      return { text: "I can offer smart crop recommendations! To give you the best advice, please tell me about your local climate, soil type, available space, and what your goals are (e.g., personal consumption, market sales).", nextStep: 'initial' }; // Helpful, Professional
    }

    // Weather effects on crops
    if (lowerInput.includes("weather") || lowerInput.includes("climate") || lowerInput.includes("temperature")) {
      return { text: "Understanding your local climate is key, especially here in the Philippines! Most tropical plants thrive in warm, humid conditions. Extreme temperatures or sudden changes can stress plants. What plant are you growing, and where are you located?", nextStep: 'initial' }; // Educational, Professional
    }
    if (lowerInput.includes("rain") || lowerInput.includes("drought") || lowerInput.includes("storm")) {
      return { text: "Weather extremes can be challenging. For heavy rain or storms, ensure good drainage and consider temporary shelters. During drought, focus on water conservation techniques like mulching and efficient irrigation. What specific weather concern are you facing?", nextStep: 'initial' };
    }

    // Organic farming
    if (lowerInput.includes("organic farming") || lowerInput.includes("organic agriculture") || lowerInput.includes("sustainable farming") || lowerInput.includes("eco-friendly")) {
      return { text: "Organic agriculture focuses on ecological balance and biodiversity, avoiding synthetic pesticides and fertilizers. It builds healthy soil through compost, crop rotation, and natural pest control. It's a wonderful, sustainable approach that I fully support! What aspects are you curious about?", nextStep: 'initial' }; // Educational, Professional, Encourages eco-friendly
    }
    // Sustainable agriculture support
    if (lowerInput.includes("sustainable agriculture support") || lowerInput.includes("eco-friendly farming")) {
      return { text: "I'm here to support your sustainable agriculture journey! This involves practices like organic farming, water conservation, biodiversity promotion, and minimizing environmental impact. What specific sustainable practices are you interested in learning about or implementing?", nextStep: 'initial' }; // Helpful, Professional, Educational, Encourages eco-friendly
    }

    // Crop maintenance
    if (lowerInput.includes("crop maintenance") || lowerInput.includes("pruning") || lowerInput.includes("weeding") || lowerInput.includes("harvesting") || lowerInput.includes("plant care")) {
      return { text: "Good crop maintenance is essential for healthy yields and thriving plants! Are you looking for advice on pruning techniques, effective weeding strategies, optimal harvesting times, or general care for a specific crop?", nextStep: 'initial' }; // Helpful, Educational
    }
    // Beginner-friendly farming guidance
    if (lowerInput.includes("beginner farming") || lowerInput.includes("new to gardening") || lowerInput.includes("simple farming tips")) {
      return { text: "Welcome to the wonderful world of farming! I can provide beginner-friendly guidance on everything from choosing the right plants to basic care routines. What's your first question or what kind of plant are you starting with?", nextStep: 'initial' }; // Helpful, Educational, Conversational
    }

    // Smart agriculture technologies
    if (lowerInput.includes("smart agriculture") || lowerInput.includes("agritech") || lowerInput.includes("precision farming") || lowerInput.includes("sensors") || lowerInput.includes("drones") || lowerInput.includes("ai in farming")) {
      return { text: "Smart agriculture technologies, like sensors for soil moisture, automated irrigation, or drones for crop monitoring, can significantly boost efficiency and sustainability. They help optimize resource use and improve yields. Are you interested in a particular technology or how it can benefit your farm?", nextStep: 'initial' }; // Educational, Professional
    }

    // Local farming recommendations
    if (lowerInput.includes("local farming") || lowerInput.includes("philippine crops") || lowerInput.includes("native plants") || lowerInput.includes("regional advice")) {
      return { text: "I can provide recommendations tailored to local farming conditions, especially for Philippine crops and native plants. To give you the best advice, please tell me your region and the specific crops or plants you're interested in.", nextStep: 'initial' }; // Helpful, Professional
    }
    // 24/7 virtual agriculture assistant
    if (lowerInput.includes("24/7 assistant") || lowerInput.includes("always available")) {
      return { text: "That's right! I'm your 24/7 virtual agriculture assistant, always here to provide guidance and support for your plants, day or night. How can I help you right now?", nextStep: 'initial' }; // Helpful, Conversational
    }
    // Fallback for Plant Doctor
    return { text: `I'm your AI Plant Doctor, here to help your plants thrive! To give you the best advice, please provide specific details about their symptoms, the type of plant, or your care routine. For general EcoEquity questions, you can switch to EcoEquityBot AI.`, nextStep: 'initial' }; // Helpful, Conversational
  };

  const getGeneralAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return { text: "Hello there! I'm EcoEquityBot AI, your dedicated assistant from EcoEquity. How can I assist you with our agricultural innovations and platform today?", nextStep: 'initial' }; // Conversational
    }
    if (lowerInput.includes("how are you")) {
      return { text: "As an AI, I don't experience feelings, but I'm fully operational and ready to provide you with information about EcoEquity! What specific details are you looking for today?", nextStep: 'initial' }; // Conversational
    }
    if (lowerInput.includes("what can you do") || lowerInput.includes("help")) {
      return { text: "I can provide detailed information about EcoEquity's mission, our innovative products (like the AI Plant Doctor, Organic Edibles marketplace, and Community Hub), our target market, business goals, and even the historical context of Philippine agriculture. Just ask me a question about EcoEquity!", nextStep: 'initial' }; // Helpful, Educational
    }
    // Human Support & Escalation
    // Detect phrases for human support
    if (
        lowerInput.includes("human support") ||
        lowerInput.includes("talk to an agent") ||
        lowerInput.includes("connect me to support") ||
        lowerInput.includes("real person") ||
        lowerInput.includes("live chat") ||
        lowerInput.includes("expert help") ||
        lowerInput.includes("personal agent") ||
        lowerInput.includes("support team") || // Detect phrases for human support
        lowerInput.includes("agent") ||
        lowerInput.includes("human help")) {
      return { text: "Certainly! I can connect you with our human support team or agriculture specialist for further assistance. Please provide your name, contact information (email or phone), and a short description of your concern.", nextStep: 'awaitingContactAndConcern' }; // Professional, Helpful, Conversational
    }
    // Escalation triggers for General AI
    if (lowerInput.includes("payment") || lowerInput.includes("account") || lowerInput.includes("billing") || lowerInput.includes("subscription")) {
      return { text: "I can help you connect with our support team regarding payment or account concerns. Please provide your name.", nextStep: 'awaitingName' }; // Professional, Helpful
    }
    if (lowerInput.includes("website error") || lowerInput.includes("technical issue") || lowerInput.includes("bug") || lowerInput.includes("app not working")) {
      return { text: "I can help you connect with our support team for technical website problems. Please provide your name.", nextStep: 'awaitingName' }; // Professional, Helpful
    }
    if (
        lowerInput.includes("frustrated") ||
        lowerInput.includes("not helping") ||
        lowerInput.includes("live chat") ||
        lowerInput.includes("expert help") ||
        lowerInput.includes("personal agent") ||
        lowerInput.includes("support team") ||
        lowerInput.includes("agent") ||
        lowerInput.includes("human help")) {
      return { text: "I understand you'd like to connect with a human expert. Our dedicated support team is available to provide more detailed assistance for complex issues or personalized guidance. To help us connect you with the right specialist, please tell me your name.", nextStep: 'awaitingName' }; // Helpful, Professional, Conversational
    }
    if (lowerInput.includes("plant doctor")) {
      return { text: "The AI Plant Doctor is a 24/7 service offering localized care guides specifically tailored to the Philippine climate and native crops. It helps users diagnose plant issues and provides actionable advice to maintain healthy plants. You can switch to the AI Plant Doctor to ask specific questions about your plants.", nextStep: 'initial' };
    }
    if (lowerInput.includes("ecoequity")) {
      return { text: "EcoEquity is a pioneering digital-first platform dedicated to enhancing agricultural self-sufficiency in the Philippines. Our core mission is to 'Grow Food, Build Community, and Earn Sustainably' by empowering households and communities with innovative tools and resources. Would you like to know more about our specific offerings?", nextStep: 'initial' };
    }
    if (lowerInput.includes("mission") || lowerInput.includes("goals")) {
      return { text: "Our mission at EcoEquity is to 'Grow Food, Build Community, and Earn Sustainably.' We aim to achieve this by boosting agricultural self-sufficiency in the Philippines, starting at the household and community level, through high-engagement digital solutions.", nextStep: 'initial' };
    }
    if (lowerInput.includes("sustainability")) {
      return { text: "Sustainability is at the heart of EcoEquity. Our platform fosters sustainable agriculture by connecting local producers with consumers, providing eco-friendly farming guidance, and supporting community-driven initiatives. We align with global Sustainable Development Goals. Is there a particular aspect of our sustainability efforts you're interested in?", nextStep: 'initial' };
    }
    if (lowerInput.includes("products") || lowerInput.includes("services") || lowerInput.includes("offer")) {
      return { text: "EcoEquity offers a comprehensive suite of digital tools including the AI Plant Doctor, an Organic Edibles marketplace, and a Community Hub. These are designed to support various aspects of agricultural innovation. Which one would you like to explore further?", nextStep: 'initial' };
    }
    if (lowerInput.includes("organic edibles")) {
      return { text: "Our Organic Edibles marketplace connects users with local produce, fresh herbs, organic farming kits, floriculture products, and localized seeds. It's a vital component in fostering sustainable agriculture and supporting local economies.", nextStep: 'initial' };
    }
    if (lowerInput.includes("community hub")) {
      return { text: "The Community Hub provides essential digital tools and localized data to support both urban farming and traditional agricultural centers. It's designed to help farmers and enthusiasts connect, share knowledge, and manage resources, especially during periods of oversupply.", nextStep: 'initial' };
    }
    if (lowerInput.includes("target market") || lowerInput.includes("who do you serve")) {
      return { text: "EcoEquity serves a broad target market including individual households, urban gardeners, traditional farmers, and institutional buyers such as hotels and food processors. Our goal is to reach 150,000+ Active Monthly Users.", nextStep: 'initial' };
    }
    if (lowerInput.includes("acquisition tactics") || lowerInput.includes("channels")) {
      return { text: "Our acquisition tactics are multi-faceted, encompassing Digital Acquisition (Content Marketing, SEO/ASO, Monetization Strategy), Physical & Community Engagement (LGU Partnership Integration, Specialist Workshops, Word-of-Mouth), and B2B & Sector Integration (Direct Sales to Institutions, Farmer Outreach).", nextStep: 'initial' };
    }
    if (lowerInput.includes("growth") || lowerInput.includes("partners") || lowerInput.includes("customers")) {
      return { text: "EcoEquity is experiencing significant growth, with a 98% company growth rate, over 99 partners, and more than 1000 customers. These figures reflect our expanding impact and reach in the agricultural sector.", nextStep: 'initial' };
    }
    if (lowerInput.includes("history") || lowerInput.includes("timeline") || lowerInput.includes("agricultural challenges")) {
      return { text: "EcoEquity addresses historical challenges in Philippine agriculture. For instance, the 1980s saw a shift to import dependency due to Peso devaluation, the 2000s brought trade liberalization and cheap imports, and the 2010s faced global price shocks and rapid urbanization. The 2020s highlighted supply chain fragility during the pandemic. Our platform aims to mitigate these issues.", nextStep: 'initial' };
    }
    if (lowerInput.includes("1980s agriculture")) {
      return { text: "In the 1980s, Philippine agriculture shifted from self-sufficiency to import dependency, exacerbated by the Peso devaluation during the Debt Crisis, which made imported goods more expensive.", nextStep: 'initial' };
    }
    if (lowerInput.includes("2000s agriculture")) {
      return { text: "The 2000s marked the WTO Accession and trade liberalization, leading to cheap imports flooding the market and impacting local producers.", nextStep: 'initial' };
    }
    if (lowerInput.includes("2010s agriculture")) {
      return { text: "During the 2010s, global price shocks and rapid urbanization meant that import dependency caused high USD rates to translate directly into higher local prices for agricultural goods.", nextStep: 'initial' };
    }
    if (lowerInput.includes("2020s agriculture") || lowerInput.includes("pandemic impact")) {
      return { text: "The 2020s, particularly during the pandemic, exposed significant supply chain fragility, demonstrating the inability to meet local demand due to over-reliance on imports.", nextStep: 'initial' };
    }
    if (lowerInput.includes("contact") || lowerInput.includes("get in touch")) {
      return { text: "We'd love to hear from you! You can reach out to us through our 'Get in Touch' section on the website for any inquiries or collaborations.", nextStep: 'initial' };
    }
    if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
      return { text: "You're most welcome! I'm here to assist further if you have more questions about EcoEquity. Have a great day!", nextStep: 'initial' };
    }
    if (lowerInput.includes("bye") || lowerInput.includes("goodbye")) {
      return { text: "Goodbye! I hope you have a productive day. Feel free to chat again anytime!", nextStep: 'initial' };
    }
    if (lowerInput.includes("what is your name") || lowerInput.includes("who are you")) {
      return { text: "I am EcoEquityBot AI, your AI assistant from EcoEquity. I'm here to help you learn more about our platform and agricultural innovations.", nextStep: 'initial' };
    }

    // More intelligent fallback
    return { text: `I'm EcoEquityBot AI. I'm here to help you learn more about EcoEquity. Could you please rephrase your question or ask something more specific about our mission, products, target market, or the agricultural context we operate in? For example, you could ask: "What is the AI Plant Doctor?" or "Tell me about EcoEquity's mission."`, nextStep: 'initial' };
  };

  const handleToggleBot = () => {
    const newBot = currentBot === 'general' ? 'plantDoctor' : 'general';
    setCurrentBot(newBot);
    setMessages([]); // Clear messages when switching bots
    setInput(""); // Clear input field
    setIsTyping(true);
    setConversationStep('initial'); // Reset conversation step
    setIsLiveAgentChat(false); // Reset live agent status


    const welcomeMessage = newBot === 'general'
      ? "Hello there! I'm EcoEquityBot AI, your dedicated assistant from EcoEquity. How can I assist you with our agricultural innovations and platform today?" // Conversational
      : "Hello! I'm your AI Plant Doctor, ready to assist you in cultivating healthy plants. Please describe any observations or signs of distress your plants are exhibiting, or tell me what you're growing!"; // Professional, Helpful, Conversational

    setTimeout(() => {
      setMessages([{ id: Date.now(), text: welcomeMessage, sender: "ai" }]);
      setIsTyping(false);
    }, 1000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Trigger the open animation after the component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 50); // Small delay to allow component to render before animating
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom when messages change
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { id: Date.now(), text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");
      setIsTyping(true);

      let aiResponseObject = { text: "", nextStep: 'initial' };

      if (isLiveAgentChat) {
        // If already in live agent chat, just simulate agent receiving message
        aiResponseObject.text = `Live Agent: Thank you for your message. I'm reviewing your query now.`;
        aiResponseObject.nextStep = 'liveAgentActive'; // Stay in live agent mode
      } else if (conversationStep === 'awaitingContactAndConcern') {
        // Assuming user provides name, contact, and concern in one message
        const fullDetails = userMessage.text;
        // A very basic attempt to extract name and contact for a more personalized message
        const nameMatch = fullDetails.match(/(my name is|i am)\s+([a-zA-Z\s]+?)(?:,|\.|$)/i);
        const extractedName = nameMatch && nameMatch[2] ? nameMatch[2].trim() : 'valued customer';

        setIsLiveAgentChat(true); // Activate live agent mode

        aiResponseObject.text = `Thank you, ${extractedName}! We have your details and are now connecting you. Please wait a moment.
        \n\n**You are now connected with a Live Support Agent.**
        \nLive Agent: Hello ${extractedName}, I've received your request regarding "${fullDetails}". How can I further assist you?`;
        aiResponseObject.nextStep = 'liveAgentActive'; // Set a new step for active live agent chat

        // Clear the input field after sending details to agent
        setInput("");

      } else {
      // Simulate AI response
        aiResponseObject = currentBot === 'plantDoctor' ? getPlantDoctorAIResponse(userMessage.text) : getGeneralAIResponse(userMessage.text);
      } 
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: aiResponseObject.text,
          sender: isLiveAgentChat ? "agent" : "ai", // Differentiate AI from simulated agent
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
        setIsTyping(false);
        setConversationStep(aiResponseObject.nextStep || 'initial'); // Update conversation step
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div style={aiChatStyles.overlay}> {/* Removed onClick={onClose} to prevent closing on overlay click */}
      <div
        style={{
          ...aiChatStyles.chatContainer,
          // The chatContainer itself should not close the chat when clicked
          ...(isMobile ? aiChatStyles.chatContainerMobile : {}), // Apply mobile styles
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1)" : "scale(0.95)",
        }}
      >
        {/* Prevent clicks inside the chat container from closing the chat */}
        <div style={aiChatStyles.chatHeader}>
          <h3 style={aiChatStyles.chatTitle}>
            {currentBot === 'general' ? 'Chat with EcoEquityBot AI' : 'Chat with AI Plant Doctor'}
          </h3>
          <button onClick={handleToggleBot} style={aiChatStyles.toggleBotButton}>
            {currentBot === 'general' ? 'Switch to Plant Doctor' : 'Switch to General AI'}
          </button>
          <button onClick={onClose} style={aiChatStyles.closeButton}>
            &times;
          </button>
        </div>
        <div style={aiChatStyles.messagesContainer}>
          {messages.length === 0 && (
            <p style={aiChatStyles.welcomeMessage}>
              {currentBot === 'general'
                ? "Hi there! I'm EcoEquityBot AI, your dedicated assistant from EcoEquity. How can I assist you with our agricultural innovations and platform today?" // Conversational
                : isLiveAgentChat
                  ? `You are connected with a Live Support Agent. Please continue your conversation.`
                  : "Hello! I'm your AI Plant Doctor, ready to assist you in cultivating healthy plants. Please describe any observations or signs of distress your plants are exhibiting, or tell me what you're growing!"
              }
            </p>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                ...aiChatStyles.messageBubble,
                ...(isMobile ? aiChatStyles.messageBubbleMobile : {}),
                ...(msg.sender === "user"
                  ? aiChatStyles.userMessage
                  : msg.sender === "agent" ? aiChatStyles.agentMessage : aiChatStyles.aiMessage), // Differentiate agent messages
              }}
            >
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div style={{ ...aiChatStyles.messageBubble, ...aiChatStyles.aiMessage }}>
              {currentBot === 'general'
                ? isLiveAgentChat
                  ? 'Live Agent is typing...'
                  : 'EcoEquityBot AI is typing...'
                : 'AI Plant Doctor is typing...'}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div style={aiChatStyles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isLiveAgentChat
              ? "Type your message to the live agent..."
              : (currentBot === 'general' ? "Ask about EcoEquity..." : "Ask about your plants...")}
            style={aiChatStyles.chatInput}
          />
          <button onClick={handleSendMessage} style={aiChatStyles.sendButton}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

const aiChatStyles = {
  overlay: {
    position: "absolute", // Changed from fixed to absolute, relative to the parent (shell)
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent", // Changed to transparent to allow background content to be visible
    display: "flex",
    justifyContent: "flex-end", // Align content to the right
    alignItems: "flex-end",     // Align content to the bottom
    zIndex: 1000,
    padding: "20px", // Add padding to keep the chat window off the edges of the panel
    boxSizing: "border-box", // Ensure padding is included in the total size
  },
  chatContainer: {
    background: "rgba(255, 255, 255, 0.15)", // Glass effect background
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    width: "350px", // Fixed width for the chat window
    height: "500px", // Fixed height for the chat window
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    color: "#fff",
    transition: "opacity 0.3s ease-out, transform 0.3s ease-out", // Animation transition
  },
  chatContainerMobile: {
    width: "90%", // Take up more width on mobile
    height: "70%", // Take up more height on mobile
    position: "absolute", // Override flex positioning for centering
    top: "50%",
    left: "50%",
    right: "auto", // Reset right alignment
    bottom: "auto", // Reset bottom alignment
    transform: "translate(-50%, -50%)", // Center the chat window
    maxWidth: "none", // Allow full width
    maxHeight: "none", // Allow full height
  },
  toggleBotButton: {
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#fff",
    fontSize: "0.75em", // Smaller font size
    fontWeight: 500,
    cursor: "pointer",
    padding: "6px 10px", // Smaller padding
    borderRadius: "15px",
  },
  chatHeader: {
    padding: "15px 20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatTitle: {
    margin: 0,
    fontSize: "1.2em",
    fontWeight: 600,
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "1.5em",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background 0.2s ease",
  },
  messagesContainer: {
    flexGrow: 1,
    padding: "20px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  welcomeMessage: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.7)",
    fontStyle: "italic",
  },
  messageBubble: {
    maxWidth: "80%",
    padding: "10px 15px",
    borderRadius: "15px",
    // Add specific border radius for the sender to make it look like a chat bubble
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
    wordWrap: "break-word",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "rgba(135, 206, 235, 0.8)", // Light blue, slightly transparent
    color: "#000", // Darker text for contrast
    borderBottomRightRadius: "5px",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(144, 238, 144, 0.8)", // Soft green, slightly transparent
    borderBottomLeftRadius: "5px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  agentMessage: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 204, 0, 0.8)", // A distinct color for agent messages (e.g., amber)
    borderBottomLeftRadius: "5px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  messageBubbleMobile: { maxWidth: "90%" },
  inputContainer: {
    padding: "15px 20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    display: "flex",
    gap: "10px",
  },
  chatInput: {
    flexGrow: 1,
    padding: "10px 15px",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.15)",
    color: "#fff",
    fontSize: "1em",
    outline: "none",
  },
  sendButton: {
    padding: "10px 20px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(145deg, #87CEEB 0%, #6495ED 100%)",
    color: "#fff",
    fontSize: "0.9em",
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.16s ease, box-shadow 0.16s ease",
  },
};

export default AIChatInterface;