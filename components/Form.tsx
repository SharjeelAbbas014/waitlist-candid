"use client";

import { useState } from "react";
// config
import config from "@/config/general";

const findRequestURL = (mail: string) => {
  const formURL = config.subscribeForm.split("/");
  const getNumbers = formURL.filter((item) => Number(item) && item);

  const accountID = getNumbers[0];
  const formID = getNumbers[1];

  // eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiY2ZjYmI0NjQyZjJmOGM0MzY5ZDEyYmFlNzljOWM4ZWM5NzgxOGQzOTJjMDc1NmQ1NWQxZGZiMDcwNzBhOGU5YmY2ZTUxZmE4YmQ5NmVmYWIiLCJpYXQiOjE3MDk0NTcyMDMuMTIzOTg1LCJuYmYiOjE3MDk0NTcyMDMuMTIzOTg3LCJleHAiOjQ4NjUxMzA4MDMuMTIwNzA3LCJzdWIiOiI4NjM2NzQiLCJzY29wZXMiOltdfQ.Kyqaijj6zB_4auRmM--UslFNteb8PmdlbB8kfcPB40fHbRolfNMda77BBE-Smqsk-uB0wArzJG9E92YrsQYBKvTmy3L_DL01mHMvkaLtDiBn1LQCiEpdx8vu6ukxP8JAbTJO-9VxgOQS1T2uIx3PDb-TTLWp3hcqpgVGs_FVNVIlchkIfF_kkbGgQoJWhX1tL67dS6Qi7rxo1DJmZlSYJNyhc0BbC9cfaONhAtLWYXrQMzIOEzh69D5QTgyUH_wliIGW-eG97IjhXF4A_wYKiLcAjA9NlK7nF8uPNZwTZGbr3IpgtR3_9NEPN5jxrEb7KLj-XS0Cf41diETfD-CEAr7SPLgqHElABU4I7dTz6laXwNYtih-bRANv4sEW8grId-MocLpwenzrDyfV2rm8FpSKqMsH-nhZTDy4B8m2RkPcwe-UAOguVGCLn6poqSG6VwT98HaRXTA8e_4GAM0c-4k9F3lz4KyQqInp6nVu9UTckbh8QIjmTfAbMO4E6jkXcAdbzodWwORFFsO4l1yz4RWaLf-2xfnvtRFpH8F9bLe_4sec0zTtmFSqxQICY3hsiCeJOvDGh8XtaRV11izMHBW58DMVqVx8TSpn5OqvioSBr2KBENQp2fNo5gC3bSuys7V_3H4yjq7tKo0_ROEZR15GYrb04EhtE8Pr7ERA7I8

  const requestURL = `https://assets.mailerlite.com/jsonp/853479/forms/114773983781455277/subscribe?fields[email]=${mail}`;

  return requestURL;
};

const Form = () => {
  const [mail, setMail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch(findRequestURL(mail), {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setMessage("Thanks for subscribing!");
        } else {
          setMessage("Something went wrong, please try again.");
        }
      })
      .catch(() => setMessage("Something went wrong, please try again."))
      .finally(() => {
        setMail("");
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="relative">
        <div className="min-w-0 flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="fields[email]"
            autoComplete="email"
            aria-invalid="false"
            id="email"
            placeholder="Enter your email"
            className="form-control block w-full rounded-sm bg-gray px-4 py-5 text-base text-black placeholder-gray-500 focus:outline-none"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="mt-1 ml-2 sm:mt-3 sm:ml-3 flex-1 sm:flex-auto w-full sm:w-auto">
          <button
            type="submit"
            className="relative sm:absolute right-2 sm:top-2 w-full sm:w-auto block  rounded-sm bg-activeButton py-3 px-4 font-medium text-white shadow hover:bg-activeButton disabled:cursor-not-allowed"
            disabled={mail === "" || loading}
          >
            Join Waitlist
          </button>
        </div>
      </div>
      <span className="text-sm px-2 italic text-red-500">{message}</span>
    </form>
  );
};

export default Form;
