import { useState } from "react";

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState("");
  const [boxSize, setBoxSize] = useState("Small");

  const handleSubmit = e => {
    e.preventDefault();
    addBox({ boxholder, boxSize });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Boxholder Name"
        value={boxholder}
        onChange={e => setBoxholder(e.target.value)}
      />
      <select value={boxSize} onChange={e => setBoxSize(e.target.value)}>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;
