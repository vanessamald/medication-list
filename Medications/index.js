// accept two strings
const handlingInstructions = (orders, medications) => { 
    // list of orders(separated by semicolon): ID, Medication Name 
        // Example: Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA
        
        // empty array that will hold list of orders 
        const orderList = [];

        // split string by semicolon
        const entries = orders.split(';');
        console.log(entries);

        // loop through new array
        for (let i=0; i< entries.length; i++) {
        // split new array by colon
            let entry = entries[i].split(':');
            console.log(entry);

        // deconstruct array
        const [ orderID, medicationName ] = entry;
        // create object with ID, medicationName
        let newOrders = {
                            ID: orderID,
                            medication: medicationName
                        }
        
        // push object into empty array
        orderList.push(newOrders);
        console.log(orderList);
        console.log(newOrders.medication);
        
        // instructions: “Do Not Shake”, Keep Refrigerated”, “Keep Away from Heat” (include "!!!" for all 3 )
        let instructions = [
                            'No Special Instructions',
                            'Do Not Shake',
                            'Keep Refrigerated',
                            'Keep Away from Heat'
                            ]
        console.log(instructions);

        // list of medications(separated by semicolon): Medication Name, Special Handling Instructions
        //Example: MedicationA:1,2,4;MedicationX:1,2;MedicationY:0;MedicationZ:4;

        // empty array for medications
        const medicationList = [];

        const meds = medications.split(';');
        console.log(meds);
        
        // loop through medications
        for (let j=0; j< meds.length; j++ ) {
            // split new array by colon
            let med = meds[j].split(':');
            console.log(med);

            // deconstruct array
            const [ name, label ] = med;
    
            // new medication object
            let newMedication = { 
                                medicationName: name, 
                                label: label
                                };
    
            // push new new object into empty array
            medicationList.push(newMedication);
            console.log(medicationList);


            console.log(newMedication.label);
            const instructionNumber = newMedication.label.split(',');
            console.log(instructionNumber);
            
            console.log(newMedication.medicationName);

            // output = list of orders
            // Example Format: [OrderID]:[Medication Name]:[WARNING-Instructions (comma separated with whitespace)]
            // Example Output: Rx1:MedicationX:WARNING-Do Not Shake, Must Refrigerate

            // emty array holding final orders with instructions
            let finishedOrders = [];
            // conditional statement to check if medications match order
      
        }
    }       
}   

handlingInstructions('Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ', 'MedicationA:1,2,4;MedicationX:1,2;MedicationY:0;MedicationZ:3');

//module.exports = handlingInstructions;