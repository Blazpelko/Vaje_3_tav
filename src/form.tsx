import { Form, Segment, Grid } from "semantic-ui-react";
import { useState } from "react";

const countryOptions = [
  { key: "af", value: "af", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "al", flag: "al", text: "Albania" },
  { key: "dz", value: "dz", flag: "dz", text: "Algeria" },
  { key: "as", value: "as", flag: "as", text: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", text: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", text: "Angola" },
  { key: "ai", value: "ai", flag: "ai", text: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", text: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "am", value: "am", flag: "am", text: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", text: "Aruba" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "az", value: "az", flag: "az", text: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", text: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", text: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", text: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", text: "Barbados" },
  { key: "by", value: "by", flag: "by", text: "Belarus" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", text: "Belize" },
  { key: "bj", value: "bj", flag: "bj", text: "Benin" }
];

const SubmitForm = (selectedItems) => {
  const [
    {
      name,
      email,
      address,
      country,
      submittedName,
      submittedEmail,
      submittedAddress,
      submittedCountry
    },
    setParams
  ] = useState({
    name: "",
    email: "",
    address: "",
    country: "",
    submittedName: "",
    submittedEmail: "",
    submittedAddress: "",
    submittedCountry: ""
  });

  function cena() {
    let sum = 0;
    selectedItems.selectedItems.forEach(function (i) {
      sum += i.cena;
    });
    return sum;
  }

  const handleChange = (
    e,
    { name, value }: { name: string; value: string }
  ) => {
    setParams((currentState) => ({
      ...currentState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    setParams({
      name: "",
      email: "",
      address: "",
      country: "",
      submittedName: name,
      submittedEmail: email,
      submittedAddress: address,
      submittedCountry: country
    });
    //Da se stran ne redirecta
    event.preventDefault();
  };

  return (
    <div style={{ margin: 10 }}>
      <Grid>
        <Grid.Column width={10}>
          <Segment raised>
            <h1>Za naročilo izpolnite podatke:</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <Form.Input
                  label="Vnesite ime"
                  required
                  placeholder="Ime"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Vnesite email"
                  required
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Vnesite naslov"
                  required
                  placeholder="Naslov"
                  name="address"
                  value={address}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Form.Dropdown
                  label="Država"
                  required
                  placeholder="Country"
                  name="country"
                  value={country}
                  onChange={handleChange}
                  fluid
                  search
                  selection
                  options={countryOptions}
                />
              </Form.Field>
              <Form.Button
                disabled={
                  name.length === 0 ||
                  address.length === 0 ||
                  email.length === 0 ||
                  country.length === 0
                }
                content="Potrdi"
              />
            </Form>
            {submittedName.length > 0 && (
              <Segment>
                <p>Naročilo kerirano:</p>
                <ul>
                  <li>Naslovnik: {submittedName}</li>
                  <li>Email: {submittedEmail}</li>
                  <li>Naslov: {submittedAddress}</li>
                  <li>Država: {submittedCountry}</li>
                  <li>Za plačilo: {cena()}$</li>
                </ul>
              </Segment>
            )}
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment raised>
            {selectedItems.selectedItems.length === 0 ? (
              <p>V košarici ni elementov </p>
            ) : (
              <div>
                <p>V košarici so elementi:</p>
                {selectedItems.selectedItems.map((temp) => (
                  <p key={temp.id}>
                    {temp.id} | <strong>{temp.cena} $ </strong>
                  </p>
                ))}
              </div>
            )}
          </Segment>
          {selectedItems.selectedItems.length > 0 && (
            <Segment raised>
              {" "}
              <p>
                Skupaj: <strong>{cena()}$</strong>
              </p>
            </Segment>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SubmitForm;
