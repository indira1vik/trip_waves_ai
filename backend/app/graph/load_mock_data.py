import json

MOCK_DIR = "app/graph/mock_data"

def load_mock_data(filename: str):
    with open(f"{MOCK_DIR}/{filename}") as f:
        return json.load(f)