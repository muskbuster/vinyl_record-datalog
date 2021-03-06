# VINYL DATALOG
Vinyl datalog allows user to enter details of viyl records like the name of the album,artist,genre and its price. This contract is made with the idea that it can be used by stores that sell vinyls as collectibles.this contract can be used to log all the vinyls available in a store. There are three functions it can offer right now:
##### (this project is derived from and inspired by https://github.com/Learn-NEAR/NCD.L1.sample--library by Learn-Near I had to add this comment as i had forgotten to fork the repo and cloned it .TO avoid violation of certification rules i have added it here)

1.  Vinyls available can be added to the database with the following data:</br>
- Name of the album
- Artist of the album
- the genre 
- album's price

2. list of all the vinyls available on the blockchain

3. search a vinyl based on the name of the album 

## Installation

To run the CONTRACT locally, follow the below steps:

## Getting started
1. Make sure you have installed Node.js >= 12 
2. Make sure you have installed NEAR CLI :<br>
 ```npm i -g near-cli```
3. Login to your NEAR account.
4. If you don't have a NEAR account , create it at [https://wallet.testnet.near.org/]
5. Configure NEAR CLI to authorize your testnet account:<br>
 `near login`
  


## Running the project
1. Clone this repository
2. In the terminal , navigate to the project folder, to install the dependencies and run `yarn`

## To create a smart contract development and deployment:
1. Run `yarn build` to build the smart contract. Look at package.json folder to see all the command that can be executed with yarn.
![Annotation 2022-03-21 220316](https://user-images.githubusercontent.com/81789395/159311303-570a6f54-a178-4bc4-a823-4ea56b068d91.png)
3. Run `yarn deploy` to deploy the smart contract to the development server that was built in the previous step. This will return the Txn ID of the deployed contract along with a link to near explorer to see various statistics of the deployed contract.
![Annotation 2022-03-21 220402](https://user-images.githubusercontent.com/81789395/159311454-5d9c1a33-2bb9-43bf-a4d9-f52f1654a740.png)
![Annotation 2022-03-21 220423](https://user-images.githubusercontent.com/81789395/159311482-73f4e488-7204-4317-b826-daf2f6db85da.png)


## Using the methods of the deployed contract
The following commands will allow you to interact with NEAR CLI and the deployed smart contract's methods:

### Command to log a new vinyl data:
`near call $CONTRACT newVinyl '{"songName" : "song", "artist":"artistt", "genre" : "genree","price" : "$"}' --account-id <Enter your account id>`![Annotation 2022-03-21 220631](https://user-images.githubusercontent.com/81789395/159311516-902ff90e-318f-4dad-ad03-3fef5e56a920.png)
![Annotation 2022-03-21 220651](https://user-images.githubusercontent.com/81789395/159311531-1f4d9435-0345-488a-954b-a6ad6c605adf.png)


Insert the data in place of "string" mentioned in the command of the method.<br>


### Command to view all the Vinyls : 
`near view $CONTRACT Vinylarsenal '{}'`![Annotation 2022-03-21 220742](https://user-images.githubusercontent.com/81789395/159311546-a8b5cfb4-d13d-4e42-aeba-bd93a81b49a1.png)


### Command to search a vinyl record based on song/album name:
`near call $CONTRACT Vinylavailable '{"songName" : "string"}' --account-id <Enter your account id>`
![Annotation 2022-03-21 220831](https://user-images.githubusercontent.com/81789395/159311574-9668a8c7-4d69-4ac5-948f-c15ea4bf51eb.png)
![Annotation 2022-03-21 220901](https://user-images.githubusercontent.com/81789395/159311584-1021a523-d17b-4b5c-97e0-1966fc3551b5.png)

## USAGE:
this contract can be used to log the details of vinyl records available in a store or a museum. 
I am looking forward to add features like being able to pay using near for the records and renting of vinyls with monthly near expenditure. Also auction various rare record by bidding on the near blockchain.
I will soon be working on that.

