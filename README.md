# Medication List

## User Story: 
A medication needs a clearly marked label with special handling instructions. Not all medications require instructions. Create a program that will accept two input strings: list of orders and medications. The output will be a list of orders with instructions.

## Assumptions

## Edge Cases

## Installation
                npm i
                add to scripts: "start": "node index.js"

## Testing  
                npm test or npm test --watch
                
## Must Haves 
- Accept two input strings:
    - List of Orders: Contains Order ID and Medication Name 
    - List of Medications: Contains Medication Name and Handling Instructions
- Output:
    - List of Order with instructions:
    (Example: OrderId:Medication Name: Warning-Instructions)
