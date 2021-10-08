import React, { Component } from "react";
import './main.css'
import axios from "axios";



const initialState = {
  search_date: "",
  HistoryTrip: [],

  tripId: "",
  date: "",
  route: "",
  totalFee: "",
  topUpsAtTheStations: "",
  numberOfStops: "",
  creditDeductionStatus: ""

};

class tripHistory extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;

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

    const dateId = this.state.search_date.replace("/", "");
    const dateIdd = dateId.replace("/", "");


    let TripHistoryDetails = {

      search_date: dateIdd

    };

    console.log("Trip History Details: ", TripHistoryDetails);

    axios
      .get(`http://localhost:8001/TripHistory/getAllTripHistory/${dateIdd}`)
      .then((res) => {
        console.log("res", res);
        console.log("len", res.data.data.length);

        if (res.data.code === 200) {

          if (res.data.data.length == 0) {
            alert("No History Available to Show !")
          }
          else {

            this.setState({ HistoryTrip: res.data.data });
            console.log("HistoryTrip ", this.state.HistoryTrip[0]);



            this.setState({ date: this.state.HistoryTrip[0].dates });
            this.setState({ route: this.state.HistoryTrip[0].route });
            this.setState({ totalFee: this.state.HistoryTrip[0].totalFee });
            this.setState({ topUpsAtTheStations: this.state.HistoryTrip[0].topUpsAtTheStations });
            this.setState({ numberOfStops: this.state.HistoryTrip[0].numberOfStops });
            this.setState({ creditDeductionStatus: this.state.HistoryTrip[0].creditDeductionStatus });
            this.setState({ tripId: this.state.HistoryTrip[0].tripId });
          }

        } else {
          alert(res.data.message)

        }
      });


  }

  render() {


    return (
      <>
        <div>
          <div className="v328_22">
            <div className="v328_23" />
            <div className="v328_24" />
            <span className="v328_25">Links</span>
            <span className="v328_26">Travel Buddy is here to help you to make your travel desires easier more than ever</span>
      
            <span className="v328_28">&gt; Help</span>
            <span className="v328_29">travelbuddy@gmail.com
              072 345 55 66</span>
            <span className="v328_30">About Us</span>
            <span className="v328_31">Home</span>
            <a href="/"><span className="v328_32">Payments</span></a>
            <a href="/TimeTable"><span className="v328_33">Timetable</span></a>
            <a href="/tripHistory"><span className="v328_34">Trip History</span></a>
            <span className="v328_35">Contact Us</span>
            <span className="v328_36">About Us</span>
            <span className="v328_37">LogOut     |    Profile</span><span className="v328_38">Travel Buddy</span>
            <div className="v328_39" />
            <div className="v328_40" />
            <div className="name" /><div className="name" />
            <div className="name" /><span className="v328_44">My Trips</span>
            <span className="v328_45">{this.state.tripId}</span>
            <span className="v328_46">{this.state.date}</span>
            <span className="v328_47">  {this.state.route}</span>
            <span className="v328_48">Home&gt;Trip History</span>
            <span className="v328_49">Total Fee   : </span>
            <span className="v328_50">Top Ups at the stations   : </span>
            <span className="v328_51">Number of Stops   : </span>
            <span className="v328_52">Credit Deduction Status : </span>
            <span className="v328_53">Trip ID : </span>
            <span className="v328_54">Date : </span>
            <span className="v328_55">Routes : </span>
            <span className="v328_56">{this.state.totalFee}</span>
            <span className="v328_57">{this.state.topUpsAtTheStations}</span>
            <span className="v328_58">{this.state.numberOfStops}</span>
            <span className="v328_59">{this.state.creditDeductionStatus}</span>
            <span className="v328_60">Copyright@ travelbuddy.com</span>
            <input type="text" id="fname" placeholder="Enter Date.. YYYY/MM/DD" className="v328_62"
              style={{ marginTop: "40px" }}
              name="search_date"
              value={this.state.search_date}
              onChange={this.onChange}
              required
              style={{ width: "325px", height: "46px", marginTop: "-20px", marginLeft: "-5px" }}
            />
            <div className="v328_64"></div>
            <div className="v328_65" onClick={this.onSubmit} />
            <button className="v332_105">Print</button>
            <button className="v332_106">Back</button>

          </div>
        </div>

      </>
    );

  }
}


export default tripHistory;