INTRO: This project is css heavy. It looks like most of the effects will be created by flexbox, so it's definitely a good opportunity to learn it really well.

REQUIREMENTS
-Have 5 equal size sections
-Have a cool background in each of the sections
-Have text at the center of each section, which forms a sentence when you combine all sections
-When you click on a section, have it create an effect where it first slightly contracts, and then expands.
-When a section expands, have it reveal text on top and at the bottom, to form another sentence.
-When a transition happens, make sure it happens smoothly

THINGS I'VE LEARNED
-I painfully made a serious discovery with destructuring. It took me forever to figure this out. With destructuring, it works on objects, and arrays but you have to make sure you use the matching datatype to destructure. So if you're destructuring an object, make sure you set up the destructure as an object. If you're destructuring an array, make sure you're setting it up with the array. If you have an array of objects, then set the array, and objects inside.

-When you want to add an event to multiple elements, or in general if you ever want to iterate through a bunch of stuff and give it functions, don't forget forEach. It's great for this kind of stuff

-Toggle functions are extremely efficient, for switching effects without you having to clear all the event listeners.

-In order to have something close and open as an effect, you can use the beziers which are a part of the transition.

- .name-of-class > * {} : In CSS the greater than means, select only the children elements that apply. so in this particular example, you're saying select all the children element of name-of-class

- .name-of-class > *:first-child{} : This would target every first child of every container with the name of name-of-class
NOTE: You have to make sure *:first-child are all together. This * :first-child wont work.

- justify-content: center; : Makes it so everything aligns center from left to right.

- align-items: center ; : Makes it so everything aligns center from top to bottom. NOTE: It doesn't inherit so the grandchildren of the justify-content or align-items will not be affected at all. Only the direct children.


SENTENCES USED FOR THIS PROJECT
MAIN: LIFE IS TO BE EXPLORED
SUBS:
-Life: Make Life Happen
-Is: Today Is Perfect
-To: Get To It
-Be: Don't Be Lazy
-Full: Have Full Joy

IMAGE DIMENSIONS: 730 width X 700 height. Background size auto. Position not fixed.

LIST OF THINGS THAT NEED TO BE DYNAMICALLY ADDED
-.main-text
-.container2
- Text to both the top and the bottom of each section

FINAL REPORT/FEEDBACK
-I had to stop and redo the whole thing. Furthermore, I had to follow the tutorial step by step and was not able to come up with my own solution. I'll need to seriously practice all these concepts to make sure I can pull off something like this in the future.

GAMEPLAN: Need to come up with another project that uses all these principles, and I need to build it from scratch without having a specific guide for it. Furthermore there are a bunch of topics that I need to explore deeper to make sure that I have a good grasp on them such as: cubic beziers (I need to know exactly how they work, what all the options are, etc), flexbox (I need to do a bunch of projects that are flexbox heavy, until I get a really good grasp of it.), toggle functions (I need to make sure I know how to build them, and then I need to do a bunch of projects that require lots of toggle, so that I become really efficient with them), adding classes on top of classes. Dynamically adding classes (I need to make sure that I know exactly when and why it works, and when and why it doesn't work), js events and specifically how to remove events. 
