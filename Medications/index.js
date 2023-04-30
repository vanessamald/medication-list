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

    // empty array for medications
    const medicationList = [];
      
    const meds = medications.split(';');

    // List of Orders Example: Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA

    // loop through orders
    for (let i=0; i< entries.length; i++) {
            
        // split new array by colon
        let entry = entries[i].split(':');

        // deconstruct array
        const [ orderID, medicationName ] = entry;
        // create object with ID & medicationName
        let newOrders = {
                        ID: orderID, 
                        medication: medicationName
                        }
        
        // push object into empty array
        orderList.push(newOrders);

        // list of medications(separated by semicolon): Medication Name, Special Handling Instructions
        //Example: MedicationA:1,2,4;MedicationX:1,2;MedicationY:0;MedicationZ:4;
       
        // loop through medications
        for (let j=0; j< meds.length; j++ ) {

            // split new array by colon
            let med = meds[j].split(':');
            
            // deconstruct array
            const [ name, labelNumber ] = med;
            // split label into array
            const labelArray =  labelNumber.split(',');

                  // delete duplicate labels 
                  let uniqueLabel = [...new Set(labelArray)];
                  let newLabelNumber = uniqueLabel.toString();
    
            // new medication object
            let newMedication = { 
                                medicationName: name, 
                                label: newLabelNumber
                                };

                                //console.log(newMedication)

            // push new new object into empty array
            medicationList.push(newMedication);

            

            // List of Final Orders 
            // Example Format: [OrderID]:[Medication Name]:[WARNING-Instructions (comma separated with whitespace)]
            // Example Output: Rx1:MedicationX:WARNING-Do Not Shake, Must Refrigerate
            
            // conditional statement to check if medication name match order 
            if (newOrders.medication === newMedication.medicationName ) {

                // get warning number 
                
                let warningNumber = newMedication.label;

                    let warningArray = warningNumber.split(',')
                    // map through warning number
                    let mappedWarning = warningArray.map((number)=>(number)) 
                    console.log(mappedWarning);

                    

                    // filter out numbers greater than 3
                    let filteredWarning = mappedWarning.filter((element) => element < 4);
                    console.log(filteredWarning);
                   

                    // if mappedWarning === 0 let newWarningNumber = 0 
                    let newWarningNumber = filteredWarning.length === 0 ? ['0'] : filteredWarning;
                    console.log(newWarningNumber);

                    let [ desWarningNumber ] = newWarningNumber;
                    console.log(desWarningNumber);
                    
                // get corresponding label
                let warningLabel = newInstruction[warningNumber];
                    console.log(warningLabel);
                    
                // if no 'WARNING' needed on label
                if  (desWarningNumber === '0' ) {
                // || newNumbers.length === 0 )  {
                     
                    // merge order id and medication name into new array
                    const mergedOrder = [
                                        newOrders.ID,
                                        newOrders.medication  
                                        ]
    
                    // push merged order to empty final array 
                    finishedOrders.push(mergedOrder); 
                }
               
                // if only one warning label needed 
                if (desWarningNumber !== '0') {
                //if (newNumbers.length <= 1 && warningNumber !== '0' ) {
                   
                    // array holding multiple Warnings
                    let warningLabel = [];

                    // loop through filtered Warning Numbers  
                    const element = filteredWarning.forEach(element => 
                    // push corresponding instructions to empty array
                    warningLabel.push(newInstruction[element]))
                    //console.log(warningLabel);  
                    
                     const mergedOrder = [
                        newOrders.ID,
                        newOrders.medication,
                        warningLabel
                        ]

                     // if there are 3 warning labels 
                     
                    if (newWarningNumber.length === 3 ) {

                    //const newMergedOrder = newNumbers.length === 3 ? mergedOrder.splice(2, 0, 'WARNING!!!') : mergedOrder.splice(2, 0, 'WARNING');
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