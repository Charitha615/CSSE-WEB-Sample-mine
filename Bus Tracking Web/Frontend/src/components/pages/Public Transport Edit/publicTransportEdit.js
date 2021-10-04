import React, { Component } from "react";
import './main.css'
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";



class publicTransportEdit extends Component {

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
            <button className="v332_999">View Timetables</button>
            <button className="v332_1000">Update Timetables</button>
            <button className="v332_101">Allocate Busses/Drivers</button>
            <span className="v336_103">Selected route : </span>
            <span className="v336_104">
              138 : Pettah - Maharagama, Kottawa, Homagama{" "}
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
            <div className="v336_116" />
            <span className="v336_117">Select a route</span>
            <div className="v336_118" />
            <div className="v336_119">
              <div className="v336_120" />
              <div className="v336_121" />
            </div>
            <div className="name" />
            <div className="v336_123" />
            <div className="v336_124" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <span className="v336_128">Monday - 7.30 AM</span>
            <span className="v336_129">Pettah</span>
            <span className="v336_130">Maharagama</span>
            <div className="v336_131">
              <div className="v336_132" />
              <div className="v336_133" />
            </div>
            <div className="v336_134">
              <div className="v336_135" />
              <div className="v336_136" />
            </div>
            <div className="v336_137" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <span className="v336_141">Monday - 7.30 AM</span>
            <span className="v336_142">Pettah</span>
            <span className="v336_143">Maharagama</span>
            <div className="v336_144">
              <div className="v336_145" />
              <div className="v336_146" />
            </div>
            <div className="v336_147">
              <div className="v336_148" />
              <div className="v336_149" />
            </div>
            <div className="v336_150" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <span className="v336_154">Monday - 7.30 AM</span>
            <span className="v336_155">Pettah</span>
            <span className="v336_156">Maharagama</span>
            <div className="v336_157">
              <div className="v336_158" />
              <div className="v336_159" />
            </div>
            <div className="v336_160">
              <div className="v336_161" />
              <div className="v336_162" />
            </div>
            <div className="v336_163" />
            <div className="name" />
            <div className="name" />
            <div className="name" />
            <span className="v336_167">Monday - 7.30 AM</span>
            <span className="v336_168">Pettah</span>
            <span className="v336_169">Maharagama</span>
            <div className="v336_170">
              <div className="v336_171" />
              <div className="v336_172" />
            </div>
            <div className="v336_173">
              <div className="v336_174" />
              <div className="v336_175" />
            </div>
          </div>


        </div>

        {/* <div className="containerer footerSt" style={{ marginTop: "120px" }}>
          <p>2021 CMC <i className="fa fa-copyright" aria-hidden="true" /></p>
        </div> */}

      </>
    );

  }
}


export default publicTransportEdit;