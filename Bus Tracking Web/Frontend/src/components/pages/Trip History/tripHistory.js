import React, { Component } from "react";
import './main.css'
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";


const initialState = {
  cardtype: "Credit",
  cardnumber: "",
  cardname: "",
  expdate: "",
  cvv: "",
  amount: ""

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

    // console.log(this.state.displaycheckItems);

    let studentDetails = {

      // cardtype: this.state.cardtype,
      // cardnumber:this.state.cardnumber,
      // cardname:this.state.cardname,
      // expdate:this.state.expdate,
      // cvv:this.state.cvv,
      // amount: this.state.amount


      "cardtype": "cardtype Charitha",
      "cardnumber": "cardnumber Cha",
      "cardname": "cardname",
      "expdate": "expdate",
      "cvv": "cvv",
      "amount": "amount"

    };



    console.log("classApplications Details: ", studentDetails);

    axios
      .post(`http://localhost:8080/BusTracking/addCard`, studentDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Date Inserted !")
          // toast.success(res.data.message);
          window.location.reload();
        } else {
          // toast.success(res.data.message);
          alert(res.data.message)
          window.location.reload();
        }
      });


  }

  render() {


    return (
      <>
        {/* <Navbar /> */}
        <div>
          <div className="v328_22">
            <div className="v328_23" />
            <div className="v328_24" />
            <span className="v328_25">Links</span>
            <span className="v328_26">Travel Buddy is here to help you to make your travel desires easier more than ever</span>
            <span className="v328_27">&gt; FAQ</span>
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
            <span className="v328_45">TR002345</span>
            <span className="v328_46">09/09/2021</span>
            <span className="v328_47">  from Kandy to Kurunegala</span>
            <span className="v328_48">Home&gt;Trip History</span>
            <span className="v328_49">Total Fee   : </span>
            <span className="v328_50">Top Ups at the stations   : </span>
            <span className="v328_51">Number of Stops   : </span>
            <span className="v328_52">Credit Deduction Status : </span>
            <span className="v328_53">Trip ID : </span>
            <span className="v328_54">Date : </span>
            <span className="v328_55">Routes : </span>
            <span className="v328_56">Rs. 500.00</span>
            <span className="v328_57">0</span>
            <span className="v328_58">5</span>
            <span className="v328_59">Successsful</span>
            <span className="v328_60">Copyright@ travelbuddy.com</span>
            <div className="name" /><div className="v328_62" />
            <span className="v328_63">Select a date</span>
            <div className="v328_64" />
            <div className="v328_65" />
            <button className="v332_105">Print</button>
            <button className="v332_106">Back</button>

            </div>


        </div>

        {/* <div className="containerer footerSt" style={{ marginTop: "120px" }}>
          <p>2021 CMC <i className="fa fa-copyright" aria-hidden="true" /></p>
        </div> */}

      </>
    );

  }
}


export default tripHistory;