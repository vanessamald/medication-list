const handlingInstructions = require('./index.js');

test('test for 1 label with NO warning', () => {
    let orders = 'Rx1:MedicationX';
    let medications = 'MedicationX:0';
  
      expect(handlingInstructions(orders, medications)).toEqual(expect.stringContaining('Rx1:MedicationX:'));
})

test('test for 1 label with WARNING', () => {
    let orders = 'Rx1:MedicationX';
    let medications = 'MedicationX:3';
  
      expect(handlingInstructions(orders, medications)).toEqual(expect.stringContaining('Rx1:MedicationX:WARNING-Keep Away From Heat'));
})

test('test for 2 warning labels', () => {
    let orders = 'Rx1:MedicationX';
    let medications = 'MedicationX:1,2';
  
      expect(handlingInstructions(orders, medications)).toEqual(expect.stringContaining('Rx1:MedicationX:WARNING-Do Not Shake,Keep Refrigerated'));
  })

test('test for 3 labels with WARNING!!!', () => {
    let orders = 'Rx1:MedicationX';
    let medications = 'MedicationX:1,2,3';
  
      expect(handlingInstructions(orders, medications)).toEqual(expect.stringContaining('Rx1:MedicationX:WARNING!!!-Do Not Shake,Keep Refrigerated,Keep Away From Heat'));
})

test('test duplicate labels do not pring twice', () => {
    let orders = 'Rx1:MedicationX';
    let medications = 'MedicationX:1,1';
  
      expect(handlingInstructions(orders, medications)).toEqual(expect.stringContaining('Rx1:MedicationX:WARNING-Do Not Shake'));
})

test('test warning number not valid', () => {
    let orders = 'Rx1:MedicationX';
    let medications = 'MedicationX:1,2,4';
  
      expect(handlingInstructions(orders, medications)).toEqual(expect.stringContaining('Rx1:MedicationX:WARNING-Do Not Shake,Keep Refrigerated'));
})





