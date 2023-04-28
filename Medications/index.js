// accept two strings
const handlingInstructions = (orders, medications) => {
    let finishedOrders = []; 

      // instructions: “Do Not Shake”, Keep Refrigerated”, “Keep Away from Heat” (include "!!!" for all 3 )
      let instructions = [
        'No Special Instructions',
        'Do Not Shake',
        'Keep Refrigerated',
        'Keep Away from Heat',
        ]

        // map through instructions
        let newInstruction = instructions.map((instruction)=>(instruction))

    // list of orders(separated by semicolon): ID, Medication Name 
        // Example: Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA
        
        // empty array that will hold list of orders 
        const orderList = [];

        // split string by semicolon
        const entries = orders.split(';');
        //console.log(entries);

        // loop through new array
        for (let i=0; i< entries.length; i++) {
            
        // split new array by colon
        let entry = entries[i].split(':');


        // deconstruct array
        const [ orderID, medicationName ] = entry;
        // create object with ID, medicationName
        let newOrders = {
                            ID: orderID,
                            medication: medicationName
                        }
        
        // push object into empty array
        orderList.push(newOrders);

        // list of medications(separated by semicolon): Medication Name, Special Handling Instructions
        //Example: MedicationA:1,2,4;MedicationX:1,2;MedicationY:0;MedicationZ:4;

        // empty array for medications
        const medicationList = [];
        console.log(medicationList)
        
        const meds = medications.split(';');
        //console.log(meds);
        
        // loop through medications
        for (let j=0; j< meds.length; j++ ) {
            // split new array by colon
            let med = meds[j].split(':');
            //console.log(med);

            // deconstruct array
            const [ name, label ] = med;
    
            // new medication object
            let newMedication = { 
                                medicationName: name, 
                                label: label
                                };
    
            // push new new object into empty array
            medicationList.push(newMedication);

            const instructionNumber = newMedication.label.split(',');
            
            // output = list of orders
            // Example Format: [OrderID]:[Medication Name]:[WARNING-Instructions (comma separated with whitespace)]
            // Example Output: Rx1:MedicationX:WARNING-Do Not Shake, Must Refrigerate
            
            // conditional statement to check if medications match order 
            if (newOrders.medication === newMedication.medicationName ) {

                // get warning label
                let warningNumber = newMedication.label;
                
                // conditional statement for 2 warning labels
                if (warningNumber.length >= 2 ) {
                    console.log(warningNumber);
                    let warningLabel = [];

                    // split string into subarray
                    let newNumber = warningNumber.split(',');
                    console.log(newNumber);
                   
                    // loop through new array 
                    const element = newNumber.forEach(element => 
                    // push corresponding instructions to empty array
                    warningLabel.push(newInstruction[element]))

                    console.log(warningLabel);  
                    
                     const mergedOrder = [
                        newOrders.ID,
                        newOrders.medication,
                        'WARNING',
                        warningLabel
                        ]
                    
                    console.log(mergedOrder);

                // push merged order to empty final array 
                finishedOrders.push(mergedOrder);
                }   
            } 
        }  
    } 
   console.log(finishedOrders); 
   //console.log(finishedOrders.toString());   
}   

handlingInstructions('Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA', 'MedicationA:1,2,3;MedicationX:1,2;MedicationY:0;MedicationZ:3');

//module.exports = handlingInstructions;