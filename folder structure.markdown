## folder structure
- routes --> schemas --> controllers(Presentation Layer) --> domain [service(Business Logic Layer),repository(Data Access Layer)]
- infrastructure : config db other 

## example folder structure
project/
│
├── src/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── userRoutes.js
│   │   │   └── orderRoutes.js
│   │   └── controllers/
│   │       ├── userController.js
│   │       └── orderController.js
│   │
│   ├── domain/
│   │   ├── user/
│   │   │   ├── userService.js
│   │   │   ├── userRepository.js
│   │   │
│   │   └── order/
│   │       ├── orderService.js
│   │       ├── orderRepository.js
│   │       
│   │
│   ├── infrastructure/
│   │   ├── database.js
│   │   └── logger.js
│   │
│   └── app.js
│
└── package.json