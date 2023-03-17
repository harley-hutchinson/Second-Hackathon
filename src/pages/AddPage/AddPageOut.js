import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_TRANSACTION } from "../../utils/apiCalls.mjs";
import "./AddPageOut.scss";

const AddPageOut = () => {
  const navigate = useNavigate();

  const [outFormFields, setOutFormFields] = useState({
    amount: "",
    title: "",
    category: "",
    desc: "",
  });

  const handleInFormSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      title: outFormFields.title,
      amount: outFormFields.amount,
      category: outFormFields.category,
      description: outFormFields.desc,
      isIncome: false,
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
    setOutFormFields({
      ...outFormFields,
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
        value={outFormFields.amount}
        onChange={handleInFormChange}
        className="add-out__form__input"
      />

      <label htmlFor="title">Enter title</label>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        value={outFormFields.title}
        onChange={handleInFormChange}
        className="add-out__form__input"
      />

      <label htmlFor="category">Enter category</label>
      <input
        type="text"
        name="category"
        placeholder="Category..."
        value={outFormFields.category}
        onChange={handleInFormChange}
        className="add-out__form__input"
      />

      <label htmlFor="desc">Enter description</label>
      <textarea
        type="text"
        name="desc"
        placeholder="Description..."
        value={outFormFields.desc}
        onChange={handleInFormChange}
        className="add-out__form__input"
      />

      <button type="submit" className="add-out__form__submit">
        Add
      </button>
    </form>
  );
};

export default AddPageOut;
