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
        //console.log(medicationList)
        
        // sort through medications and look for duplicates
        let sorted_meds = medications.split(';').sort();  
        //console.log(sorted_meds);          


        const meds = medications.split(';');
        
        // loop through medications
        for (let j=0; j< meds.length; j++ ) {

            // split new array by colon
            let med = meds[j].split(':');
            
            // deconstruct array
            const [ name, label ] = med;
            // split label into array
            const labelArray =  label.split(',');

                  // delete duplicate labels 
                  let uniqueLabel = [...new Set(labelArray)];
                  let newLabel = uniqueLabel.toString();
    
            // new medication object
            let newMedication = { 
                                medicationName: name, 
                                label: newLabel
                                };

                                console.log(newMedication)
            // push new new object into empty array
            medicationList.push(newMedication);

            // output = list of orders
            // Example Format: [OrderID]:[Medication Name]:[WARNING-Instructions (comma separated with whitespace)]
            // Example Output: Rx1:MedicationX:WARNING-Do Not Shake, Must Refrigerate
            
            // conditional statement to check if medications match order 
            if (newOrders.medication === newMedication.medicationName ) {

                // get warning label
                let warningNumber = newMedication.label;

                // conditional for no 'WARNING' label
                if  (warningNumber === '0' )  {
                    
                    let warningLabel = newInstruction[warningNumber];
                
                    
                    // add WARNING to label
                    const mergedOrder = [
                                        [newOrders.ID],
                                        [newOrders.medication]  
                                        ]
    
                    // push merged order to empty final array 
                    finishedOrders.push(mergedOrder); 
                }
                
                 // split string into subarray
                 let newNumber = warningNumber.split(',')
                    //console.log(newNumber);
                   

                // conditional statement for 2+ warning labels
                if (newNumber.length >= 1 && warningNumber !== '0' ) {
                    //console.log(warningNumber.length);
                    let warningLabel = [];

                    // loop through new array 
                    const element = newNumber.forEach(element => 
                    // push corresponding instructions to empty array
                    warningLabel.push(newInstruction[element]))
                    //console.log(warningLabel);  
                    
                     const mergedOrder = [
                        newOrders.ID,
                        newOrders.medication,
                        warningLabel
                        ]

                     // if there are 3 warning labels  
                     if (newNumber.length === 3 ) {
                        // testing edge case if warning label does not exist 
                        //console.log(warningLabel.includes(undefined));

                        //console.log('!!!')
                        //console.log(newNumber.length);
                        //console.log(newOrders.medication);

                        // splice array, add 'WARNING' WITH '!!!' for 3 labels
                        mergedOrder.splice(2, 0, 'WARNING!!!');
                        finishedOrders.push(mergedOrder);
                    
                    // else return WARNING with no exclamations
                    } else {
                    // splice array to insert 'WARNING' label before instructions
                    mergedOrder.splice(2, 0, 'WARNING');

                    // push merged order to empty final array 
                    finishedOrders.push(mergedOrder);
                    }
                }  
            } 
        }  
    } 
   console.log(finishedOrders);  
}  



handlingInstructions('Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA', 'MedicationA:1,2,3;MedicationX:1,1,2;MedicationY:0;MedicationZ:3');

//module.exports = handlingInstructions;