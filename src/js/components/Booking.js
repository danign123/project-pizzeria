import {templates, select} from '../settings.js';
import AmountWidget from './AmountWidget.js';
import DatePicker from './DatePicker.js';
import HourPicker from './HourPicker.js';

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
    thisBooking.dom.datePicker = thisBooking.widget.querySelector(select.widgets.datePicker.wrapper);
    thisBooking.dom.hourPicker = thisBooking.widget.querySelector(select.widgets.hourPicker.wrapper);
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);
    thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);
    
    /*
    thisBooking.dom.peopleAmount.addEventListener('updated', function(){

    });
    thisBooking.dom.hoursAmount.addEventListener('updated', function(){
        
    });
    */
  }
}

export default Booking;