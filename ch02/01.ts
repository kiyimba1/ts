var item1: any = { id: 1, name: 'item 1' }
item1 = { id: 2 }

// explicit casting
var item1 = <any>{ id: 1, name: 'item1' }
item1 = { id: 2 }

var item1 = { id: 1, name: "item" } as any
item1 = { id: 2 }