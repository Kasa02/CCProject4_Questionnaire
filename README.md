1. What is this & Project Goal

  - This is a web-based interactive quiz exploring the relationship between video games and anxiety. 
  - It collects user experiences, gaming habits, and emotional responses to analyze whether gaming reduces or increases anxiety levels.
  - This questionnaire investigates how often people play games, why they play, what genres they enjoy, and how these factors might influence their emotional state—especially anxiety.
  - It aims to support self-awareness and prompt reflection on personal gaming habits.


2.  Questions Overview

  1. Do you play video games? (yes/no)
  2. How often do you play? (dropdown)
  3. What genres do you usually play? (checkboxes)
  4. Do you feel anxious while playing? (yes-> 5, no-> skip 5)
  5. How anxious do you feel after gaming? (slider)
  6. Why does gaming make you feel anxious? / not anxious?** (text)
  7. Do you usually play alone or with others? (multiple choice)
  8. What is your main purpose for gaming? (multiple choice)


3. Testing Feedback

  - During testing, I discovered a logic bug between Q4 and Q5:
  If a user selected “No” to “Do you feel anxious while playing?”, the form was still storing a default value (like 8) for the next question’s slider, “How anxious do you feel after gaming?” even though the user never saw or answered it. Thus, I tried iding the slider when “No” is selected, removing any existing slider value from localStorage when it’s hidden, and updating the result page logic to check whether after_anxiety was intentionally submitted
  
  - My friends also suggested clarifying question wording, which was adjusted.



4. If I Had More Time...

  - I would visualize results with proper images/memes or a radar chart 📊
  - Let users compare their answers to averages from others
  - Add audio or animation to make results more engaging
