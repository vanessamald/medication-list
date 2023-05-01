// accept two strings
const handlingInstructions = (orders, medications) => {
    //empty array holding final orders
    const finishedOrders = []; 

    // array of instructions
    const instructions = [
                        'No Special Instructions',
                        'Do Not Shake',
                        'Keep Refrigerated',
                        'Keep Away From Heat',
                        ]
    // map through instructions
    const newInstruction = instructions.map((instruction)=>(instruction))
        
    // split orders and medications into arrays
    const entries = orders.split(';'); 
    const meds = medications.split(';');

    // loop through orders 
    for (let i=0; i< entries.length; i++) {
            
        // split new array by colon
        let entry = entries[i].split(':');

        // deconstruct array and create a new object
        const [ orderID, medicationName ] = entry;
        
        const newOrders = {
                        ID: orderID, 
                        medication: medicationName
                        }
       
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
            const newMedication = { 
                                medicationName: name, 
                                label: newLabelNumber
                                };

            // conditional statement to check if medication name matches order 
            if (newOrders.medication === newMedication.medicationName ) {
                
                // get warning number 
                let warningNumber = newMedication.label;

                    let warningArray = warningNumber.split(',')
                    // map through warning number
                    let mappedWarning = warningArray.map((number)=>(number)) 
                        //console.log(mappedWarning);

                    // filter out numbers greater than 3
                    let filteredWarning = mappedWarning.filter((element) => element < 4);
                        //console.log(filteredWarning);
                   
                    // if filteredWarning length is now 0 change to = 0 ('No Special Handling Instructions')
                    const newWarningNumber = filteredWarning.length === 0 ? ['0'] : filteredWarning;

                    // convert newWarningNumber to string to compare values
                    let warningNumberString = newWarningNumber.toString();

                // if no 'WARNING' needed on label
                if  (warningNumberString === '0' ) {
                     
                    // merge order id and medication name into new array
                    const mergedOrder = {
                                        ID: newOrders.ID,
                                        medication: newOrders.medication,
                                        label: ''
                                        }
    
                    // push merged order to empty final array 
                    finishedOrders.push(mergedOrder); 
                }
               
                // if warning label is not 0 (No Special Instructions) 
                if (warningNumberString !== '0') {
                   
                    // create array holding multiple instructions
                    const warningLabel = [];

                    // loop through the newWarningNumber  
                    const element = newWarningNumber.forEach(element => 
                    // push corresponding instructions to empty array
                    warningLabel.push(newInstruction[element]))
                    
                     // if there are 3 warning labels add WARNING!!!
                    if (newWarningNumber.length === 3 ) {
                        const mergedOrder = {
                                            ID: newOrders.ID,
                                            medication: newOrders.medication,
                                            label: 'WARNING!!!-' +
                                            warningLabel
                                            }
                        // push merged order to empty final array       
                        finishedOrders.push(mergedOrder);
                    
                    // else return WARNING with no exclamations
                    } else {
                    const mergedOrder = {
                                        ID: newOrders.ID,
                                        medication: newOrders.medication,
                                        label: 'WARNING-' + warningLabel 
                                        }

                    // push merged order to empty final array 
                    finishedOrders.push(mergedOrder);
                    }
                }  
            } 
        }  
    } 
    console.log(finishedOrders);

    // format output 
    const formattedOrders = finishedOrders.map(order => `${order.ID}:${order.medication}:${order.label}`).join('\n');
    console.log(formattedOrders);

    return formattedOrders;
}  

handlingInstructions('Rx1:MedicationX;Rx2:MedicationY;Rx3:MedicationZ;Rx4:MedicationA','MedicationA:1,2,3;MedicationX:1,2;MedicationY:0;MedicationZ:1');

//module.exports = handlingInstructions;