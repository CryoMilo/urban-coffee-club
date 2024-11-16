const ContactForm = () => {
  return (
    <div className="grid h-[200px] max-w-md justify-items-end gap-4">
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-b border-gray-300 bg-transparent px-4 py-2 text-white outline-none focus:border-accent focus:ring-0"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-b border-gray-300 bg-transparent px-4 py-2 text-white outline-none focus:border-accent focus:ring-0"
        />
      </div>
      <textarea
        placeholder="Your message"
        rows="4"
        className="w-full resize-none border-b border-gray-300 bg-transparent px-4 py-2 text-white outline-none focus:border-accent focus:ring-0"
      ></textarea>
      <button className="w-fit rounded-md bg-secondary px-4 py-2 text-black outline-none">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
