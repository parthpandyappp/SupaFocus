# SupaFocus
SupaFocus is a web-based task management app that helps you stay organized and focused on what matters most. Built with NestJS, React Typescript, and TailwindCSS, SupaFocus offers a sleek and intuitive user interface, as well as a range of useful features for managing your tasks.


## Features

- Create, edit, and delete tasks
- Clear all tasks
- Clear all finished tasks
- Sign up and log in with your email address and password
- Securely store your data with PassportJs authentication and NestJS backend
- Responsive design that works well on desktop and mobile devices

## Installation

### Supa-Client

To use the React Typescript frontend of SupaFocus on your local machine, follow these steps:

1. Clone this repository to your local machine
2. Navigate to the `supa-client` directory in your terminal
3. Run `npm install` to install the necessary dependencies
4. Run `npm start` to start the frontend app
5. Open your browser and navigate to http://localhost:3000
6. Add `REACT_APP_BACKEND_URL` in `.env` file

### Supa-Backend

To use the NestJS backend of SupaFocus on your local machine, follow these steps:

1. Clone this repository to your local machine
2. Navigate to the `backend` directory in your terminal
3. Run `npm install` to install the necessary dependencies
4. Add `GOOGLE_SECRET`, `GOOGLE_CLIENT_ID` from Google console & `BACKEND_URL`, `CLIENT_URL` to `.env` file.
5. Run `npm run start:dev` to start the backend server in development mode
6. Open your browser and navigate to http://localhost:3001/

Note: The frontend and backend of SupaFocus run on separate ports, so you will need to have both the frontend and backend running in separate terminal windows in order to use the app.



## Technologies Used

SupaFocus is built using the following technologies:

- NestJS: backend framework for building scalable and efficient web applications
- React Typescript: front-end library for building user interfaces
- TailwindCSS: CSS framework for designing responsive and accessible UIs
- PassportJs: authentication middleware for Node.js
- Azure Devops: for continuous integration and deployment

## Contributing

We welcome contributions from anyone who wants to help improve SupaFocus. To get started, fork this repository, make your changes, and submit a pull request.

## License

SupaFocus is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
