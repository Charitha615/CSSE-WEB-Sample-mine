import React, { Component } from "react";
import './main.css'
import axios from "axios";
import { APIURL } from "../../API/environment";



class AddStudent extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    cardtype: "Credit",
    cardnumber: "",
    cardname: "",
    expdate: "",
    cvv: "",
    amount: "",
    timetable: [],
    route: ""

  };

  onGenderOptionSelected(e) {
    this.state.items = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let PublicTransportDetails = {

      route: this.state.route

    };



    console.log("Public Transport Details: ", PublicTransportDetails );

    axios
      .get(`${APIURL}/TimeTable/getDetailsByRoute/${this.state.route}`)
      .then(response => {

        if(response.data.data.length == 0){
          alert("No Time slots available to show")
        }else{

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
          <div className="v332_26">
            <div className="v332_27" />
            <div className="v332_28" />
            <div className="v332_29" />
            <div className="v332_30" />
            <div className="v332_31" />
            <div className="v332_32" />
            <div className="v332_33" />
            <span className="v332_34">LogOut</span>
            <span className="v332_35">Profile</span>
            <span className="v332_36">|</span>
            <span className="v332_37">Manager Portal</span>
            <span className="v332_38">Home</span>
            <span className="v332_39">Statistics</span>
            <span className="v332_40">View Timetable</span>
            <a href="/PublicTransport">    <button className="v332_99">View Timetables</button></a>
           <a href="/PublicTransportEdit"> <button className="v332_100">Update Timetables</button> </a>
            <button className="v332_101">Allocate Busses/Drivers</button>
            <span className="v332_41">The following time slots are for route no:</span>
            <span className="v332_42">{this.state.route} </span>
            <span className="v332_43">Passengers</span>
            <span className="v332_44">Timetable</span>
            <span className="v332_45">FAQ</span>
            <span className="v332_46">Contact</span>
            <div className="v332_47" />
            <div className="v332_48" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <input type="text" id="fname" placeholder="Enter route" className="v332_53"
              style={{ marginTop: "0px" }}
              name="route"
              value={this.state.route}
              onChange={this.onChange}
              required

            />

            <div className="v332_55" onClick={this.onSubmit} />
            <div className="v332_56">
              <div className="v332_57" />
              <div className="v332_58" />
            </div>
            <div className="name" />


            <div style={{ marginTop: "450px", width: "800px", marginLeft: "450px" }}>

              {this.state.timetable.length > 0 && this.state.timetable.map((item, index) => (
                <>

                  <div style={{ border: "1px solid black",width:"800px",height:"80px" }} key={item.routePath} className="timeclass">
                    <h3 style={{ marginLeft: "30px", fontSize: "25px", marginTop: "30px" }}>{item.dateAndtime}</h3>
                    <p style={{ marginLeft: "380px", fontSize: "20px", marginTop: "-35px" }}>{item.start}</p>
                    <p style={{ marginLeft: "600px", fontSize: "20px", marginTop: "-33px" }}>{item.destination}</p>
                  </div>
                </>
              ))}

            </div>
          </div>
        </div>
      </>
    );

  }
}


export default AddStudent;