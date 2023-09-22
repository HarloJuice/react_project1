import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      password: "",
      registrationMessage: "", 
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, phone, password } = this.state;

    
    const userData = {
      email,
      phone,
      password,
    };

    try {
      
      const response = await axios.post("http://localhost:3001/register", userData);

      
      console.log("Відповідь від сервера:", response.data);

      
      this.setState({
        email: "",
        phone: "",
        password: "",
        registrationMessage: "Реєстрація пройшла успішно", 
      });
    } catch (error) {
      
      console.error("Помилка при відправці даних на сервер:", error);

      
      this.setState({
        registrationMessage: "Помилка при реєстрації. Спробуйте ще раз.", 
      });
    }
  };

  render() {
    const { email, phone, password, registrationMessage } = this.state;

    return (
      <div>
        <h2>Реєстрація користувача</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Телефон:</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Пароль:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Зареєструватися</button>
        </form>
        {registrationMessage && (
          <p className="registration-message">{registrationMessage}</p>
        )}
      </div>
    );
  }
}

export default Registration;
