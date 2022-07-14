import "./App.css";
import ContactData from "./contacts.json"
import {useState } from "react"
//Contacts[Math.floor(Math.random()*Contacts.length)]

function App() {
  let contacts = ContactData.slice(0,5)

  const [contact, setContact] = useState(contacts);
  const addContacts = () => {
    const random = ContactData[Math.floor(Math.random()*ContactData.length)]
    setContact([random,...contact]);
  };


  console.log(contact)
  return(
    <div className="App">
    <button onClick={addContacts}> Click to Add </button>
    

      {contact.map(contact => {
          return (
            <table  key={contact.id}>
              <tr >
                <th><img src={contact.pictureUrl} className="pic" alt="profilepic"/></th>
                <th>{contact.name}</th>
                <th>{contact.popularity}</th>
                {contact.wonOscars && <th>:trophy:</th>}
                {!contact.wonOscars && <th> </th>}
                {contact.wonEmmy && <th>:trophy:</th>}
                {!contact.wonEmmy && <th> </th>}  
              </tr>
            </table>
          )
          
      })}
     
       
    </div>
  )
} 

export default App;