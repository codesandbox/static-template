var interval;
var button = document.getElementById("protocoloOpenButton");
var protocoloModal = document.getElementById("protocoloModal");
var protocoloModalContent = document.getElementById("protocoloModalContent");
var protocoloHeader = document.getElementById("protocoloTitle");

var code = "pre_natal_demo";
var clientId = "539c345b6e67e7bb";

var ProtocoloStatusDisplay = {
  FINALIZADO: "Finalizado",
  CANCELADO: "Cancelado",
  ABERTO: "Aberto",
  EM_ANDAMENTO: "Em andamento",
  "on-hold": "Aguardando..."
};

var ProtocoloStatusBadgeClass = {
  FINALIZADO: "badge bg-success",
  CANCELADO: "badge bg-danger",
  ABERTO: "badge bg-secondary",
  EM_ANDAMENTO: "badge bg-primary",
  "on-hold": "badge bg-info"
};

var Enconter = {
  id: "725b77e2-bd35-4d68-acca-c3c3d9b79750",
  status: "in-progress",
  class: {
    code: "AMB",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    display: "ambulatorial"
  },
  subject: {
    reference: "#pat-1"
  },
  location: [
    {
      location: {
        reference: "#loc-1"
      }
    }
  ],
  contained: [
    {
      id: "pat-1",
      name: [
        {
          use: "official",
          text: "Elisete Laís Caldeira Vega"
        },
        {
          use: "usual",
          text: "Elis Vega"
        }
      ],
      gender: "female",
      birthDate: "1987-07-06",
      resourceType: "Patient"
    },
    {
      id: "pract-1",
      name: [
        {
          use: "official",
          text: "José Eduardo Moraes Rego Sousa"
        }
      ],
      gender: "male",
      resourceType: "Practitioner"
    },
    {
      id: "practrole-1",
      specialty: {
        coding: [
          {
            code: "225120",
            system:
              "http://healthit.medflowapp.com/fhir/CodeSystem/tuss-tab-24",
            display: "Médico cardiologista"
          }
        ]
      },
      practitioner: {
        reference: "#pract-1"
      },
      resourceType: "PractitionerRole"
    },
    {
      id: "org-1",
      name: "SPDM",
      resourceType: "Organization"
    },
    {
      id: "loc-1",
      name: "Hospital e Maternidade Dr. Odelmo Leão Carneiro",
      resourceType: "Location"
    }
  ],
  participant: [
    {
      individual: {
        reference: "#practrole-1"
      }
    }
  ],
  resourceType: "Encounter",
  serviceProvider: {
    reference: "#org-1"
  }
};

function createRequestedItemsList(displayList, title) {
  if (displayList.length > 0) {
    const listContainer = document.createElement("div");
    listContainer.className = "mb-4";
    const listTitle = document.createElement("h6");
    listTitle.innerHTML = title;

    const ul = document.createElement("ul");
    ul.className = "list-group";

    displayList.forEach((display) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      let liText = document.createTextNode(display);
      li.appendChild(liText);
      ul.appendChild(li);
    });

    listContainer.appendChild(listTitle);
    listContainer.appendChild(ul);

    return listContainer;
  }

  return null;
}

function createIframe(url) {
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", url);
  ifrm.style.width = "100%";
  ifrm.style.height = "480px";
  return ifrm;
}

function createAlert(alertType, alertMessage) {
  var alert = document.createElement("div");
  alert.className = `alert alert-${alertType}`;
  alert.role = "alert";
  alert.appendChild(document.createTextNode(alertMessage));

  return alert;
}

