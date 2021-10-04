import React, { Component } from "react";
import './main.css'
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";



class AddStudent extends Component {

  constructor(props) {
    super(props);
    //this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    cardtype: "Credit",
    cardnumber: "",
    cardname: "",
    expdate: "",
    cvv: "",
    amount: ""

  };

  onGenderOptionSelected(e) {
    this.state.items = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    // console.log(this.state.displaycheckItems);

    const studentDetails = {

      cardtype: this.state.cardtype,
      cardnumber: this.state.cardnumber,
      cardname: this.state.cardname,
      expdate: this.state.expdate,
      cvv: this.state.cvv,
      amount: this.state.amount

    };



    console.log("classApplications Details: ", studentDetails);

    axios.post("http://localhost:8080/BusTracking/addCard", studentDetails).then((res) => {
      console.log(res);
    })

    // axios
    //   .post("http://localhost:8080/BusTracking/addCard", studentDetails)
    //   .then((res) => {
    //     console.log("res", res);
    //     if (res.data.code === 200) {
    //       console.log("res.data.code", res.data.code);
    //       alert("Date Inserted !")
    //       // toast.success(res.data.message);
    //       window.location.reload();
    //     } else {
    //       // toast.success(res.data.message);
    //       alert(res.data.message)
    //       window.location.reload();
    //     }
    //   });


  }

  render() {


    return (
      <>
        {/* <Navbar /> */}
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
            <button className="v332_99">View Timetables</button>
            <button className="v332_100">Update Timetables</button>
            <button className="v332_101">Allocate Busses/Drivers</button>
            <span className="v332_41">Selected route : </span>
            <span className="v332_42">138 : Pettah - Maharagama, Kottawa, Homagama </span>
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
            <div className="v332_53" />
            <span className="v332_54">Select a route</span>
            <div className="v332_55" />
            <div className="v332_56">
              <div className="v332_57" />
              <div className="v332_58" />
            </div>
            <div className="name" />
            <div className="v332_60" />
            <div className="name" />
            <div className="name" />
            <span className="v332_63">Monday - 7.30 AM</span>
            <span className="v332_64">Pettah</span>
            <span className="v332_65">Maharagama</span>
            <div className="v332_66" />
            <div className="name" />
            <div className="name" />
            <span className="v332_69">Monday - 7.30 AM</span>
            <span className="v332_70">Pettah</span>
            <span className="v332_71">Maharagama</span>
            <div className="v332_72" />
            <div className="name" />
            <div className="name" />
            <span className="v332_75">Monday - 7.30 AM</span>
            <span className="v332_76">Pettah</span>
            <span className="v332_77">Maharagama</span>
            <div className="v332_78" />
            <div className="name" />
            <div className="name" />
            <span className="v332_81">Monday - 7.30 AM</span>
            <span className="v332_82">Pettah</span>
            <span className="v332_83">Maharagama</span>
          </div>


        </div>

        {/* <div className="containerer footerSt" style={{ marginTop: "120px" }}>
          <p>2021 CMC <i className="fa fa-copyright" aria-hidden="true" /></p>
        </div> */}

      </>
    );

  }
}


export default AddStudent;