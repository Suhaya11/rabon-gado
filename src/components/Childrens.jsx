const Childrens = ({ gender }) => {
  return (
    <>
      <h2 className="form-title">
        Yayan {gender == "male" ? "mamaci" : "mamaciya"}{" "}
      </h2>
      <div>
        <div>
          <div className="mb-sm mt-sm">
            <label htmlFor="malesChildren">Maza:</label>
            <input
              type="number"
              name="name"
              id="malesChildren"
              placeholder="Yaya maza"
              min={0}
              className="p-sm"
            />
          </div>
          <br />
          <div className="mt-sm">
            <label htmlFor="femalesChildren">Mata:</label>
            <input
              className="p-sm"
              type="number"
              name="name"
              id="femalesChildren"
              placeholder="Yaya mata"
              min={0}
            />
          </div>
        </div>
        <h3 className="align-center mt-sm mb-sm">Jikoki</h3>
        <div>
          <div className="mb-sm mt-sm">
            <label htmlFor="malesGrandChildren">Maza:</label>
            <input
              type="number"
              name="name"
              id="malesGrandChildren"
              placeholder="Yaya maza"
              min={0}
              className="p-sm"
            />
          </div>
          <br />
          <div className="mt-sm">
            <label htmlFor="femalesGrandChildren">Mata:</label>
            <input
              className="p-sm"
              type="number"
              name="name"
              id="femalesGrandChildren"
              placeholder="Yaya mata"
              min={0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Childrens;
