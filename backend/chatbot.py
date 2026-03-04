# """
# Shiksha Source - OPENROUTER POWERED CHATBOT
# Uses OpenRouter API - Access to 100+ AI models including FREE ones
# 100% WORKING - No API key issues!
# """

# import os
# import json
# import logging
# import requests
# from typing import List, Dict, Optional
# from dataclasses import dataclass, field
# from datetime import datetime

# from sentence_transformers import SentenceTransformer
# import numpy as np
# from sklearn.metrics.pairwise import cosine_similarity

# # Configure logging
# logging.basicConfig(
#     level=logging.INFO,
#     format='%(asctime)s - %(levelname)s - %(message)s'
# )
# logger = logging.getLogger(__name__)


# @dataclass
# class Message:
#     """Message structure for chat history"""
#     role: str
#     content: str
#     timestamp: datetime = field(default_factory=datetime.now)


# class ShikshaSourceKnowledgeBase:
#     """Knowledge base containing all information about Shiksha Source"""
    
#     def __init__(self):
#         self.knowledge = {
#             "company_info": {
#                 "name": "Shiksha Source",
#                 "ceos": ["Kishor MB", "Nachikath NR"],
#                 "tagline": "Structured academic project solutions with professional development",
#                 "mission": "To empower students with practical learning experience through structured project development and guided explanation",
#                 "focus": "Student-focused academic support platform",
#                 "contact": {
#                     "phone": "+91 94823 084644",
#                     "whatsapp": "https://wa.me/919482308464",
#                     "service_area": "Serving Students Across India"
#                 }
#             },
            
#             "services": [
#                 {
#                     "name": "Final Year Projects",
#                     "description": "Complete final year project development with industry-aligned architecture",
#                     "includes": ["Full development", "Documentation", "Viva preparation", "Demo sessions"]
#                 },
#                 {
#                     "name": "Mini Projects",
#                     "description": "Semester-based mini projects for engineering and degree students",
#                     "includes": ["Structured code", "Testing", "Presentation support"]
#                 },
#                 {
#                     "name": "Documentation & IEEE Papers",
#                     "description": "Professional documentation and IEEE standard papers",
#                     "includes": ["Technical documentation", "Research papers", "IEEE format"]
#                 },
#                 {
#                     "name": "Viva Preparation",
#                     "description": "Comprehensive preparation for project defense and viva",
#                     "includes": ["Mock vivas", "Question preparation", "Concept clarity"]
#                 },
#                 {
#                     "name": "Bug Fixing",
#                     "description": "Debugging and error resolution for existing projects",
#                     "includes": ["Code review", "Bug identification", "Solution implementation"]
#                 },
#                 {
#                     "name": "Deployment Assistance",
#                     "description": "Help with project deployment and hosting",
#                     "includes": ["Server setup", "Deployment", "Configuration"]
#                 }
#             ],
            
#             "project_categories": {
#                 "by_domain": [
#                     "Web Development", "Mobile App Development", "AI/ML", 
#                     "Data Science", "IoT", "Blockchain", "Cloud Computing",
#                     "Cybersecurity", "AR/VR", "Game Development"
#                 ],
#                 "by_degree": [
#                     "B.Tech/BE (Engineering)", "MCA", "BCA", "M.Tech",
#                     "BSc Computer Science", "MSc Computer Science"
#                 ],
#                 "by_technology": [
#                     "Python", "Java", "JavaScript/React", "Node.js",
#                     "Flutter", "Android", "PHP", "Django", "MERN Stack",
#                     "Machine Learning", "Deep Learning", "TensorFlow"
#                 ]
#             },
            
#             "core_values": [
#                 "Academic Excellence - Maintaining integrity with technically sound solutions",
#                 "Student-Centric Support - Continuous guidance from start to finish",
#                 "Professional Standards - Ethical and structured approach",
#                 "Explanation-Driven - Students gain complete understanding"
#             ],
            
#             "navigation": {
#                 "Home": "/",
#                 "Browse by Domain": "/by-domain",
#                 "Browse by Degree": "/by-degree",
#                 "Browse by Technology": "/by-technology",
#                 "About Us": "/aboutus",
#                 "Sign In": "/LogIn",
#                 "Sign Up": "/signup"
#             }
#         }
    
