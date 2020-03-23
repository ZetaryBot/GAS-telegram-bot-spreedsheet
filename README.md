# GAS-telegram-bot-spreedsheet
Create a very basic telegram bot with Google App Scripts(GAS) so that users can update conversation messages (Ask and response) in Google spreadsheet easily

## Getting Started

This project is created because my friend who has no/simple programming knowledge asksd for a help in setting up a telegram bot. At first I did a google search online and found a [page](https://medium.com/@aaroncql/build-a-serverless-telegram-bot-with-firebase-functions-267d251e4e46) suggesting [Firebase](https://firebase.google.com/). I think it is really a good guide for a software developer to develop their own telegram bots since it does allow lots of customization and integration with different APIs online.

However, when my friend was asking for the update of response message (e.g. He would like the bot return "I am black dog" while receiving "popo") on his own, my brain stopped loading since I have no idea on how to transfer 1. environment setup (Node.js environment on his computer), 2. codes update (Javascript knowledges), 3. deployment steps (Upload to Firebase).

At first I just sent him the page above and of course he has no response replied since he has no idea about what is going on. That's why I am looking for another way in order to allow easy message updating online and let users get rid of any code updates about telegram bot.

Reference pages: (Sorry for my poor English and my mother language is Traditional Chinese so the reference are also from TC)
https://letswrite.tw/telegram-bot-gas/
https://www.wfublog.com/2017/02/google-apps-script-spreadsheet-query-read-data.html

### Prerequisites

Just a Google account. No worry if you dont have any programming knowledege. This guide is basically designed for newbies


### System Involved
1. Google Drive - Spreadsheet to store response messages
2. Telegram - Telegram bot
3. Google App Script (GAS) - To handle request and response from your telegram bot and also integrate with Google Drive
(Optional) 4. Firebase - To store messages sent by users. Not compulsory


## Steps
### Step1 - Create your spreadsheet
1. Login your [Google drive](https://drive.google.com/drive/u/1/my-drive) and click "New" on the left menu bar
2. Select "**Google Sheets**"
3. Give a name to your sheet on the top (e.g. Testing bot)

### Step2 - Insert Google App Script into your spreadsheet
1. Open your sheet
2. Click "**Tools**" > "**Script editor**" on menu bar
3. Give a name to your script on the top (e.g. Testing bot script)

### (Optional) Step3 - Include Firebase libraries
Optional part, if you don't want/need to store any messages sent from users, please ignore this part
1. Open your script
2. Click "**Resources**" > "**Libraries...**" on menu bar
3. You will see a new popup and type "**MYeP8ZEEt1ylVDxS7uyg9plDOcoke7-2l**" in the input field next to "Add a library" text
4. Click "**Add**" button (You may not see any loading but it does! Wait a moment after first click). After a while you will see a row added above with title=**FirebaseApp**
5. Click dropdown list under "Version" to select the version of library we are using: **11 Public Release**
6. Click "**Save**" button

### (Optional) Step4 - Connect to Firebase database
Again optional part, if you ignored Step3 please ignore this part as well
1. Login to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" for setting up a database
3. In the setup project page, enter a new project name (e.g. Testing bot), click accept terms checkbox and click "Continue"
4. Click "Disable" GA and "Continue" button in setting up Google Analytics (You can choose to enable GA, not our concern currently)
5. Click "Continue" after you see "Your new project is ready" text on the screen
6. You will see a left menu and click "Gear icon" > "Project Settings"
7. Click "Service accounts" on the right panel menu bar
8. Scroll down you will see a url next to a text "**databaseURL**" (In my case is <https://testing-bot-1d0f7.firebaseio.com>), copy it and save it to somewhere first
9. Click "Database secrets" and you will see a new table with "Database" and "Secret" as title, and a data row (with your database name and secret ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●● )
10. Hover on the data row, a "Show" button show on the right of the row. Click the "Show" button
11. ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●● will be turned into a long text. It is your database secret and please keep it save. Copy it to somewhere again. (Keep it save and don't expose it to anyone!!)

### Step 4 - Create telegram bot
WIP
