import React, {BaseSyntheticEvent, useCallback, useState} from "react";

const useForgotPasswordData =()=>{
  const [pageNum, setPageNum] = useState(1); //number of current step page

  // create states which we changes in child components
  const [email,setEmail] = useState<string>("");
  const [resetCode,setResetCode] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [repeatPassword,setRepeatPassword] = useState<string>("");

  const [popupState,setPopupState] = useState<boolean>(false);
  const passwordRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const onSubmit=(e:BaseSyntheticEvent)=>{
    e.preventDefault();

    //changing content when form submitted successfully
    if (pageNum === 1){
      setPageNum(2);
    } else if (pageNum === 2) {
      setPageNum(3);
    } else if (pageNum === 3) {
      if (passwordRule.test(password) && passwordRule.test(repeatPassword)){
        setPassword("");
        setRepeatPassword("");
        console.log("password was validated")
      }
      else {
        setPopupState(true);
        console.log("password was not validated");
        return;
      }
      window.location.reload()
    }
  };

// handlers for change states in child components
  const handlePageNum = useCallback((e: React.BaseSyntheticEvent) => {
    setPageNum(e.target.value);
  }, []);
  const handleEmail = useCallback((e: React.BaseSyntheticEvent) => {
    setEmail(e.target.value);
  }, []);
  const handleResetCode = useCallback((e: React.BaseSyntheticEvent) => {
    setResetCode(e.target.value);
  },[]);
  const handlePassword = useCallback((e: React.BaseSyntheticEvent) => {
    setPassword(e.target.value);
  },[]);
  const handleRepeatPassword = useCallback((e: BaseSyntheticEvent) => {
    setRepeatPassword(e.target.value);
  },[]);
  return [pageNum, handlePageNum, email,handleEmail,resetCode,handleResetCode,password,
    handlePassword,repeatPassword,handleRepeatPassword,onSubmit,popupState,setPopupState];
};
export default useForgotPasswordData;
