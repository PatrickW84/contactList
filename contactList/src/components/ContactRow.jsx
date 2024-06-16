export default function ContactRow({ contact, onClick }) {
  return (
    <tr onClick={onClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
