from flask import Flask
from flask_cors import CORS, cross_origin

import word_group


app = Flask(__name__)

# In a production we either want to reject cross origin request or have an allow list, depends on the setup
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

word_group_storage = word_group.load_word_group('names.csv')

# Define the index route
@app.route("/")
@cross_origin()
def index():
    return word_group_storage


# Run Flask if the __name__ variable is equal to __main__
if __name__ == "__main__":
    app.run()
