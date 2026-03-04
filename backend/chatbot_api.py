from fastapi import FastAPI
from pydantic import BaseModel
from chatbot import ShikshaSourceChatbot
import uvicorn

class Message(BaseModel):
    message: str

app = FastAPI(title="Shiksha Source Chatbot API")

OPENROUTER_API_KEY = "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"  # Replace with your key
bot = ShikshaSourceChatbot(openrouter_api_key=OPENROUTER_API_KEY)

@app.post("/chat")
async def chat_endpoint(msg: Message):
    reply = bot.chat(msg.message)
    return {"reply": reply}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)