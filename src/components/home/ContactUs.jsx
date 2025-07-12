"use client";
import TextFormInput from "@/components/form/TextFormInput";
import TextAreaFormInput from "@/components/form/TextAreaFormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";
import * as yup from "yup";

const ContactUs = () => {
  const contactFormSchema = yup.object({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    subject: yup.string().required("Please enter your subject"),
    message: yup.string().required("Please enter your message"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  return (
    <section id="contact" className="py-20 bg-[#f9f5f0] dark:bg-gray-950">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-md border border-green-600 bg-green-100 dark:bg-green-900/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-700 dark:text-green-400">
            Contact Us
          </span>
          <h2 className="mt-4 text-4xl font-bold text-default-950 dark:text-white leading-tight">
            Partner With Us for a Greener Future
          </h2>
          <p className="mt-5 text-lg text-gray-700 dark:text-gray-300">
            Whether you&rsquo;re an industry leader, investor, innovator, or simply
            someone passionate about sustainability — we want to hear from you.
            Reach out today to explore how Global Green Carbon can help drive
            your carbon-negative initiatives.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-md border border-default-300  p-8 dark:bg-default-50">
            <form onSubmit={handleSubmit(() => {})} className="relative">
              <h2 className="mb-5 text-2xl font-semibold text-default-950 dark:text-white">
                Send Us a Message
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <TextFormInput
                  name="name"
                  label="Name"
                  labelClassName="text-default-500"
                  className="text-sm"
                  placeholder="Your full name"
                  control={control}
                  fullWidth
                />
                <TextFormInput
                  name="email"
                  label="Email"
                  type="email"
                  labelClassName="text-default-500"
                  className="text-sm"
                  placeholder="your@email.com"
                  control={control}
                  fullWidth
                />
                <div className="sm:col-span-2">
                  <TextFormInput
                    name="subject"
                    label="Subject"
                    labelClassName="text-default-500"
                    className="text-sm"
                    placeholder="What would you like to discuss?"
                    control={control}
                    containerClassName="mb-3"
                    fullWidth
                  />
                </div>
                <div className="sm:col-span-2">
                  <TextAreaFormInput
                    name="message"
                    label="Message"
                    labelClassName="text-default-500"
                    className="text-sm"
                    rows={4}
                    placeholder="Tell us how we can collaborate..."
                    containerClassName="mb-4"
                    control={control}
                    fullWidth
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 flex items-center rounded-md bg-green-700 px-6 py-2 text-white transition-all hover:bg-green-800"
              >
                Send Message
                <LuSend className="ms-2 size-5 rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
