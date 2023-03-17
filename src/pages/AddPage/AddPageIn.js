import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_TRANSACTION } from "../../utils/apiCalls.mjs";
import "./AddPageIn.scss";

const AddPageIn = () => {
  const navigate = useNavigate();

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

    setTimeout(() => {
      navigate("/");
    }, 1000);
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
        className="add-in__form__input"
      />

      <label htmlFor="title">Enter title</label>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        value={inFormFields.title}
        onChange={handleInFormChange}
        className="add-in__form__input"
      />

      <label htmlFor="category">Enter category</label>
      <input
        type="text"
        name="category"
        placeholder="Category..."
        value={inFormFields.category}
        onChange={handleInFormChange}
        className="add-in__form__input"
      />

      <label htmlFor="desc">Enter description</label>
      <textarea
        type="text"
        name="desc"
        placeholder="Description..."
        value={inFormFields.desc}
        onChange={handleInFormChange}
        className="add-in__form__input"
      />

      <button type="submit" className="add-in__form__submit">
        Add
      </button>
    </form>
  );
};

export default AddPageIn;
