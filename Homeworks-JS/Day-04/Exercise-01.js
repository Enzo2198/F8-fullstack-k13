/*

   initialize function findCommonNames

   let nameA; let commonName

            │
            │
            │
            ▼
   for nameA[arr[i].name] = true

       0 < i < arr1.length

             │
             │
             │
             ▼
   for 0 < j < arr2.length

             │
             │
             │
             ▼
   if nameA[arr2[j].name] === true               yes
                                               ──────────►  commonName[arr2[j].age] = arr[j].name
   && commonName[arr2[j].name] !== undefined
                                                                        │
              │                                                         │
              │                                                         ▼
              │                                                return Object.value(commonNames)
              ▼
         do not thing

 */

function findCommonNames(arr1, arr2) {
    let nameA = {}
    let commonNames = []

    for (let i = 0; i < arr1.length; i++) {
        nameA[arr1[i].name] = true
    }
    for (let j = 0; j < arr2.length; j++) {
        if (nameA[arr2[j].name] === true && commonNames[arr2[j].name] === undefined) {
            commonNames[arr2[j].age] = arr2[j].name;
        }
    }
    return Object.values(commonNames)
}

/*
          initialize function findCommonAgeAndname

          let nameAndAgeA; commonNameAndAge

                   │
                   │
                   │
                   ▼
          let keyNameAndAge = arr1[i].name arr1[i].age

          nameAndAgeA[keyNameAndAge] = true

              0 < i < arr1.length

                    │
                    │
                    │
                    ▼
          for 0 < j < arr2.length

          let keyNameAndAge = arr2[j].name arr2[j].age
                    │
                    │
                    │
                    ▼
          if nameAndAgeA[keyNameAndAge] === true        yes
                                                      ──────────►  commonNameAndAge[keyNameAndAge] = keyNameAndAge
  && commonNameAndAge[keyNameAndAge] === undefined
                                                                               │
                     │                                                         │
                     │                                                         ▼
                     │                                                 return Object.values(commonNameAndAge)
                     ▼
                do not thing

 */

function findCommonAgesAndName(arr1, arr2) {
    let nameAndAgeA = {}
    let commonNameAndAge = {}
    // console.log(commonNames)
    for (let i = 0; i < arr1.length; i++) {
        let keyNameAndAge = `Name: ${arr1[i].name} - Age: ${arr1[i].age}`
        nameAndAgeA[keyNameAndAge] = true
    }
    for (let j = 0; j < arr2.length; j++) {
        let keyNameAndAge = `Name: ${arr2[j].name} - Age: ${arr2[j].age}`
        if (nameAndAgeA[keyNameAndAge] === true && commonNameAndAge[keyNameAndAge] === undefined) {
            commonNameAndAge[keyNameAndAge] = keyNameAndAge
        }
    }
    return Object.values(commonNameAndAge)
}

const companyA = [
    { id: 1, name: 'Minh', age: 25 },
    { id: 2, name: 'An', age: 30 },
    { id: 3, name: 'Bình', age: 28 },
    { id: 4, name: 'Dũng', age: 25 }
];

const companyB = [
    { id: 5, name: 'Bình', age: 32 },
    { id: 6, name: 'Chi', age: 28 },
    { id: 7, name: 'An', age: 29 },
    { id: 8, name: 'Dũng', age: 25 }
];

console.log(findCommonNames(companyA, companyB));
console.log(findCommonAgesAndName(companyB, companyA));
