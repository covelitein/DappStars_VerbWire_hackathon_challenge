import json
import requests
from metadata import toMeta
from config import VERBWIRE_CONTRACT_ADDRESS, VERBWIRE_API_KEY
from database import save_data, get_data
from fastapi import FastAPI, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/stars")
async def root():
    return{'response': get_data()}

@app.post("/process")
async def process(
    image: UploadFile,
    name: str = Form(),
    description: str = Form(),
    price: str = Form(),
    recipientAddress: str = Form()
):
    # proceedures enters here...
    url = "https://api.verbwire.com/v1/nft/store/file"

    files = {"filePath": (image.filename, image.file, image.content_type)}
    headers = {
        "accept": "application/json",
        "X-API-Key": VERBWIRE_API_KEY
    }

    response = requests.post(url, files=files, headers=headers)
    imageUrl = response.json()['ipfs_storage']['ipfs_url']

    print(imageUrl)
    url = "https://api.verbwire.com/v1/nft/mint/mintFromMetadata"

    payload = {
        'chain': 'goerli',
        'name': name,
        'description': description,
        'recipientAddress': recipientAddress,
        'contractAddress': VERBWIRE_CONTRACT_ADDRESS,
        'data': json.dumps(toMeta()),
        'imageUrl': imageUrl,
    }
    payload = json.dumps(payload)
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "X-API-Key": VERBWIRE_API_KEY
    }

    response = requests.post(url, data=payload, headers=headers)
    save_data(name=name, description=description, price=price, image=imageUrl)

    print(response.text)
    return {'response': response.json()}