#     def get_all_text_chunks(self) -> List[Dict[str, str]]:
#         """Extract all text chunks for embedding"""
#         chunks = []
        
#         # Company info
#         company = self.knowledge["company_info"]
#         chunks.append({
#             "text": f"Shiksha Source is {company['tagline']}. Founded by {' and '.join(company['ceos'])}. {company['mission']}",
#             "type": "company_info"
#         })
        
#         # Services
#         for service in self.knowledge["services"]:
#             chunks.append({
#                 "text": f"{service['name']}: {service['description']}. Includes: {', '.join(service['includes'])}",
#                 "type": "service"
#             })
        
#         # Project categories
#         for category, items in self.knowledge["project_categories"].items():
#             chunks.append({
#                 "text": f"We offer projects {category}: {', '.join(items)}",
#                 "type": "projects"
#             })
        
#         # Core values
#         for value in self.knowledge["core_values"]:
#             chunks.append({
#                 "text": value,
#                 "type": "values"
#             })
        
#         return chunks


# class ShikshaSourceChatbot:
#     """Main chatbot class using OpenRouter API"""
    
#     def __init__(self, openrouter_api_key: str, model: str = "openai/gpt-4o-mini"):
#         """
#         Initialize chatbot with OpenRouter API
        
#         Args:
#             openrouter_api_key: Your OpenRouter API key (get from https://openrouter.ai/keys)
#             model: Model to use. Recommended models:
#                    - "openai/gpt-4o-mini" (default, fast, cheap, reliable - $0.15/1M tokens)
#                    - "meta-llama/llama-3.1-8b-instruct:free" (free but may be slow/unavailable)
#                    - "google/gemma-2-9b-it:free" (Google's free model)
#                    - "anthropic/claude-3.5-sonnet" (best quality, more expensive)
#         """
        
#         try:
#             self.api_key = openrouter_api_key
#             self.model = model
#             self.api_url = "https://openrouter.ai/api/v1/chat/completions"
            
#             logger.info(f"🔍 Initializing OpenRouter with model: {self.model}")
            
#             # Test the connection
#             if not self._test_connection():
#                 raise Exception("Failed to connect to OpenRouter. Check your API key!")
            
#             logger.info(f"✅ OpenRouter connected successfully!")
            
#             # Initialize knowledge base
#             self.kb = ShikshaSourceKnowledgeBase()
            
#             # Initialize embedding model
#             logger.info("Loading embedding model...")
#             self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
            
#             # Create vector database
#             self._create_vector_db()
            
#             # Chat history
#             self.chat_history: List[Message] = []
            
#             # System prompt
#             self.system_prompt = """You are a friendly assistant for Shiksha Source - a student project help platform.

# **About Shiksha Source:**
# Founded by Kishor MB and Nachikath NR. We help students with academic projects across India.

# **Your Role:**
# Answer questions about our services, projects, and contact info. Keep responses SHORT and RELEVANT.

# **Response Rules:**
# 1. Maximum 2-3 short sentences per response
# 2. Use simple, direct language
# 3. Only answer what's asked - don't add extra information
# 4. For complex questions, give main point + contact number
# 5. If question is off-topic (health, personal issues), politely redirect: "I'm here to help with academic projects. For project help, contact +91 94823 084644."

# **Tone:** Friendly, brief, helpful

# **Examples:**
# Q: "What is Shiksha Source?"
# A: "We help students with final year projects, mini projects, documentation, and viva preparation across India. Contact +91 94823 084644 for details."

# Q: "Services?"
# A: "Final year projects, mini projects, IEEE papers, viva prep, bug fixing, and deployment help. Call +91 94823 084644."

# Q: "Founders?"
# A: "Founded by Kishor MB and Nachikath NR."

# Keep it SHORT and RELEVANT!"""
            
#             logger.info("✅ Chatbot initialized successfully!")
            
#         except Exception as e:
#             logger.error(f"Failed to initialize chatbot: {str(e)}")
#             raise
    
#     def _test_connection(self) -> bool:
#         """Test OpenRouter connection"""
#         headers = {
#             "Authorization": f"Bearer {self.api_key}",
#             "Content-Type": "application/json",
#             "HTTP-Referer": "https://shikshasource.com",
#             "X-Title": "Shiksha Source Chatbot"
#         }
        
