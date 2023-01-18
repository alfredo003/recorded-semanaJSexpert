const assert = require('assert')
const Manager = require('./manager')
const Employee = require('./employee')
const Util = require('./util')


const GENDER = {
  male:'male',
  female: 'female'
}

{
  const employee = new Employee({
    name: 'Generosa Manuel',
    gender: GENDER.female
  })

  assert.throws(()=>employee.birthYear,{ message: 'you must define age first!!'})
}

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = ()=> CURRENT_YEAR


{
  const employee = new Employee({

    name: 'alfredo',
    age: 20,
    gender: GENDER.male
  })
  assert.deepStrictEqual(employee.name,"Mr. alfredo")
  assert.deepStrictEqual(employee.age, undefined)
  assert.deepStrictEqual(employee.gender, undefined)
  assert.deepStrictEqual(employee.grossPay,Util.formatCurrency(5000.40))
  assert.deepStrictEqual(employee.netPay,Util.formatCurrency(4000.32))
  
  const expectedBirthYear = 2001
  assert.deepStrictEqual(employee.birthYear,expectedBirthYear)

employee.birthYear = new Date().getFullYear() - 80
assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

  employee.age = 80
  assert.deepStrictEqual(employee.birthYear, 1941)

  console.log("\n------Employee-----")
  console.log('Name :',employee.name)
  console.log('Age :',employee.age )
  console.log('Gender :',employee.gender )
  console.log('GrossPay :',employee.grossPay)
  console.log('NetPlay :',employee.netPay)

}

{

  const manager = new Manager({
    name:'Fernanda',
    age: 18,
    gender:GENDER.female
  })

  assert.deepStrictEqual(manager.name,"Ms. Fernanda")
  assert.deepStrictEqual(manager.age, undefined)
  assert.deepStrictEqual(manager.gender, undefined)
  assert.deepStrictEqual(manager.birthYear, 2003)
  assert.deepStrictEqual(manager.grossPay , Util.formatCurrency(5000.40))
  assert.deepStrictEqual(manager.bonuses , Util.formatCurrency(2000))
  assert.deepStrictEqual(manager.netPay , Util.formatCurrency(6000.32) )

  console.log("\n------Manager-----")
  console.log('Name :',manager.name)
  console.log('Age :',manager.age )
  console.log('Gender :',manager.gender )
  console.log('GrossPay :',manager.grossPay)
  console.log('Bonuses :',manager.bonuses)
  console.log('netPay :',manager.netPay)

}