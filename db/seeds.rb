animals = Animal.create([
    { 
        name: 'Willow',
        age: 4,
        breed: 'dont know',
        microchip: false,
        notes: 'is fat',
        photo: 'default_image.png'
   },
   { 
        name: 'Mr Beautiful',
        age: 2,
        breed: 'ginger',
        microchip: false,
        notes: 'is beautiful',
        photo: 'default_image.png'
    }, 
    { 
         name: 'Bob',
         age: 2,
         breed: 'Siamese',
         microchip: false,
         notes: 'is a cat',
         photo: 'default_image.png'
        },
    { 
        name: 'Bobette',
        age: 3,
        breed: 'Persian',
        microchip: true,
        microchip_number: 12345,
        notes: 'is not persian',
        photo: 'default_image.png'
   },
   { 
        name: 'Jack',
        age: 28,
        breed: 'Tiger',
        microchip: false,
        notes: 'Tigers are too cats',
        photo: 'default_image.png'
    },
    { 
        name: 'Dolly',
        age: 5,
        breed: 'Ragdoll',
        microchip: true,
        microchip_number: 54321,
        notes: 'note!',
        photo: 'default_image.png'
   },
])

daily_updates = DailyUpdate.create([
    { 
        weight: '1.4',
        drank_water: true,
        ate_food: true,
        animal: animals.first
     },
     {         
        weight: '1.5',
        drank_water: false,
        ate_food: true,
        animal: animals.first,
        notes: 'bit hand'
    }
])
