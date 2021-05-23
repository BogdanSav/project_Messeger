import React, {BaseSyntheticEvent, useCallback, useState} from "react";

const useForgotPasswordData =()=>{
  const [pageNum, setPageNum] = useState(1); //number of current step page

  // create states which we changes in child components
  const [email,setEmail] = useState<string>("");
  const [resetCode,setResetCode] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [repeatPassword,setRepeatPassword] = useState<string>("");

  const [popupResetCode, setPopupResetCode] = useState<boolean>(false);
  const [popupPassState,setPopupPassState] = useState<boolean>(false);
  const [popupPassMismatch, setPopupPassMismatch] = useState<boolean>(false);
  const resetCodeRule = /^(?=.*[A-Za-z\d])[A-Za-z\d]{6,}$/; //line must contain only letters and numbers
  const passwordRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const onSubmit=(e:BaseSyntheticEvent)=>{
    e.preventDefault();

    //changing content when form submitted successfully
    if (pageNum === 1){
      setPageNum(2);
    }
    else if (pageNum === 2) {
      if (resetCodeRule.test(resetCode)) {
        setPageNum(3);
      }
      else {
        setPopupResetCode(true);
        return;
      }
    }
    else if (pageNum === 3) {
      if (passwordRule.test(password) && passwordRule.test(repeatPassword)){
        if (password === repeatPassword) {
          setPageNum(4);
          setTimeout(()=> {
            window.location.replace("/signin");
          }, 5500);
        }
        else if (password !== repeatPassword) {
          setPopupPassMismatch(true);
          // setPassword("");
          // setRepeatPassword("");
          return;
        }
      }
      else {
        setPopupPassState(true);
        return;
      }
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
  return [pageNum,handlePageNum,email,handleEmail,resetCode,handleResetCode,password,
    handlePassword,repeatPassword,handleRepeatPassword,onSubmit,popupResetCode,setPopupResetCode,
    popupPassState,setPopupPassState,popupPassMismatch,setPopupPassMismatch];
};
export default useForgotPasswordData;
