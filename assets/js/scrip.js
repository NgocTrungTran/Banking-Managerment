// class Customer {
//     constructor(ID, Fullname, Email, Phone, Address, Balance) {
//         this.ID = ID;
//         this.Fullname = Fullname;
//         this.Email = Email;
//         this.Phone = Phone;
//         this.Address = Address;
//         this.Balance = Balance;
//     }
// }

// var customers = [];

// function init() {
//         books = [
//             new Book("1", "Tran Trung", "trung@gmail.com", "0987654321", "Quang Binh", 100000),
//             new Book("2", "Phong Tran", "phong@gmail.com", "0123652148", "Hue", 0),
//             new Book("3", "Minh Hoang", "minh@gmail.com", "0123652147", "hue", 0),
//             new Book("4", "A Le", "ale@gmail.com", "0123652149", "Hue", 0),
//             new Book("5", "A Dao", "adao@gmail.com", "0123652142", "Hue", 0),
//         ]
// }

// function renderCustomers() {
//     let tableCustomer = document.querySelector('.table>tbody');
//     let htmls = data.map(function (customer, index) {
//         return `
//             <tr id="tr_${index}">
//                 <td style="text-align: center">${index + 1}</td>
//                 <td>${book.bookID}</td>
//                 <td>${book.bookName}</td>
//                 <td>${book.bookAuthor}</td>
//                 <td>${book.bookTopic}</td>
//                 <td style="text-align: right">${book.bookPublishing}</td>
//                 <td style="text-align: right">${book.bookLocation}</td>
//                 <td id="action_${index}" style="text-align: center">
//                     <button class="btn-change" onclick="change(${index})"><i class="fa-solid fa-pen"></i></button>
//                     <button class="btn-remove" onclick="remove(${index})"><i class="fa-solid fa-trash"></i></button>
//                     <button class="btn-updata d-none" onclick="updata(${index})"><i class="fa-solid fa-circle-check"></i></button>
//                     <button class="btn-cancel d-none" onclick="cancel(${index})"><i class="fa-solid fa-rotate-left"></i></button>
//                 </td>
//             </tr>

//             <tr>
//                     <td>${customer.ID}</td>
//                     <td>${customer.Fullname}</td>
//                     <td>${customer.Email}</td>
//                     <td class="text-center">${customer.Phone}</td>
//                     <td>${customer.Address}</td>
//                     <td class="text-end num-space">${customer.Balance}</td>
//                     <td class="text-center">
//                         <a class="btn btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Edit">
//                             <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
//                         </a>
//                     </td>
//                     <td class="text-center">
//                         <a class="btn btn-outline-success" title="" data-toggle="tooltip" href="deposit.html"
//                             data-bs-original-title="Deposit">
//                             <i class="fa fa-plus" aria-hidden="true"></i>
//                         </a>
//                     </td>
//                     <td class="text-center">
//                         <a class="btn btn-outline-warning" title="" data-toggle="tooltip" href="withdraw.html"
//                             data-bs-original-title="Withdraw">
//                             <i class="fa fa-minus" aria-hidden="true"></i>
//                         </a>
//                     </td>
//                     <td class="text-center">
//                         <a class="btn btn-outline-primary" title="" data-toggle="tooltip" href="transfer.html"
//                             data-bs-original-title="Transfer">
//                             <i class="fa fa-exchange" aria-hidden="true"></i>
//                         </a>
//                     </td>
//                     <td class="text-center">
//                         <a class="btn btn-outline-danger" title="" data-toggle="tooltip" href="suspension.html"
//                             data-bs-original-title="Suspended">
//                             <i class="fa fa-ban" aria-hidden="true"></i>
//                         </a>
//                     </td>
//                 </tr>
//         `;
//     })
//     tableCustomer.innerHTML = htmls.join("");
//     // setData(key_data, books);
// }

