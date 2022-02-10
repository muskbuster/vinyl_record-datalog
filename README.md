# BOOK MANAGEMENT
Book Management is a smart contract which works as a library. It contains a database of books. The following functionalities can be added:

1. Create a book with details like:</br>
- ID of the book
- Name of the book
- Author of the book
- Department to which the book belongs to

2. View all the books stored on chain

3. Query a particular book though ID of the book.

## Installation

To run the project locally, follow the below steps:

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
2. Run `yarn deploy` to deploy the smart contract to the development server that was built in the previous step. This will return the Txn ID of the deployed contract along with a link to near explorer to see various statistics of the deployed contract.

## Using the methods of the deployed contract
The following commands will allow you to interact with NEAR CLI and the deployed smart contract's methods:

### Command to create a new book:
`near call $CONTRACT newBook '{"bookId": "string","bookName": "string","author": "string","department": "string"}' --account-id <Enter your account id>`

Insert the data in place of "string" mentioned in the command of the method.<br>
The contract details will be available in the folder named 'neardev'->'dev-account'

### Command to view all the books: 
`near view $CONTRACT seeBooks '{}'`

### Command to query books with ID:
`near call $CONTRACT queryBook '{"bookID" : "string"}' --account-id <Enter your account id>`
Insert the ID of the book in place of string in above command. 

## USAGE:
The contract can be used as a Blockchain based Library application for storing books on chain with other related info after amending in the contract.