function extractBundleData(bundleId) {
  fetch(`https://api.test.medflowapp.com/enterprise/fhir/Bundle/${bundleId}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-Client-Id": clientId
    }
  })
    .then((response) => response.json())
    .then((data) => {
      // Recuperando dados usando o recurso 🔥 HL7 FHIRPath
      // Specification: https://build.fhir.org/ig/HL7/FHIRPath/
      // Lib: https://github.com/hl7/fhirpath.js/
      var medicationRequestNames = fhirpath.evaluate(
        data,
        "Bundle.entry.resource.ofType(MedicationRequest).medicationCodeableConcept.select((text | coding.display).first())"
      );
      var serviceRequestNames = fhirpath.evaluate(
        data,
        "Bundle.entry.resource.ofType(ServiceRequest).code.select((text | coding.display).first())"
      );
      var carePlanNames = fhirpath.evaluate(
        data,
        "Bundle.entry.resource.ofType(CarePlan).title"
      );

      var modalBody = document.getElementById("protocoloModalContent");

      var medicationRequestListGroup = createRequestedItemsList(
        medicationRequestNames,
        "💊 Medicamentos sugeridos"
      );
      var serviceRequestListGroup = createRequestedItemsList(
        serviceRequestNames,
        "🩻 Exames/Procedimentos sugeridos"
      );
      var carePlanListGroup = createRequestedItemsList(
        carePlanNames,
        "💬 Orientações médicas apresentadas"
      );

      [
        medicationRequestListGroup,
        serviceRequestListGroup,
        carePlanListGroup
      ].forEach((elem) => elem && modalBody.appendChild(elem));
    });
}

function checkStatus(id) {
  fetch(
    `https://api.test.medflowapp.com/enterprise/protocolos/execucoes/${id}/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-Client-Id": clientId,
        "X-Client-Token": "your-token"
      }
    }
  )
    .then((response) => response.json())
    .then((data) => {
      var statusBadge = document.getElementById("protocoloStatus");
      var status = data.status || data.status_integracao;
      statusBadge.innerHTML = ProtocoloStatusDisplay[status];
      statusBadge.setAttribute("class", ProtocoloStatusBadgeClass[status]);

      if (interval && ["CANCELADO", "FINALIZADO"].includes(data.status)) {
        clearInterval(interval);

        var modalBody = document.getElementById("protocoloModalContent");
        modalBody.replaceChildren();

        // Protocolo FINALIZADO, exibir itens solicitados
        if (data.status === "FINALIZADO") {
          modalBody.appendChild(
            createAlert(
              "success",
              "Protocolo finalizado com sucesso! Veja abaixo os itens que foram solicitados."
            )
          );

          extractBundleData(data.bundle_id);
          // Protocolo CANCELADO, exibir apenas alerta
        } else {
          modalBody.appendChild(
            createAlert(
              "danger",
              "Protocolo interrompido pelo usuário! Nenhum item solicitado deve ser atribuído ao prontuário."
            )
          );
        }
      }
    });
}

function lauchProtocolo() {
  button.disabled = true;
  button.innerHTML = "Abrindo protocolo...";

  fetch(
    `https://api.test.medflowapp.com/enterprise/protocolos/${code}/abrir/`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-Client-Id": clientId,
        "X-Client-Token": "your-token"
      },
      body: JSON.stringify(Enconter)
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Retorna botão ao estado original
      button.disabled = false;
      button.innerHTML = "Abrir protocolo";

      // Redireciona usuário
      // window.open(data.redirect_uri);

      // Abre modal com conteúdo do protocolo
      var bsProtocoloModal = new bootstrap.Modal(protocoloModal);
      bsProtocoloModal.show();

      var protocoloName = document.createTextNode(data.nome + " ");
      var statusBadge = document.createElement("span");
      var status = data.status || data.status_integracao;
      statusBadge.id = "protocoloStatus";
      statusBadge.className = ProtocoloStatusBadgeClass[status];
      statusBadge.innerHTML = ProtocoloStatusDisplay[status];

      protocoloHeader.appendChild(protocoloName);
      protocoloHeader.appendChild(statusBadge);

      // Carregando conteúdo Medflow no iframe
      protocoloModalContent.appendChild(createIframe(data.redirect_uri));

      // Checando status do protocolo a cada 5s
      interval = setInterval(() => checkStatus(data.id), 5000);
    })
    .catch((err) => console.log(err));
}

button.addEventListener("click", lauchProtocolo);

protocoloModal.addEventListener("hide.bs.modal", function (event) {
  if (interval) {
    clearInterval(interval);
  }

  protocoloHeader.replaceChildren();
  protocoloModalContent.replaceChildren();
});
