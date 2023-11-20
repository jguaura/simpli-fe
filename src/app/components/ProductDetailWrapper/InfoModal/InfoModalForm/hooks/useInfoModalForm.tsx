import { createLead } from "@/app/actions/create-leads";
import { Lato } from "next/font/google";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from '../InfoModalForm.module.css';
export type Inputs = {
  name: string;
  email: string;
};

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

const useInfoModalForm = () => {
  const [leadResponse, setLeadResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await createLead(data);
    setLeadResponse(response);
  };
  const nameInputStyles = `${errors?.name?.message ? 'error' : ''} ${
    lato.className
  }`;
  const emailInputStyles = `${errors?.email?.message ? 'error' : ''} ${
    lato.className
  }`;
  const submitBtnStyles = `${styles.submitBtn} btn`;
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    nameInputStyles,
    emailInputStyles,
    submitBtnStyles,
    leadResponse
  };
};

export default useInfoModalForm;
