function find_longest_word(str) {
  // removing any special character
  var array_of_words = str
    .split(" ")
    .map((word) => word.replace(/[^a-z ]+/g, ""));
  var longest_word,
    ignore_special_characters,
    longest_word_length = 0,
    number_of_vowels = 0;

  for (var i = 0; i < array_of_words.length; i++) {
    ignore_special_characters = array_of_words[i];
    let get_vowels = ignore_special_characters.match(/[aeiou]/gi);

    if (
      ignore_special_characters.length > longest_word_length &&
      get_vowels.length > number_of_vowels
    ) {
      longest_word_length = array_of_words[i].length;
      longest_word = array_of_words[i];
      number_of_vowels = longest_word.match(/[aeiou]/gi).length;
    }
  }
  console.log(longest_word);
}

var str =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

find_longest_word(str);

