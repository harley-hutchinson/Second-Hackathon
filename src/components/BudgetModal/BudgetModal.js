import "./BudgetModal.scss";

const BudgetModal = ({ show, modalCloseHandler, submitHandler }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="budget-modal" onClick={modalCloseHandler}>
      <div
        className="budget-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="budget-modal__header">Enter your budget</h2>
        <form onSubmit={submitHandler}>
          <input name="budget" type="text" placeholder="Enter budget here..." />
          <button type="submit">Set budget</button>
        </form>
        <button onClick={modalCloseHandler}>Close</button>
      </div>
    </div>
  );
};

export default BudgetModal;
