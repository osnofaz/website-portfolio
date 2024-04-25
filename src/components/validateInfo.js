export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = "namereq";
    }
    else if (!/^[A-Za-z]+/.test(values.name.trim())) {
     errors.name = 'namevalid';
   }
  
    if (!values.email) {
      errors.email = 'emailreq';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'emailvalid';
    }
    if (!values.message) {
      errors.message = 'messagereq';
    } else if (values.message.length < 20) {
      errors.message = 'messagevalid';
    }
  
    return errors;
  }