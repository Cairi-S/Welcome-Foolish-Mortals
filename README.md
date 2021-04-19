# Welcome Foolish Mortals #

![Welcome Foolish Mortals Homepage](/assets/images/readme/responsive-home.png)

![Welcome Foolish Mortals Gamepage](/assets/images/readme/responsive-game.png)

## An Audio memory game ##

- [Welcome Foolish Mortals](#welcome-foolish-mortals)
    + [UX](#ux)
    + [Design](#design)
    + [Wireframes](#wireframes)
    + [Features](#features)
      - [Existing Features](#existing-features)
      - [Future Features](#future-features)
      - [Features Left to Implement](#features-left-to-implement)
    + [Technologies Used](#technologies-used)
    + [Testing](#testing)
      - [Bugs](#bugs)
    + [Deployment](#deployment)
    + [Credits](#credits)
      - [Content](#content)
      - [Images](#images)
      - [Audio](#audio)
      - [Code](#code)
      - [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

**Welcome Foolish Mortals** is an audiovisual Memory game inspired by the popular Disney theme park attraction, [The Haunted Mansion](https://www.disneyworld.eu/attractions/magic-kingdom/haunted-mansion/). 

### UX ##

#### Player goals ####

The main target audience for Welcome Foolish Mortals is fans of memory games and fans of Disney Theme Parks, especially for The Haunted Mansion.  Although the game can be enjoyed by everyone younger audiences may find it a little spooky, so it is recommended for ages 8+.

Players goals are to:
- Have a game that is fun and exciting to play.
- Have easy-to-use controls on all devices.
- Have clear rules for the game available to those that need them.
- Get clear feedback on the number of turns the player is on.
- Get clear feedback on the user's highest score.
- Have visually rewarding images themed around The Haunted Mansion.

Developer Goals are to:
- Create a fun game interactive game that myself and my friends can enjoy.
- Incorporate elements of my favorite attraction at Disney into a project.
- Design and develop a project using new-found skills in JavaScript and JQuery.  

#### User Stories ####

As a fan of memory games I want to:

- Play a fun game.
- Find clear, easy-to-follow instructions on gameplay.
- Be able to access the instructions from any page.
- Have clear audio and visual cues which show where I have clicked.
- Be able to play with and without audio.
- Be able to track my progress while playing.
- Be able to see my past highest score.

### Design ###

The fonts, icons, colors, audio and styling all take inspiration from The Haunted Mansion.

#### Fonts ####

All fonts are provided by [Google fonts](https://fonts.google.com/) and were chosen for their likeness to those found within the attraction.

- [Cormorant Upright](https://fonts.google.com/specimen/Cormorant+Upright?preview.text_type=custom) is used the page logo and headings.

![Cormorant Upright example](/assets/images/readme/cormorantupright.png)

- [Pathway Gothic One](https://fonts.google.com/specimen/Pathway+Gothic+One?preview.text_type=custom) is used for all other text.

![Pathway Gothic One example](/assets/images/readme/pathwaygothicone.png)

#### Icons ####

The favicon is taken from [favicon.io](https://favicon.io/emoji-favicons/ghost/) and the open-source project [Twemoji](https://twemoji.twitter.com/).

All other icons are provided by [Font Awesome](https://fontawesome.com/).  These icons have been chosen as they are easy to recognize and are widely understood.

- The [HOME](https://fontawesome.com/icons/home?style=solid) takes the player back to the Home page.
- The [QUESTION MARK](https://fontawesome.com/icons/question-circle?style=regular) gives a modal reminding the player of the rules.
- The [SPEAKER](https://fontawesome.com/icons/volume-up) and [SPEAKER WITH CROSS](https://fontawesome.com/icons/volume-mute?style=solid) mutes and unmutes the sound.

#### Colors ####

The Haunted Mansion has a clear, easily identifiable color palette. 

![IMAGE OF COLOR PALETTE](/assets/images/readme/disneyhauntedmansioncolorhex.png)

The background color for the header, footer, text boxes and modals are dark grey (#040000) and use differing opacities to create a dark, spooky atmosphere.

The main text color will be off-white (#edeffb) to stand out against the background.

Text of importance, such as headers or text with hover functionality, will be purple (#6c53a4).

The colors used for the game-play buttons are the most identifiable colors from the attractions theming: teal, purple, white and grey (#4ea0ae, #6c53a3, #edeffb, #040000).

The start and reset buttons take inspiration from the attraction host's costume using the color green (#077f51).  When hovered over, the opacity of the button will change to make it clear where the user will be clicking

The play again link featured in the highest score and winners modals will feature a purple background and white text to highlight that this is a clickable feature.  When hovered over, the colors will invert to make it clear where the user is clicking.

Many thanks to [color-hex.com](https://www.color-hex.com/color-palette/93407) and user [Lazaefair](https://www.color-hex.com/member/lazaefair) for providing the color palette.

#### Backgrounds ####

The Home screen background image is of the outside of the Haunted Mansion attraction.  It is chosen to 'invite' players into the game.  The photo used is credited to [Brian McGowan on Unsplash](https://unsplash.com/photos/he0-fswKsXk).

The Background of the game is of the iconic [Traditional Haunted Mansion Wallpaper](https://wallpaperaccess.com/haunted-mansion).  It is chosen to make players feel inside the mansion.  Originally the image used was designed for use as a computer wallpaper and is owned by [The Walt Disney Company](https://thewaltdisneycompany.com/).
 
#### Audio files ####

The notes used in the gameplay are taken from the attraction's most recognizable song - Grim Grinning Ghosts.  These are A, E, D# and B.

The audio was created by the developer using [Sibelus](http://www.sibelius.com/download/index.html) and the XXX organ sound.

### Wireframes ###

The Wireframes for this project were created during the planning and design phase using [Balsamiq](https://balsamiq.com/).

Some of the features shown in the wireframes, such as the avatar selection and dashboard, have not been included in this version of the game due to time constraints.  These are features that will be implemented in the future.  Please see Future Features for more details.

- WIREFRAME HOME

![Welcome Foolish Mortals Wireframe Homepage](/assets/images/readme/homepage-wireframe.png)

- WIREFRAME GAMEPAGE

![Welcome Foolish Mortals Wireframe Gamepage](/assets/images/readme/gamepage-wireframe.png)

### Features ###

#### Existing Features ####

**Header**

The Home page will not feature a traditional logo within the header as the website name is prominently featured in this page's text container.  This is an intentional design choice so the title is positioned in front of the mansion image - welcoming them into the spooky old house.

The gameplay page returns to a more traditional website design and features a *logo* at the top left of the page which links to the Home page.

The top right of the page will feature a *navigation bar* that contains three easily identifiable icons.

- The *Home icon* links to the Home page.
- The *Question mark icon* triggers a modal that contains a more detailed version of the rules as well as the inspiration behind the design of the site, including links.
- Two *Speaker icons*, a speaker and speaker with a cross, will toggle allowing the player to mute and unmute the game's sound providing better UX.  As the home page does not currently feature audio it might be confusing for users to feature this icon so will be removed on this page.

**Footer tab**

The *footer* will feature copyright information as well as information on the inspiration behind the design of the site, including *links* to official pages of The Walt Disney Company and The Haunted Mansion.  Links will open in a separate tab.

On smaller screens, the inspiration information will be hidden and only available within the Question mark icon modal.

**Home page**

The *hero image* will be static with a text container centered on the page. 

All text within this container will be themed to be in keeping with the game's style e.g using 'Enter' instead of 'Play game'.

This page intentionally does feature too much text so as not to overload the user with information.

**Gameplay pages**

**Game board**

The *hero image* of the game board is the classic The Haunted Mansion wallpaper and would be instantly recognizable to fans of the attraction.

Underneath the header the user will be able to keep track of their turn and difficulty level using two counters:

- *Level* will show which level the player is on and increments through Easy, Medium, Hard and Fiendish as the game progresses.
- *Turn Counter* keeps track of which turn the player is on and increments as the game progresses.

The *four game buttons* for the game are centered on the page and each one is styled within the attractions color scheme.  

During the computers turn and on the players click each button will *change opacity* to make the button appear to light up.  This clearly shows the player where they are clicking and allows the player to play with sound muted if preferred. 

When the *audio is not muted* each button will be assigned a *different note* which will play when the corresponding button is active

**Score Modal**

The *Score modal* is triggered when the user makes an incorrect move.

The modal encourages the player and shows them the turn number they had made it to and features their highest score.

The *score* listed will correspond directly to the turn they were just on.

The *highest score* will be stored from previous turns using *localStorage*.

The footer of the modal provides a challenge and invited the player to play again via a styled *link* back to the game.

**Winners Modal**

Should the user manage to complete the game they are congratulated and are invited the player to play again via a styled *link* back to the game.


### Future Features ###

- Player being able to select the starting speed of the game.

- Player being able to create an account to log username, chosen avatar and Highest Score so multiple players can play on one device.

- Being able to choose an avatar on the Home page.  The initial avatar images I had thought of are the four infamous stretching room paintings and will appeal to any fan of the attraction.

![IMAGE OF STRETCH ROOM PORTRAITS](/assets/images/readme/stretchroomportraits.png)

- Unlock rewards for after specific targets such as specific highest scores or game played 5, 10, 15 times the reward could be:
 - play as other characters like the hitchhiking ghosts.
 - additional facts about the attraction.

- Additional music e.g. on the home page, triggered with the highest score and winning modals.

### Features Left to Implement ###

Unfortunately, as I was working on the project I was having difficulty implementing all the features and ideas shown in my Wireframes to a standard I was happy with.  As removing these features would not majorly impact the player's experience I decided to remove them from my current game and list them as features left to implement.  In particular, I would like to include:

**Home page** 

- Avatar selection.

- Username input.

**Game page**

- Dashboard to the left of the game page storing:
1. Username
2. Avatar
3. Difficulty Level
4. Highest Score


### Technologies Used ###

This project uses HTML, CSS and JavaScript programming languages.

This project was built using [Gitpod](https://gitpod.io/).

The creation of this website would not have been possible without:

[GitHub](https://github.com/) - Used to store and share all project code remotely.

[Gitpod](https://gitpod.io/) - Used as the IDE for building the website.

[Balsamiq](https://balsamiq.com/) - Used to create wireframes of the project.

[JQuery](https://jquery.com/) - Used to reduce the amount of JavaScript code written.

[Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - Used for their navbar and grid layout.

[Howler.js](https://howlerjs.com/) - Used library to incorporate smooth audio across all devices.

[cdnjs.com](https://cdnjs.com/) - Used to deliver libraries such as Howler.js and jQuery.

[Multi Device Website Mockup Generator](http://techsini.com/multi-mockup/index.php) - used for website mockup at top of README.

[Google Fonts](https://fonts.google.com/) - Used for font styles, namely XXX and YYY.

[Font Awesome](https://fontawesome.com/) - Used for the home, question mark and speaker/muted speaker icons used in the navbar.

[AutoPrefixer](http://autoprefixer.github.io/) - Used for auto generation of CSS prefixes.

[W3C HTML Markup Validation service](https://validator.w3.org/) - Used to validate HTML code.

[W3C CSS Validation service](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code.

[JSHint.com](https://jshint.com/) - Used to check JavaScript code.

[TinyPNG](https://tinypng.com/) - Used to reduce the file sizes of all images.

[FreeConvert.com](https://www.freeconvert.com/mp3-to-webm) - Used to convert .mp3 audio files to .webm for use with Howler.js.

[Sibelus](http://www.sibelius.com/download/index.html) - Used to create the custom audio files.

### Testing ###

- [W3C HTML Markup Validation service](https://validator.w3.org/) - HTML validator.

- [W3C CSS Validation service](https://jigsaw.w3.org/css-validator/) - CSS validator.

- [JSHint.com](https://jshint.com/)

The most common path through the website would be index.html > game.html via clicking the 'Enter' link on the homepage.  Some users may wish for additional information which can be accessed by clicking the Question mark icon in the navbar.

TESTING PLAYER AND DEVELOPER GOALS FROM UX SECTION

Players requirements:

- A game that is fun and exciting to play.
  - With the game gradually increasing in speed the user is kept on their toes and feels in jeopardy as the difficulty increases over time.
- Easy to use controls on all devices.
  - The navigation buttons are easily identifiable whilst the game buttons (teal, white, purple and grey) are large for easy, frantic gameplay.
- Have clear rules for the game for those that need them.
  - A rough guide to the rules is visible on the Home page, anyone who needs a refresher or is unclear on the rules can find more information in the question mark icon's modal.  This is available in the navbar on both the home and game pages.
- Have clear audio and visual cues which show where I have clicked.
  - To stay with the style of the site when a game button is clicked the opacity will change to a ghostly 0.5, this is accompanied by the corresponding audio.
- Be able to play with and without audio.
  - The player has the option to toggle between the audio being muted and on - this is displayed in the navbar by easily recognizable icons.
- Get clear feedback on the number of turns the player is on.
  - A turn counter has been implemented so the player can keep track of what turn they are on.
- Get clear feedback on the user's Highest Score.
  - When the user fails, a modal is displayed to show them their highest score vs the turn they are currently on.
- Be able to choose my difficulty level.
  - The user is not yet able to choose which difficulty the game begins on, however, users do have clear feedback on the game's difficulty throughout gameplay.  Competitive users will always want to get to the next difficulty level.
- Visually rewarding images themed around The Haunted Mansion.
  - The background images and styling are all centered around the attraction.  Superfans will recognize many 'Easter Eggs', from the challenging text in the modals ("Hurry back...hurry back..."), to the haunting organ notes used for the gameplay audio.

MANUAL TESTING

FAVICON

- Check that the Favicon is visible on both the home and game pages.

HOME PAGE

*Navigation Bar*

- Hover over navigation icons and ensure there is no discernable change other than the pointer turning to a hand and the icons changing color.

- Clicking the home icon and ensure it reloads the "Home" page.

- Clicking the question mark icon and ensure it loads the rules modal.

- Change the screen size to mobile device to verify that the navigation bar is responsive and switches position from the right of screen to center screen at the appropriate breakpoints.

*Navigation bar modal (Rules modal)*

- Click the question mark icon and ensure the rules modal loads.

- Click the 'x' in the rules modal and make sure it closes the modal.

- Click on multiple positions around the page outside the modal text box to make sure it closes the modal.

- Click inside the modal text box to make sure that the modal only closes on the specified areas above.

- Hover over links for 'The Haunted Mansion' and 'The Walt Disney Company' and make sure the pointer changes from an arrow to a hand.

- Click on links for 'The Haunted Mansion' and 'The Walt Disney Company', ensuring they open to the appropriate web pages in a separate tab.

- Reduce screen size to various mobile device to verify that the modal is responsive and the modal size and inner text responds appropriately at the relevant breakpoints.

*Hero image*

- Reduce and expand width of window to confirm that the image height and width respond correctly with no horizontal scroll.

*Body Text*

- Reduce and expand width of window to confirm that the dimension of the text box respond appropriately and that the inner text size changes in an approprite manner.

- Hover over the word 'Enter' to make sure that the color changes and that the pointer changes to the hand icon.

- Click on the word 'Enter' to ensure navigation to game.html.

*Footer*

- Reduce and expand width of window to confirm that:
  - The Copyright logo and text stays centered on all screen sizes.
  - The Inspiration text becomes hidden on smaller screen sizes.

- Click on links for 'The Haunted Mansion' and 'The Walt Disney Company', ensuring they open to the appropriate web pages in a separate tab.

GAME PAGE

*Logo*

- Hover over logo and ensure there is no discernable change to the logo other than the pointer turning to a hand and the text changing color.

- Click logo and ensure it links to the Home page.

*Navigation Bar*

- Repeated steps listed above.

- Click on the mute sound icon and check it toggles between sound on and off icons.

- Start game and click the sound icon to ensure the sound toggles on and off as icon is pressed.

- Expand and reduce screen size to make sure the logo and navbar become centered and stack at the appropriate breakpoints.

*Navigation bar modal (Rules modal)*

- Repeated steps listed above.

*Hero image*

- Reduce and expand width of window to confirm that the image height and width respond correctly with no horizontal scroll.

*Gameplay area*

- Reduce and expand width of window to confirm that all elements respond appropriately, remain centered and the the level and turn counter stack at the appropriate breakpoints.

- Hover over the start button to make sure that the button opacity changes and that the pointer changes to the hand icon.

- Click the start button to make sure that the button toggles to the reset button but the positioning remains the same.

- Hover over the reset button to make sure that the button opacity changes and that the pointer changes to the hand icon.

- Click the reset button to make sure that the button toggles to the start button but the positioning remains the same.

*Footer*

- Repeated steps listed above.

GAME PLAY

*Click start button*

- Check that start button toggles to reset button.

- Check that 'Level' remains at Easy.

- Check that Turn changes to '1'.

*Click reset button*

- Check that reset button toggles to start button.

- Check that 'Level' remains at most recent level.

- Check that Turn changes to '-'.

*Gameplay - Computers Turn*

- Console log the computers sequence and check that it corresponds to the game buttons audio/visual cue's.

- Hover over active buttons during computer's turn to check pointer shows as 'not allowed' (laptop only).

- Watch turn counter increase as the number of turns increases.

- Watch the Level increase as the speed increases.

- Try to press game buttons during the computers turn to make sure that the user cannot play.

- Follow the game through the different speeds to check flash/audio functionality at all levels.

*Gameplay - Players Turn*

- Click on all buttons to make sure that all the audio/visuals linked to the buttons work as expected.

- Follow a correct sequence and check that the game continues.

- Follow an incorrect sequence and check that the high score modal is triggered.

*Highscore Modal*

- Check that the high score modal is triggered when an incorrect sequence is entered.

- Check that the turn count matches that listed on the main page.

- Play the game to set a high score, replay the game and get a lower score to ensure that the previous high score remains, replay the game and get a larger high score to make sure that the highest score is updated.  Repeated multiple times.

ADDITIONAL TESTING

Throughout the project I used Google Chrome's DevTools to test styling, features and script.

In addition I have used the Lighthouse feature to check the sites performance, accessibility, best practice and SEO.  At present on a laptop the following are reported.

HOME PAGE

![Screen grab of Homepage Lighthouse scores](/assets/images/readme/homepage-lighthouse.png)

GAME PAGE

![Screen grab of Gamepage Lighthouse scores](/assets/images/readme/gamepage-lighthouse.png)

FURTHER TESTING

I invited friends and family to view the site on their devices and report any issues they find. Devices used included:

- MacBook
- MacBook Air
- MacBook Pro
- iPad
- iPad Pro
- Samsung S20
- Samsung J6
- iPhone 6S
- iPhone XR
- iPhone SE
- Pocophone F1 Mio
- Xiaomi Mi 10T Lite

Reported bugs/glitches included:

Mobile phones: audio - a lag is sometimes apparent, I believe this is more prominent on Apple devices. Noone reported that this negatively affected their gameplay experience however in future I would like to investigate this and implement a fix.  Initial searches suggest that using a library such as Howler.js may help.

Highscore modal: 'x' button - Not closing the modal.  Class checked and renamed to enable responsiveness.







### Bugs ###

- Linking audio files to buttons - initially when I added my audio to the html document when the JavaScript file was not able to set the audio to play without using visible audio controls which would not provide good UX for the game. 

  - *Solved* - I researched and discovered that often there can be an issue with playing audio when using iOS (I use a Mac) To solve this I moved the audio from index.html to the JavaScript file and placed each audio file in a variable.  When this variable is called in it's own function and attached to the .play() method it works nicely.

- The audio was not playing consistently if the suquence required repetition of notes, e.g. if the sequence was 1, 1, 1 the audio would only trigger play, mute, play.  

  - *Solved* - To make sure each note is played I shortened the length of the audio in each file to allow for retrigger time between notes.

- Pressing the reset button was causing a new sequence to trigger on to of the existing sequence so you would have 2 sequences playing on top of one another.  

  - *Solved* - On reset button click all sequences are cleared and the start button is displayed to prompt the player to manually restart the game.  The start button begins the game again and makes sure that the game is fully reset.

- When implementing increasing speed the speed jump wasn't happening when requested e.g I was asking after test turns 3, 6 and 9 yet the speed jump was happening at turns 5, 7 and 11.

  - *Solved* - Initially I had the function which controls the speed increase (checkForLevelIncrement()) set to pass in the flashCounter variable, using the flashCounter and calling the function where the flashCounter incremented during the computer play.  As I actually wanted the speed to increase with the turn counter I changed the variable passed in to checkForLevelIncrement() to turn and moved where this was called to after the turn is incremented as part of the checkAnswer() function.  This made the speed increase as expected.  I also checked and ensured that all statements in checkForLevelIncrement() were always going to be true.

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

- User [Lazaefair](https://www.color-hex.com/member/lazaefair) for their Haunted Mansion color palette on [color-hex.com](https://www.color-hex.com/color-palette/93407).

### Images ###

The Haunted Mansion is owned and operated by [The Walt Disney Company](https://thewaltdisneycompany.com/).  Images and themes linking to The Haunted Mansion are used for educational purposes only.

- Favicon - Taken from [favicon.io](https://favicon.io/emoji-favicons/ghost/) and the open source project [Twemoji](https://twemoji.twitter.com/).
- Home Page Background image - [Photo by Brian McGowan on Unsplash](https://unsplash.com/photos/he0-fswKsXk).
- Game Page Background image - Taken from [Traditional Haunted Mansion Wallpaper](https://wallpaperaccess.com/haunted-mansion) and owned by [The Walt Disney Company](https://thewaltdisneycompany.com/).

### Audio ###

- All audio files were created by myself using [Sibelus](http://www.sibelius.com/download/index.html).

### Code ###

Throughout the project I referenced a few online resources, these were:

- Thank you to [Traversy Media](https://youtu.be/6ophW7Ask_0) - I referenced their 'Guide for creating a modal with HTML CSS and JavaScript' video when creating the modals on the home and game pages.

- Thank you to freeCodeCamp.org for their [Simon Video Tutorial](https://www.freecodecamp.org/news/simon-javascript-game-tutorial/) - I took inspiration and, when I was most frustrated, hope from this video.

- Thank you to freshman.tech for their [Simon JavaScript Walkthrough](https://freshman.tech/simon-game/).

### Acknowledgements ###

- The CI tutor support team, in particular Igor_ci and Jo_ci.
- The Slack community for endless support and encouragement.
- My mentor for all their help and guidance throughout this project.
- And honestly, The Walt Disney Company, I love all things Disney but this ride is my 'must do' on a trip to any of their parks.
