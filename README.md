# Medication List

## User Story: 
A medication needs a clearly marked label with special handling instructions. Not all medications require instructions. Create a program that will accept two input strings: list of orders and medications. The output will be a list of orders with corresponding instructions.

## Assumptions
- List of Medications will have corresponding handling instructions
- List of Orders and Medications will be correctly formatted

## Edge Cases
- Duplicate handling instructions per medication
- Medications with invalid handling instructions
- Medications with a combination of invalid and valid handling instructions

## Installation
                npm i
                add to scripts: "start": "node index.js"
                open localhost:3000
                open ChromeDev Tools to test output
                

## Testing  
                add to scripts: "test": "jest"
                npm test or npm test --watch
                
## Must Haves 
- Accept two input strings:
    - List of Orders: Contains Order ID and Medication Name 
    - List of Medications: Contains Medication Name and Handling Instructions
- Output:
    - List of Orders with instructions:
    (Example: OrderId: Medication Name: Warning-Instructions)

## Example 
<img width="784" alt="medication_list" src="https://user-images.githubusercontent.com/100331647/235464509-c1b8f365-b15a-4e52-9081-23d4359a5eb9.png">

