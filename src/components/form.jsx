export const Form = () => {
  return (
    <>
      <div className="container mt-lg ml-a mr-a">
        <div className="d-f content-center">
          <form action="" className="d-f content-center flex-flow-row-wrap">
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
                <input
                  type="radio"
                  name="jinsinMamaci"
                  id="mamaciFemale"
                />{" "}
                <label htmlFor="aure">Aure</label>
                <input type="checkbox" name="aure" id="aure" required />
              </div>
            </div>
            <div className="zurriyya col-sm-12 align-center">
              <hr className="mt-sm" />
              <h3 className="mt-sm">Zurriya</h3>
              <div className="row">
                <div className="col-12-xs col-6-sm mt-sm">
                  <label htmlFor="yayaMaza">Yaya maza:</label>
                  <input
                    type="number"
                    name="yayaMaza"
                    id="yayaMaza"
                    placeholder="0"
                    min={0}
                  />
                </div>
                <div className="col-12-xs col-6-sm mt-sm">
                  <label htmlFor="yayaMata">Yaya mata:</label>
                  <input
                    type="number"
                    name="yayaMata"
                    min={0}
                    id="yayaMata"
                    placeholder="0"
                  />
                </div>
                <div className="col-12-xs col-6-sm mt-sm">
                  <label htmlFor="JikokiMaza">Jikoki maza:</label>
                  <input
                    type="number"
                    name="JikokiMaza"
                    id="JikokiMaza"
                    placeholder="0"
                    min={0}
                  />
                </div>
                <div className="col-12-xs col-6-sm mt-sm">
                  <label htmlFor="JikokiMata">Jikoki mata:</label>
                  <input
                    type="number"
                    name="JikokiMata"
                    min={0}
                    id="JikokiMata "
                    placeholder="0"
                  />
                </div>
                <div className="col-12-xs  mt-sm d-f content-space-around">
                  <div>
                    <label htmlFor="father" className="ml-sm">
                      Mahaifi
                    </label>{" "}
                    <input type="checkbox" name="father" id="father" />
                  </div>
                  <div>
                    {" "}
                    <label htmlFor="mother" className="ml-sm">
                      Mahaifiya:
                    </label>{" "}
                    <input type="checkbox" name="mother" id="mother" />
                  </div>
                </div>{" "}
                <div className="col-12-xs  mt-sm d-f content-space-around">
                  <div>
                    <label htmlFor="grandfather" className="ml-sm">
                      KAKA NAMIJI:
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="grandfather"
                      id="grandfather"
                    />
                  </div>
                  <div>
                    {" "}
                    <label htmlFor="grandmother" className="ml-sm">
                      KAKA MACE:
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="grandmother"
                      id="grandmother"
                    />
                  </div>
                </div>
                <hr className="mt-sm" />
                <div className="row yanuwa">
                  <h3 className="col-12-xs">Yan Uwa</h3>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="shakikaiMaza">Shakikai maza:</label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="shakikaiMaza"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="shakikaiMata">Shakikai mata:</label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="shakikaiMata"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="LiabbaiMaza">Li abbai maza:</label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="LiabbaiMaza"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="LiabbaiMata">Li abbai mata:</label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="LiabbaiMata"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="LiummaiMaza">Li ummai maza:</label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="LiummaiMaza"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="LiummaiMata">Li ummai mata:</label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="LiummaiMata"
                    />
                  </div>
                </div>{" "}
                <div className="row yanuwa">
                  <h3 className="col-12-xs">Yayan Yan Uwa</h3>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="YayanshakikaiMaza">
                      Yayan Shakikai maza:
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="YayanshakikaiMaza"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="YayanshakikaiMata">
                      Yayan Shakikai mata:
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="YayanshakikaiMata"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="YayanliabbaiMaza">
                      Yayan li abbai maza:
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="YayanliabbaiMaza"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="YayanliabbaiMata">
                      Yayan li abbai mata:
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="YayanliabbaiMata"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="YayanliummaiMaza">
                      Yayan li ummai maza:
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="YayanliummaiMaza"
                    />
                  </div>
                  <div className="col-12-xs col-6-sm col-3-lg">
                    <label htmlFor="YayanliummaiMata">
                      Yayan li ummai mata:
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      min={0}
                      id="YayanliummaiMata"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="m-sm col-12-xs">
              <button className="btn-Green">Raba</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
