import { useState } from "react";
import DeadPersonInfo from "./DeadPersonInfo";
import Childrens from "./Childrens";
import Parents from "./Parents";

const Form = () => {
  let [formNo, setFormNo] = useState(0);
  let [formTitle, setFormTitle] = useState("Bayanan");

  const [prevFormTitle, setPrevFormTitle] = useState(null);

  const mamaci = {
    addini: "islam",
  };

  let updateMamaciObject = (object, key, value) => (object[key] = value);

  return (
    <>
      <div className="p-lg mt-lg">
        <div className="form content-center p-xl d-f">
          {
            formNo === 0 && (
              <DeadPersonInfo
                updateMamaciObject={updateMamaciObject}
                mamaci={mamaci}
              />
            ) // here the gender of dead person is choose and saved for feature calculations
          }
          {formNo === 1 && ( //{"Heres where the childrens of dead person a"}
            <Childrens />
          )}
          {formNo === 2 && <Parents />}
          <br />
          {formNo == 0 ? (
            <div className="mt-lg">
              <button
                className="btn-Pupple"
                // onClick={() => {
                //   if (gender) {
                //     setFormNo(++formNo);
                //     setPrevFormTitle(formTitle);
                //     setFormTitle("Yayan");
                //     console.log(formNo);
                //   }}}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="btns">
              <button
                className="btn-Pupple"
                onClick={() => {
                  setFormTitle(prevFormTitle);
                  setFormNo(--formNo);
                }}
              >
                Back
              </button>
              <button
                className="btn-Pupple"
                onClick={() => {
                  setFormNo(++formNo);
                  setPrevFormTitle(formTitle);
                  if (formNo == 1) {
                    setFormTitle("Mahaifan");
                  }
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
