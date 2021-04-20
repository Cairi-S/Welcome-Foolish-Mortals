# Welcome Foolish Mortals #

![Welcome Foolish Mortals Homepage](/assets/images/readme/responsive-home.png)

![Welcome Foolish Mortals Gamepage](/assets/images/readme/responsive-game.png)

## An Audio Memory Game ##

- [Table of Contents](#welcome-foolish-mortals)
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

**Welcome Foolish Mortals** is an audiovisual memory game inspired by the popular Disney theme park attraction, [The Haunted Mansion](https://www.disneyworld.eu/attractions/magic-kingdom/haunted-mansion/). 

### UX ###

#### Player goals ####

The main target audience for Welcome Foolish Mortals is fans of memory games and fans of Disney theme parks, especially for The Haunted Mansion.  Although the game can be enjoyed by everyone, younger audiences may find it a little spooky, so it is recommended for ages 8+.

Players goals are to:
- Play a game that is fun and exciting.
- Have easy-to-use controls.
- Have clear rules for the game for those that need them.
- Have clear audio and visual cues which show where I have clicked.
- Be able to play with and without audio.
- Get clear feedback on the number of turns I am on.
- Get clear feedback on my Highest Score.
- Be able to choose my difficulty level.
- See visually rewarding images themed around The Haunted Mansion.

Developer Goals are to:
- Create a fun and interactive game that my friends and I would enjoy.
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

- [Cormorant Upright](https://fonts.google.com/specimen/Cormorant+Upright?preview.text_type=custom) is used for the page logo and headings.

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

The colors used for the game-play buttons are the most identifiable colors from the attractions theming: teal, purple, white and dark grey (#4ea0ae, #6c53a3, #edeffb, #040000).

The start and reset buttons take inspiration from the attraction host's costume using the color green (#077f51).  When hovered over, the opacity of the button will change to make it clear where the user will be clicking

The play again link featured in the highest score and winners modals will feature a purple background and white text to highlight that this is a clickable feature.  When hovered over, the colors will invert to make it clear where the user is clicking.

Many thanks to [color-hex.com](https://www.color-hex.com/color-palette/93407) and user [Lazaefair](https://www.color-hex.com/member/lazaefair) for providing the color palette.

#### Backgrounds ####

The Home screen background image is of the outside of the Haunted Mansion attraction.  It is chosen to 'invite' players into the game.  The photo used is credited to [Brian McGowan on Unsplash](https://unsplash.com/photos/he0-fswKsXk).

The Background of the game is of the iconic [Traditional Haunted Mansion Wallpaper](https://wallpaperaccess.com/haunted-mansion).  It has been chosen to make players feel like they are inside the mansion.  Originally the image used was designed for use as a computer wallpaper and is owned by [The Walt Disney Company](https://thewaltdisneycompany.com/).
 
#### Audio files ####

The notes used in the gameplay are taken from the attraction's most recognizable song - Grim Grinning Ghosts.  These are A, E, D# and B.

The audio was created by the developer using [Sibelus](http://www.sibelius.com/download/index.html) and the organ sound is part of its standard set of instruments.

The audio files created in Sibelius were modified and converted to mp3 files using [Audacity](https://www.audacityteam.org/). 

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
- Two *Speaker icons*, a speaker and speaker with a cross, will toggle allowing the player to mute and unmute the game's sound providing better UX.  As the home page does not currently feature audio it might be confusing for users to feature this icon so it will be removed from this page.

**Footer tab**

The *footer* will feature copyright information as well as information on the inspiration behind the design of the site, including *links* to official pages of The Walt Disney Company and The Haunted Mansion.  Links will open in a separate tab.

On smaller screens, the inspiration information will be hidden and only available within the Question mark icon modal.

**Home page**

The *hero image* will be static with a text container centered on the page. 

All text within this container will be themed to be in keeping with the game's style e.g using 'Enter' instead of 'Play game'.

This page intentionally does not feature too much text so as not to overload the user with information.

**Gameplay pages**

**Game board**

The *hero image* of the game board is the classic The Haunted Mansion wallpaper and would be instantly recognizable to fans of the attraction.

Underneath the header the user will be able to keep track of their turn and difficulty level using two counters:

- *Level* will show which level the player is on and increments through Easy, Medium, Hard and Fiendish as the game progresses.
- *Turn Counter* keeps track of which turn the player is on and increments as the game progresses.

The *four game buttons* for the game are centered on the page and each one is styled within the attractions color scheme.  

During the computer's turn and on the player's click each button will *change opacity* to make the button appear to light up.  This clearly shows the player where they are clicking and allows the player to play with sound muted if preferred. 

When the *audio is not muted* each button will be assigned a *different note* which will play when the corresponding button is active

**Score modal**

The *Score modal* is triggered when the user makes an incorrect move.

The modal encourages the player and shows them the turn number they had made it up to and features their highest score.

The *score* listed will correspond directly to the turn they were just on.

The *highest score* will be stored from previous turns using *localStorage*.

The footer of the modal provides a challenge and invited the player to play again via a styled *link* back to the game.

**Winners modal**

Should the user manage to complete the game they are congratulated and are invited the player to play again via a styled *link* back to the game.


### Future Features ###

- Player being able to select the starting speed of the game.

- Player being able to create an account to log username, chosen avatar and Highest Score so multiple players can play on one device.

- Being able to choose an avatar on the Home page.  The initial avatar images I had thought of are the four infamous stretching room paintings and will appeal to any fan of the attraction.

![IMAGE OF STRETCH ROOM PORTRAITS](/assets/images/readme/stretchroomportraits.png)

- Unlock rewards after reaching specific targets such as certain highest scores or if the game has been played 5, 10 or 15 times.  The reward could be:
 - play as other characters such as the hitchhiking ghosts.
 - additional facts about the attraction.

- Additional music e.g. on the Home page, triggered with the highest score and winning modals.

### Features Left to Implement ###

Unfortunately, while working on the project I had difficulty implementing all the features and ideas shown in my Wireframes to a standard I was happy with.  As removing these features would not majorly impact the player's experience I decided to remove them from my current game and list them as features left to implement.  In particular, I would like to include:

**Home page** 

- Avatar selection.

- Username input.

**Game page**

- Dashboard to the left of the Game page storing:
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

[Howler.js](https://howlerjs.com/) - Used to incorporate smooth audio across all devices.

[cdnjs.com](https://cdnjs.com/) - Used to deliver libraries such as Howler.js and jQuery.

[Multi Device Website Mockup Generator](http://techsini.com/multi-mockup/index.php) - used for website mockup at top of README.

[Google Fonts](https://fonts.google.com/) - Used for font styles, namely Cormorant Upright and Pathway Gothic One.

[Font Awesome](https://fontawesome.com/) - Used for the home, question mark and speaker/muted speaker icons used in the navbar.

[AutoPrefixer](http://autoprefixer.github.io/) - Used for auto generation of CSS prefixes.

[W3C HTML Markup Validation service](https://validator.w3.org/) - Used to validate HTML code.

[W3C CSS Validation service](https://jigsaw.w3.org/css-validator/) - Used to validate CSS code.

[JSHint.com](https://jshint.com/) - Used to check JavaScript code.

[TinyPNG](https://tinypng.com/) - Used to reduce the file sizes of all images.

[FreeConvert.com](https://www.freeconvert.com/mp3-to-webm) - Used to convert .mp3 audio files to .webm for use with Howler.js.

[Sibelus](http://www.sibelius.com/download/index.html) - Used to create the custom audio files.

[Audacity](https://www.audacityteam.org/) - Used to modify audio files and convert them to mp3 files. 

[markdown-toc](http://ecotrust-canada.github.io/markdown-toc/) - Used to generate README.md Table of Contents.

### Testing ###

- [W3C HTML Markup Validation service](https://validator.w3.org/) - HTML validator.

- [W3C CSS Validation service](https://jigsaw.w3.org/css-validator/) - CSS validator.

- [JSHint.com](https://jshint.com/) - linter.

The most common path through the website would be index.html > game.html via clicking the 'Enter' link on the Home page.  Some users may wish for additional information which can be accessed by clicking the question mark icon in the navbar.

TESTING PLAYER AND DEVELOPER GOALS FROM UX SECTION

Players requirements:

- A game that is fun and exciting to play.
  - With the game gradually increasing in speed the user is kept on their toes and feels in jeopardy as the difficulty increases over time.
- Easy to use controls on all devices.
  - The navigation buttons are easily identifiable whilst the game buttons (teal, white, purple and dark grey) are large for easy, frantic gameplay.
![EASY TO USE CONTROLS](/assets/images/readme/easycontrols.png)
- Have clear rules for the game for those that need them.
  - A rough guide to the rules is visible on the Home page, anyone who needs a refresher or is unclear on the rules can find more information in the question mark icon's modal.  This is available in the navbar on both the Home and Game pages.
![RULES MODAL](/assets/images/readme/clearrules.png)
- Have clear audio and visual cues which show where I have clicked.
  - To stay with the style of the site when a game button is clicked the opacity will change to a ghostly 0.5, this is accompanied by the corresponding audio.
![BUTTON FLASH](/assets/images/readme/btnflash.png)
- Be able to play with and without audio.
  - The player has the option to toggle between the audio being muted and on - this is displayed in the navbar by easily recognizable icons.

![SOUND ICON](/assets/images/readme/audioon.png) ![MUTE ICON](/assets/images/readme/audiomute.png)
- Get clear feedback on the number of turns the player is on.
  - A turn counter has been implemented so the player can keep track of what turn they are on.
![TURN COUNTER](/assets/images/readme/turnlevelfeedback.png)
- Get clear feedback on the user's Highest Score.
  - When the user fails, a modal is displayed to show them their highest score vs the turn they are currently on.
![HIGH SCORE MODAL](/assets/images/readme/highscorefeedback.png)
- Be able to choose my difficulty level.
  - The user is not yet able to choose which difficulty the game begins on, however, users do have clear feedback on the game's difficulty throughout gameplay (shown next to the turn counter in the above image).  Competitive users will always want to get to the next difficulty level.
- Visually rewarding images themed around The Haunted Mansion.
  - The background images and styling are all centered around the attraction.  Superfans will recognize many 'Easter Eggs', from the challenging text in the modals ("Hurry back...hurry back..."), to the haunting organ notes used for the gameplay audio.

 MANUAL TESTING

FAVICON

- Check that the Favicon is visible on both the Home and Game pages.

HOME PAGE

*Navigation Bar*

- Hover over navigation icons and ensure there is no discernable change other than the pointer turning to a hand and the icons changing color.

- Clicking the home icon and ensure it reloads the Home page.

- Clicking the question mark icon and ensure it loads the rules modal.

- Change the screen size to various mobile devices to verify that the navigation bar is responsive and switches position from the right of the screen to the center screen at the appropriate breakpoints.

*Navigation bar modal (Rules modal)*

- Click the question mark icon and ensure the rules modal loads.

- Click the 'x' in the rules modal and make sure it closes the modal.

- Click on multiple positions around the page outside the modal text box to make sure it closes the modal.

- Click inside the modal text box to make sure that the modal only closes on the specified areas above.

- Hover over links for 'The Haunted Mansion' and 'The Walt Disney Company' and make sure the pointer changes from an arrow to a hand.

- Click on links for 'The Haunted Mansion' and 'The Walt Disney Company', ensuring they open to the appropriate web pages in a separate tab.

- Reduce screen size to various mobile devices to verify that the modal is responsive and the modal size and inner text respond appropriately at the relevant breakpoints.

*Hero image*

- Reduce and expand the width of the window to confirm that the image height and width respond correctly with no horizontal scroll.

*Body Text*

- Reduce and expand the width of the window to confirm that the dimension of the text box responds appropriately and that the inner text size changes in an appropriate manner.

- Hover over the word 'Enter' to make sure that the color changes and that the pointer changes to the hand icon.

- Click on the word 'Enter' to ensure navigation to game.html.

*Footer*

- Reduce and expand the width of the window to confirm that:
  - The Copyright logo and text stay centered on all screen sizes.
  - The Inspiration text becomes hidden on smaller screen sizes.

- Click on links for 'The Haunted Mansion' and 'The Walt Disney Company', ensuring they open to the appropriate web pages in a separate tab.

GAME PAGE

*Logo*

- Hover over the logo and ensure there is no discernable change to the logo other than the pointer turning to a hand and the text changing color.

- Click the logo and ensure it links to the Home page.

*Navigation Bar*

- Repeated steps listed above.

- Click on the mute sound icon and check it toggles between sound on and sound muted icons.

- Start the game and click the sound icon to ensure the sound toggles on and off as the icon is pressed.

- Expand and reduce the screen size to make sure the logo and navbar become centered and stack at the appropriate breakpoints.

*Navigation bar modal (Rules modal)*

- Repeated steps listed above.

*Hero image*

- Reduce and expand the width of the window to confirm that the image height and width respond correctly with no horizontal scroll.

*Gameplay area*

- Reduce and expand the width of the window to confirm that all elements respond appropriately, remain centered and the 'Level' and 'Turn counter' stack at the appropriate breakpoints.

- Hover over the start button to make sure that the button opacity changes and that the pointer changes to the hand icon.

- Click the start button to make sure that the button toggles to the reset button.

- Hover over the reset button to make sure that the button opacity changes and that the pointer changes to the hand icon.

- Click the reset button to make sure that the button toggles to the start button.

*Footer*

- Repeated steps listed above.

GAMEPLAY

Please note to test gameplay efficiently the speed was set to increment after each turn and the game would end after 10 turns.

*Click Start button*

- Check that the start button toggles to the reset button.

- Check that 'Level' remains at Easy.

- Check that Turn changes to '1'.

*Click reset button*

- Check that the reset button toggles to the start button.

- Check that 'Level' returns to Easy.

- Check that Turn changes to '-'.

*Gameplay - Computers Turn*

- Console log the computer's sequence and check that it corresponds to the game button's audio/visual cues.

- Hover over active buttons during the computer's turn to check pointer shows as 'not allowed' (laptop only).

- Watch 'Turn Counter' increase as the number of turns increases.

- Watch the 'Level' increase as the speed increases.

- Try to press game buttons during the computer's turn to make sure that the user cannot play.

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

Throughout the project, I used Google Chrome's DevTools to test styling, features and script.

Also, I have used the Lighthouse feature to check the site's performance, accessibility, best practice and SEO.  At present on a laptop, the following are reported.

HOME PAGE

![Screen grab of Home page Lighthouse scores](/assets/images/readme/homepage-lighthouse.png)

GAME PAGE

![Screen grab of Game page Lighthouse scores](/assets/images/readme/gamepage-lighthouse.png)

FURTHER TESTING

I invited friends and family to view the site on their devices and report any issues they find. Devices used included:

- MacBook
- MacBook Air
- MacBook Pro
- iPad
- iPad Pro
- Samsung S20
- Samsung J6
- iPhone 5
- iPhone 6S
- iPhone XR
- iPhone SE
- Pocophone F1 Mio
- Xiaomi Mi 10T Lite

Reported bugs/glitches included:

Mobile phones: audio - a lag is sometimes apparent, I believe this is more prominent on Apple devices. No one reported that this negatively affected their gameplay experience.  Initial searches suggest that using a library such as Howler.js may help.  Please see the 'Bugs' section for full information and solutions.

Highscore modal: 'x' button not closing the modal.  Functionality removed due to users reporting it felt unnecessary due to clear 'Play again' link.

### Bugs ###

- Linking audio files to buttons - initially when I added my audio to the HTML document the JavaScript file was not able to set the audio to play without using visible audio controls which would not provide good UX for the game. 

  - *Solved* - To solve this I moved the audio from index.html to the JavaScript file and placed each audio file in a variable.  When this variable is called separately and attached to the .play() method it works nicely.

- The audio was not playing consistently if the sequence required repetition of notes, e.g. if the sequence was 1, 1, 1 the audio would only trigger play, mute, play.  

  - *Solved* - To make sure each note is played I shortened the length of the audio in each file to allow for retrigger time between notes.

- At higher game speeds the audio was only triggering once so a lag was created on the audio during gameplay.

  - *Solved* - I added the Howlerjs library and used this in my audio variables which fixed the issue.

- Upon introducing Howlerjs I lost the ability to toggle mute on and off during gameplay.

  - *Solved* - I began by commenting out the original forEach statement that I had written.  After reading the accompanying Howlerjs documentation I decided the best approach would be to add the .mute(true) and .mute(false) methods to each audio file to fix the problem.  To fully solve the problem I have now included both icons in separate buttons in the HTML file and use JavaScript to add and remove classes to show the necessary icon alongside using the previously mentioned method.  I am aware that this code is not DRY and in the future would look to rectify this.

- Pressing the reset button was causing a new sequence to trigger on top of the existing sequence, so 2 sequences would be playing simultaneously.  

  - *Solved* - On clicking the reset button, all sequences are cleared and the start button is displayed to prompt the player to manually restart the game.  The start button begins the game again and makes sure that the game is fully reset.

- When implementing increasing speed the speed jump wasn't happening when requested e.g I was asking after test turns 3, 6 and 9 yet the speed jump was happening at turns 5, 7 and 11.

  - *Solved* - Initially I had the function which controls the speed increase (checkForLevelIncrement()) set to pass in the flashCounter variable, using the flashCounter and calling the function where the flashCounter incremented during the computer play.  As I wanted the speed to increase with the turn counter I changed the variable passed into checkForLevelIncrement() to turn and moved where this was called to after the turn is incremented as part of the checkAnswer() function.  This made the speed increase as expected.  I also checked and ensured that all statements in checkForLevelIncrement() were always going to be true.

- When checking modals on mobile devices the margins, padding and modal heigh was often causing the text to overflow outside the container.

  - *Solved* - By adding the 'and (orientation:portrait)' feature to the screen sizes that were having the biggest issues with text overflow I was able to find a workable solution that allows nice styling whilst not having to write too much additional code.


### Deployment ###

This project was developed using [Gitpod](https://www.gitpod.io/), committed to Git and pushed to GitHub using the built-in functionality.

**Publishing**

This website was published using GitHub Pages. The procedure is outlined below.

1. Go to the **[GitHub](https://github.com/)** website and log in.
2. On the top right-hand corner **click the dropdown icon** next to your avatar, and **select 'Your repositories'**. 
3. **Select the appropriate repository** (for this project the repository would be 'Welcome-Foolish-Mortals').
4. The header of your chosen repository will have a menu of different pages you can select (you automatically should be on 'Code').  **Click on 'Settings'** located on the far right-hand side.
5. **Scroll down** until you see the heading **'GitHub Pages'**. 
6. Under the subheading 'Source' there is a **dropdown menu titled 'Branch'** - click on this and **select 'master branch'**. 
7. The page will reload and you will see the **link of your published page displayed within a green banner** under 'GitHub pages'.  The text will say 'Your site is published at *website*' (in this instance https://cairi-s.github.io/Welcome-Foolish-Mortals/).
8. **Please note** it can take a few minutes for the site to be published, you must wait until the 'GitHub pages' banner turns green before trying to open the link.

**Running the project locally**

You are also able to clone 'Welcome Foolish Mortals' from Github using the procedure outlined below.

1. Navigate to the **['Welcome Foolish Mortals' repository](https://github.com/Cairi-S/Welcome-Foolish-Mortals)**.
2. Click the Code dropdown menu next to the green Gitpod button.
3. In the dropdown copy the URL displayed under the header CLONE with the HTTPS title underlined (in this instance https://github.com/Cairi-S/Welcome-Foolish-Mortals.git).
4. Open your local IDE and launch Git Bash.
5. Create a new folder or navigate to the folder where you want the clone to be stored.
6. Once opened type 'git clone' and HTTPS URL copied earlier (e.g. git clone https://github.com/Cairi-S/Welcome-Foolish-Mortals.git)
7. Once you press enter the clone will be created.

### Credits ###

The theming for this website has taken inspiration from [The Walt Disney Company's](https://thewaltdisneycompany.com/) popular attraction [The Haunted Mansion](https://www.disneyworld.eu/attractions/magic-kingdom/haunted-mansion/).
All likeness is credited toward them and the theme is in use for educational purposes only.

### Content ###

- The text featured throughout the website has taken influence from the script of The Haunted Mansion.

- User [Lazaefair](https://www.color-hex.com/member/lazaefair) for their Haunted Mansion color palette on [color-hex.com](https://www.color-hex.com/color-palette/93407).

### Images ###

The Haunted Mansion is owned and operated by [The Walt Disney Company](https://thewaltdisneycompany.com/).  Images and themes linking to The Haunted Mansion are used for educational purposes only.

- Favicon - Taken from [favicon.io](https://favicon.io/emoji-favicons/ghost/) and the open-source project [Twemoji](https://twemoji.twitter.com/).
- Home Page Background image - [Photo by Brian McGowan on Unsplash](https://unsplash.com/photos/he0-fswKsXk).
- Game Page Background image - Taken from [Traditional Haunted Mansion Wallpaper](https://wallpaperaccess.com/haunted-mansion) and owned by [The Walt Disney Company](https://thewaltdisneycompany.com/).

### Audio ###

- All audio files were created by myself using [Sibelus](http://www.sibelius.com/download/index.html) and edited using [Audacity](https://www.audacityteam.org/).

### Code ###

While building the project I referenced a few online resources.

- Thank you to [Traversy Media](https://youtu.be/6ophW7Ask_0) - I referenced their 'Guide for creating a modal with HTML CSS and JavaScript' video when creating the modals on the Home and Game pages.

- Thank you to freeCodeCamp.org for their [Simon Video Tutorial](https://www.freecodecamp.org/news/simon-javascript-game-tutorial/) - I took inspiration and, when I was most frustrated, hope from this video.

- Thank you to freshman.tech for their [Simon JavaScript Walkthrough](https://freshman.tech/simon-game/).

### Acknowledgements ###

- The CI tutor support team, in particular Igor_ci and Jo_ci.
- The Slack community for endless support and encouragement, in particular Ed B.
- My mentor for all their help and guidance throughout this project.
- Tom Poulson, who has been a great rubber duck whilst building this project.
- And honestly, The Walt Disney Company, I love all things Disney but this ride is my 'must do' on a trip to any of their parks.
