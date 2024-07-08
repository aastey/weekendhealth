# Weekend Health Take Home Challenge

## Thought Process
I took a different approach to this problem initially. My first thought was to 
alphabetize both the key word and the words in the dictionary. This would allow me
to create a simple 1:1 comparison between the two. However, this approach did 
not account for when the two strings were of different lengths. 

Rather than creating more loops to account for longer/shorter strings, I scratched
that idea entirely. I realized that if I counted characters in each of the strings
I was comparing, I could easily determine whether the letters in the target word could 
make up the letters in the word dictionary. This also allowed me to rule out words quickly.
Anytime a letter appeared more times in a dictionary word than in the key word, I could
count out the possibility that it could be spelled using the letters in the key word.

## Further Improvements and Testing
If I were to expand the test cases for this project, I would account for more potential
edge cases. For example, if the array of words contains the same word multiple times, 
that word is returned multiple times. I would want to account for that possibility
and only return the word once. 

* If there is a word in the array that is repeated multiple times

additionally, I would implement error messages.

## Running and testing the project locally
To run the project locally, you will need to install the npm packages (jest),
Then you will have to compile the typescript file into javascript. To do this, enter 
the following into the terminal:
```tsc src/index.ts```

Then, to run the file itself, enter the following into the terminal:
```node src/index.js```

Finally, to run the jest tests, enter the following: 
```npm test```
