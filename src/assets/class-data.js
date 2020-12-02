let classData = [{
  id: 1,
  name: "CS 142 - Introduction to Computer Programming",
  classNum: 142,
  prerequisite: "Algebra",
  whenTaught: ["Fall", "Winter", "Spring"]
},
{
  id: 2,
  name: "CS 224 - Introduction to Computer Systems",
  classNum: 224,
  prerequisite: "CS 142; or instructor's consent",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 3,
  name: "CS 235 - Data Structures and Algorithms",
  classNum: 235,
  prerequisite: "CS 142",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 3,
  name: "CS 236 - Discrete Structures",
  classNum: 236,
  prerequisite: "CS 235",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 4,
  name: "CS 240 - Advanced Programming Concepts",
  classNum: 240,
  prerequisite: "CS 236; or instructor's consent",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 5,
  name: "CS 252 - Introduction to Computation Theory",
  classNum: 252,
  prerequisite: "CS 256 or concurrent enrollment",
  whenTaught: ["Fall", "Winter", "Spring",]
},
{
  id: 6,
  name: "CS 312 - Algorithm Design and Analysis",
  classNum: 312,
  prerequisite: "CS 240",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 7,
  name: "CS 324 - Systems Programming",
  classNum: 324,
  prerequisite: "CS 224 & CS 240",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 8,
  name: "CS 340 - Software Design",
  classNum: 340,
  prerequisite: "CS 240",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 9,
  name: "CS 404 - Ethics and Computers in Society",
  classNum: 404,
  prerequisite: "CS 240 & WRTG 316",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 10,
  name: "MATH 112 - Calculus 1",
  classNum: 112,
  prerequisite: "None",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 11,
  name: "MATH 113 - Calculus 2",
  classNum: 113,
  prerequisite: "MATH 112",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
//TODO:PHSCS 121
{
  id: 12,
  name: "PHSCS 121 - Introduction to Newtonian Mechanics",
  classNum: 121,
  prerequisite: "Calculus",
  whenTaught: ["Fall", "Winter", "Spring"]
},
{
  id: 13,
  name: "WRTG 316 - Technical Communication",
  classNum: 316,
  prerequisite: "First-year writing, junior or senior status",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 14,
  name: "MATH 213 - Elementary Linera Algebra",
  classNum: 213,
  prerequisite: "MATH 112",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 15,
  name: "MATH 215 - Computational Linear Algebra",
  classNum: 215,
  prerequisite: "MATH 112",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 16,
  name: "MATH 431 - Probability Theory",
  classNum: 431,
  prerequisite: "MATH 313; or MATH 213",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 17,
  name: "STAT 121 - Principles of Statistics",
  classNum: 121,
  prerequisite: "None",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 18,
  name: "STAT 201 - Statistics for Engineers and Scientists",
  classNum: 201,
  prerequisite: "MATH 112; or MATH 113; or MATH 119",
  whenTaught: ["Fall", "Winter", "Spring"]
},
{
  id: 19,
  name: "CS 260 - Web Programming",
  classNum: 260,
  prerequisite: "CS 142",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 20,
  name: "CS 329 - Testing, Analysis, and Verification",
  classNum: 329,
  prerequisite: "CS 240",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 21,
  name: "CS 330 - Concepts of Programming Languages",
  classNum: 330,
  prerequisite: "CS 240",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 22,
  name: "CS 345 - Operating Systems Design",
  classNum: 345,
  prerequisite: "CS 224 & CS 240",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 23,
  name: "CS 355 - Interactive Graphics and Image Processing",
  classNum: 355,
  prerequisite: "CS 240; or CS 240 & MATH 213 & MATH 215",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 24,
  name: "CS 356 - Designing the User Experience",
  classNum: 356,
  prerequisite: "CS 240",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 25,
  name: "CS 401R - Topics in Computer Science",
  classNum: 401,
  prerequisite: "Instructors Consent",
  whenTaught: ["Winter"]
},
{
  id: 26,
  name: "CS 412 - Linear Programming and Convex Optimization",
  classNum: 412,
  prerequisite: "MATH 213 & MATH 215; or instructor's consent",
  whenTaught: [""]
},
{
  id: 27,
  name: "CS 428 - Software Engineering",
  classNum: 428,
  prerequisite: "CS 340",
  whenTaught: [""]
},
{
  id: 28,
  name: "CS 431 - Algorithmic Languages and Compilers",
  classNum: 431,
  prerequisite: "CS 340",
  whenTaught: [""]
},
{
  id: 29,
  name: "CS 450 - Computer Vision",
  classNum: 450,
  prerequisite: "CS 312; or CS 312 & MATH 213 & MATH 215",
  whenTaught: ["Winter"]
},
{
  id: 30,
  name: "CS 452 - Database Modeling Concepts",
  classNum: 452,
  prerequisite: "CS 240",
  whenTaught: [""]
},
{
  id: 31,
  name: "CS 453 - Fundamentals of Information Retrieval",
  classNum: 453,
  prerequisite: "CS 240",
  whenTaught: ["Spring"]
},
{
  id: 32,
  name: "CS 455 - Computer Graphics",
  classNum: 455,
  prerequisite: "CS 355 & MATH 213 & MATH 215; or CS 355",
  whenTaught: ["Fall"]
},
{
  id: 33,
  name: "CS 456 - Introduction to User Interface Software",
  classNum: 456,
  prerequisite: "CS 240 & CS 356",
  whenTaught: ["Winter"]
},
{
  id: 34,
  name: "CS 460 - Computer Communications and Networking",
  classNum: 460,
  prerequisite: "CS 324",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 35,
  name: "CS 462 - Large-Scale Distributed System Design",
  classNum: 462,
  prerequisite: "CS 260 & CS 324; or equivalent experience",
  whenTaught: ["Winter"]
},
{
  id: 36,
  name: "CS 465 - Computer Science",
  classNum: 465,
  prerequisite: "CS 324; or concurrent enrollment",
  whenTaught: ["Fall"]
},
{
  id: 37,
  name: "CS 470 - Introduction to Artificial Intelligence",
  classNum: 470,
  prerequisite: "CS 312 & MATH 215 & STAT 121; or CS 312 & MATH 215 & STAT 201; CS 312 & STAT 121",
  whenTaught: ["Fall"]
},
{
  id: 38,
  name: "CS 472 - Introduction to Machine Learning",
  classNum: 472,
  prerequisite: "CS 312 & MATH 215 & STAT 121; or CS 312 & MATH 215 & STAT 201; or CS 312 & STAT 121",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 39,
  name: "CS 474 - Introduction to Deep Learning",
  classNum: 474,
  prerequisite: "CS 312; or CS 312 & MATH 213 & MATH 215",
  whenTaught: ["Fall"]
},
{
  id: 40,
  name: "CS 486 - Verification and Validation",
  classNum: 486,
  prerequisite: "CS 312",
  whenTaught: ["Fall"]
},
{
  id: 41,
  name: "CS 501R - Advanced Topics in Computer Science",
  classNum: 501,
  prerequisite: "Instructor's Consent",
  whenTaught: ["Fall", "Spring"]
},
{
  id: 42,
  name: "CS 513 - Robust Control",
  classNum: 513,
  prerequisite: "MATH 213 & MATH 215",
  whenTaught: ["Winter"]
},
{
  id: 43,
  name: "CS 405 - Creating and Managing a Software Business",
  classNum: 405,
  prerequisite: "CS 240 & WRTG 316",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 44,
  name: "EC EN 424 - Computer Systems",
  classNum: 424,
  prerequisite: "EC EN 323 & EC EN 330",
  whenTaught: ["Winter"]
},
{
  id: 45,
  name: "EC EN 425 - Real-Time Operating Systems",
  classNum: 425,
  prerequisite: "EC EN 323 & EC EN 330",
  whenTaught: ["Fall"]
},
{
  id: 46,
  name: "IT&C 567 - Cybersecurity and Penetration Testing",
  classNum: 567,
  prerequisite: "IT&C 366; or CS 465; or IS 560",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 47,
  name: "MATH 411 - Numerical Methods",
  classNum: 411,
  prerequisite: "MATH 334",
  whenTaught: ["Winter"]
},
{
  id: 48,
  name: "MATH 485 - Mathmetical Cryptography",
  classNum: 485,
  prerequisite: "MATH 313; or MATH 213",
  whenTaught: ["Fall"]
},
{
  id: 49,
  name: "CS 480 - Software Engineering Capstone 1",
  classNum: 480,
  prerequisite: "CS 329 & CS 340; Minimum 3.0 CS GPA or instructor's consent",
  whenTaught: ["Fall"]
},
{
  id: 50,
  name: "CS 481 - Software Engineering Capstone 2",
  classNum: 481,
  prerequisite: "CS 480; Minimum 3.0 CS GPA or instructor's consent",
  whenTaught: ["Winter"]
},
{
  id: 51,
  name: "CS 482 - Data Science Capstone 1",
  classNum: 482,
  prerequisite: "CS 240 & CS 312; Minimum 3.0 CS GPA or instructor's consent",
  whenTaught: ["Fall"]
},
{
  id: 52,
  name: "CS 483 - Data Science Capstone 2",
  classNum: 483,
  prerequisite: "CS 482; Minimum 3.0 CS GPA or instructor's consent",
  whenTaught: ["Winter"]
},
{
  id: 53,
  name: "CS 493R - Computing Competitions",
  classNum: 493,
  prerequisite: "CS 240; Minimum 3.0 CS GPA or instructor's consent",
  whenTaught: ["Fall", "Winter"]
},
{
  id: 54,
  name: "CS 494 - Capstone 1",
  classNum: 494,
  prerequisite: "CS 240; Minimum 3.0 CS GPA or instructor's consent",
  whenTaught: ["Fall"]
},
{
  id: 55,
  name: "CS 495 - Capstone 2",
  classNum: 495,
  prerequisite: "CS 240; Minimum 3.0 CS GPA or instructor's consent",
  whenTaught: ["Winter"]
},
{
  id: 56,
  name: "CS 497R - Undergraduate Research",
  classNum: 497,
  prerequisite: "Students must turn in signed research agreement at least 1 business day before add/drop deadline in order to receive permission-to-add code. Research agreement form can be found at http://cs.byu.edu or in the CS Department office.",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
{
  id: 57,
  name: "CS 498R",
  classNum: 498,
  prerequisite: "CS 240",
  whenTaught: ["Fall", "Winter", "Spring", "Summer"]
},
]

export default classData;
