// response.entry = ye ek array hoga
// apply loop to the array

const immunizationRecordResponse = {
    "resourceType": "Bundle",
    "id": "1b73d0b1-54fe-4d14-96df-aa9cdc795213",
    "meta": {
        "lastUpdated": "2023-08-14T12:06:16.356468Z"
    },
    "identifier": {
        "system": "https://www.max.in/bundle",
        "value": "1b73d0b1-54fe-4d14-96df-aa9cdc795213"
    },
    "type": "document",
    "timestamp": "2023-08-14T12:06:16.356468Z",
    "entry": [
        {
            "fullUrl": "Composition/4a1451b2-ae81-41c3-b44a-ac2ea0f5c5c1",
            "resource": {
                "resourceType": "Composition",
                "id": "4a1451b2-ae81-41c3-b44a-ac2ea0f5c5c1",
                "identifier": {
                    "system": "https://www.max.in/document",
                    "value": "4a1451b2-ae81-41c3-b44a-ac2ea0f5c5c1"
                },
                "status": "final",
                "type": {
                    "coding": [
                        {
                            "system": "https://projecteka.in/sct",
                            "code": "41000179103",
                            "display": "Immunization record"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/3db64e57-c985-484d-b88e-47aead42368e"
                },
                "date": "2023-08-14T12:06:16.356468Z",
                "author": [
                    {
                        "reference": "Practitioner/32d14a31-4be0-41e2-98b2-102b8148a6cf",
                        "display": "Dr Lakshmi G"
                    }
                ],
                "title": "Immunization",
                "section": [
                    {
                        "title": "OPD Immunization",
                        "code": {
                            "coding": [
                                {
                                    "system": "https://projecteka.in/sct",
                                    "code": "41000179103",
                                    "display": "Immunization record"
                                }
                            ]
                        },
                        "entry": [
                            {
                                "reference": "Immunization/d13fae63-4504-400f-805c-ed23a8d53f54"
                            },
                            {
                                "reference": "Immunization/b0cc4273-80a7-44a2-8e60-12d0d4750ae3"
                            }
                        ]
                    }
                ],
                "attester": [
                    {
                        "mode": "official",
                        "time": "2019-01-01T09:10:14Z",
                        "party": {
                            "reference": "Organization/b003a6c6-683e-46e5-b49e-0f491144f3ef",
                            "display": "Max Super Speciality Hospital, Saket"
                        }
                    }
                ]
            }
        },
        {
            "fullUrl": "Practitioner/32d14a31-4be0-41e2-98b2-102b8148a6cf",
            "resource": {
                "resourceType": "Practitioner",
                "id": "32d14a31-4be0-41e2-98b2-102b8148a6cf",
                "identifier": [
                    {
                        "system": "https://www.mciindia.in/doctor",
                        "value": "32d14a31-4be0-41e2-98b2-102b8148a6cf"
                    }
                ],
                "name": [
                    {
                        "text": "Lakshmi G",
                        "prefix": [
                            "Dr"
                        ],
                        "suffix": [
                            "MBBS"
                        ]
                    }
                ]
            }
        },
        {
            "fullUrl": "Patient/3db64e57-c985-484d-b88e-47aead42368e",
            "resource": {
                "resourceType": "Patient",
                "id": "3db64e57-c985-484d-b88e-47aead42368e",
                "name": [
                    {
                        "text": "Kabir Singh"
                    }
                ],
                "gender": "male"
            }
        },
        {
            "fullUrl": "Organization/b003a6c6-683e-46e5-b49e-0f491144f3ef",
            "resource": {
                "resourceType": "Organization",
                "id": "b003a6c6-683e-46e5-b49e-0f491144f3ef",
                "name": "Max Super Speciality Hospital, Saket",
                "alias": [
                    "Max"
                ],
                "identifier": [
                    {
                        "system": "https://facilitysbx.ndhm.gov.in",
                        "value": "IN0410000183"
                    }
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "(+91) 011-2651-5050"
                    },
                    {
                        "system": "fax",
                        "value": "(+91) 011-2651-5051"
                    }
                ],
                "address": [
                    {
                        "line": [
                            "1, 2, Press Enclave Marg, Saket Institutional Area, Saket"
                        ],
                        "city": "New Delhi",
                        "state": "New Delhi",
                        "postalCode": "110017",
                        "country": "INDIA"
                    }
                ],
                "endpoint": [
                    {
                        "reference": "https://www.max.in/hospital-network/max-super-speciality-hospital-saket",
                        "display": "Website"
                    }
                ]
            }
        },
        {
            "fullUrl": "DiagnosticReport/619af15e-5000-4c2d-b7be-b4f126a09b8c",
            "resource": {
                "resourceType": "DiagnosticReport",
                "id": "619af15e-5000-4c2d-b7be-b4f126a09b8c",
                "status": "final",
                "code": {
                    "coding": [
                        {
                            "system": "https://projecteka.in/loinc",
                            "code": "718-7",
                            "display": "Hemoglobin [Mass/volume] in Blood"
                        }
                    ]
                },
                "resultsInterpreter": [
                    {
                        "reference": "Practitioner/32d14a31-4be0-41e2-98b2-102b8148a6cf"
                    }
                ],
                "conclusion": "Refer to Doctor. To be correlated with further study."
            }
        },
        {
            "fullUrl": "Observation/b721458f-4a7c-43f0-a541-ee2eceac19de",
            "resource": {
                "resourceType": "Observation",
                "id": "b721458f-4a7c-43f0-a541-ee2eceac19de",
                "status": "final",
                "code": {
                    "text": "Temperature"
                },
                "valueQuantity": {
                    "value": 99.5,
                    "unit": "C"
                }
            }
        },
        {
            "fullUrl": "Immunization/d13fae63-4504-400f-805c-ed23a8d53f54",
            "resource": {
                "resourceType": "Immunization",
                "id": "d13fae63-4504-400f-805c-ed23a8d53f54",
                "status": "completed",
                "vaccineCode": {
                    "text": "Rotavirus Vaccine"
                },
                "patient": {
                    "reference": "Patient/3db64e57-c985-484d-b88e-47aead42368e"
                },
                "occurrenceDateTime": "2023-08-14T12:06:16.356468Z",
                "manufacturer": {
                    "reference": "Organization/b003a6c6-683e-46e5-b49e-0f491144f3ef"
                },
                "route": {
                    "coding": [
                        {
                            "system": "https://projecteka.in/sct",
                            "code": "47625008",
                            "display": " Intravenous route"
                        }
                    ]
                },
                "reasonReference": [
                    {
                        "reference": "DiagnosticReport/619af15e-5000-4c2d-b7be-b4f126a09b8c"
                    }
                ],
                "reaction": [
                    {
                        "detail": {
                            "reference": "Observation/b721458f-4a7c-43f0-a541-ee2eceac19de"
                        }
                    }
                ],
                "protocolApplied": [
                    {
                        "doseNumberPositiveInt": 2
                    }
                ]
            }
        },
        {
            "fullUrl": "Organization/b003a6c6-683e-46e5-b49e-0f491144f3ef",
            "resource": {
                "resourceType": "Organization",
                "id": "b003a6c6-683e-46e5-b49e-0f491144f3ef",
                "name": "Max Super Speciality Hospital, Saket",
                "alias": [
                    "Max"
                ],
                "telecom": [
                    {
                        "system": "phone",
                        "value": "(+91) 011-2651-5050"
                    },
                    {
                        "system": "fax",
                        "value": "(+91) 011-2651-5051"
                    }
                ],
                "address": [
                    {
                        "line": [
                            "1, 2, Press Enclave Marg, Saket Institutional Area, Saket"
                        ],
                        "city": "New Delhi",
                        "state": "New Delhi",
                        "postalCode": "110017",
                        "country": "INDIA"
                    }
                ],
                "endpoint": [
                    {
                        "reference": "https://www.max.in/hospital-network/max-super-speciality-hospital-saket",
                        "display": "Website"
                    }
                ]
            }
        },
        {
            "fullUrl": "DiagnosticReport/152c242d-69b5-4b92-aee4-4b7165722cae",
            "resource": {
                "resourceType": "DiagnosticReport",
                "id": "152c242d-69b5-4b92-aee4-4b7165722cae",
                "status": "final",
                "code": {
                    "coding": [
                        {
                            "system": "https://projecteka.in/loinc",
                            "code": "58410-2",
                            "display": "Complete Blood Count"
                        }
                    ],
                    "text": "Complete Blood Count"
                },
                "resultsInterpreter": [
                    {
                        "reference": "Practitioner/32d14a31-4be0-41e2-98b2-102b8148a6cf"
                    }
                ],
                "conclusion": "Refer to Doctor. To be correlated with further study."
            }
        },
        {
            "fullUrl": "Observation/b721458f-4a7c-43f0-a541-ee2eceac19de",
            "resource": {
                "resourceType": "Observation",
                "id": "b721458f-4a7c-43f0-a541-ee2eceac19de",
                "status": "final",
                "code": {
                    "text": "Temperature"
                },
                "valueQuantity": {
                    "value": 99.5,
                    "unit": "C"
                }
            }
        },
        {
            "fullUrl": "Immunization/b0cc4273-80a7-44a2-8e60-12d0d4750ae3",
            "resource": {
                "resourceType": "Immunization",
                "id": "b0cc4273-80a7-44a2-8e60-12d0d4750ae3",
                "status": "completed",
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "https://projecteka.in/act",
                            "code": "J07AM01",
                            "display": "Tetanus Toxoid"
                        }
                    ]
                },
                "patient": {
                    "reference": "Patient/3db64e57-c985-484d-b88e-47aead42368e"
                },
                "occurrenceDateTime": "2023-08-14T12:06:16.356468Z",
                "manufacturer": {
                    "reference": "Organization/b003a6c6-683e-46e5-b49e-0f491144f3ef"
                },
                "lotNumber": "5R1UCLO",
                "route": {
                    "coding": [
                        {
                            "system": "https://projecteka.in/sct",
                            "code": "47625008",
                            "display": " Intravenous route"
                        }
                    ]
                },
                "reasonReference": [
                    {
                        "reference": "DiagnosticReport/152c242d-69b5-4b92-aee4-4b7165722cae"
                    }
                ],
                "reaction": [
                    {
                        "detail": {
                            "reference": "Observation/b721458f-4a7c-43f0-a541-ee2eceac19de"
                        }
                    }
                ],
                "protocolApplied": [
                    {
                        "doseNumberString": "2nd"
                    }
                ]
            }
        }
    ]
}
const itemsToLoop = immunizationRecordResponse.entry; //response.entry

var OutputObject = {};

const fetchImmunizationRecordDetails = async () => {
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

fetchImmunizationRecordDetails();

console.log(OutputObject);
