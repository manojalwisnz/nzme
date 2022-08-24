# nzme

Any other code conventions you wish to add, such as an eslint config, prettier config, central state management - you have freedom and flexibility.
A two-screen application that does the following:
Start off at 'HomeScreen' with a FlatList and the Navbar at the top of the screen. The Nav bar should label the screen as Home.
At the start, the list should be empty.
A button labelled as "Fill Me" at the bottom of HomeScreen. When you press this button, it goes to another screen 'FillScreen'.
The Navbar on FillScreen will have a back button that goes back to HomeScreen without doing anything.
There will be two components within the FillScreen:
1) A label that shows the current number of items in the FlatList in HomeScreen
2) A button with the label "Add Cage"
When you press this button, it will close the current screen and add a new item to the FlatList in HomeScreen.
Time to unleash your creative freedom, you can do whatever you want with the UI item in the FlatList. However, it must display 2 things
1) a randomly generated title
2) a 200x200 crazy picture from https://www.placecage.com/
Add a pull to refresh component on the HomeScreen FlatList, when you refresh the list, all cage pictures should be refreshed but they must remain crazy
BONUS ROUND 1! (optional):
- Do not close the screen when you press the "Add Cage" button, You can now press the FFF button multiple times and when you go back to the HomeScreen via the back button, it should refresh the FlatList.
i.e. you tap the button 3 times and go back to HomeScreen. It should add three items to the FlatList
BONUS ROUND 2! (optional):
- Save the list items to AsyncStorage, so that when you force close and relaunch the app, the items remain.
Additional (optional):
Any other features you wish to add that would compliment the Crazy Nicholas Cage experience.


## Getting Started

    clone the project : https://github.com/manojalwisnz/nzme.git
    yarn install
    
    iOS : yarn ios
    android: yarn android