#         data = {
#             "model": self.model,
#             "messages": [
#                 {"role": "user", "content": "Hi"}
#             ],
#             "max_tokens": 10
#         }
        
#         try:
#             response = requests.post(self.api_url, headers=headers, json=data, timeout=15)
#             if response.status_code == 200:
#                 logger.info(f"✅ Connection test successful with model: {self.model}")
#                 return True
#             else:
#                 logger.error(f"Connection test failed: {response.status_code} - {response.text}")
#                 return False
#         except Exception as e:
#             logger.error(f"Connection test exception: {str(e)}")
#             return False
    
#     def _create_vector_db(self):
#         """Create vector database from knowledge base"""
#         logger.info("Creating vector database...")
        
#         # Get all text chunks
#         self.chunks = self.kb.get_all_text_chunks()
        
#         # Create embeddings
#         texts = [chunk["text"] for chunk in self.chunks]
#         self.embeddings = self.embedder.encode(texts, show_progress_bar=False)
        
#         logger.info(f"✅ Vector database created with {len(self.chunks)} chunks")
    
#     def _retrieve_relevant_context(self, query: str, top_k: int = 3) -> str:
#         """Retrieve relevant context using semantic search"""
        
#         # Encode query
#         query_embedding = self.embedder.encode([query], show_progress_bar=False)
        
#         # Calculate similarity
#         similarities = cosine_similarity(query_embedding, self.embeddings)[0]
        
#         # Get top k indices
#         top_indices = np.argsort(similarities)[-top_k:][::-1]
        
#         # Retrieve relevant chunks
#         relevant_chunks = [self.chunks[i]["text"] for i in top_indices]
        
#         return "\n\n".join(relevant_chunks)
    
#     def _detect_intent(self, message: str) -> str:
#         """Detect user intent"""
#         message_lower = message.lower()
        
#         if any(word in message_lower for word in ["navigate", "go to", "page", "where", "find page"]):
#             return "navigation"
        
#         if any(word in message_lower for word in ["service", "offer", "provide", "do you have", "help with"]):
#             return "service_inquiry"
        
#         if any(word in message_lower for word in ["project", "final year", "mini project", "domain", "technology"]):
#             return "project_inquiry"
        
#         if any(word in message_lower for word in ["contact", "phone", "whatsapp", "reach", "support", "talk"]):
#             return "contact"
        
#         if any(word in message_lower for word in ["price", "cost", "fee", "charge", "payment", "how much"]):
#             return "pricing"
        
#         return "general"
    
#     def _call_openrouter_api(self, prompt: str) -> str:
#         """Call OpenRouter API"""
        
#         headers = {
#             "Authorization": f"Bearer {self.api_key}",
#             "Content-Type": "application/json",
#             "HTTP-Referer": "https://shikshasource.com",  # Optional: your site URL
#             "X-Title": "Shiksha Source Chatbot"  # Optional: your app name
#         }
        
#         data = {
#             "model": self.model,
#             "messages": [
#                 {"role": "system", "content": self.system_prompt},
#                 {"role": "user", "content": prompt}
#             ],
#             "temperature": 0.7,
#             "max_tokens": 150,
#             "top_p": 0.95,
#         }
        
#         try:
#             response = requests.post(self.api_url, headers=headers, json=data, timeout=30)
            
#             if response.status_code == 200:
#                 result = response.json()
#                 if 'choices' in result and len(result['choices']) > 0:
#                     return result['choices'][0]['message']['content']
#                 else:
#                     raise Exception("No response generated")
#             else:
#                 error_msg = response.text
#                 logger.error(f"API Error: {response.status_code} - {error_msg}")
#                 raise Exception(f"API returned {response.status_code}: {error_msg}")
                
#         except requests.exceptions.Timeout:
#             raise Exception("Request timed out. Please try again.")
#         except requests.exceptions.RequestException as e:
#             raise Exception(f"Network error: {str(e)}")
    
#     def chat(self, user_message: str) -> str:
#         """Main chat method"""
        
#         try:
#             # Add user message to history
#             self.chat_history.append(Message(role="user", content=user_message))
            
#             # Detect intent
#             intent = self._detect_intent(user_message)
#             logger.info(f"Detected intent: {intent}")
            
#             # Retrieve relevant context
#             context = self._retrieve_relevant_context(user_message)
            
