// accept two strings
const handlingInstructions = (orders, medications) => { 
    // list of orders(separated by semicolon): ID, Medication Name 
        // Example: Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA
        
        // empty array that will hold list of orders 
        const orderList = [];

        // list of medications(separated by semicolon): Medication Name, Special Handling Instructions
        //Example: MedicationA:1,2,4;MedicationX:1,2;MedicationY:0;MedicationZ:4;
        // split string by semicolon
        const entries = orders.split(';');
        console.log(entries);
        // loop through new array
        for (let i=0; i< entries.lenght; i++) {
        // split new array by colon

        // deconstruct array

        // create object with ID, medicationName
        }


        // instructions: “Do Not Shake”, Keep Refrigerated”, “Keep Away from Heat” (include "!!!" for all 3 )
        const instructions = [
                            'No Special Instructions',
                            'Do Not Shake',
                            'Keep Refrigerated',
                            'Keep Away from Heat'
                            ]
        console.log(instructions);
        
        // output = list of orders
        // Example Format: [OrderID]:[Medication Name]:[WARNING-Instructions (comma separated with whitespace)]
        // Example Output: Rx1:MedicationX:WARNING-Do Not Shake, Must Refrigerate
}   

//handlingInstructions('Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ', 'MedicationA:1,2,4;MedicationX:1,2;MedicationY:0;MedicationZ:3');

//module.exports = handlingInstructions;
