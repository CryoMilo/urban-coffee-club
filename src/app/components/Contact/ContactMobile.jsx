import ContactForm from "./ContactForm";

const ContactMobile = () => {
  return (
    <div id="contact" className="grid place-content-center bg-black p-10">
      <p className="pb-5 text-center font-primary text-2xl text-white">
        Contact Us
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactMobile;
