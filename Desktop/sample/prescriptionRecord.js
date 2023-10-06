// response.entry = ye ek array hoga
// apply loop to the array

const PrescriptionRecordResponse = {
    "resourceType": "Bundle",
    "id": "820b6ddc-b308-4a99-ab7f-bb7e4d829649",
    "meta": {
        "lastUpdated": "2023-08-14T10:19:08.727067Z"
    },
    "identifier": {
        "system": "https://www.max.in/bundle",
        "value": "820b6ddc-b308-4a99-ab7f-bb7e4d829649"
    },
    "type": "document",
    "timestamp": "2023-08-14T10:19:08.727067Z",
    "entry": [
        {
            "fullUrl": "Composition/edb35bd1-9b14-4096-b413-a34d8b668f99",
            "resource": {
                "resourceType": "Composition",
                "id": "edb35bd1-9b14-4096-b413-a34d8b668f99",
                "identifier": {
                    "system": "https://www.max.in/document",
                    "value": "edb35bd1-9b14-4096-b413-a34d8b668f99"
                },
                "status": "final",
                "type": {
                    "coding": [
                        {
                            "system": "https://projecteka.in/sct",
                            "code": "440545006",
                            "display": "Prescription record"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/c2146b78-676b-43e5-88d0-e6abb73ccda0"
                },
                "encounter": {
                    "reference": "Encounter/dc08812d-1f45-48bb-a300-926acb82b406"
                },
                "date": "2023-08-14T10:19:08.727067Z",
                "author": [
                    {
                        "reference": "Practitioner/2b27594b-3a82-44f1-9de4-84f7a1fcaa88",
                        "display": "Dr Laxmikanth J"
                    }
                ],
                "title": "Prescription",
                "section": [
                    {
                        "title": "OPD Prescription",
                        "code": {
                            "coding": [
                                {
                                    "system": "https://projecteka.in/sct",
                                    "code": "440545006",
                                    "display": "Prescription record"
                                }
                            ]
                        },
                        "entry": [
                            {
                                "reference": "MedicationRequest/b43f71a2-c0ef-4dd3-9cbf-802dcbfdb4a6"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "fullUrl": "Practitioner/2b27594b-3a82-44f1-9de4-84f7a1fcaa88",
            "resource": {
                "resourceType": "Practitioner",
                "id": "2b27594b-3a82-44f1-9de4-84f7a1fcaa88",
                "identifier": [
                    {
                        "system": "https://www.mciindia.in/doctor",
                        "value": "2b27594b-3a82-44f1-9de4-84f7a1fcaa88"
                    }
                ],
                "name": [
                    {
                        "text": "Laxmikanth J",
                        "prefix": [
                            "Dr"
                        ],
                        "suffix": [
                            "MD"
                        ]
                    }
                ]
            }
        },
        {
            "fullUrl": "Patient/c2146b78-676b-43e5-88d0-e6abb73ccda0",
            "resource": {
                "resourceType": "Patient",
                "id": "c2146b78-676b-43e5-88d0-e6abb73ccda0",
                "name": [
                    {
                        "text": "Keith David"
                    }
                ],
                "gender": "male"
            }
        },
        {
            "fullUrl": "Encounter/dc08812d-1f45-48bb-a300-926acb82b406",
            "resource": {
                "resourceType": "Encounter",
                "id": "dc08812d-1f45-48bb-a300-926acb82b406",
                "status": "finished",
                "class": {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB",
                    "display": "Outpatient visit"
                },
                "subject": {
                    "reference": "Patient/c2146b78-676b-43e5-88d0-e6abb73ccda0"
                },
                "period": {
                    "start": "2023-08-14T10:19:08.727067Z"
                }
            }
        },
        {
            "fullUrl": "Medication/6e25eed1-b339-4dba-9261-32062b651f79",
            "resource": {
                "resourceType": "Medication",
                "id": "6e25eed1-b339-4dba-9261-32062b651f79",
                "code": {
                    "coding": [
                        {
                            "system": "https://projecteka.in/act",
                            "code": "R05CB02",
                            "display": "bromhexine 24 mg"
                        }
                    ]
                }
            }
        },
        {
            "fullUrl": "MedicationRequest/b43f71a2-c0ef-4dd3-9cbf-802dcbfdb4a6",
            "resource": {
                "resourceType": "MedicationRequest",
                "id": "b43f71a2-c0ef-4dd3-9cbf-802dcbfdb4a6",
                "status": "active",
                "intent": "order",
                "medicationReference": {
                    "reference": "Medication/6e25eed1-b339-4dba-9261-32062b651f79"
                },
                "subject": {
                    "reference": "Patient/c2146b78-676b-43e5-88d0-e6abb73ccda0"
                },
                "authoredOn": "2023-08-14T10:19:08.727067Z",
                "requester": {
                    "reference": "Practitioner/2b27594b-3a82-44f1-9de4-84f7a1fcaa88"
                },
                "dosageInstruction": [
                    {
                        "text": "1 capsule 2 times a day"
                    }
                ]
            }
        }
    ]
}
const itemsToLoop = PrescriptionRecordResponse.entry; //response.entry

var OutputObject = {};

const fetchPrescriptionRecordDetails = async () => {
    itemsToLoop.map((e) => {
        if (e.resource.resourceType === "DocumentReference") {
            if (!OutputObject.hasOwnProperty('DocumentReference')) {
                OutputObject.DocumentReference = []
            }
            var documentObject = {};
            documentObject.documentDetails = {}
            // fetch the required key value pairs and start pushing into the object
            documentObject.documentDetails.documentType = e.resource?.type?.text;
            documentObject.documentDetails.documentDisplay = e.resource?.type?.coding?.[0]?.display;
            documentObject.documentDetails.documents = e.resource?.type?.text;
            documentObject.documents = e.resource?.content; // ye ek array of objects rahega with multiple 
            OutputObject.DocumentReference.push(documentObject)
        }

        if (e.resource.resourceType === "Encounter") {
            if (!OutputObject.hasOwnProperty('Encounter')) {
                OutputObject.Encounter = []
            }
            var EncounterObject = {};
            EncounterObject.resourceType = e.resource?.resourceType;
            EncounterObject.resourceStatus = e.resource?.status;
            EncounterObject.class = e.resource?.class;
            OutputObject.Encounter.push(EncounterObject)
        }

        if (e.resource.resourceType === "Patient") {
            if (!OutputObject.hasOwnProperty('Patient')) {
                OutputObject.Patient = []
            }
            var PatientObject = {};
            PatientObject.patientName = e.resource?.name[0]?.text;
            PatientObject.patientgender = e.resource?.gender;
            PatientObject.patientPhone = e.resource?.telecom?.[0]?.value;
            OutputObject.Patient.push(PatientObject)
        }

        if (e.resource.resourceType === "Practitioner") {
            if (!OutputObject.hasOwnProperty('Practitioner')) {
                OutputObject.Practitioner = []
            }
            var PractitionerObject = {};
            PractitionerObject.doctorName = e.resource?.name?.[0]?.text;
            PractitionerObject.doctorPhone = e.resource?.telecom?.[0]?.value;
            OutputObject.Practitioner.push(PractitionerObject)
        }

        if (e.resource.resourceType === "Organization") {
            if (!OutputObject.hasOwnProperty('Organization')) {
                OutputObject.Organization = []
            }
            var OrganizationObject = {};
            OrganizationObject.OrganizationName = e.resource?.name;
            OrganizationObject.OrganizationTelecom = e.resource?.telecom;
            OrganizationObject.OrganizationAddress = e.resource?.address;
            OutputObject.Organization.push(OrganizationObject)
        }

        if (e.resource.resourceType === "Composition") {
            if (!OutputObject.hasOwnProperty('Composition')) {
                OutputObject.Composition = []
            }
            var CompositionObject = {};
            CompositionObject.encounterDetails = e.resource?.encounter?.display;
            CompositionObject.documentType = e.resource?.title;
            CompositionObject.documentSection = e.resource?.section;
            CompositionObject.attester = e.resource?.attester;
            OutputObject.Composition.push(CompositionObject)
        }

        if (e.resource.resourceType === "Condition") {
            if (!OutputObject.hasOwnProperty('Condition')) {
                OutputObject.Condition = []
            }
            var ConditionObject = {};
            ConditionObject.Conditioncategory = e.resource?.category?.[0]?.text;
            ConditionObject.Conditionseverity = e.resource?.severity?.text;
            ConditionObject.Conditioncode = e.resource?.code?.text;
            OutputObject.Condition.push(ConditionObject)
        }

        if (e.resource.resourceType === "AllergyIntolerance") {
            if (!OutputObject.hasOwnProperty('AllergyIntolerance')) {
                OutputObject.AllergyIntolerance = []
            }
            var AllergyIntoleranceObject = {};
            AllergyIntoleranceObject.type = e.resource?.type;
            AllergyIntoleranceObject.criticality = e.resource?.criticality;
            AllergyIntoleranceObject.code = e.resource?.code?.coding?.[0]?.display;
            AllergyIntoleranceObject.category = e.resource?.category;
            AllergyIntoleranceObject.onsetString = e.resource?.onsetString;
            AllergyIntoleranceObject.asserter = e.resource?.asserter?.display;

            OutputObject.AllergyIntolerance.push(AllergyIntoleranceObject)
        }

        if (e.resource.resourceType === "Observation") {
            if (!OutputObject.hasOwnProperty('Observation')) {
                OutputObject.Observation = []
            }
            var ObservationObject = {};

            ObservationObject.text = e.resource?.code?.text;
            ObservationObject.codeDisplay = e.resource?.code?.coding?.[0]?.display;
            ObservationObject.component = e.resource?.component;
            ObservationObject.valueQuantity = e.resource?.valueQuantity;
            ObservationObject.valueString = e.resource?.valueString;

            OutputObject.Observation.push(ObservationObject)
        }

        if (e.resource.resourceType === "MedicationRequest") {
            if (!OutputObject.hasOwnProperty('MedicationRequest')) {
                OutputObject.MedicationRequest = []
            }
            var MedicationRequestObject = {};

            MedicationRequestObject.status = e.resource?.status;
            MedicationRequestObject.medicationCodeableConcept = e.resource?.medicationCodeableConcept?.text;
            MedicationRequestObject.dosageInstruction = e.resource?.dosageInstruction?.[0]?.text;

            OutputObject.MedicationRequest.push(MedicationRequestObject)
        }

        if (e.resource.resourceType === "Medication") {
            if (!OutputObject.hasOwnProperty('Medication')) {
                OutputObject.Medication = []
            }
            var MedicationObject = {};

            MedicationObject.text = e.resource?.code?.text;
            MedicationObject.codeDisplay = e.resource?.code?.coding?.[0]?.display;

            OutputObject.Medication.push(MedicationObject)
        }


        if (e.resource.resourceType === "Procedure") {
            if (!OutputObject.hasOwnProperty('Procedure')) {
                OutputObject.Procedure = []
            }
            var ProcedureObject = {};

            ProcedureObject.code = e.resource?.code?.text;
            ProcedureObject.asserter = e.resource?.asserter?.display;
            ProcedureObject.complication = e.resource?.complication?.[0]?.coding?.[0]?.display;

            OutputObject.Procedure.push(ProcedureObject)
        }

        if (e.resource.resourceType === "CarePlan") {
            if (!OutputObject.hasOwnProperty('CarePlan')) {
                OutputObject.CarePlan = []
            }
            var CarePlanObject = {};

            CarePlanObject.status = e.resource?.status;
            CarePlanObject.title = e.resource?.title;
            CarePlanObject.description = e.resource?.description;
            CarePlanObject.note = e.resource?.note;

            OutputObject.CarePlan.push(CarePlanObject)
        }

        if (e.resource.resourceType === "Appointment") {
            if (!OutputObject.hasOwnProperty('Appointment')) {
                OutputObject.Appointment = []
            }
            var AppointmentObject = {};
            AppointmentObject.participant = {}

            AppointmentObject.status = e.resource?.status;
            AppointmentObject.description = e.resource?.description;
            AppointmentObject.participant.actor = e.resource?.participant?.[0]?.actor?.display;
            AppointmentObject.participant.status = e.resource?.participant?.[0]?.status;

            OutputObject.Appointment.push(AppointmentObject)
        }

        if (e.resource.resourceType === "DiagnosticReport") {
            if (!OutputObject.hasOwnProperty('DiagnosticReport')) {
                OutputObject.DiagnosticReport = []
            }
            var DiagnosticReportObject = {};
            DiagnosticReportObject.code = {}

            DiagnosticReportObject.code.text = e.resource?.code?.text;
            DiagnosticReportObject.code.code = e.resource?.code?.coding?.[0]?.code;
            DiagnosticReportObject.code.display = e.resource?.code?.coding?.[0]?.display;
            DiagnosticReportObject.conclusion = e.resource?.conclusion;

            OutputObject.DiagnosticReport.push(DiagnosticReportObject)
        }

        if (e.resource.resourceType === "Immunization") {
            if (!OutputObject.hasOwnProperty('Immunization')) {
                OutputObject.Immunization = []
            }
            var ImmunizationObject = {};
            ImmunizationObject.vaccineCode = {}

            ImmunizationObject.vaccineCode.text = e.resource?.vaccineCode?.text;
            ImmunizationObject.vaccineCode.code = e.resource?.vaccineCode?.coding?.[0]?.code;
            ImmunizationObject.vaccineCode.display = e.resource?.vaccineCode?.coding?.[0]?.display;
            ImmunizationObject.protocolApplied = e.resource?.protocolApplied;
            ImmunizationObject.route = e.resource?.route?.coding?.[0]?.display;
            ImmunizationObject.lotNumber = e.resource?.lotNumber;

            OutputObject.Immunization.push(ImmunizationObject)
        }

    });
};

fetchPrescriptionRecordDetails();

console.log(OutputObject);
