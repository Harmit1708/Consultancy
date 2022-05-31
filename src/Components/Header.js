import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Header() {
  
  const city =[ { label: "Ahmedabad" },
    { label: "Surat" },
    { label: "Vadodra" },
    { label: "Rajkot" },
    { label: "Bhavnagar" },
    { label: "Jamnagar" },
    { label: "Junagadh" },
    { label: "Gandhinagar" },
    { label: "Gandhidam" },
    { label: "Anand" },
    { label: "Navsari" },
    { label: "Nadiad" },
    { label: "Bharuch" },
    { label: "Mehsana" },
    { label: "Bhuj" },
    { label: "Porbandar" },
    { label: "Valsad" },
    { label: "Vapi" },
    { label: "Somnath" },
    { label: "Patan" },
    { label: "Jodhpur" },
    { label: "Jaipur" },
    { label: "Kota" },
    { label: "Bhiwadi" },
    { label: "Bikaner" },
    { label: "Udaipur" },
    { label: "Ajmer" },
    { label: "Bhilwar" },
    { label: "Alwar" },
    { label: "Sikar" },
    { label: "Bharatpur" },
    { label: "Pali" },
    { label: "Sri Ganganagar" },
    { label: "Hanumangarh" },
    { label: "Beawar" },
    { label: "Pune" },
    { label: "Nagpur" },
    { label: "Nashik" },
    { label: "Thane" },
    { label: "Aurangabad" },
    { label: "Solapur" },
    { label: "Jalgaon" },
    { label: "Amravati" },
    { label: "Kolhapur" },
    { label: "Ulhasnagar" },
    { label: "Malegaon" },
    { label: "Latur" },
    { label: "Dhule" },
    { label: "Ahmednagar" },
    { label: "Miraj" },
    { label: "Chandrapur" },
    { label: "Jalna" },
    { label: "Navi Mumbai" },
    { label: "Satara" },
    { label: "Kamptee" },
    { label: "Gondia" },
    { label: "Achlapur" },
    { label: "Nandurbar" },
    { label: "Wardha" },
    { label: "Hingaghat" },
    { label: "Dhar" },
    { label: "Hubballi-Dharwad" },
    { label: "Mysuru" },
    { label: "Kalaburagi" },
    { label: "Mangaluru" },
    { label: "Belagavi" },
    { label: "Ballari" },
    { label: "Vijayapura" },
    { label: "Shivamogga" },
    { label: "Raichur" },
    { label: "Bidar" },
    { label: "Hospet" },
    { label: "Robertsonpet" },
    { label: "Hassan" },
    { label: "Bhadravati" },
    { label: "Chitradurga" },
    { label: "Udupi" },
    { label: "Kolar" },
    { label: "Mandya" },
    { label: "Chikmagalur" },
    { label: "Gangavati" },
    { label: "Ranebennuru" },
    { label: "Kasaragod" },
    { label: "Kannur" },
    { label: "Alappuza" },
    { label: "Ernakulam" },
    { label: "Idukki" },
    { label: "Kollam" },
    { label: "Kottayam" },
    { label: "Kozikode" },
    { label: "Malappuram" },
    { label: "Palakkad" },
    { label: "Pathanamthitta" },
    { label: "Thiruvananthapuram" },
    { label: "Thrissur" },
    { label: "Wayanad" },
    { label: "Coimbatore" },
    { label: "Madurai" },
    { label: "Tiruchirappalli" },
    { label: "Tiruppur" },
    { label: "Salem" },
    { label: "Erode" },
    { label: "Vellore" },
    { label: "Thoothukkudi" },
    { label: "Dindigul" },
    { label: "Thanjavur" },
    { label: "Ranipet" },
    { label: "Karur" },
    { label: "Nagercoil" },
    { label: "Kanchipuram" },
    { label: "Karaikkudi" },
    { label: "Neyveli" },
    { label: "Cuddalore" },
    { label: "Tiruvannamalai" },
    { label: "Pollachi" },
    { label: "Pudukkottai" },
    { label: "Vaniyambadi" },
    { label: "Ambur" },
    { label: "Nagapattinam" },
    { label: "Visakhapatnam" },
    { label: "Vijayawada" },
    { label: "Guntur" },
    { label: "Nellore" },
    { label: "Kurnool" },
    { label: "Kakinada" },
    { label: "Kadapa" },
    { label: "Tirupati" },
    { label: "Anantapuram" },
    { label: "Vizianagaram" },
    { label: "Eluru" },
    { label: "Nadyal" },
    { label: "Ongole" },
    { label: "Adoni" },
    { label: "Madanapalle" },
    { label: "Machilipatnam" },
    { label: "Tenali" },
    { label: "Proddatur" },
    { label: "Chittor" },
    { label: "Hindupur" },
    { label: "Srikakulam" },
    { label: "Bhimavaram" },
    { label: "Gudivada" },
    { label: "Guntakal" },
    { label: "Dharamavaram" },
    { label: "Tadipatri" },
    { label: "Mangalagiri" },
    { label: "Warangal" },
    { label: "Nizamabad" },
    { label: "Khammam" },
    { label: "Karimnagar" },
    { label: "Ramagundam" },
    { label: "Mahabubnagar" },
    { label: "Nalgonda" },
    { label: "Adilabad" },
    { label: "Suryapet" },
    { label: "Siddipet" },
    { label: "Miryalaguda" },
    { label: "Jagtial" },
    { label: "Indore" },
    { label: "Bhopal" },
    { label: "Jablapur" },
    { label: "Gwalior" },
    { label: "Ujjain" },
    { label: "Sagar" },
    { label: "Dewas" },
    { label: "Satna" },
    { label: "Ratlam" },
    { label: "Rewa" },
    { label: "Murwara" },
    { label: "Singrauli" },
    { label: "Burhanpur" },
    { label: "Khandwa" },
    { label: "Bhind" },
    { label: "Chhindwara" },
    { label: "Guna" },
    { label: "Shivpur" },
    { label: "Vidisha" },
    { label: "Chhatarpur" },
    { label: "Damoh" },
    { label: "Mandsaur" },
    { label: "Khargone" },
    { label: "Neemuch" },
    { label: "Pithapur" },
    { label: "Narmadapuram" },
    { label: "Itarsi" },
    { label: "Sehore" },
    { label: "Morena" },
    { label: "Betul" },
    { label: "Seoni" },
    { label: "Datia" },
    { label: "Nagda" },
    { label: "Dindori" },
    { label: "Raipur" },
    { label: "Durg" },
    { label: "Rajnandgaon" },
    { label: "Raigarh" },
    { label: "Korba" },
    { label: "Jagdalpur" },
    { label: "Dhamtari" },
    { label: "Chirmiri" },
    { label: "Bilaspur" },
    { label: "Bhilai" },
    { label: "Ambikapur" },
    { label: "Mahasamund" },
    { label: "Koriya" },
    { label: "Bhubaneshwar" },
    { label: "Cuttack" },
    { label: "Rourkela" },
    { label: "Berhampur" },
    { label: "Samalpur" },
    { label: "Puri" },
    { label: "Balasore" },
    { label: "Bhadrak" },
    { label: "Baripada" },
    { label: "Kolkata" },
    { label: "Asansol" },
    { label: "Siliguri" },
    { label: "Durgapur" },
    { label: "Bardhaman" },
    { label: "Malda City" },
    { label: "Baharampur" },
    { label: "Shantipur" },
    { label: "Ranaghat" },
    { label: "Haldia" },
    { label: "Krishnanagar" },
    { label: "Jalpaiguri" },
    { label: "Balurghat" },
    { label: "Bankura" },
    { label: "Darjeeling" },
    { label: "Alipurduar" },
    { label: "Purulia" },
    { label: "Jangipur" },
    { label: "Bangaon" },
    { label: "Cooch Behar" },
    { label: "Patna" },
    { label: "Gaya" },
    { label: "Bhagalpur" },
    { label: "Muzaffarpur" },
    { label: "Purina" },
    { label: "Begusarai" },
    { label: "Katihar" },
    { label: "Munger" },
    { label: "Chhapra" },
    { label: "Danapur" },
    { label: "Hajipur" },
    { label: "Dehri" },
    { label: "Siwan" },
    { label: "Motihari" },
    { label: "Nawada" },
    { label: "Bagaha" },
    { label: "Buxar" },
    { label: "Sitamarhi" },
    { label: "Jamalpur" },
    { label: "Jehanabad" },
    { label: "Aurangabad" },
    { label: "Jamshedpur" },
    { label: "Dhanbad" },
    { label: "Ranchi" },
    { label: "Bokaro" },
    { label: "Deoghar" },
    { label: "Phusro" },
    { label: "Hazaribagh" },
    { label: "Giridih" },
    { label: "Ramgarh" },
    { label: "Medininagar" },
    { label: "Chirkunda" },
    { label: "Meerut" },
    { label: "Saharanpur" },
    { label: "Ghaziabad" },
    { label: "Noida" },
    { label: "Aligarh" },
    { label: "Agra" },
    { label: "Moradabad" },
    { label: "Bareily" },
    { label: "Etawah" },
    { label: "Jhansi" },
    { label: "Lucknow" },
    { label: "Kanpur" },
    { label: "Prayagraj" },
    { label: "Varanasi" },
    { label: "Ayodhya" },
    { label: "Basti" },
    { label: "Gorakhpur" },
    { label: "Faridabad" },
    { label: "Gurugram" },
    { label: "Panipat" },
    { label: "Ambala" },
    { label: "Yamunagar" },
    { label: "Rohtak" },
    { label: "Sonipat" },
    { label: "Bhiwani" },
    { label: "Ludhiana" },
    { label: "Amritsar" },
    { label: "Jalandhar" },
    { label: "Patiala" },
    { label: "Bathinda" },
    { label: "Mohali" },
    { label: "Batala" },
    { label: "Pathankot" },
    { label: "Firozpur" },
    { label: "Malerkotla" },
    { label: "Khanna" },
    { label: "Muktsar" },
    { label: "Sunam" },
    { label: "Srinagar" },
    { label: "Jammu" },
    { label: "Anantnag" },
    { label: "Shimla" },
    { label: "Dharamshala" },
    { label: "Solan" },
    { label: "Palampur" },
    { label: "Sundarnagar" },
    { label: "Kullu" },
    { label: "Manali" },
    { label: "Dalhousie" },
    { label: "Rohru" },
    { label: "Jawalamukhi" },
    { label: "Indora" },
    { label: "Kasauli" },
    { label: "Naina Devi" },
    { label: "Kotkhai" },
    { label: "Narkanda" },
    { label: "Sarkaghat" },
    { label: "Una" },
    { label: "Dehradun" },
    { label: "Haridwar" },
    { label: "Roorke" },
    { label: "Rishikesh" },
    { label: "Kashipur" },
    { label: "Hadwani" },
    { label: "Rudrapur" },
    { label: "Gangtok" },
    { label: "Namchi" },
    { label: "Udalguri" },
    { label: "Karimganj" },
    { label: "Cachar" },
    { label: "Kampur" },
    { label: "Dhubri" },
    { label: "Sivasagar" },
    { label: "Guwahati" },
    { label: "Silchar" },
    { label: "Jorhat" },
    { label: "Papum Pare" },
    { label: "Changlang" },
    { label: "Lohit" },
    { label: "West Siang" },
    { label: "Tirap" },
    { label: "East Siang" },
    { label: "Kuma Kurg" },
    { label: "Dimapur" },
    { label: "Kiphire" },
    { label: "Kohima" },
    { label: "Longleng" },
    { label: "Mon" },
    { label: "Phek" },
    { label: "Tuensang" },
    { label: "Wokha" },
    { label: "Noklak" },
    { label: "Chandel" },
    { label: "Imphal East" },
    { label: "Imphal West" },
    { label: "Senapati" },
    { label: "Thoubal" },
    { label: "Churachandpur" },
    { label: "Dhalai" },
    { label: "Nort" },
    { label: "Sout" },
    { label: "Wes" },
    { label: "Mamit" },
    { label: "Aizawal" },
    { label: "Kolasib" },
    { label: "Champhai" },
    { label: "Serchhip" },
    { label: "Saiha" },
    { label: "Lawngtlai" },
  ];
  return (
    <div>
      <Navbar bg="light" expand="lg" className="px-3">
        <Container fluid>
          <Nav className="mr-4">
          <Link to="/" style={{textDecoration:"none",color:"black",fontSize:"22px"}}>
            <b>HR Consultancy</b>
          </Link>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <DropdownButton
              align="start"
              title="All City"
              id="dropdown-menu-align-end"
              variant="outline-secondary"
            >
              <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                options={city}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      // src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    className="pr-2 pl-2"
                    {...params}
                    label="Choose a City"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </DropdownButton>
            <Form className="d-flex" style={{ width: "500px" }}>
              <FormControl
                id="search-box"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className="my-2 my-lg-0 ml-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sell">Sell</Nav.Link>
              <Nav.Link href="/help">Help</Nav.Link>

              <DropdownButton
                align="end"
                title="Hy Harmit"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item eventKey="1">Harmit</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/" eventKey="2">
                  Home
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  Post Your Requirement
                </Dropdown.Item>
                <Dropdown.Item eventKey="4">
                  Verified Business Buyer
                </Dropdown.Item>
                <Dropdown.Item eventKey="4">
                  Products/Service Directory
                </Dropdown.Item>
                <Dropdown.Item eventKey="4">My Orders</Dropdown.Item>
                <Dropdown.Item eventKey="4">Recent Activity</Dropdown.Item>
                <Dropdown.Item eventKey="4">Seetings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Pay with Indiamart</Dropdown.Item>
                <Dropdown.Item eventKey="4">Download App</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">
                  Sign in as Diffrent User
                </Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
