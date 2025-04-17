1. Game & Anxiety Questionnaire

This is a web-based interactive quiz exploring the relationship between video games and anxiety. It collects user experiences, gaming habits, and emotional responses to analyze whether gaming reduces or increases anxiety levels.


2. Project Goal

This quiz investigates how often people play games, why they play, what genres they enjoy, and how these factors might influence their emotional state—especially anxiety. It aims to support self-awareness and prompt reflection on personal gaming habits.


3.  Questions Overview

  1. Do you play video games? (yes/no)
  2. How often do you play? (dropdown)
  3. What genres do you usually play? (checkboxes)
  4. Do you feel anxious while playing? (yes-> 5, no-> skip 5)
  5. How anxious do you feel after gaming? (slider)
  6. Why does gaming make you feel anxious? / not anxious?** (text)
  7. Do you usually play alone or with others? (multiple choice)
  8. What is your main purpose for gaming? (multiple choice)


4. Technologies Used

  - HTML for structure
  - CSS for styling
  - JavaScript for interactivity
  - `localStorage` for saving user inputs


5. Features

  - Dynamic question routing (e.g. Q5 only appears if Q4 = "yes")
  - Data is stored locally on the user's browser
  - Final results page displays personalized suggestions based on answers
  - Clean design of layout & UI


6. How It Meets Technical Requirements


  At least 8 questions ✅ 
  Uses form inputs + event handlers ✅
  Stores inputs using `localStorage` ✅ 
  Uses answers to change the webpage ✅ 
  Built with HTML/CSS/JS locally ✅ 
  Code is GitHub-ready ✅ 
  Tested with users ✅ 
  README with documentation ✅ 


7. Testing Feedback

  - During testing, I discovered a logic bug between Q4 and Q5:
  If a user selected “No” to “Do you feel anxious while playing?”, the form was still storing a default value (like 8) for the next question’s slider, “How anxious do you feel after gaming?” — even though the user never saw or answered it.
  Thus, I tried iding the slider when “No” is selected, removing any existing slider value from localStorage when it’s hidden, and updating the result page logic to check whether after_anxiety was intentionally submitted
  
  - My friends also suggested clarifying question wording, which was adjusted.



8. If I Had More Time...

  - I would visualize results with proper images/memes or a radar chart 📊
  - Let users compare their answers to averages from others
  - Add audio or animation to make results more engaging
