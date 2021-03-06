import React, { Component } from "react";
import './main.css'
import axios from "axios";
import { APIURL } from "../../API/environment";


const TopUpID = "615b62836b077090fc9c11e9";

class AddStudent extends Component {

  constructor(props) {
    super(props);
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    this.state = {
      route: "",
      routePath: "",
      dateAndtime: "",
      start: "",
      destination: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onGenderOptionSelected(e) {
    this.state.items = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {

    event.preventDefault();


    const TimeTableDetails = {

      route: this.state.route,
      routePath: this.state.routePath,
      dateAndtime: this.state.dateAndtime,
      start: this.state.start,
      destination: this.state.destination,

    };

    console.log("TimeTableDetails Details: ", TimeTableDetails);

    axios
      .post(`${APIURL}/TimeTable/create-timetable`, TimeTableDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Inserted !")
          window.location = "/PublicTransportEdit"
        } else {
          alert(res.data.message)
          window.location.reload();
        }
      });
  }
  render() {
    return (
      <>
        <div>
          <div className="main-block">
            <div className="left-part">
              <i className="fas fa-envelope" />
              <i className="fas fa-at" />
              <i className="fas fa-mail-bulk" />
            </div>
            <form onSubmit={this.onSubmit} style={{ width: "1000px", marginLeft: "-700px" }}>
              <h1>Add Time Table</h1>
              <div className="info" style={{ width: "" }}>
                <input className="fname" type="text"
                  name="route"
                  value={this.state.route}
                  onChange={this.onChange}
                  placeholder="Enter route" />

                <input type="text" name="routePath"
                  value={this.state.routePath}
                  onChange={this.onChange}
                  placeholder="Enter route Path" />

                <input type="text" name="dateAndtime"
                  value={this.state.dateAndtime}
                  onChange={this.onChange}
                  placeholder="Date & Time (Monday-TT/MM PM)" />

                <input type="text" name="start"
                  value={this.state.start}
                  onChange={this.onChange}
                  placeholder="Source" />

                <input type="text" name="destination"
                  value={this.state.destination}
                  onChange={this.onChange}
                  placeholder="Destination" />

              </div>

              <button type="submit" href="/">Submit</button>
            </form>
          </div>
        </div>
      </>
    );

  }
}


export default AddStudent;