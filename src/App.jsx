import {useRef, useState} from 'react'
import './theme/App.less'
import Header from './components/Header';
import emailjs from '@emailjs/browser';

const App = () => {

    const form = useRef();

    const [showMessage, changeShowMessage] = useState(false)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pu69w7x', 'contact_form', form.current, {
          publicKey: 'jNPMhBxb3zNKQiADm',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            let messageVisible = true
            changeShowMessage(messageVisible)
            setTimeout(() => {
              //let messageClosing
              let messageHidden = false
              changeShowMessage(messageHidden)
            }, 3000)
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  const onMenuBtnClick = () => {
    const menuEl = document.querySelector('#menu-wrapper')
    menuEl.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  const onHomeBtnClick = () => {
    const homeEl = document.querySelector('#main-content')
    homeEl.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  const onBookTableBtnClick = () => {
    const homeEl = document.querySelector('#book-table-wrapper')
    homeEl.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  const dishes = [
    {
        "name": "Grilled Salmon",
        "description": "Fresh Atlantic salmon, grilled to perfection, served with garlic puree and steamed vegetables.",
        "id": "1"
    },
    {
        "name": "Margherita Pizza",
        "description": "Classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
        "id": "2"
    },
    {
        "name": "Caesar Salad",
        "description": "Crispy romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese, topped with grilled chicken.",
        "id": "3"
    },
    {
        "name": "Beef Tacos",
        "description": "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa, served with guacamole.",
        "id": "4"
    },
    {
        "name": "Chicken Alfredo",
        "description": "Penne pasta tossed in a rich and creamy Alfredo sauce, with grilled chicken and Parmesan cheese.",
        "id": "5"
    },
    {
        "name": "Vegetable Stir Fry",
        "description": "A mix of fresh vegetables stir-fried in a savory soy sauce, served over jasmine rice.",
        "id": "6"
    },
    {
        "name": "Cheeseburger",
        "description": "Juicy beef patty topped with cheddar cheese, lettuce, tomato, and pickles, served on a toasted bun with fries.",
        "id": "7"
    },
    {
        "name": "Chocolate Lava Cake",
        "description": "Rich chocolate cake with a molten chocolate center, served warm with a scoop of vanilla ice cream.",
        "id": "8"
    }
]

  return (
    <>
      <Header onHomeBtnClick={onHomeBtnClick} onMenuBtnClick={onMenuBtnClick} onBookTableBtnClick={onBookTableBtnClick} />
      <div id="main-content">
        <div id="main-content-wrapper">
          <h1 className="main-header">INFERNO</h1>
          <h2 className="sub-header">STEAKHOUSE & COCTAIL BAR</h2>
          <div id="btns-wrapper">
            <button onClick={onBookTableBtnClick} className="btn">BOOK A TABLE</button>
            <button onClick={onMenuBtnClick} className="btn">MENU</button>
          </div>
        </div>
        <div onClick={onMenuBtnClick} id="arrow-down-wrapper">
          <img src="../src/assets/golden-arrow-down.png"></img>
        </div>
      </div>
      <div id="menu-wrapper">
        <div id="menu">
          <div id="menu-list-wrapper">
            <h3 className="sub-header">OUR MENU</h3>
            <ul id="menu-list">
              {dishes.map(dish => <li key={dish.id}>
              <h4>{dish.name}</h4>
              <p>{dish.description}</p>
              </li>)}
            </ul>
          </div>
        </div>
      </div>
      <div id="book-table-wrapper">
        <h3 className="sub-header">BOOK A TABLE</h3>
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="contact_number"/>
          <label>Name</label>
          <input type="text" name="user_name"/>
          <label>Email</label>
          <input type="email" name="user_email"/>
          <label>Message</label>
          <textarea name="message"></textarea>
          <input id="send-btn" type="submit" value="Send"/>
          <div id="email-notification" className={showMessage ? "message-visible" : "message-hidden"}>
            <h4>Email has been sent</h4>
          </div>
        </form>
        {/* <div id="email-notification" className={showMessage ? "message-visible" : "message-hidden"}>
          <h4>Email has been sent</h4>
        </div> */}
      </div>
      <div id="footer">
        <div id="footer-content">
          <h5>© Code by Mihkel</h5>
          <ul>
            <li>
              <img src="../src/assets/instagram-logo.png" className="socials-icon"></img>
            </li>
            <li>
              <img src="../src/assets/linkedin-logo.png" className="socials-icon"></img>
            </li>
            <li>
              <img src="../src/assets/github-logo.png" className="socials-icon"></img>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
