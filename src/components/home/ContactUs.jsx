
"use client";

import { LuMoveRight } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import TextFormInput from "@/components/form/TextFormInput";
import TextAreaFormInput from "@/components/form/TextAreaFormInput";

const ContactUs = () => {
  const contactFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email address"),
    name: yup.string().required("Please enter your name"),
    subject: yup.string().required("Please enter a subject"),
    requirement: yup.string().required("Please describe your needs"),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const handleFormSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Your message has been sent successfully!");
        reset();
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred, please try again.");
    }
  };

  return (
    <section id="Contact Us"
      className="bg-default-100 bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat py-10 dark:bg-default-50 dark:bg-[url('../images/other/bg-lines-2-dark.png')] lg:py-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium text-default-950 md:text-4xl">
            Partner with us for climate-smart solutions
            </h2>
            <p className="my-5 text-base font-medium font-poppins font-extralight text-default-600">
            Get in touch with Global Green Carbon to explore biochar, carbon removal, and sustainable materials tailored to your goals.
            </p>
          </div>
          <div className="rounded-lg p-8">
            <div className="rounded-md bg-white p-6 dark:bg-default-100">
              <h3 className="text-2xl font-medium text-default-950">
                Don&apos;t hesitate to contact us!
              </h3>
              <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-6 space-y-4">
                <TextFormInput
                  name="name"
                  label="Your Name"
                  labelClassName="text-default-950"
                  className="h-12 rounded py-4 ps-4 text-default-950 dark:bg-default-50"
                  placeholder="Enter your name"
                  control={control}
                  fullWidth
                />
                <TextFormInput
                  name="email"
                  label="Email"
                  type="email"
                  labelClassName="text-default-950"
                  className="h-12 rounded py-4 ps-4 text-default-950 dark:bg-default-50"
                  placeholder="Enter your email address"
                  control={control}
                  fullWidth
                />
                <TextFormInput
                  name="subject"
                  label="Subject"
                  labelClassName="text-default-950"
                  className="h-12 rounded py-4 ps-4 text-default-950 dark:bg-default-50"
                  placeholder="Subject of your message"
                  control={control}
                  fullWidth
                />
                <TextAreaFormInput
                  name="requirement"
                  label="Your Needs"
                  labelClassName="text-default-950"
                  className="rounded py-4 px-4 text-default-950 dark:bg-default-50"
                  placeholder="Please write your requests or questions"
                  rows={4}
                  control={control}
                  fullWidth
                />
                <button
                  type="submit"
                  className="rounded bg-primary px-6 py-2 text-lg text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;