import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { travelUpdateService } from "../../services/travel.services";
import { travelDetailsService } from "../../services/travel.services";

function TravelEdit() {
  const navigate = useNavigate();

  const { idTravel } = useParams();

  const [date, setDate] = useState();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [car, setCar] = useState("");
  const [bags, setBags] = useState(0);
  const [seatsCar, setSeatsCar] = useState(0);
  const [price, setPrice] = useState(0);

  const handleDateChange = (event) => setDate(event.target.value);
  const handleFromChange = (event) => setFrom(event.target.value);
  const handleToChange = (event) => setTo(event.target.value);
  const handleCarChange = (event) => setCar(event.target.value);
  const handleBagsChange = (event) => setBags(event.target.value);
  const handleSeatsCarChange = (event) => setSeatsCar(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);

  useEffect(() => {
    getTravelDetails()
  }, []);

  const getTravelDetails = async () => {
    try {
      const response = await travelDetailsService(idTravel);
      console.log(response.data)
      setDate(response.data.date)
      setFrom(response.data.from)
      setTo(response.data.to)
      setCar(response.data.car)
      setBags(response.data.bags)
      setSeatsCar(response.data.seatsCar)
      setPrice(response.data.price)
    } catch (error) {
      navigate("/error");
    }
  };

  const handleEdit = async () => {
    const travelObj = {
      date: date,
      from: from,
      to: to,
      car: car,
      bags: bags,
      seatsCar: seatsCar,
      price: price,
    }
    try {
      await travelUpdateService(idTravel,travelObj)
      navigate('/profile')
    } catch (error) {
      navigate('/error')
    }
  };

  return (
    <div>
      <h4>Edit u Travel</h4>
      <form>
        <label htmlFor="date">Date</label>
        <input
          type="Date"
          name="date"
          onChange={handleDateChange}
          value={date}
        />
        <br />
        <label htmlFor="from">From</label>
        <input
          type="text"
          name="from"
          onChange={handleFromChange}
          value={from}
        />
        <br />
        <label htmlFor="to">To</label>
        <input type="text" name="to" onChange={handleToChange} value={to} />
        <br />
        <label htmlFor="car">Car</label>
        <input type="text" name="car" onChange={handleCarChange} value={car} />
        <br />
        <label htmlFor="bags">Bags</label>
        <input
          type="number"
          name="bags"
          onChange={handleBagsChange}
          value={bags}
        />
        <br />
        <label htmlFor="seatsCar">Seats Car</label>
        <input
          type="number"
          name="seatsCar"
          onChange={handleSeatsCarChange}
          value={seatsCar}
        />
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          onChange={handlePriceChange}
          value={price}
        />

        <br />
      </form>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default TravelEdit;




