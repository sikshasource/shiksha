# from fastapi import FastAPI
# from pydantic import BaseModel
# from chatbot import ShikshaSourceChatbot
# import uvicorn

# class Message(BaseModel):
#     message: str

# app = FastAPI(title="Shiksha Source Chatbot API")

# OPENROUTER_API_KEY = "OPENROUTER_API_KEY"  # Replace with your key
# bot = ShikshaSourceChatbot(openrouter_api_key=OPENROUTER_API_KEY)

# @app.post("/chat")
# async def chat_endpoint(msg: Message):
#     reply = bot.chat(msg.message)
#     return {"reply": reply}

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)




# backend/chatbot_api.py

import os
from fastapi import FastAPI
from pydantic import BaseModel
from chatbot import ShikshaSourceChatbot
import uvicorn

# ------------------ Request model ------------------
class Message(BaseModel):
    message: str

# ------------------ FastAPI app ------------------
app = FastAPI(title="Shiksha Source Chatbot API")

# ------------------ Load OpenRouter API key ------------------
# Use environment variable in Render
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
if not OPENROUTER_API_KEY:
    raise ValueError("OPENROUTER_API_KEY not set in environment variables!")

# ------------------ Initialize chatbot ------------------
bot = ShikshaSourceChatbot(openrouter_api_key=OPENROUTER_API_KEY)

# ------------------ Chat endpoint ------------------
@app.post("/chat")
async def chat_endpoint(msg: Message):
    reply = bot.chat(msg.message)
    return {"reply": reply}

# ------------------ Local testing ------------------
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)