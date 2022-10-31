import { useParams } from "react-router-dom";
import moment from "moment-with-locales-es6";
import api from "../../../Services/api";
import React, { useEffect, useState } from "react";
function LicensesDetails() {
  const params = useParams();
  const [license, setLicense] = useState({});
  const [subsoilUser, setSubsoilUser] = useState({});
  const getLicenseById = async (id) => {
    const { data: License } = await api.Licenses.getLicenseById(id);
    return License;
  };
  const getSubsoilUserByUserId = async (userId) => {
    const { data: SubsoilUser } = await api.SubsoilUser.getSubsoilUserById(
      userId
    );
    return SubsoilUser;
  };
  useEffect(() => {
    getLicenseById(params.id).then((license) => {
      setLicense(license);
      getSubsoilUserByUserId(license.subsoil_user_id).then((SubsoilUser) => {
        setSubsoilUser(SubsoilUser);
      });
    });
  }, [params.id]);
  return (
    <section>
      <div class="container pt-3" style={{paddingBottom:'34rem'}}>
        <div class="align-items-center justify-content-center g-0 row">
          <div>
            <div class="bg-light rounded text-secondary">
              <h4 class="bg-gradient bg-success fw-bold mb-0 pb-3 pe-2 ps-2 pt-3 text-uppercase text-white">
                {license?.name}
              </h4>
              <table>
                <tbody>
                  <tr>
                    <th className="license-row">ИНН {subsoilUser.tin}</th>
                    <td>{subsoilUser.name}</td>
                  </tr>
                  <tr>
                    <th className="license-row">Директор</th>
                    <td>{subsoilUser.director}</td>
                  </tr>
                  <tr>
                    <th className="license-row">КПП</th>
                    <td>{subsoilUser.iec}</td>
                  </tr>
                  <tr>
                    <th className="license-row">ОГРН</th>
                    <td>{subsoilUser.psrn}</td>
                  </tr>
                  <tr>
                    <th className="license-row">Дата регистрации</th>
                    <td>
                        {subsoilUser.date_of_registration} <strong style={{marginLeft:'40px'}}>
                            Действует {moment
                        .duration(
                          new Date().getFullYear() -
                            Number(
                              subsoilUser.date_of_registration?.slice(0, 4)
                            ),
                          "year"
                        )
                        .locale("ru")
                        .humanize()}{" "}
                      {moment
                        .duration(
                          new Date().getMonth() -
                            Number(
                              subsoilUser.date_of_registration?.slice(5, 7)
                            ),
                          "month"
                        )
                        .locale("ru")
                        .humanize()}{" "}
                      {moment
                        .duration(
                          new Date().getDate() -
                            Number(subsoilUser?.date_of_registration?.slice(8)),
                          "day"
                        )
                        .locale("ru")
                        .humanize()}    
                        </strong>
                    </td>
                    
                  </tr>
                  <tr>
                    <th className="license-row">Период действия</th>
                    <td>
                      {license?.start_date?.slice(
                        0,
                        license?.start_date.lastIndexOf("T")
                      )}{" "}
                      -{" "}
                      {license?.end_date?.slice(
                        0,
                        license?.end_date.lastIndexOf("T")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th className="license-row">Лицензия на деятельность</th>
                    <td>{license.destination}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LicensesDetails;
