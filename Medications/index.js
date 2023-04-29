// accept two strings
const handlingInstructions = (orders, medications) => {
    //empty array holding final orders
    let finishedOrders = []; 

    // array of instructions
    let instructions = [
                        'No Special Instructions',
                        'Do Not Shake',
                        'Keep Refrigerated',
                        'Keep Away from Heat',
                        ]

    // map through instructions
    let newInstruction = instructions.map((instruction)=>(instruction))
        
    // empty array that will hold list of orders 
    const orderList = [];

    // split 'order' string by semicolon into an array
    const entries = orders.split(';');
        //console.log(entries);

    // empty array for medications
    const medicationList = [];
      
    const meds = medications.split(';');

    // List of Orders Example: Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA

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

        /*
        // empty array for medications
        const medicationList = [];
        
        // sort through medications and look for duplicates
        let sorted_meds = medications.split(';').sort();  
        //console.log(sorted_meds);          

        const meds = medications.split(';');
        */
       
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

                                //console.log(newMedication)

            // push new new object into empty array
            medicationList.push(newMedication);

            // List of Final Orders 
            // Example Format: [OrderID]:[Medication Name]:[WARNING-Instructions (comma separated with whitespace)]
            // Example Output: Rx1:MedicationX:WARNING-Do Not Shake, Must Refrigerate
            
            // conditional statement to check if medications match order 
            if (newOrders.medication === newMedication.medicationName ) {

                // get warning number 
                let warningNumber = newMedication.label;
                    let warningArray = warningNumber.split(',')
                    // map through warning number
                    let newWarningNumber = warningArray.map((number)=>(number)) 
                    console.log(newWarningNumber);
                    // filter out numbers greater than 4
                    let newNumbers = newWarningNumber.filter((element) => element < 4);
                    console.log(newNumbers.length, newNumbers);

                // get corresponding label
                let warningLabel = newInstruction[warningNumber];
                    console.log(warningLabel);

                // if no 'WARNING' needed on label
                if  (warningNumber === '0' || newNumbers.length === 0 )  {
                     
                    // merge order id and medication name into new array
                    const mergedOrder = [
                                        newOrders.ID,
                                        newOrders.medication  
                                        ]
    
                    // push merged order to empty final array 
                    finishedOrders.push(mergedOrder); 
                }

               /*
                // split warning number into a subarray
                let newNumber = warningNumber.split(',')
                    console.log(newNumber);*/
               
                // if warning label does not equal 0 
                if (newNumbers.length >= 1 && warningNumber !== '0' ) {
                   
                    
                    // array holding multiple Warnings
                    let warningLabel = [];

                    // loop through filtered Warning Numbers  
                    const element = newNumbers.forEach(element => 
                    // push corresponding instructions to empty array
                    warningLabel.push(newInstruction[element]))
                    //console.log(warningLabel);  
                    
                     const mergedOrder = [
                        newOrders.ID,
                        newOrders.medication,
                        warningLabel
                        ]

                     // if there are 3 warning labels  
                     if (newNumbers.length === 3 ) {
                        // TESTING edge case if warning label does not exist 
                        console.log(warningLabel.includes(undefined));

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

handlingInstructions('Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA', 'MedicationA:1,2,4;MedicationX:1,1;MedicationY:0;MedicationZ:4');

//module.exports = handlingInstructions;