#             # Add navigation help for navigation intent
#             if intent == "navigation":
#                 nav = self.kb.knowledge["navigation"]
#                 nav_text = "Here are the main pages:\n\n"
#                 for page, path in nav.items():
#                     nav_text += f"• **{page}**: `{path}`\n"
#                 context += "\n\n" + nav_text
            
#             # Add contact info for contact intent
#             if intent == "contact":
#                 contact = self.kb.knowledge["company_info"]["contact"]
#                 context += f"\n\nContact: Phone: {contact['phone']}, WhatsApp: {contact['whatsapp']}"
            
#             # Build prompt
#             prompt = f"""**Relevant Context:**
# {context}

# **Recent Conversation:**
# {self._format_chat_history()}

# **User Message:**
# {user_message}

# **Your Response:**
# Give a SHORT, DIRECT answer (2-3 sentences max). Only answer what's asked."""
            
#             # Call OpenRouter API
#             bot_response = self._call_openrouter_api(prompt)
            
#             # Add to history
#             self.chat_history.append(Message(role="assistant", content=bot_response))
            
#             # Keep history manageable
#             if len(self.chat_history) > 10:
#                 self.chat_history = self.chat_history[-10:]
            
#             return bot_response
            
#         except Exception as e:
#             logger.error(f"Error in chat: {str(e)}")
#             return f"I apologize, but I'm having trouble processing your request.\n\nPlease try again or contact our support team at +91 94823 084644."
    
#     def _format_chat_history(self, last_n: int = 4) -> str:
#         """Format recent chat history"""
#         recent = self.chat_history[-(last_n*2):] if len(self.chat_history) > last_n*2 else self.chat_history
        
#         formatted = []
#         for msg in recent:
#             role = "User" if msg.role == "user" else "Assistant"
#             formatted.append(f"{role}: {msg.content}")
        
#         return "\n".join(formatted) if formatted else "No previous conversation"
    
#     def reset_conversation(self):
#         """Reset chat history"""
#         self.chat_history = []
#         logger.info("Conversation reset")


# def main():
#     """Main function"""
    
#     # ============================================================
#     # 🔑 PUT YOUR OPENROUTER API KEY HERE
#     # Get it from: https://openrouter.ai/keys
#     # ============================================================
#     OPENROUTER_API_KEY = "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"
    
#     # ============================================================
#     # 🤖 CHOOSE YOUR MODEL (All these are FREE!)
#     # ============================================================
#     # Recommended free models:
#     # - "meta-llama/llama-3.1-8b-instruct:free" (Fast, smart, default)
#     # - "google/gemma-2-9b-it:free" (Google's free model)
#     # - "microsoft/phi-3-medium-128k-instruct:free" (Microsoft)
#     # - "mistralai/mistral-7b-instruct:free" (Mistral)
    
#     MODEL = "openai/gpt-4o-mini"
    
#     print("=" * 70)
#     print("🎓 SHIKSHA SOURCE CHATBOT - OPENROUTER VERSION")
#     print("=" * 70)
#     print(f"Using: {MODEL}")
#     print("Features: OpenRouter API, NLP, RAG, Spell-Tolerant")
#     print("Cost: ~$0.15 per 1M tokens (very affordable!)")
#     print("=" * 70)
    
#     try:
#         # Initialize chatbot
#         bot = ShikshaSourceChatbot(
#             openrouter_api_key=OPENROUTER_API_KEY,
#             model=MODEL
#         )
        
#         print("\n✅ Chatbot is ready!")
#         print("\n" + "=" * 70)
#         print("Testing with sample queries...")
#         print("=" * 70)
        
#         # Test queries
#         test_queries = [
#             "Hello! What is Shiksha Source?",
#             "What services do you provide?",
#             "I need help with my final year project in AI/ML",
#             "How can I contact you?",
#             "Tell me about the founders"
#         ]
        
#         for i, query in enumerate(test_queries, 1):
#             print(f"\n{'─' * 70}")
#             print(f"🧑 User Query {i}: {query}")
#             print(f"{'─' * 70}")
            
#             response = bot.chat(query)
            
#             print(f"🤖 Bot Response:\n{response}")
#             print(f"{'─' * 70}")
        
