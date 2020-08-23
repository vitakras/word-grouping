from flask import Flask, request
from flask_cors import CORS, cross_origin

import word_group


app = Flask(__name__)

# In a production we either want to reject cross origin request or have an allow list, depends on the setup
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

word_group_storage = word_group.load_word_group('names.csv')


def move_word(name, frm, to):
    if frm == to:
        return

    if frm in word_group_storage:
        word_group_storage[frm].remove(name)

    if to not in word_group_storage:
        word_group_storage[to] = []

    word_group_storage[to].append(name)

# Define the index route
@app.route("/")
@app.route("/folder/<name>", methods=['POST'])
@cross_origin()
def index(name=None):
    if request.method == 'POST':
        if name not in word_group_storage:
            word_group_storage[name] = []

    return word_group_storage


# Define the index route
@app.route("/move", methods=['POST'])
@cross_origin()
def move():
    content = request.json
    move_word(content['name'], content['from'], content['to'])
    return word_group_storage


# Run Flask if the __name__ variable is equal to __main__
if __name__ == "__main__":
    app.run()
