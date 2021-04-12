# Welcome Foolish Mortals #

![Welcome Foolish Mortals Homepage](/assets/images/readme/responsive-home.png)

![Welcome Foolish Mortals Gamepage](/assets/images/readme/responsive-game.png)

## An Audio memory game ##

Welcome Foolish Mortals is an audio visual Memory game inspired by the popular Disney theme park attraction, [The Haunted Mansion](https://www.disneyworld.eu/attractions/magic-kingdom/haunted-mansion/). 

Image of game

The target audience for this game is Disney fans, particularly fans of The Haunted Mansion, and fans of memory games.  As the ride can be a little spooky, some of the sounds and images in the game may spook younger players so it is recommended for ages 8+.

### UX ##

#### Player goals ####

The main target audience for Welcome Foolish Mortals is fans of memory games and fans of Disney Theme Parks, especially for The Haunted Mansion.  Although the game can be enjoyed by everyone younger audiences may find it a little spooky, so it is recommended for ages 8+.

Players goals are:
- A game that is fun and exciting to play.
- Easy to use controls on all devices.
- Have clear rules for the game for those that need them.
- Get clear feedback on the Number of turns the player is on.
- Get clear feedback on the users Highest Score.
- Visually rewarding images themed around The Haunted Mansion.

Developer Goals are:
- To create a fun game interactive game that myself and my friends can enjoy.
- To encorporate elements of my favourite attraction at Disney into a project.
- To design and develop a project using new-found skills in JavaScript and JQuery. 

#### User Stories ####

As a fan of memory games I want to:

- Play a fun game.
- Find clear, easy to follow instructions on gameplay.
- Be able to access the instruktions from any page.
- Have clear audio and visual cues which show where I have clicked.
- Be able to play with and without audio.
- Be able to choose my difficulty level.
- Be able to track my progress while playing.
- Be able to see my past highest scores.
- To be able to contact the maker of the game with feedback.

As well as the above stories, as a fan of The Haunted Mansion I also want to:
- Play a fun game inspired by the Disney attraction.
- Select a character from the attraction to play as.
- Find ‘easter-eggs’ linking to the attraction.

### Design ###

The audio, colors, fonts and styling all take inspiration from The Haunted Mansion.

#### Fonts ####

All fonts are provided by [Google fonts](https://fonts.google.com/).

- [Cormorant Upright](https://fonts.google.com/specimen/Cormorant+Upright?preview.text_type=custom) - Is used the page logo and headings.

![Cormorant Upright example](/assets/images/readme/cormorantupright.png)

- [Pathway Gothic One](https://fonts.google.com/specimen/Pathway+Gothic+One?preview.text_type=custom) - Is used for all other text.

![Pathway Gothic One example](/assets/images/readme/pathwaygothicone.png)

#### Icons ####

The favicon is taken from [favicon.io](https://favicon.io/emoji-favicons/ghost/) and the open source project [Twemoji](https://twemoji.twitter.com/).

All other icons are provided by [Font Awesome](https://fontawesome.com/).  These icons have been chosen as they are easy to recognise and are widely understood.

- The [HOME](https://fontawesome.com/icons/home?style=solid) takes the player back to the Home page.
- The [QUESTION MARK](https://fontawesome.com/icons/question-circle?style=regular) gives a modal reminding the player of the rules.
- The [SPEAKER](https://fontawesome.com/icons/volume-up) and [SPEAKER WITH CROSS](<https://fontawesome.com/icons/volume-mute?style=solid) mutes and unmutes the sound.

#### Colours ####

The Haunted Mansion has a clear, easily identifiable color palette. 

![IMAGE OF COLOR PALETTE](/assets/images/readme/disneyhauntedmansioncolorhex.png)

The background color for the header, footer and sidebar tie in with the background. 

The color of the text stands out against the background.

The colors of the boxes are the most identifiable colors from the attractions theming.

Many thanks to [color-hex.com](https://www.color-hex.com/color-palette/93407) and user [Lazaefair](https://www.color-hex.com/member/lazaefair) for help with sourcing the color palette.

#### Backgrounds ####
The Home screen background image is of the outside of the Haunted Mansion attraction inviting players in to the game.
The Background of the game is of the iconic Haunted Mansion wallpaper.
 
#### Audio files ####
The notes used in the gameplay are taken from the attractions soundtrack - Grim Grinning Ghosts.  These are A, E, D# and B.

### Wireframes ###

The Wireframes for this project were created during the planning and design phase using [Balsamiq](https://balsamiq.com/).

- WIREFRAME HOME

![Welcome Foolish Mortals Wireframe Homepage](/assets/images/readme/homepage-wireframe.png)

- WIREFRAME GAMEPAGE

![Welcome Foolish Mortals Wireframe Gamepage](/assets/images/readme/gamepage-wireframe.png)

### Features ###

#### Existing Features ####

**Home page** 

When the Home page loads the player is prompted to:
- Choose which character to play as.
- Choose which difficulty level they want to play.

Once both a character and difficulty level have been chosen the user will be redirected to the game screen.

The Home page will not feature a logo as the games name is the opening text.

The navigation bar will be visible so players can mute/unmute the music.

**Footer tab**

The footer will feature copyright information and a link to contact the developer.

**Gameplay pages**

Header and Navigation Bar

Returning to traditional website design the top left of the page will feature a logo which links to the Home page.

The right of the page will feature a navigation bar of easily identifiable icons.

- The Home icon - Allows the player to navigate back to the Home page to Change their character and/or the difficulty level.
- The Questionmark icon - Allows the player to re-read the rules of the game and select a different level if preferred.
- The Music icon - Allows the player to mute and unmute the games sound.



**Player info display** 

The left hand side of the page (desktop) or top of the page (mobile/tablet) will display a dashboard showing the players:
- Selected character
- Highest score (highest number of repeated patterns)

It will also display the different difficulty levels (easy, medium and hard) highlighting the current selected paying level.

**Game board**

The background of the game board is the classic wallpaper of The Haunted Mansion.

The four buttons for the game are each colored to the attractions color scheme.
Each button will feature a slight box shadow to give the impression of elevation from the background.

During the computers turn and when on the players click each button will change transparency/use a gradient effect to make the button appear to light up.  This clearly shows the player where they are clicking and allows the player to play with sound muted if preferred. 


**Turns counter**

The turns Counter allows the user to keep track on how they are progressing through that difficulty level.  

The game does not end when they reach the required number of turns to complete the level.  It continues allowing the player to try and also beat their highest score!

**Win modal**

The win modal features fun text inspired by the script from the attraction.

If on easy mode the modal will link to the medium and hard levels, if on medium it will link to the hard level.

**Lose modal**

The lose modal features fun text inspired by the script from the attraction.

The modal will encourage the user to retry the level and link to this.

**Contact page**

The contact page will not feature a logo, only the navigation bar.

A simple contact form will be available for any suggest


### Future Features ###

- Being able to select the speed difficulty level you begin on so you don't always have to start from easy mode if you have completed the game a few times.

- Player being able to create an account to log username, chosen avatar and Highest Score.

The initial avatar images I had thought of are the four infamous stretching room paintings and will appeal to any fan of the attraction.

![IMAGE OF STRETCH ROOM PORTRAITS](/assets/images/readme/stretchroomportraits.png)

- Unlock rewards for e.g after specific highest scores or game played 5, 10, 15 times the reward could be 
 - play as other characters like the hitchhiking ghosts.
 - additional music e.g. winning and losing music.

### Features Left to Implement ###

- Dashboard to left of game storing:
1. Username
2. Avatar
3. Difficulty Level
4. Highest Score


### Technologies Used ###

This project uses HTML, CSS and JavaScript programming languages.

JQuery

Bootstrap

Google Fonts

Font Awesome

GitHub

AutoPrefixer

### Testing ###

MANUAL TESTING

HOME PAGE

- There is not a traditional logo on the upper left of this website to test - the logo is featured in the body of the page.

Navigation Bar

- Hover over navigation icons and ensure there is no discernable change other than the pointer turning to a hand and the icons changing color.

- Clicking the home icon and ensure it reloads the "Home" page.

- Clicking the question mark icon and ensure it loads the rules modal.

- Change the screen size to mobile device to verify that the navigation bar is responsive and switches position from the right of screen to center screen at the appropriate breakpoint.

Navigation bar modal (Rules modal)

- Click the question mark icon and ensure the rules modal loads.

- Click the 'x' in the rules modal and make sure it closes the modal.

- Click on multiple positions around the page outside the modal text box to make sure it closes the modal.

- Click inside the modal text box to make sure that the modal only closes on the specified areas above.

- Hover over links for 'The Haunted Mansion' and 'The Walt Disney Company' and make sure the pointer changes from an arrow to a hand.

- Click on links for 'The Haunted Mansion' and 'The Walt Disney Company', ensuring they open to the appropriate web pages in a separate tab.

- Reduce screen size to various mobile device to verify that the modal is responsive and the modal size and inner text responds appropriately at the relevant breakpoints..

Hero image

Body Text

Footer

### Bugs ###

- When creating the dashboard the text continued to scroll despite position being fixed.  

*Solved* - I tested various methods using [css-tricks.com](https://css-tricks.com/couple-takes-sticky-footer/).  From this article the suggestion that worked best for me was setting the height of the section element calc(100vh - x) which caused content to remain stationary.

- Linking audio files to buttons - initially when I added my audio to the html document when the JavaScript file was not able to set the audio to play without using visible audio controls which would not provide good UX for the game. 

*Solved* - I researched and discovered that often there can be an issue with playing audio when using iOS (I use a Mac) To solve this I moved the audio from index.html to the JavaScript file and placed each audio file in a variable.  When this variable is called in it's own function and attached to the .play() method it works nicely.

- The audio was not playing consistently if the suquence required repetition of notes, e.g. if the sequence was 1, 1, 1 the audio would only trigger play, mute, play.  
*Solved* - To make sure each note is played I shortened the length of the audio in each file to allow for retrigger time between notes.

- Pressing the reset button was causing a new sequence to trigger on to of the existing sequence so you would have 2 sequences playing on top of one another.  

*Solved* - On reset button click all sequences are cleared and the start button is displayed to prompt the player to manually restart the game.  The start button begins the game again and makes sure that the game is fully reset.

- When implementing increasing speed the speed jump wasn't happening when requested e.g I was asking after test turns 3, 6 and 9 yet the speed jump was happening at turns 5, 7 and 11.

*Solved* - Initially I had the function which controls the speed increase (checkForLevelIncrement()) set to pass in the flashCounter variable, using the flashCounter and calling the function where the flashCounter incremented during the computer play.  As I actually wanted the speed to increase with the turn counter I changed the variable passed in to checkForLevelIncrement() to turn and moved where this was called to after the turn is incremented as part of the checkAnswer() function.  This made the speed increase as expected.  I also checked and ensured that all statements in checkForLevelIncrement() were always going to be true.

### Deployment ###

This project was developed using [Gitpod](https://www.gitpod.io/), committed to Git and pushed to GitHub using the built in functionality.

**Publishing**

This website was published using GitHub Pages. The procedure is outlined below.

1. Go to the **[GitHub](https://github.com/)** website and log in.
2. On the top right hand corner **click the dropdown icon** next to your avatar, and **select 'Your repositories'**. 
3. **Select the appropriate repository** (for this project the repository would be 'Welcome-Foolish-Mortals').
4. The header of your chosen repository will have a menu of different pages you can select (you automaticall should be on 'Code').  **Click on 'Settings'** located on the far right hand side.
5. **Scroll down** until you see the heading **'GitHub Pages'**. 
6. Under the subheading 'Source' there is a **dropdown menu titled 'Branch'** - click on this and **select 'master branch'**. 
7. The page will reload and you will see the **link of your published page displayed within a green banner** under 'GitHub pages'.  The text will say 'Your site is published at *website*' (in this instance https://cairi-s.github.io/Welcome-Foolish-Mortals/).
8. **Please note** it can take a few minutes for the site to be published, you must wait until the 'GitHub pages' banner turns green before trying to open the link.

### Credits ###

The themeing for this website has taken inspiration from [The Walt Disney Company's](https://thewaltdisneycompany.com/) popular attraction [The Haunted Mansion](https://www.disneyworld.eu/attractions/magic-kingdom/haunted-mansion/).
All likeness is for educational purposes only.


### Content ###

### Media ###

### Images ###
The Haunted Mansion is owned and operated by [The Walt Disney Company](https://thewaltdisneycompany.com/).  Images and themes linking to The Haunted Mansion are used for educational purposes only.

- Favicon - Taken from [favicon.io](https://favicon.io/emoji-favicons/ghost/) and the open source project [Twemoji](https://twemoji.twitter.com/).
- Home Page Background image - [Photo by Brian McGowan on Unsplash](https://unsplash.com/photos/he0-fswKsXk)
- Character selection images (the Stretching Room portraits) - Owned by [The Walt Disney Company](https://thewaltdisneycompany.com/) and taken from [Haunted Mansion Fandom](https://hauntedmansion.fandom.com/wiki/Stretching_Room).  Found using [Google Images](https://images.google.com/imghp?hl=en&gl=ar&gws_rd=ssl) and used for educational purposes only.

### Audio ###


### Code ###

- [Traversy Media](https://youtu.be/6ophW7Ask_0) - Guide for creating a modal with HTML CSS and JavaScript.

- Thank you to freeCodeCamp.org for their [Simon Video Tutorial](https://www.freecodecamp.org/news/simon-javascript-game-tutorial/) - inspiration and, in my most frustrated moments, hope was taken from this video.

- Thank you to freshman.tech for their [Simon JavaScript Walkthrough](https://freshman.tech/simon-game/).


### Acknowledgements ###

- The CI tutor support team, in particular Igor_ci and Jo_ci.
- The Slack community for endless support and encouragement.
- My mentor for all their help and guidance throughout this project.
- And honestly, The Walt Disney Company, I love all things Disney but this ride is my 'must do' on a trip to any of their parks.