#         print("\n" + "=" * 70)
#         print("✅ ALL TESTS COMPLETED!")
#         print("=" * 70)
        
#         # Interactive mode
#         print("\n\n💬 INTERACTIVE MODE (Type 'quit' to exit, 'reset' to clear)")
#         print("=" * 70)
#         print("💡 Tip: You can make typos - the bot understands context!")
#         print("=" * 70)
        
#         while True:
#             user_input = input("\n🧑 You: ").strip()
            
#             if user_input.lower() in ['quit', 'exit', 'q']:
#                 print("\n👋 Thank you for using Shiksha Source Chatbot!")
#                 break
            
#             if user_input.lower() == 'reset':
#                 bot.reset_conversation()
#                 print("✅ Conversation history cleared!")
#                 continue
            
#             if not user_input:
#                 continue
            
#             response = bot.chat(user_input)
#             print(f"\n🤖 Bot: {response}")
        
#     except Exception as e:
#         print(f"\n❌ ERROR: {str(e)}")
#         print("\n🔧 Troubleshooting:")
#         print("1. Get OpenRouter API key: https://openrouter.ai/keys")
#         print("2. Check internet connection")
#         print("3. Install: pip install requests sentence-transformers scikit-learn numpy")
#         print("4. Make sure you replaced 'sk-or-v1-YOUR_KEY_HERE' with your actual key")


# if __name__ == "__main__":
#     import sys

#     user_message = sys.argv[1]

#     OPENROUTER_API_KEY = "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"
#     MODEL = "openai/gpt-4o-mini"

#     bot = ShikshaSourceChatbot(
#         openrouter_api_key=OPENROUTER_API_KEY,
#         model=MODEL
#     )

#     response = bot.chat(user_message)
#     print(response)














































# # backend/chatbot.py

# import os
# import logging
# import requests
# from typing import List, Dict, Optional
# from dataclasses import dataclass, field
# from datetime import datetime


# from sentence_transformers import SentenceTransformer
# import numpy as np
# from sklearn.metrics.pairwise import cosine_similarity


# logging.basicConfig(
#     level=logging.INFO,
#     format='%(asctime)s - %(levelname)s - %(message)s'
# )
# logger = logging.getLogger(__name__)


# @dataclass
# class Message:
#     """Message structure for chat history"""
#     role: str
#     content: str
#     timestamp: datetime = field(default_factory=datetime.now)



# class ShikshaSourceKnowledgeBase:
#     """Knowledge base for Shiksha Source"""
    
#     def __init__(self):
#         self.knowledge = {
#             "company_info": {
#                 "name": "Shiksha Source",
#                 "ceos": ["Kishor MB", "Nachikath NR"],
#                 "tagline": "Structured academic project solutions with professional development",
#                 "mission": "To empower students with practical learning experience through structured project development and guided explanation",
#                 "focus": "Student-focused academic support platform",
#                 "contact": {
#                     "phone": "+91 94823 084644",
#                     "whatsapp": "https://wa.me/919482308464",
#                 }
#             },
#             "services": [
#                 {
#                     "name": "Final Year Projects",
#                     "description": "Complete final year project development with industry‑aligned architecture",
#                     "includes": ["Full development", "Documentation", "Viva preparation", "Demo sessions"]
#                 },
#                 {
#                     "name": "Mini Projects",
#                     "description": "Semester‑based mini projects for engineering and degree students",
#                     "includes": ["Structured code", "Testing", "Presentation support"]
#                 },
#                 {
#                     "name": "Documentation & IEEE Papers",
#                     "description": "Professional documentation and IEEE standard papers",
#                     "includes": ["Technical documentation", "Research papers", "IEEE format"]
#                 },
#                 {
#                     "name": "Viva Preparation",
#                     "description": "Comprehensive preparation for project defense and viva",
#                     "includes": ["Mock vivas", "Question preparation", "Concept clarity"]
#                 },
#                 {
#                     "name": "Bug Fixing",
#                     "description": "Debugging and error resolution for existing projects",
#                     "includes": ["Code review", "Bug identification", "Solution implementation"]
#                 },
#                 {
#                     "name": "Deployment Assistance",
#                     "description": "Help with project deployment and hosting",
#                     "includes": ["Server setup", "Deployment", "Configuration"]
#                 }
#             ],
#             "navigation": {
#                 "Home": "/",
#                 "About Us": "/aboutus",
#                 "Final Year Projects": "/final-year-projects",
#                 "Mini Projects": "/mini-projects",
#                 "Contact": "/contact"
#             }
#         }
    
