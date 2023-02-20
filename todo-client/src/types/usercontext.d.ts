interface UserContext {
  authUser: {
    pic: any;
    userId: string;
    firstName: string;
    picture: string;
    email: string;
  };
  isLoggedIn: false;
}

export { UserContext };
