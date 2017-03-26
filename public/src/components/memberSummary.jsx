import React from 'react';
import Util from '../lib/util.js';

class MemberSummary extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.pricePerPerson = this.pricePerPerson.bind(this);
    // this.items = this.props.data.items;
    // this.trip = this.data.trip;
    // this.payor = this.data.payor;
    // this.items_split = this.data.items_split;
    // this.receiptName = this.data.receiptName;
    // this.receiptUrl = this.data.receiptUrl;
    // let itemsArray = Object.keys(data.items_split);
  }

  

  handleSubmit(event) {
    // TODO: the dummyData will be passed down from MemberSummary's parent component
    // let dummyData = {
    //   "isAuthenticated": true,
    //   "tripName": "Japan2016",
    //   "username": "Gary Wong",
    //   "tripDesc": "",
    //   "receiptName": "Receipt01",
    //   "receiptUrl": "google.com/receipt01.jpg",
    //   "items": [
    //     [
    //       {
    //         "name": "Pizza",
    //         "amount": "15",
    //         "members": [
    //           "Duy Nguyen"
    //         ]
    //       }
    //     ],
    //     [
    //       {
    //         "name": "Candy",
    //         "amount": "20",
    //         "members": [
    //           "Gary",
    //           "Whitney"
    //         ]
    //       }
    //     ]
    //   ],
    //   "selectItem": 3,
    //   "selectMember": "Gary Wong",
    //   "members": [
    //     [
    //       "Duy Nguyen"
    //     ],
    //     [
    //       "Gary"
    //     ],
    //     [
    //       "Whitney"
    //     ],
    //     [
    //       "Eugene"
    //     ]
    //   ],
    //   sumBill: 100,
    //   sumTax: 15,
    //   sumTip: 20,
    //   "member": "",
    //   "memberExist": false,
    //   "name": "",
    //   "amount": "",
    //   "fb_id": "10155155720694140"
    // }

    event.preventDefault();
    // this.setState({dummyData});
    Util.insertIntoDb(this.props.data);
  }



  pricePerPerson(totalCost,memberArray) {
    return (totalCost / memberArray.length);
  }

  
  render() {
    return (
      <div>
        <h4>{this.props.data.tripName}</h4>
        <h4>{this.props.data.receiptName} {'URL'}</h4>
        <h4>Paid By: {this.props.data.username}</h4>
        <ul>
          {this.props.data.items.map((el,idx) => {
            return (
              <li key={idx}>
                <ul ><strong>{el[0].name}</strong> ${parseInt(el[0].amount).toFixed(2)}
                  {el[0].members.map((member,index) => {
                    return (<li key={index}><i>{member}</i>   ${(parseInt(el[0].amount)/el[0].members.length).toFixed(2)}</li>)
                  })}
                </ul> 
              </li> 
            )  
          })}
        </ul>
        <input type="submit" value="Confirm" onClick={this.handleSubmit}/>
      </div>
    )
  }
}

export default MemberSummary;