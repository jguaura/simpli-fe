"use client"

import { createLead } from "@/app/actions/create-leads";
import { Lato } from "next/font/google";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from '../InfoModalForm.module.css';
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export type Inputs = {
  name: string;
  email: string;
};

interface LeadAPIResponse {
  error?: string;
  email?: string;
  name?: string;
}

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

const useInfoModalForm = () => {
  const router = useRouter()
  const [leadResponse, setLeadResponse] = useState<LeadAPIResponse>({});
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await createLead(data);
    setLeadResponse(response);
    if(!response.error) router.push('/thank-you')
  };

  const nameInputStyles = `${errors?.name?.message ? 'error' : ''} ${lato.className}`;
  const emailInputStyles = `${errors?.email?.message ? 'error' : ''} ${lato.className}`;
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
