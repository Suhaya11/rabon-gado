const DeadPersonInfo = ({ updateMamaciObject, mamaci }) => {
  return (
    <div className="radios mt-sm ">
      <label htmlFor="ismulMayyit">Name:</label>
      <input
        id="ismulMayyit"
        className="p-sm"
        type="text"
        placeholder="Full name"
        onInput={(a) => updateMamaciObject("fullName", a.target.value)}
      />
      <br /> <br />
      <input
        type="radio"
        name="gender"
        id="male"
        value={"male"}
        onClick={(e) => {
          updateMamaciObject("gender", e.target.value);

          console.log("the id is: " + e.target.id);
        }}
      />
      <label htmlFor="male">Namiji</label>
      <br />
      <br />
      <input
        type="radio"
        name="gender"
        id="female"
        value={"female"}
        onClick={(e) => {
          updateMamaciObject("gender", e.target.value);
          console.log(mamaci);
        }}
      />
      (
      <>
        <label htmlFor="aure">Aure</label>
        <br />
        <br />
        <input
          type="checkbox"
          name="aure"
          id="aure"
          value={"aure"}
          onClick={(e) => {
            updateMamaciObject(e.target.id, true);
            console.log(mamaci);
          }}
        />
      </>
      )<label htmlFor="female">Mace</label>
      <br />
      <br />
      <input
        className="p-sm"
        type="number"
        name="ovarralWealth"
        id="ovarralWealth"
        placeholder="Dukiyar da ya bari"
        onInput={(e) =>
          updateMamaciObject("totalAmount", e.target.value) &&
          console.log(mamaci)
        }
      />{" "}
    </div>
  );
};

export default DeadPersonInfo;
