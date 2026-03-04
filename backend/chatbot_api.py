# # from fastapi import FastAPI
# # from pydantic import BaseModel
# # from chatbot import ShikshaSourceChatbot
# # import uvicorn

# # class Message(BaseModel):
# #     message: str

# # app = FastAPI(title="Shiksha Source Chatbot API")

# # OPENROUTER_API_KEY = "OPENROUTER_API_KEY"  # Replace with your key
# # bot = ShikshaSourceChatbot(openrouter_api_key=OPENROUTER_API_KEY)

# # @app.post("/chat")
# # async def chat_endpoint(msg: Message):
# #     reply = bot.chat(msg.message)
# #     return {"reply": reply}

# # if __name__ == "__main__":
# #     uvicorn.run(app, host="0.0.0.0", port=8000)




# # backend/chatbot_api.py

# import os
# from fastapi import FastAPI
# from pydantic import BaseModel
# from chatbot import ShikshaSourceChatbot
# import uvicorn

# # ------------------ Request model ------------------
# class Message(BaseModel):
#     message: str

# # ------------------ FastAPI app ------------------
# app = FastAPI(title="Shiksha Source Chatbot API")

# # ------------------ Load OpenRouter API key ------------------
# # Use environment variable in Render
# OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
# if not OPENROUTER_API_KEY:
#     raise ValueError("OPENROUTER_API_KEY not set in environment variables!")

# # ------------------ Initialize chatbot ------------------
# bot = ShikshaSourceChatbot(openrouter_api_key=OPENROUTER_API_KEY)

# # ------------------ Chat endpoint ------------------
# @app.post("/chat")
# async def chat_endpoint(msg: Message):
#     reply = bot.chat(msg.message)
#     return {"reply": reply}

# # ------------------ Local testing ------------------
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)












# # backend/chatbot_api.py

# import os
# from fastapi import FastAPI
# from pydantic import BaseModel
# from backend.chatbot import ShikshaSourceChatbot
# import uvicorn
# import logging


# # Reduce verbose logs from other libraries
# logging.getLogger("tensorflow").setLevel(logging.ERROR)
# logging.getLogger("transformers").setLevel(logging.ERROR)


# app = FastAPI(title="Shiksha Source Chatbot API")


# # ------------------ Request model ------------------
# class Message(BaseModel):
#     message: str


# # ------------------ OpenRouter API key (via env) ------------------
# OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
# MODEL = os.getenv("OPENROUTER_MODEL", "openai/gpt-4o-mini")


# # ------------------ Initialize chatbot (graceful fallback) ------------------
# bot = None
# try:
#     if not OPENROUTER_API_KEY:
#         raise ValueError("No OPENROUTER_API_KEY in environment.")
#     bot = ShikshaSourceChatbot(openrouter_api_key=OPENROUTER_API_KEY, model=MODEL)
# except Exception as e:
#     print(f"⚠️  Cannot connect to OpenRouter: {e}. Using fallback text-only mode.")
#     # Fallback chatbot function
#     def fallback_bot(message: str) -> str:
#         if "contact" in message.lower() or "phone" in message.lower():
#             return "You can contact us at +91 94823 084644 for project help."
#         return (
#             "I cannot connect to the AI backend right now. "
#             "Please contact +91 94823 084644 for project help."
#         )


# # ------------------ Chat endpoint ------------------
# @app.post("/chat")
# async def chat_endpoint(msg: Message):
#     if bot:
#         reply = bot.chat(msg.message)
#     else:
#         reply = fallback_bot(msg.message)
#     return {"reply": reply}


# # ------------------ Health / debug route ------------------
# @app.get("/health")
# async def health():
#     return {"status": "ok", "openrouter_available": bot is not None}


# # ------------------ Run with Render port ------------------
# if __name__ == "__main__":
#     port = int(os.getenv("PORT", 8000))
#     print(f"🚀 Running uvicorn on 0.0.0.0:{port}")
#     uvicorn.run(app, host="0.0.0.0", port=port)



















import os
import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from backend.chatbot import ShikshaSourceChatbot

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("uvicorn")

app = FastAPI(title="Shiksha Chatbot", docs_url=None, redoc_url=None)

# CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://shiksha-source-co.netlify.app", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    message: str

# Get API key from environment
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY", "").strip()
MODEL = os.getenv("OPENROUTER_MODEL", "openai/gpt-4o-mini")

bot = None
if OPENROUTER_API_KEY:
    try:
        bot = ShikshaSourceChatbot(openrouter_api_key=OPENROUTER_API_KEY, model=MODEL)
        log.info("✅ Chatbot ready")
    except Exception as e:
        log.error(f"Init failed: {e}")

@app.post("/chat")
async def chat_endpoint(msg: Message):
    if bot:
        reply = bot.chat(msg.message)
    else:
        reply = "Service offline. Contact +91 94823 084644."
    return {"reply": reply}

@app.get("/health")
async def health():
    return {"status": "ok", "bot": "ready" if bot else "offline"}
