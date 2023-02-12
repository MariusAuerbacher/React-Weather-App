import './Components.css'
import { Form, Button, FormControl } from "react-bootstrap";

const SearchCity = (props) => {
 



  return (
    <Form onSubmit={props.getWeather}>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={(e)=>{
        props.setCity(e.target.value)
      }} />
      <Button type="submit" className="mt-3 mb-3 button">Submit</Button>
    </Form>
  );
};

export default SearchCity;
