from flask import Flask

import word_group


app = Flask(__name__)
word_group_storage = word_group.load_word_group('names.csv')

# Define the index route
@app.route("/")
def index():
    return word_group_storage

# Run Flask if the __name__ variable is equal to __main__
if __name__ == "__main__":
    app.run()
