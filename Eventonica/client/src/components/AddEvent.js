// function createMerchant() {
//     let name = prompt('Enter merchant name');
//     let email = prompt('Enter merchant email');
//     fetch('http://localhost:3001/merchants', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({name, email}),
//     })
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         alert(data);
//         getMerchant();
//       });
//   }