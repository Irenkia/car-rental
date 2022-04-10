import React from "react";
import { useState } from "react";
import "./CSS/stylesOrder.css";

const Order = () => {
  const [pickUpLocation, setPickUpLocation] = useState();
  const [dropOffLocation, setDropOffLocation] = useState();
  const [dateUp, setDateUp] = useState();
  const [dateOff, setDateOff] = useState();
  const [time, setTime] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rent A Car Now");
  };
  return (
    <div>
      <div id="order">
        <h3>Your Order</h3>
        <br />
      </div>
      <div className="order">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <table>
            <caption>New Order</caption>
            <tr>
              <td>Pick-up location</td>
              <td></td>
            </tr>
            <tr>
              <td id="span">
                {" "}
                <input
                  name="pickUpLocation"
                  type="text"
                  value={pickUpLocation}
                  placeholder="City, Airport, Station"
                  onChange={(e) => setPickUpLocation(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Drop-off location</td>
              <td></td>
            </tr>
            <tr>
              <td id="span">
                <input
                  name="dropOffLocation"
                  type="text"
                  value={dropOffLocation}
                  placeholder="City, Airport, Station"
                  onChange={(e) => setDropOffLocation(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Pick-up date</td>
              <td></td>
            </tr>
            <tr>
              <td id="span">
                <input
                  name="dt"
                  type="date"
                  value={dateUp}
                  placeholder="Date"
                  onChange={(e) => setDateUp(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Drop-off date</td>
              <td></td>
            </tr>
            <tr>
              <td id="span">
                <input
                  name="dt"
                  type="date"
                  value={dateOff}
                  placeholder="Date"
                  onChange={(e) => setDateOff(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Pick-up time</td>
              <td></td>
            </tr>
            <tr>
              <td id="span">
                <input
                  name="time"
                  type="text"
                  value={time}
                  placeholder="Time"
                  onChange={(e) => setTime(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td id="span">
                {" "}
                <input
                  className="submitButton"
                  type="submit"
                  value="Rent A Car Now"
                />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};
export default Order;

// addLog([pickUpLocation, dropOffLocation, dateUp, dateOff, time]);