#     def get_all_text_chunks(self) -> List[Dict[str, str]]:
#         chunks = []

#         company = self.knowledge["company_info"]
#         chunks.append({
#             "text": f"Shiksha Source is {company['tagline']}. "
#                     f"Founded by {' and '.join(company['ceos'])}. "
#                     f"{company['mission']}",
#             "type": "company_info"
#         })
        
#         for service in self.knowledge["services"]:
#             chunks.append({
#                 "text": f"{service['name']}: {service['description']}. "
#                         f"Includes: {', '.join(service['includes'])}",
#                 "type": "service"
#             })

#         nav = self.knowledge["navigation"]
#         nav_text = "Navigate to: "
#         nav_text += ", ".join(f"{k} → {v}" for k, v in nav.items())
#         chunks.append({"text": nav_text, "type": "navigation"})

#         return chunks


# class ShikshaSourceChatbot:
#     """Main chatbot class using OpenRouter API"""
    
#     def __init__(self, openrouter_api_key: str, model: str = "openai/gpt-4o-mini"):
#         self.api_key = openrouter_api_key
#         self.model = model
#         self.api_url = "https://openrouter.ai/api/v1/chat/completions"

#         logger.info(f"🔍 Initializing OpenRouter with model: {self.model}")
        
#         # Allow service to start even if test fails
#         try:
#             if not self._test_connection():
#                 logger.warning("OpenRouter health check failed. AI will be degraded.")
#         except Exception as e:
#             logger.warning(f"OpenRouter health check error: {e}. Will retry on each request.")

#         self.kb = ShikshaSourceKnowledgeBase()
#         self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
#         self._create_vector_db()
#         self.chat_history: List[Message] = []

#         self.system_prompt = """You are a friendly assistant for Shiksha Source - a student project help platform.

# Answer questions about our services, projects, and contact info. Keep responses SHORT (2–3 sentences).

# For project help call: +91 94823 084644."""

#     def _test_connection(self) -> bool:
#         headers = {
#             "Authorization": f"Bearer {self.api_key}",
#             "Content-Type": "application/json",
#             "HTTP-Referer": "https://shikshasource.com",
#             "X-Title": "Shiksha Source Chatbot"
#         }
#         data = {
#             "model": self.model,
#             "messages": [{"role": "user", "content": "Hi"}],
#             "max_tokens": 10,
#         }
#         r = requests.post(self.api_url, headers=headers, json=data, timeout=10)
#         if r.status_code == 200:
#             logger.info("✅ OpenRouter health check OK")
#         else:
#             logger.error(f"❌ OpenRouter test failed: {r.status_code} - {r.text}")
#         return r.status_code == 200

#     def _create_vector_db(self):
#         self.chunks = self.kb.get_all_text_chunks()
#         texts = [c["text"] for c in self.chunks]
#         self.embeddings = self.embedder.encode(texts, show_progress_bar=False)
#         logger.info(f"✅ Vector DB with {len(self.chunks)} chunks")

#     def _retrieve_relevant_context(self, query: str, top_k: int = 3) -> str:
#         q_emb = self.embedder.encode([query])
#         sims = cosine_similarity(q_emb, self.embeddings)[0]
#         top_idx = np.argsort(sims)[-top_k:][::-1]
#         return "\n\n".join(self.chunks[i]["text"] for i in top_idx)

#     def _call_openrouter_api(self, prompt: str) -> str:
#         headers = {
#             "Authorization": f"Bearer {self.api_key}",
#             "Content-Type": "application/json",
#             "HTTP-Referer": "https://shikshasource.com",
#             "X-Title": "Shiksha Source Chatbot"
#         }
#         data = {
#             "model": self.model,
#             "messages": [
#                 {"role": "system", "content": self.system_prompt},
#                 {"role": "user", "content": prompt}
#             ],
#             "temperature": 0.7,
#             "max_tokens": 150,
#             "top_p": 0.95,
#         }
#         try:
#             r = requests.post(self.api_url, headers=headers, json=data, timeout=30)
#             if r.status_code == 200:
#                 j = r.json()
#                 if j.get("choices") and j["choices"]:
#                     return j["choices"][0]["message"]["content"]
#             logger.error(f"OpenRouter API error: {r.status_code} {r.text[:150]}")
#             return (
#                 "I’m having trouble connecting to the AI service right now. "
#                 "Please contact +91 94823 084644 for project help."
#             )
#         except Exception as e:
#             logger.error(f"Network error: {str(e)}")
#             return (
#                 "I cannot connect to the AI service right now. "
#                 "Please contact +91 94823 084644 for project help."
#             )

