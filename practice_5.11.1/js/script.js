let newSchools = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
]

for(let newSchool of newSchools) {
  for (let element of newSchool) {
    for(let text of element) {
          console.log(text);
    }
  }
}