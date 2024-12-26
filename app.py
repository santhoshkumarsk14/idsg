import logging
from flask import Flask, render_template

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Product data
PRODUCTS = [
    {
        "name": "Industrial Robotics",
        "image": "https://images.unsplash.com/photo-1523983302122-73e869e1f850",
        "category": "Automation"
    },
    {
        "name": "Smart Manufacturing System",
        "image": "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9",
        "category": "Manufacturing"
    },
    {
        "name": "Precision Tools",
        "image": "https://images.unsplash.com/photo-1673201159882-725f2b63dc39",
        "category": "Tools"
    },
    {
        "name": "Quality Control System",
        "image": "https://images.unsplash.com/photo-1673201159848-a0908cff3ccf",
        "category": "Quality"
    },
    {
        "name": "Engineering Solutions",
        "image": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
        "category": "Solutions"
    },
    {
        "name": "Industrial IoT",
        "image": "https://images.unsplash.com/photo-1516937941344-00b4e0337589",
        "category": "IoT"
    }
]

@app.route('/')
def index():
    return render_template('index.html', products=PRODUCTS)
