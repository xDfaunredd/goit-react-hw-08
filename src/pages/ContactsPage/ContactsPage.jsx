import ContactFrom from "../../components/ContactFrom/ContactFrom";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <ContactFrom />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
