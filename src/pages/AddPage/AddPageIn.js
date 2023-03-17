import { useState } from "react";
import { POST_TRANSACTION } from "../../utils/apiCalls.mjs";
import "./AddPageIn.scss";

const AddPageIn = () => {
  const [inFormFields, setInFormFields] = useState({
    amount: "",
    title: "",
    category: "",
    desc: "",
  });

  const handleInFormSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      title: inFormFields.title,
      amount: inFormFields.amount,
      category: inFormFields.category,
      description: inFormFields.desc,
      isIncome: true,
      date: new Date().toLocaleDateString(),
    };

    console.log(newTransaction);

    try {
      POST_TRANSACTION(newTransaction);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInFormChange = (e) => {
    setInFormFields({
      ...inFormFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="add-in__form" onSubmit={handleInFormSubmit}>
      <label htmlFor="amount">Enter amount</label>
      <input
        type="text"
        name="amount"
        placeholder="Amount..."
        value={inFormFields.amount}
        onChange={handleInFormChange}
      />

      <label htmlFor="title">Enter title</label>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        value={inFormFields.title}
        onChange={handleInFormChange}
      />

      <label htmlFor="category">Enter category</label>
      <input
        type="text"
        name="category"
        placeholder="Category..."
        value={inFormFields.category}
        onChange={handleInFormChange}
      />

      <label htmlFor="desc">Enter description</label>
      <textarea
        type="text"
        name="desc"
        placeholder="Description..."
        value={inFormFields.desc}
        onChange={handleInFormChange}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddPageIn;
