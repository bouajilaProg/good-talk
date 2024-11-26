from fastapi import FastAPI
from pydantic import BaseModel
from detoxify import Detoxify
import numpy

# Initialize FastAPI app
app = FastAPI()

# Define request body using Pydantic model


class TextInput(BaseModel):
    text: str

# Define API endpoint for toxicity classification


@app.post("/check_toxicity/")
async def check_toxicity(input: TextInput):

    predictions = Detoxify('original').predict(input.text)

    toxic_score = predictions.get('toxicity', 0)

    if isinstance(toxic_score, (float, int, numpy.float32)):
        toxic_score = float(toxic_score)

    return {"toxic": toxic_score}
