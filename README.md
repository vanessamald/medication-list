# Medication List

## User Story 
A medication needs a clearly marked label with special handling instructions. Not all medications require instructions. Create a program that will accept two input strings: list of orders and medications. The output will be a list of orders with corresponding instructions.

## Table of Contents
[User Story](#userstory)<br/>
[Assumptions](#assumptions)<br/>
[Edge Cases](#edgecases) <br/>
[Technologies](#technologies)<br/>
[Installation](#installation)<br/>
[Testing](#testing)<br/>
[Questions](#questions)<br/>

## Assumptions
- List of Medications will have corresponding handling instructions
- List of Orders and Medications will be correctly formatted

## Edge Cases
- Duplicate handling instructions per medication
- Medications with invalid handling instructions
- Medications with a combination of invalid and valid handling instructions

## Technologies
![NPM badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Node.js badge](	https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Jest badge](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## Installation
                npm i

Open package.json and under scripts add:

                "start": "node index.js"

Open http://localhost:3000/ in your browser
&
Open ChromeDev Tools to test output
                
## Testing  
Open package.json and under scripts add:
                
                "test": "jest"

To run tests:

                npm test 
                
## Must Haves 
- Accept two input strings:
    - List of Orders: Contains Order ID and Medication Name 
    - List of Medications: Contains Medication Name and Handling Instructions
- If all instructions are part of the medication then add 'WARNING' with '!!!'
- If any of the handling instructions are part of the medication then add 'WARNING'
- If medications requires no special handling instructions then omit 
- Output:
    - List of Orders with instructions:
    (Example: OrderId: Medication Name: Warning-Instructions)

## Example 
<img width="690" alt="medications" src="https://user-images.githubusercontent.com/100331647/235472274-f40ae9b0-5b5f-41ec-a3c0-d02b6e0ecc2e.png">

## Questions
📧 vnessamaldon@gmail.com

