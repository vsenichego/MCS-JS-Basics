let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
];

// console.log(newSchool[0][0][0]);

// let i = 0
// let x = 0;
// let y = 0;
// while(i < 2) {
//     while(x < 3 && y < 3) {
//         console.log(newSchool[i][x][y]);
//         y++;
//         }
//     x++;
//     i++;
// }

for(newS of newSchool) {
            console.log(newS); 
    for(let i = 0; i < length; i++) {
        alert(i);
        console.log(newS[i]); 
    }

}