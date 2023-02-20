import jwt from "jwt-decode";
import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { userState } from "../states/userState";
import { TodoItems, TodoCreate } from "../components";

const Home = () => {
  const { user } = useParams();
  const { isLoggedIn } = useRecoilValue(userState);
  const setUserState = useSetRecoilState<any>(userState);

  useEffect(() => {
    (async () => {
      if (user) {
        const obtainedUser: any = jwt(user);
        const { userId, email, firstName, pic: picture } = obtainedUser;
        setUserState({
          authUser: { userId, email, firstName, pic: picture },
          isLoggedIn: true,
        });
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(
          "user",
          JSON.stringify({ userId, email, firstName, pic: picture })
        );
      }
    })();
  }, [user, setUserState]);
  return (
    <div className="flex flex-col gap-3 mx-auto w-5/6 md:w-2/6 grow items-start">
      <TodoItems />
      {isLoggedIn && <TodoCreate />}
    </div>
  );
};

export { Home };
