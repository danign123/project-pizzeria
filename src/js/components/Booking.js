import {templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';
//import { utils } from '../utils.js';

class Booking {
  constructor(widget){
    const thisBooking = this;
    thisBooking.widget = widget;
    
    thisBooking.render(widget);
    thisBooking.initWidgets();
  }

  render(){
    const thisBooking = this;
    const generatedHTML = templates.bookingWidget();

    thisBooking.dom = {};
    thisBooking.dom.wrapper = thisBooking.widget;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = thisBooking.widget.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.widget.querySelector(select.booking.hoursAmount);
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    
    /*
    thisBooking.dom.peopleAmount.addEventListener('updated', function(){

    });
    thisBooking.dom.hoursAmount.addEventListener('updated', function(){
        
    });
    */
  }
}

export default Booking;