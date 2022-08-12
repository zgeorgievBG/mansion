import {useState} from "react";

import AdditionalInformation from "./AdditionalInformation";
import ContinueRegistration from "./ContinueRegistration";
import FinishRegistration from "./FinishRegistration";
import UserDetails from "./UserDetails";

const Signup = () => {
    const [page, setPage] = useState(1);

  const [userState, setUserState] = useState({});

  const nextPage = () => {
      setPage((currentPage) => currentPage + 1);
  }

  const handleSubmit = (data) => {
    setUserState(oldState => {
      const newObject = Object.assign(oldState, data);
      return newObject;
    })
  }



  switch (page) {
    case 1:
      return <UserDetails nextPage={nextPage} handleSubmit={handleSubmit}/>;
    case 2:
      return <ContinueRegistration  nextPage={nextPage}  />;
    case 3:
      return <AdditionalInformation nextPage={nextPage} handleSubmit={handleSubmit} />;
    case 4:
      return <FinishRegistration userData={userState} />;
  }

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Signup;
