import React, { Component } from "react";
import './main.css'
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import { deleteLogo } from "../../Images/delete.png";




class publicTransportEdit extends Component {

  constructor(props) {
    super(props);
    //this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);

  }
  state = {
    cardtype: "Credit",
    cardnumber: "",
    cardname: "",
    expdate: "",
    cvv: "",
    amount: "",
    route: "",
    timetable: []

  };

  onDelete(event, ID) {

    axios
      .delete(`${APIURL}/TimeTable/DeleteByID/${ID}`)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Deleted !")
          window.location.reload();
        } else {
          alert(res.data.message)
          window.location.reload();
        }
      });


  }

  onGenderOptionSelected(e) {
    this.state.items = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const publicTransportDetails = {

      route: this.state.route
    };

    console.log("publicTransport Details: ", publicTransportDetails);

    axios
      .get(`${APIURL}/TimeTable/getDetailsByRoute/${this.state.route}`)
      .then(response => {

        if (response.data.data.length == 0) {
          alert("No Time slots available to show")
        } else {

          this.setState({ timetable: response.data.data });
          console.log("timetable ", this.state.timetable);
        }
      })


  }

  componentDidMount() {


    axios.get(`${APIURL}/TimeTable/GetAllTimeTable`)

      .then(response => {

        this.setState({ timetable: response.data.data });
        console.log("timetable ", this.state.timetable);
      })
  }

  render() {


    return (
      <>
        <div>
          <div className="v336_88">
            <div className="v336_89" />
            <div className="v336_90" />
            <div className="v336_91" />
            <div className="v336_92" />
            <div className="v336_93" />
            <div className="v336_94" />
            <div className="v336_95" />
            <span className="v336_96">LogOut</span>
            <span className="v336_97">Profile</span>
            <span className="v336_98">|</span>
            <span className="v336_99">Manager Portal</span>
            <span className="v336_100">Home</span>
            <span className="v336_101">Statistics</span>
            <span className="v336_102">Update Timetable</span>
            <a href="/PublicTransport"> <button className="v332_999">View Timetables</button></a>
            <a href="/PublicTransportEdit">  <button className="v332_1000">Update Timetables</button></a>
            <button className="v332_101">Allocate Busses/Drivers</button>
            <span className="v336_103">The following time slots are for route no:</span>
            <span className="v336_104">
              {this.state.route}
            </span>
            <span className="v336_105">Passengers</span>
            <span className="v336_106">Timetable</span>
            <span className="v336_107">FAQ</span>
            <span className="v336_108">Contact</span>
            <div className="v336_109" />
            <div className="v336_110" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <input type="text" id="fname" placeholder="Enter route" className="v336_116"
              style={{ marginTop: "0px" }}
              name="route"
              value={this.state.route}
              onChange={this.onChange}
              required
            />
            <div className="v336_118" onClick={this.onSubmit} />
            <div className="v336_119">
              <div className="v336_120" />
              <div className="v336_121" />
            </div>
            <div className="name" />

            <div style={{ marginTop: "450px", width: "800px", height: "400px", marginLeft: "450px" }}>

              {this.state.timetable.length > 0 && this.state.timetable.map((item, index) => (
                <>

                  <div style={{ border: "1px solid black", width: "800px", height: "80px" }} key={item.routePath} className="timeclass">
                    <h3 style={{ marginLeft: "30px", fontSize: "25px", marginTop: "30px" }}>{item.dateAndtime}</h3>
                    <p style={{ marginLeft: "350px", fontSize: "20px", marginTop: "-35px" }}>{item.start}</p>
                    <p style={{ marginLeft: "600px", fontSize: "20px", marginTop: "-33px" }}>{item.destination}</p>

                    <div className="delete" onClick={e => this.onDelete(e, item._id,)} />


                  </div>
                </>
              ))}

            </div>
            <a href="/AddTimeTable"><div className="v336_123" /></a>
          </div>

        </div>

      </>
    );

  }
}


export default publicTransportEdit;