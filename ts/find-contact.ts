import $ from "jquery";
import { Contact } from "./dto/contact";
const BASE_API = "http://localhost:8080/cbook/contact";
findContact("");

$("#txt-search").on("input", () => {
  let query: string = ($("#txt-search").val() as string).trim();
  findContact(query);
});

function findContact(q: string) {
  let qString: string = q === "" ? "" : "?q=" + q;
  let apiURL: string = `${BASE_API + "" + qString}`;

  fetch(apiURL, {
    method: "GET",
  })
    .then((response) => {
      if (response.status !== 200) throw Error("Couldn't fetch data");
      return response.json();
    })
    .then((contacts) => {
      console.log(contacts);
      $("#contactList").empty();

      let htmlContent: string = "";
      contacts.forEach((c: Contact) => {
        htmlContent += `<li class="list-group-item px-0" aria-current="true">
      <div class="row g-0">
        <div
          class="
                      col-md
                      d-md-flex
                      justify-content-center
                      align-items-center
                    "
        >
          <img
            ${
              c.picture === (null || undefined)
                ? "src=" + "./placeholder-image.jpg"
                : "src=" + c.picture
            }
            class="img-fluid rounded-2"
            alt="..."
            style="max-height: 100px"
          />
        </div>
        <div class="col-md-10">
          <div class="p-1">
            <h5 class="">${
              c.fName + " " + (c.lName !== (null || undefined) ? c.lName : "")
            }</h5>
            <p class="m-0">
              <span class="fw-bold"> Phone Number: </span>
              ${c.phone !== (null || undefined) ? c.phone : "-"}
            </p>
            <p class="m-0">
              <span class="fw-bold"> Email: </span>
              ${c.email !== (null || undefined) ? c.email : "-"}
            </p>
            <p class="card-text m-0">
              <span class="fw-bold"> Address: </span>
              ${c.address !== (null || undefined) ? c.address : "-"}
            </p>
          </div>
        </div>
      </div>
    </li>`;
      });
      $("#contactList").append(htmlContent);
    });
}
