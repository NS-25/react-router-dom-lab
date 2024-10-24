import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) =>
  <div>
    {mailboxes.map(mailbox =>
      <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
        <div className="mail-box">
          Box Number: {mailbox._id}
        </div>
      </Link>
    )}
  </div>;

export default MailboxList;
