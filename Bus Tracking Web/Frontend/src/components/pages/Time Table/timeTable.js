import React, { Component } from "react";
import './main.css'
import axios from "axios";
import { APIURL } from "../../API/environment";


const initialState = {
  cardtype: "Credit",
  cardnumber: "",
  cardname: "",
  expdate: "",
  cvv: "",
  amount: "",
  timetable: [],
  route: ""

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

    let timeTableDetails = {

      route: this.state.route

    };



    console.log("timeTable Details: ", timeTableDetails);

    axios
      .get(`${APIURL}/TimeTable/getDetailsByRoute/${this.state.route}`)
      .then(response => {

        console.log("response",response.data.data.length)

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
          <div className="v331_73">
            <div className="v331_74" />
            <div className="v331_75" />
            <span className="v331_76">Links</span>
            <span className="v331_77">Travel Buddy is here to help you to make your travel desires easier more than ever</span>
           
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
            <span className="v331_96">The following time slots are for route no:</span>
            <span className="v331_97">{this.state.route} </span>
            <div className="name" />
            <input type="text" id="fname" placeholder="Enter route Number" className="v331_99"
              style={{ marginTop: "0px" }}
              name="route"
              value={this.state.route}
              onChange={this.onChange}
              required

            />
            <div className="v331_101" onClick={this.onSubmit} /><div className="v331_102">

              <div className="v331_103" />
              <div className="v331_104" /></div>
            <div className="name" />

            <div style={{ marginTop: "300px", width: "800px", marginLeft: "350px" }}>

              {this.state.timetable.length > 0 && this.state.timetable.map((item, index) => (
                <>

                  <div style={{ border: "1px solid black",width:"800px",height:"80px" }} key={item.routePath} className="timeclass">
                    <h3 style={{ marginLeft: "30px", fontSize: "25px", marginTop: "25px" }}>{item.dateAndtime}</h3>
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


export default timeTable;