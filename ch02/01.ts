var item1: any = { id: 1, name: 'item 1' }
item1 = { id: 2 }

// explicit casting
var item1 = <any>{ id: 1, name: 'item1' }
item1 = { id: 2 }

var item1 = { id: 1, name: "item" } as any
item1 = { id: 2 }

// the let keyword
let index: number = 0
if (index == 0) {
    let index: number = 2
    console.log(`index = ${index}`)
}
console.log(`index = ${index}`)

// cont values
const constValue = "this should not be changed"
// constValue = "updated"

// unionTypes
function printOject(obj: string | number) {
    console.log(`obj = ${obj}`)
}

printOject(1)
printOject("string value")

// enums

enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log(`enum value is : ${state}`)
    switch (state) {
        case DoorState.Open:
            {
                console.log(`Door is Open`)
                break;
            }
        case DoorState.Closed:
            {
                console.log(`Door is closed`)
                break;
            }
    }
}

// nullish coalescing
function nullishCheck(a: number | undefined | null) {
    console.log(`a : ${a ?? `undefined or null`}`)
}

nullishCheck(1)
nullishCheck(null)
nullishCheck(undefined)