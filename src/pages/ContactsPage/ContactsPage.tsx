import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ContactsManagers from "../../components/contactsManagers/ContactsManagers";
import ContactsOffice from "../../components/contactsOffice/ContactsOffice";
import styles from "./ContactsPage.module.scss";
const ContactsPage = () => {
  return (
    <div className={styles.containerContacts}>
      <Breadcrumbs />

      <h1>Контакты</h1>
      <ContactsOffice />
      <ContactsManagers />
    </div>
  );
};

export default ContactsPage;
