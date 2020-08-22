import csv

def word_group(words):
    """
    Takes a list of words and returns a list of words grouped by prefix
    :param words: an array of string
    :return: dictionary of array of words
    """

    group = {}
    # Sort the words in case they are not sorted to begin with
    sorted_words = sorted(words)

    prefix = None
    for word in sorted_words:
        new_prefix = word.split('_')[0]

        # Handle cases where the previous prefix can fit additional words ie (bag can hold bags)
        if prefix is None or prefix not in new_prefix:
            prefix = new_prefix

        if prefix not in group:
            group[prefix] = []

        group[prefix].append(word)

    return group


def load_word_group(file_name):
    with open(file_name) as file:
        reader = csv.reader(file)
        return word_group([row[0] for row in reader])
    return {}
