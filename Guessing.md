# Number Guessing Game Flowchart

```mermaid
flowchart TD
    Start([Start]) --> GenerateNumber[Generate Random Number]
    GenerateNumber --> InputGuess[User Inputs Guess]
    InputGuess --> CheckValid{Is the Input Valid?}
    CheckValid -- No --> InvalidInput[Display 'Invalid Input']
    InvalidInput --> InputGuess
    CheckValid -- Yes --> CheckGuess{Is the Guess Correct?}
    CheckGuess -- Yes --> CorrectGuess[Display 'You Guessed Correctly!']
    CorrectGuess --> End([End])
    CheckGuess -- No --> HighLow{Is Guess Too High or Too Low?}
    HighLow -- Too High --> DisplayHigh[Display 'Too High']
    HighLow -- Too Low --> DisplayLow[Display 'Too Low']
    DisplayHigh --> InputGuess
    DisplayLow --> InputGuess


## Steps Description
Start
The game begins, initializing the process.

Generate Random Number
A random number is generated within the specified range. This will be the number the user needs to guess.

User Inputs Guess
The user is prompted to input their guess.

Is the Input Valid?
The program checks whether the user input is valid:

If No: The game displays an error message, "Invalid Input", and prompts the user to input their guess again.
If Yes: The program proceeds to check if the guess is correct.
Is the Guess Correct?
The program checks if the user’s guess matches the randomly generated number:

If Yes: The game displays the message, "You Guessed Correctly!", and ends.
If No: The game proceeds to check whether the guess is too high or too low.
Is the Guess Too High or Too Low?
The program evaluates whether the user's guess is higher or lower than the randomly generated number:

If the guess is Too High: The game displays the message, "Too High", and prompts the user to input a new guess.
If the guess is Too Low: The game displays the message, "Too Low", and prompts the user to input a new guess.
End
The game ends when the user correctly guesses the number.