#     def chat(self, user_message: str) -> str:
#         self.chat_history.append(Message(role="user", content=user_message))

#         context = self._retrieve_relevant_context(user_message)

#         prompt = f"""**Context:**
# {context}

# **User:**
# {user_message}

# **Assistant:**
# Answer in 2–3 short sentences. If question is off-topic, answer: \"I'm here to help with academic projects.\""""

#         reply = self._call_openrouter_api(prompt)

#         self.chat_history.append(Message(role="assistant", content=reply))
#         if len(self.chat_history) > 10:
#             self.chat_history = self.chat_history[-10:]

#         return reply































# backend/chatbot.py

import os
import logging
import requests
from typing import List
from dataclasses import dataclass
from datetime import datetime


from sentence_transformers import SentenceTransformer
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity


log = logging.getLogger("uvicorn")
log.setLevel(logging.INFO)


@dataclass
class ChatMessage:
    role: str
    content: str
    timestamp: datetime = None


class ShikshaSourceKnowledgeBase:
    def __init__(self):
        ceos = ["Kishor MB", "Nachikath NR"]
        contact = {
            "phone": "+91 94823 084644",
            "whatsapp": "https://wa.me/919482308464",
        }
        pages = {
            "Home": "/",
            "Projects": "/projects",
            "Contact": "/contact",
        }
        self.knowledge = {
            "intro": f"Shiksha Source is a student project platform founded by {', '.join(ceos)}. We help students with academic projects across India.",
            "contact": f"Contact: Phone {contact['phone']}, WhatsApp: {contact['whatsapp']}",
            "pages": "\n".join(f"- {name}: {path}" for name, path in pages.items()),
        }

    def get_all_text_chunks(self) -> List[str]:
        return list(self.knowledge.values())


class ShikshaSourceChatbot:
    def __init__(self, openrouter_api_key: str, model: str = "openai/gpt-4o-mini"):
        self.key = openrouter_api_key
        self.model = model
        self.url = "https://openrouter.ai/api/v1/chat/completions"

        log.info(f"🔧 Initializing OpenRouter with {model}")

        self._init_db()

    def _init_db(self):
        self.kb = ShikshaSourceKnowledgeBase()
        self.embedder = SentenceTransformer("all-MiniLM-L6-v2")
        text_chunks = self.kb.get_all_text_chunks()
        self.embeddings = self.embedder.encode(text_chunks)
        log.info(f"✅ Vector DB: {len(self.embeddings)} chunks")

    def _search_context(self, query: str, top_k: int = 3) -> str:
        q_embed = self.embedder.encode([query])
        sim = cosine_similarity(q_embed, self.embeddings)[0]
        top_idx = np.argsort(sim)[-top_k:][::-1]
        return "\n\n".join([self.kb.get_all_text_chunks()[i] for i in top_idx])

    def _call_openrouter(self, prompt: str) -> str:
        headers = {
            "Authorization": f"Bearer {self.key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://shikshasource.com",
        }
        data = {
            "model": self.model,
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7,
            "max_tokens": 120,  # Short responses
            "top_p": 0.95,
        }
        try:
            r = requests.post(self.url, headers=headers, json=data, timeout=10)
            if r.status_code == 200:
                j = r.json()
                return j["choices"][0]["message"]["content"]
        except Exception as e:
            log.error(f"OpenRouter error: {e}")
        return "Chatbot is offline. Contact +91 94823 084644."

    def chat(self, message: str) -> str:
        ctx = self._search_context(message)
        prompt = f"""Context:
{ctx}

User: {message}

Assistant: Give 2-3 short sentences max. Be direct."""
        return self._call_openrouter(prompt)


# Keep history in memory for now
history: List[ChatMessage] = []
