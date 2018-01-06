import React, {
   Component
} from 'react';
var moment = require('moment');

export default class DateDisplay extends Component {
   constructor(props){
      super(props);
      this.state = {
         ...props,
         time: new Date().getTime(),
         timer: setInterval(this.setStateTime.bind(this), 1000)
      } 
   }

   setStateTime(){
      var d = new Date().getTime();
      this.setState({
         time: d
      });
   }

   render(){
      return (   <div>
         <h1>{moment(new Date(this.state.time)).format('hh:mm DD/MM')}</h1>
         </div>
      );
   }
}
