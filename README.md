# React Application for Company and Product Management

This project is a React application designed to manage companies and products, featuring user authentication and an inventory system. It follows best practices in React development, including the use of Atomic Design principles, Context API for global state management, and custom hooks for reusable logic.

## Features

- **Company Management**: 
  - Form to capture company information (NIT, Name, Address, Phone).
  - Admin users can add, edit, and delete companies.

- **Product Management**: 
  - Form to capture product details (Code, Name, Features, Price in multiple currencies, Company).
  - Admin users can register products associated with companies.

- **User Authentication**: 
  - Login form for user authentication (Email and Password).
  - Passwords are encrypted for security.

- **Inventory Management**: 
  - View of products in an inventory table.
  - Functionality to download inventory data as a PDF and send it via email using an API.

- **User Roles**: 
  - Admin: Full access to manage companies and products.
  - External: View companies as a guest.

## Technologies Used

- React
- Context API
- React Router
- Custom Hooks
- CSS for styling
- API integration for backend communication

## Project Structure

```
react-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── assets
│   │   └── styles
│   │       └── global.css
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button.js
│   │   │   ├── Input.js
│   │   │   └── Label.js
│   │   ├── molecules
│   │   │   ├── FormField.js
│   │   │   └── ProductCard.js
│   │   ├── organisms
│   │   │   ├── CompanyForm.js
│   │   │   ├── ProductForm.js
│   │   │   ├── LoginForm.js
│   │   │   └── InventoryTable.js
│   │   └── templates
│   │       ├── AdminDashboard.js
│   │       └── ExternalView.js
│   ├── contexts
│   │   └── GlobalStateContext.js
│   ├── hooks
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── usePDF.js
│   ├── pages
│   │   ├── CompanyPage.js
│   │   ├── ProductsPage.js
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   └── HomePage.js
│   ├── services
│   │   └── api.js
│   ├── utils
│   │   ├── encryption.js
│   │   └── validation.js
│   ├── App.js
│   ├── index.js
│   └── router
│       └── AppRouter.js
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.