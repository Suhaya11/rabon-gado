import { useState } from "react";

const Parents = ({ gender }) => {
  const [fatherExist, setFatherExist] = useState(null);
  return (
    <>
      <h2 className="form-title">
        Yayan {gender == "male" ? "mamaci" : "mamaciya"}{" "}
      </h2>
      <div>
        <div>
          <div className="mb-sm mt-sm">
            <label htmlFor="father">Mahaifi:</label>
            <input
              type="number"
              name="name"
              id="father"
              placeholder="Mahaifin mamaci"
              min={0}
              className="p-sm"
              onChange={(a) => setFatherExist(a.target.value)}
            />
          </div>
          <br />
          <div className="mt-sm">
            <label htmlFor="mother">Mahaifiya:</label>
            <input
              className="p-sm"
              type="number"
              name="name"
              id="mother"
              placeholder="Yaya mata"
              min={0}
            />
          </div>
        </div>
        {!fatherExist && (
          <>
            <h3 className="align-center mt-sm mb-sm">Kakanni</h3>
            <div>
              <div className="mb-sm mt-sm">
                <label htmlFor="grandFather">Namiji:</label>
                <input
                  type="number"
                  name="name"
                  id="grandFather"
                  placeholder="Yaya maza"
                  min={0}
                  className="p-sm"
                />
              </div>
              <br />
              <div className="mt-sm">
                <label htmlFor="gradMother">Mace:</label>
                <input
                  className="p-sm"
                  type="number"
                  name="name"
                  id="grandMother"
                  placeholder="Yaya mata"
                  min={0}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Parents;
