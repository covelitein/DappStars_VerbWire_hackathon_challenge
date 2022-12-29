# How to Run DAPP STARS VERBWIRE Project

## Technologies used

**The requirement to run this demo includes:**

- [Python compiler](https://www.python.org/downloads/)
- [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?gclid=CjwKCAiAkrWdBhBkEiwAZ9cdcIIEdJ5UsuI79Wmpep0MS2TLMiLAk_oxoyNb1v5hA0IvqDTqoQ4RIBoC7A8QAvD_BwE)
- [React js](https://reactjs.org/docs/create-a-new-react-app.html)
- [Tailwind css](https://tailwindcss.com/docs/installation)
- [Fast API](https://fastapi.tiangolo.com/tutorial/)
- [XAMPP](https://www.apachefriends.org/download.html)
- [VERB WIRE API](https://www.verbwire.com/)
- [NPM](https://nodejs.org/en/download/)
- [GIT BASH CLI](https://git-scm.com/downloads)


## **Running the Demo**
![](./screenshot/0.gif)


**STEP 1**
Run the following command for project setup :

    // to navigate to your preferred directory to store the project folder run this command
    cd Desktop

    //then run this for cloning the repo
    git clone https://github.com/covelitein/DappStars_VerbWire_hackathon_challenge.git YOUR_FOLDER_NAME

    //cd into the cloned project folder
    cd YOUR_FOLDER_NAME
    
    //to install the dependencies run this command
    yarn install

    //or

    npm install

    // To open it in vscode run this command
    code .

**STEP 2**
Open two terminals for your backend and frontend server
To install the necessary utilities for the backend run the following commands

    // navigate to the backend folder using this command
    cd backend
    
    // to install fastapi and its utility functions run this command
    pip install "fastapi[all]"
    
    // then install your mysql-connector using this command
    pip install mysql-connector-python

**STEP 3**

- go to [verbwire](https://www.verbwire.com/) and create an account 
- create an ERC721 smart contract
- Then copy your contracts address and api key
- Go to your *config.py* Replace the VERBWIRE_CONTRACT_ADDRESS with your  contract address 
- Replace the VERBWIRE_API_KEY with your api key
- Also ensure your ‘config.py’ looks like this:

Illustration below


    VERBWIRE_API_KEY='*************************'
    VERBWIRE_CONTRACT_ADDRESS='*******************************'
    USER='root'
    PASSWORD=''
    HOST='127.0.0.1'
    
    DATABASE='dappstars'

**STEP 4**
Install [xampp](https://www.apachefriends.org/download.html), start your apache and mysql in your xampp control panel then navigate to your mysql database which is “localhost/phpmyadmin” and create a database called “dappstars” with a table called “stars” see picture below


![](https://paper-attachments.dropboxusercontent.com/s_EE1BEE1DB47FA0D07A828BDC02264B4CE72E323F37C7A1C969E6A006E9712B27_1672316285625_screenshoteasy+80.png)


or get the database sql file download this file from this link [sql_file_link](https://filebin.net/cefkgzqw71kz9djf/stars.sql) then create a database name as earlier stated and then import the sql file to your already created database 

To start the app run the following commands


    
    //to start your backend server run this command
    uvicorn main:app --reload 

    // to start the frontend server run this command
    yarn dev





