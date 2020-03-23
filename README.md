# GAS-telegram-bot-spreedsheet
Create a very basic telegram bot with Google App Scripts(GAS) so that users can update conversation messages (Ask and response) in Google spreadsheet easily

## Getting Started

This project is created because my friend who has no/simple programming knowledge asksd for a help in setting up a telegram bot. At first I did a google search online and found a [page](https://medium.com/@aaroncql/build-a-serverless-telegram-bot-with-firebase-functions-267d251e4e46) suggesting [Firebase](https://firebase.google.com/). I think it is really a good guide for a software developer to develop their own telegram bots since it does allow lots of customization and integration with different APIs online.

However, when my friend was asking for the update of response message (e.g. He would like the bot return "I am black dog" while receiving "popo") on his own, my brain stopped loading since I have no idea on how to transfer 1. environment setup (Node.js environment on his computer), 2. codes update (Javascript knowledges), 3. deployment steps (Upload to Firebase).

At first I just sent him the page above and of course he has no response replied since he has no idea about what is going on. That's why I am looking for another way in order to allow easy message updating online and let users get rid of any code updates about telegram bot.

Reference pages: (Sorry for my poor English and my mother language is Traditional Chinese so the reference are also from TC)
```
https://letswrite.tw/telegram-bot-gas/
https://www.wfublog.com/2017/02/google-apps-script-spreadsheet-query-read-data.html
```
### Prerequisites

1. Google account. No worry if you dont have any programming knowledege. This guide is basically designed for newbies
2. Telegram with account logged in


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
1. Open telegram
2. Search @BotFather in telegram
3. Enter "/newbot"
4. Give a name to your bot (e.g. Testing Bot)
5. Give a username to your bot (must be unique in the world, e.g. testing_xxxxx_bot)
6. You will receive a token like "1009823562:ASFASJkAKSFJasifojsafi-BU" (Not a real token) in your message. Copy it to somewhere again. (Keep it save and don't expose it to anyone!!)

### Step 5 - Put scripts online
1. Download **Code.gs**, **firebase.gs**(Optional) and **spreadsheet.gs** from this repository
2. Update <bot token> in **Code.gs** to your own bot token created in **Step 4**
3. (Optional) Update <firebase secret> and <firebase database url> in to **firebase.gs** your firebase details created in **Step3**
4. Open your Google App Script
5. Click "File" > "New" > "Script file"
6. Give a name "**spreadsheet**" and click "OK" button
7. (Optional) Do (3) and (4) again to create a script for name "**firebase**" 
8. Copy contents from downloaded files in (1) to scripts file you just added in GAP respectively (Remember to save them online!!!)
  
### Step 6 - Deploy your scripts
1. Open your Google App Script
2. Click "Publish" > "Deploy as web app..."
3. You will see a new pop up. Remember to choose "**Anyone, even anonymous**" in "**Who has access to the app**" dropdown list and "**New**" in "**Project version**" dropdown list. Click "Deploy" button to deploy scripts
4. You may also see a popup warning "**Authorization required**". Click "Review Permissions" button > Click your google account > Click "Allow" button in order to pass the authorization
5. Copy the URL shown in the text field below "**Current web app URL:**", it would be used in Step 7, e.g.
```
https://script.google.com/macros/s/AKGagasde2y03ALSKfewsd-aLASFKasfLASKDlaksfasdkligoHS/exec
```

### Step 7 - Connect your scripts and bot
1. Type the following URL in your browser:
```
https://api.telegram.org/bot<bot token created in Step 4>/setWebhook?url=<URL generated in Step 7>
```
e.g.
```
https://api.telegram.org/bot1009823562:ASFASJkAKSFJasifojsafi-BU/setWebhook?url=https://script.google.com/macros/s/AKGagasde2y03ALSKfewsd-aLASFKasfLASKDlaksfasdkligoHS/exec
```
2. If you can see the following text on your browser then link is successfully set
```
{"ok":true,"result":true,"description":"Webhook was set"}
```

### Step8: Set up messages for response
1. Input the following data to your sheet:
```
A1: Message received	B1: Response message	C1: Keyboard Options
A2: DEFAULT_ANSWER	B2: Testing   C2: Key1
A3: test	B3: test2	C3: Key2
```
* Column A: Message received, what message you expected to receive from users
* Column B: Response message, what message you expected to respond when the bot receive column A message
* Column C-Z: Keyboard Options, optional, option list shown in keyboard. You can provide only few options to user in choose


### Step9: Test it
1. Search @username (**@testing_xxxxx_bot**, bot username created in Step 4) in telegram. It is your bot
2. Start conversation with the bot
3. Type "test" and you will see "test2" responded from the bot
4. Done!!

## Finally
This is my first repository and feel free to leave me any comment on codes, readme file, my wordings, or anything else. Thanks for watching!


