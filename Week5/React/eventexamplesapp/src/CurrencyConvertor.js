import React, { Component } from "react";

class CurrencyConvertor extends Component {

  handleSubmit = () => {
    const rupees = 100;

    const euro = (rupees / 90).toFixed(2);

    alert("100 INR = " + euro + " Euro");
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>

        <button onClick={this.handleSubmit}>
          Convert
        </button>
      </div>
    );
  }
}

export default CurrencyConvertor;