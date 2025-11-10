const BayananMamaci = () => {
  return (
    <div className="bayananMamaci ">
      <h2>Bayanan mamaci</h2>
      <br />
      <div className="m-sm p-sm col-xs-12 col-sm-6">
        <label htmlFor="sunanmamaci">Sunan sa</label>{" "}
        <input
          type="text"
          name="name"
          id="sunanmamaci"
          placeholder="sunan mamaci"
          required
        />
      </div>
      <div className="m-sm col-xs-12 col-sm-6 p-sm">
        <label htmlFor="adadinDukiya">Dukiyar:</label>
        <input
          type="number"
          name="weath"
          id="addadinDukiya"
          min={0}
          required
          placeholder="0.00"
        />
      </div>
      <div className="d-f content-space-around">
        <label htmlFor="mamaciMale">namiji:</label>
        <input type="radio" name="jinsinMamaci" id="mamaciMale" />
        <label htmlFor="mamaciFemale"> mace: </label>
        <input type="radio" name="jinsinMamaci" id="mamaciFemale" />{" "}
        <label htmlFor="aure">Aure</label>
        <input type="checkbox" name="aure" id="aure" required />
      </div>
    </div>
  );
};

export default BayananMamaci;
