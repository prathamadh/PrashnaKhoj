// const { getData } = require("./service");

// module.exports = {
//   getdata: (req, res) => {
//     getData((err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           success: false,
//           message: "Database connection error",
//         });
//       }

//       if (!results) {
//         return res.status(200).json({
//           success: false,
//           message: "record not found",
//         });
//       }

//       return res.status(200).json({
//         success: true,
//         data: results,
//       });

//     });
//   },
// };
