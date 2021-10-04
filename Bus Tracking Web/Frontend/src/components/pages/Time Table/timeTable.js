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

class timeTable extends Component {

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
          <div className="v331_73">
            <div className="v331_74" />
            <div className="v331_75" />
            <span className="v331_76">Links</span>
            <span className="v331_77">Travel Buddy is here to help you to make your travel desires easier more than ever</span>
            <span className="v331_78">&gt; FAQ</span>
            <span className="v331_79">&gt; Help</span>
            <span className="v331_80">travelbuddy@gmail.com
              072 345 55 66</span
            ><span className="v331_81">About Us</span>
            <span className="v331_82">Home</span>
            <a href="/"><span className="v328_32">Payments</span></a>
            <a href="/TimeTable"><span className="v328_33">Timetable</span></a>
           
            <span className="v331_85">Contact Us</span>
            <span className="v331_86">About Us</span>
            <span className="v331_87">LogOut     |    Profile</span>
            <span className="v331_88">Travel Buddy</span>
            <div className="v331_89" />
            <span className="v331_90">Home&gt;View Timetable</span>
            <span className="v331_91">Copyright@ travelbuddy.com</span>
            <div className="name" />
            <a href="/tripHistory"><span className="v328_34">Trip History</span></a>
            <div className="v331_94" />
            <span className="v331_95">View Timetable</span>
            <span className="v331_96">Selected route : </span>
            <span className="v331_97">138 : Pettah - Maharagama, Kottawa, Homagama </span>
            <div className="name" /><div className="v331_99" />
            <span className="v331_100">Select a route</span>
            <div className="v331_101" /><div className="v331_102">

              <div className="v331_103" />
              <div className="v331_104" /></div>
            <div className="name" />
            <div className="v331_106" />
            <div className="name" />
            <div className="name" />
            <span className="v331_109">Monday - 7.30 AM</span>
            <span className="v331_110">Pettah</span>
            <span className="v331_111">Maharagama</span>
            <div className="v331_112" />
            <div className="name" />
            <div className="name" />
            <span className="v331_115">Monday - 7.30 AM</span>
            <span className="v331_116">Pettah</span>
            <span className="v331_117">Maharagama</span>
            <div className="v331_118" /><div className="name" />
            <div className="name" />
            <span className="v331_121">Monday - 7.30 AM</span>
            <span className="v331_122">Pettah</span>
            <span className="v331_123">Maharagama</span>
            <div className="v331_124" /><div className="name" />
            <div className="name" />
            <span className="v331_127">Monday - 7.30 AM</span>
            <span className="v331_128">Pettah</span><span className="v331_129">Maharagama</span>
          </div>


        </div>

        {/* <div className="containerer footerSt" style={{ marginTop: "120px" }}>
          <p>2021 CMC <i className="fa fa-copyright" aria-hidden="true" /></p>
        </div> */}

      </>
    );

  }
}


export default timeTable;