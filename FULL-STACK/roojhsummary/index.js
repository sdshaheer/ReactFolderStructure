const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const admin = require('firebase-admin');
const { format } = require('date-fns');
const qr = require('qrcode');
const { convertDateIntoAge, getBMIValue, cmTofeet, customSort, numberToMonthName } = require("./customFunctions")

const serviceAccount = require("C:/Users/syed/Desktop/roojhproject-firebase-adminsdk-y2fh0-ab14ff814d.json")
admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "roojhproject",
        "private_key_id": "ab14ff814d55608a76e540bd74c4fba9e6bef54e",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8htxwVrUroGYc\nad00ZkZ8X+ym5nh7ztf96FlhuH6mFNnUF6Q/GaXbuOu7zzq5eahDvxK9sPOafvdJ\nJvh7yG0xQL0Xj7vBE+IfPm87wSIwDMRRe1CA90myiOtaHhwbYzYITc8hfRXJs6Kw\ncn1yOciHDZ5m6MzwcWsVanyYQoROTLjqEAPCLsfuDXlAMpVfVA1nzYsmsHZ8EJp0\nGksbULKhI+JdTo3ADedAnWsY56FDUOx71HXTz+Sg7Gi4HEAhWVAp8lNUFnnDCJ6v\n+cy1NVuMRim50oGshd7eTw5qI85y9qNmamG+gUbu3dpyG3PXb1LXeJNj8utDPgCq\nf2657v/lAgMBAAECggEAO7ZFXMmB0YMYxHgdaYrZWWxygrxtvd0aWV/9628pogXp\npn0kdx3zBAByncY5teRcELUUxQMmbTE4trFCs8YcG6UDH1LVp4ZaMQYv6g+2edyZ\nU6uIqIhqjcNDNARkZ6JJS2EFsXgybfPZHCTvKb42jtwX50VmH+P0hFB5jSpISJoF\nVfbHSP8UslwyEWEM8ufeqjXUj6Ng8xIgN3niAUQ3soXuWqFfsZ6iZojcX2P8lFge\ni/s3jHc96JVec0JyeJhvwRzBRz4Ph4ee71QdRe0N1QGF3eHVVrutry1J4jDkkeJL\nkdkCSCuflrIVVT3WghYt40lFlbOZD8ce76X3QSpM0wKBgQD1Uy5sSIuPUxRE3l+s\nPpy9Sng1dYtiSpObHq9PAWX5BfSSTj+FUoAI3cvQWjOOG2dN4Ts+THK6uS95TtqH\nRWLypNWquKAgRZWIqXFbPn8zoMDA6AlDZtm2Mla8Q/OWxQUfhT0SWdoPBp/AHKSj\nh8F9VFlTH8nu4Jmfya7X/hJAtwKBgQDEuvjWDIFm5ck+Lf/locgyIEypTzKgH3gP\nia74Vn5J3G4uYH8EiwznRQ/8QgzqSWsoz6t7Rvn6W6B1SHonkjG+bmUHhXAQBy5y\noK5iVKzGCg2Q7vHb4SjCVDvw/0AAGQ5mPFjQFBoiEWB31nuIvP1Dq4XM9dAq1SBH\nN15FL+hwQwKBgFkyCSrtpXBS8IepondpvGtGbDZjqm3uV4SKv4qmI4FLHQUk1guP\nV2Xh3ny+jwgYBpNWVMft27jwI8ajWOjd3YADVnxf7DhPlHK/yKs4Kd+Hjw2UT+nl\ntzp7SvXgbuxebeJr+yx05seXzPV4dJPQhBUhWejTIgRsPO7P0XZOtiw5AoGBAJhj\nME81vqLDCgCVRyxMBjP12wwnIdLwrWJzx0nsTcTO77YS3zDYuPUIBRrk2vY8SrqB\nKpbCYu5wPTm8G4s9bjTRdIa/8Q8pUOxP1OSsLGz26o1C2av1nEnzT78dKSkqP4In\n6q+7cobDKROK24QOyKu7WFhsbIRRNMCVfftf4c/bAoGBAORc6DPGmg/im3uUeaTV\nrjebs+nzWY++joaLSyH7/DtUFYqRHVeJUtL9lALUFv2aDlYAZmGl3kxmVoAxabJg\nrcNf4JKQcTH+q+zpjQEBQMB4LJTwJ546XoBELqz24ig2VLNkYItVB01o2Sqm80BG\nYV12Dyo56pzVGEoawyKrMod+\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-y2fh0@roojhproject.iam.gserviceaccount.com",
        "client_id": "104568662055787371827",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y2fh0%40roojhproject.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }
    )
});

console.log('Firebase Admin Initialized!!');

const firestore = admin.firestore();

//const uuid = "REbPNnpB7hUZgjgoPqnyX92snxI2"
const uuid = '0E6Ta7lPVxdsRl23GJ7fM1grALf2'

// Function to generate QR code as a data URL
const generateQRCode = async (url) => {
    try {
        const dataUrl = await qr.toDataURL(url);
        console.log(dataUrl)
        return dataUrl;
    } catch (error) {
        console.log(error)
    }
};

const getSocialHistory = (data) => {
    var dataArr = [];

    data?.social_history?.map(item => {

        var arr = [];

        var obj = {
            key: item.questionTag,
            value: []
        }
        item.answerOptions.map(values => {
            if (values.isSelected) {
                arr.push(values.option);
            }
        })
        obj.value = arr;
        dataArr.push(obj);
    })
    return dataArr
}

const getFamilyHistory = (data) => {
    var dataArr = [];

    data?.family_history?.map(item => {

        var arr = [];

        var obj = {
            key: item.questionTag,
            value: []
        }
        item.answerOptions.map(values => {
            if (values.isSelected) {
                arr.push(values.option);
            }
        })
        obj.value = arr;
        dataArr.push(obj);
    })
    return dataArr
}

// preparing history for medical and surgical data
const prepareHistory = (data, still_active) => {
    const arr = []
    const filteredData = data.filter((item) => item.isActive === still_active)
    filteredData.forEach((item) => {
        const date = item.start_date.split(' ')
        const obj = {
            problem_name: item.problem_name,
            comment: item.comment,
            start_date: numberToMonthName(date[1]) + ' ' + date[2]
        }
        arr.push(obj)
    })
    return arr
}

// get surgical and medical history
const getHistory = (arr, value) => {
    let newArr = []
    arr && arr.length > 0 &&
        arr.forEach((item) => {
            const date = new Date(item.start_date.seconds * 1000);

            let formatted = {
                isActive: item.still_active,
                start_date: format(date, "dd MM yyyy"),
                problem_name: value === 'medical' ? item.problem_name : item.procedure_name,
                comment: item.comment
            };

            newArr.push(formatted);

        });
    const sorted_data = newArr.sort(customSort)
    return sorted_data
}


// medication
const getListOfMedication = (medication) => {
    let newArr = []

    medication?.forEach((ele) => {
        if (ele?.admin_verified === true) {
            newArr.push(ele);
        }
    });

    const result = newArr.map((item) => {
        return {
            medicine: item?.med_details?.medication_name,
            strength: item?.med_details?.strength,
            salt: item?.med_details?.salt,
            dosage: item?.dose_times,
        }
    })
    return result

}

// allergies
const getListOfAllergies = (allergies) => {
    const result = allergies.map((item) => item.agent_name)
    return result

}

// get documents list
const getdocumentsList = (documents, documentType) => {
    let newArr = []
    documents && documents.length > 0 &&
        documents.forEach((item) => {
            if (item.documentType === documentType && item.showInRoojhSummary) {
                const date = new Date(item.date.seconds * 1000);
                const formattedDate = format(date, "dd MM yyyy")
                const splitData = formattedDate.split(" ")

                let formatted = {
                    date: splitData[0] + " " + numberToMonthName(splitData[1]) + " " + splitData[2],
                    description: item.description,
                    summary: item.summary
                };
                newArr.push(formatted);
            }

        });
    return newArr
}

const prepareData = (details, summary, dataUrl, social_history, family_history, medicalHistory, surgicalHistory, medication, allergies, documents) => {
    const data = {
        user_information: {
            user_details: {
                name: details.name,
                age: !!details?.age ? `${details?.age} years` : !!details?.dob ? convertDateIntoAge(details?.dob)
                    : "-",
                BMI: getBMIValue(details?.height?.value, details?.weight),
                bloodGroup: details?.bloodGroup ? details?.bloodGroup : "-",
                height: {
                    value: !!details?.height?.value
                        ? cmTofeet(details?.height?.value)
                        : "-",
                },
                weight: !!details?.weight?.value ? details?.weight?.value + " kg" : "-",
                address: details?.address ? details.address : "-",
                phone_no: !!details?.phone_no ? details?.phone_no : "-",
                email: !!details?.email ? details?.email : "-",
                qrcode: dataUrl
            },
        },
        roojh_summary: {
            summary: {
                conclusion: !!summary?.conclusion ? summary?.conclusion : "",
                social_history: {
                    details: getSocialHistory(social_history)
                },
                family_history: {
                    details: getFamilyHistory(family_history)
                },
                medical_history_and_surgical_history: {
                    medicalHistory: {
                        active: prepareHistory(getHistory(medicalHistory, "medical"), true),
                        inactive: prepareHistory(getHistory(medicalHistory, "medical"), false)
                    },
                    surgicalHistory: {
                        active: prepareHistory(getHistory(surgicalHistory, "surgical"), true),
                        inactive: prepareHistory(getHistory(surgicalHistory, "surgicl"), false)
                    },

                },
                medication: {
                    comment: summary?.medication?.comment,
                    list_of_medication: getListOfMedication(medication)
                },
                allergy: {
                    comment: summary?.allergy?.comment,
                    list_of_allergies: getListOfAllergies(allergies)
                },
                recent_labs: {
                    list_of_recent_labs: getdocumentsList(documents, "Lab"),
                    comment: summary?.recent_labs?.comment
                },
                primary_doctor: {
                    details_of_primary_doctor: {
                        address: summary?.primary_doctor?.details_of_primary_doctor?.address,
                        name: summary?.primary_doctor?.details_of_primary_doctor?.name,
                        telephone: summary?.primary_doctor?.details_of_primary_doctor?.telephone
                    },
                    comment: summary?.primary_doctor?.comment,
                },
                cardiology: {
                    list_of_cardiology: getdocumentsList(documents, "Cardiology"),
                    comment: summary?.cardiology?.comment,
                },
                radiology: {
                    list_of_radiology: getdocumentsList(documents, "Radiology"),
                    comment: summary?.radiology?.comment,
                },
            },
        },
    };
    //console.log(JSON.stringify(data))
    return data
}

const getData = async () => {
    try {
        let medication = []
        let allergies = []
        let medicalHistory = []
        let surgicalHistory = []
        let documents = []
        const summary = (await firestore.collection('users').doc(uuid).collection("roojh_summary").doc("summary").get()).data();
        console.log('summary', summary)
        //user details
        const details = (await firestore.collection('users').doc(uuid).collection("user_information").doc("user_details").get()).data();

        //social history
        const social_history = (await firestore.collection('users').doc(uuid).collection("user_information").doc("social_history").get()).data()
        //const social_history = socialHistory.exists ? socialHistory.data() :

        //family history
        const family_history = (await firestore.collection('users').doc(uuid).collection("user_information").doc("family_history").get()).data();

        //medical history details
        const q3 = await firestore.collection('users').doc(uuid).collection("problem_list")
        const querySnapshot3 = await q3.get();
        querySnapshot3.forEach((doc) => {
            medicalHistory.push(doc.data());
        });

        //surgical history details
        const q4 = await firestore.collection('users').doc(uuid).collection("procedure_list")
        const querySnapshot4 = await q4.get();
        querySnapshot4.forEach((doc) => {
            surgicalHistory.push(doc.data());
        });


        // medication details
        const q1 = await firestore.collection("users").doc(uuid).collection("medication");
        const querySnapshot1 = await q1.get();
        querySnapshot1.forEach((doc) => {
            medication.push(doc.data());
        });

        // allergy details
        const q2 = await firestore.collection("users").doc(uuid).collection("allergie_list");
        const querySnapshot2 = await q2.get();
        querySnapshot2.forEach((doc) => {
            allergies.push(doc.data());
        });

        //documents details
        const q5 = await firestore.collection('users').doc(uuid).collection("documents")
        const querySnapshot5 = await q5.get();
        querySnapshot5.forEach((doc) => {
            documents.push(doc.data());
        });

        const dataUrl = await generateQRCode(summary.roojh_pdf_url);


        return prepareData(details, summary, dataUrl, social_history, family_history, medicalHistory, surgicalHistory, medication, allergies, documents)


    } catch (error) {
        console.log(error)
    }
}





const source = `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <title>Test page</title>
    <style>
        body {
            background-color: #eff3ff;
            color: #111827;
            font-family: Inter var, Roboto, Helvetica, Arial, sans-serif;
        }


        .ant-modal-body {

            word-wrap: break-word;
            font-size: 14px;
            line-height: 1.5715;
            padding: 0px;
            width: 912px;
        }

        .sheet-main {
            background: #f4f7ff;
        }

        .sheet-head {
            background: #204289 !important;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
            height: 190px;
            padding: 15px;
            position: relative;
        }

        .sheet-head-logo {
            display: flex;
            justify-content: center;
            margin-left: 30px;
            margin-top: 34px;
        }

        .logo-circle {
            border: 0;
            border-style: none;
            display: block;
            vertical-align: middle;
            height: auto;
            max-width: 100%;
        }

        .logo-heading {

            border: 0;
            border-style: none;
            display: block;
            vertical-align: middle;
            height: auto;
            max-width: 100%;
            margin-left: -25px;
        }

        .sheet-head-logo .logo-heading {
            margin-left: -25px;
        }


        img {
            height: auto;
            max-width: 100%;
        }


        .ant-btn {
            line-height: 1.5715;
            position: relative;
            display: inline-block;
            font-weight: 400;
            white-space: nowrap;
            text-align: center;
            background-image: none;
            border: 1px solid rgba(0, 0, 0, 0);
            box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
            cursor: pointer;
            transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            touch-action: manipulation;
            height: 32px;
            padding: 4px 15px;
            font-size: 14px;
            border-radius: 2px;
            color: rgba(0, 0, 0, .85);
            border-color: #d9d9d9;
            background: #fff;
        }


        .sheet-sub-head {
            align-items: center;
            background: #c4d0f1;
            border-radius: 20px;
            display: flex;
            font-size: 17px;
            justify-content: space-between;
            margin: -61px auto auto;
            padding: 10px 20px;
            position: relative;
            width: 84%;
            z-index: 10 !important;
        }

        .col {
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 5px;
            line-height: 17px;
        }

        .ant-avatar {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-size: 14px;
            font-variant: tabular-nums;
            list-style: none;
            font-feature-settings: "tnum";
            position: relative;
            display: inline-block;
            overflow: hidden;
            color: #fff;
            white-space: nowrap;
            text-align: center;
            vertical-align: middle;
            background: #ccc;
            width: 32px;
            height: 32px;
            line-height: 32px;
            border-radius: 50%;
        }

        

        

        .summary-avatar {
            border-radius: 10px;
            height: 77px;
            width: 86px;
        }

        .ant-avatar-image {
            background: transparent;
        }

        .name {
            font-size: 18px;
            font-weight: 600;
        }

        .summary-col-value {
            color: #303030;
            font-size: 12px;
            font-weight: 400;
            max-width: 120px;
            opacity: .8;
        }

        .vertical-line {
            border-left: 1px solid #303030;
            display: inline;
            margin: 0 6px 0 3px;
        }

        .summary-col-div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: -webkit-fill-available;
        }

        .card-head-icon-1 {
            cursor: pointer;
            height: 23px;
            margin-left: 20px;
            margin-top: 5px;
            width: 19px;
        }

        .record-col {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .record-sub-col {
            line-height: 20px;
        }

        .summary-col-title {
            color: #000;
            font-size: 15px;
            font-weight: 500;
        }

        .summary-col-value {
            color: #303030;
            font-size: 12px;
            font-weight: 400;
            max-width: 120px;
            opacity: .8;
        }

        .qr-code {
            background: #fff;
            border: 3px solid #000;
            border-radius: 15px;
            max-width: 126px;
            padding: 5px;
        }

        .modal-body {
            margin: 5% auto auto;
            width: 85%;
        }

        .body-head {
            background: #204289;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            color: #fff;
            font-size: 23px;
            font-weight: 700;
            padding: 17px;
        }

        .modal-data {
            padding-bottom: 25px;
        }

        .option {
            margin: 10px 0;
        }

        .main_conclusion {
            align-items: center;
            background: #fff;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            padding: 40px 15px;
            position: relative;
        }

        .edit {
            position: absolute;
            right: 13px;
            top: 10px;
        }

        .left {
            width: 50%;
        }

        .title-head {
            align-items: center;
            color: #204289;
            font-size: 20px;
            font-weight: 700 !important;
        }

        .right {
            width: 90%;
        }

        .value {
            align-items: center;
            -webkit-column-gap: 10px;
            column-gap: 10px;
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            list-style: circle !important;
        }

        .option {
            margin: 10px 0;
        }

        .main {
            background: #fff;
            border-radius: 10px;
            padding: 20px 15px;
            position: relative;
        }


        .head-section {
            display: flex;
            justify-content: space-between;
        }

        .action,
        .title-head {
            display: flex;
            gap: 10px;
        }

        .title-head {
            align-items: center;
            color: #204289;
            display: flex;
            font-size: 20px;
            font-weight: 700 !important;
            gap: 10px;
        }

        .wd100 {
            width: 100% !important;
        }

        .active-head {
            border-bottom: 1px dotted;
            color: #000;
            font-size: 17px;
            font-weight: 700;
            font-weight: bolder;
            margin-top: 30px;
            padding: 12px 0 7px 49px;
        }

        .inactive-head {
            border-bottom: 1px dotted;
            color: #000;
            font-size: 17px;
            font-weight: bolder;
            margin-top: 30px;
            padding: 12px 0 7px 49px;
        }

        .m-shead {
            color: #204289;
            font-weight: 600;
            padding: 12px 0 7px 49px;
        }

        .body-sec {
            border-left: 1px dashed;
            padding-left: 20px;
        }

        .color-light-gray {
            color: #b5b0b0;
            font-style: italic;
        }

        .m-bottom10 {
            margin-bottom: 10px;
        }

        .text-align-center {
            text-align: center;
        }

        .dsp-flex {
            display: flex;
        }

        .key {
            font-size: 14px;
            font-weight: 600;
        }

        .pd-top12 {
            padding-top: 12px;
        }

        .comment {
            color: grey;
            margin-left: 15px;
        }

        .item-body {
            margin-left: 50px;
            margin-top: 10px;
        }


        .item-list {
            display: flex;
            margin-bottom: 15px;
        }

        .left {
            width: 50%;
        }

        .key {
            font-size: 14px;
            font-weight: 600;
        }

        .right {
            width: 90%;
        }

        .year {
            align-items: center;
            color: #f46524;
            display: flex;
            font-size: 13px;
            font-weight: 600;
            gap: 10px;
        }

        .problem-date {
            display: flex;
            margin-bottom: 15px;
            margin-inline-start: 35px;
        }

        .comment {
            align-items: center;
            color: grey;
            display: flex;
            gap: 5px;
            margin-left: 15px;
        }

        .problem-date {
            -webkit-margin-start: 35px;
            display: flex;
            margin-bottom: 15px;
            margin-inline-start: 35px;
        }


        menu,
        ol,
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .value {
            align-items: center;
            -webkit-column-gap: 10px;
            column-gap: 10px;
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            list-style: circle !important;
        }

        .bold {
            font-weight: 600;
        }

        .bold,
        .grey {
            font-size: 14px;
        }

        .sm {
            font-size: 14px;
        }

        .grey {
            color: grey;
        }

        .data {
            margin-top: 10px;
        }

        .item-list {
            display: flex;
            margin-bottom: 15px;
        }

        .left {
            width: 50%;
        }

        .ml {
            font-weight: 400 !important;
        }

        .key {
            font-size: 14px;
        }

        .value {
            align-items: center;
            -webkit-column-gap: 10px;
            column-gap: 10px;
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            list-style: circle !important;
        }

        .right {
            width: 90%;
        }
    </style>
</head>

<body>
    <div class="ant-modal-body" style="padding: 0px; width: 912px;">
        <div class="sheet-main" id="main">
            <div class="sheet-head">
                <div class="sheet-head-logo"><img class="logo-circle"
                        src="https://roojh-development.netlify.app/static/media/Ellipse.7bc8d07eec463f357d2140d2b608e9a3.svg"><img
                        class="logo-heading"
                        src="https://roojh-development.netlify.app/static/media/Vector.0dcc66ac6c793db4e4b960342baa1d26.svg">

                </div>

            </div>
            <div class="sheet-sub-head">
                <div class="col"><span class="ant-avatar ant-avatar-circle ant-avatar-image summary-avatar"><img
                            src="https://firebasestorage.googleapis.com/v0/b/roojhproject.appspot.com/o/0E6Ta7lPVxdsRl23GJ7fM1grALf2undefined%2F1675056364400.jpeg?alt=media&amp;token=055410e6-8ba4-40ac-b574-cda0831bb65f"></span>
                    <div class="name">{{user_information.user_details.name}}</div>
                    <div class="summary-col-value">Age: {{user_information.user_details.age}} <div
                            class="vertical-line"></div>BMI: {{user_information.user_details.BMI}}</div>
                </div>
                <div class="summary-col-div">
                    <div class="record-col">
                        <div class="record-sub-col">
                            <div class="summary-col-title">Blood Group</div>
                            <div class="summary-col-value">{{user_information.user_details.bloodGroup}}</div>
                        </div>
                        <div class="record-sub-col">
                            <div class="summary-col-title">Address</div>
                            <div class="summary-col-value">{{user_information.user_details.address}}</div>
                        </div>
                    </div>
                    <div class="record-col">
                        <div class="record-sub-col">
                            <div class="summary-col-title">Height</div>
                            <div class="summary-col-value">{{user_information.user_details.height.value}}</div>
                        </div>
                        <div class="record-sub-col">
                            <div class="summary-col-title">Phone Number</div>
                            <div class="summary-col-value">{{user_information.user_details.phone_no}}</div>
                        </div>
                    </div>
                    <div class="record-col">
                        <div class="record-sub-col">
                            <div class="summary-col-title">Weight</div>
                            <div class="summary-col-value">{{user_information.user_details.weight}}</div>
                        </div>
                        <div class="record-sub-col">
                            <div class="summary-col-title">Email</div>
                            {{#if user_information.user_details.email}}
                            <div class="summary-col-value">{{user_information.user_details.email}}</div>
                            {{else}}
                            <div class="summary-col-value">-</div>
                            {{/if}}

                        </div>
                    </div>
                </div>
                <div class="qr-code">
                        <img src={{user_information.user_details.qrcode}} alt="QR Code">
                    </div>
            </div>
            <div class="modal-body">
                <div class="body-head">Summary</div>
                <div class="modal-data">
                    <div class="option">
                        <div class="main_conclusion">

                            <div class="left">
                                <div class="title-head"><img
                                        src="https://roojh-development.netlify.app/static/media/conclusion.7d14b820d9c00a9b9f2483ac2d9702d5.svg">
                                    Conclusion:
                                </div>
                            </div>
                            <div class="right">
                                <div class="value" style="margin-left: 28px; margin-right: 22px;">
                                    {{roojh_summary.summary.conclusion}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="main">
                            <div class="head-section">
                                <div class="title-head"><img
                                        src="https://roojh-development.netlify.app/static/media/social.dc9378a87510145f46818e8b185251e1.svg">Social
                                    History :
                                </div>
                            </div>
                            <div class="item-body">
                                {{#each roojh_summary.summary.social_history.details}}
                                <div class="item-list">

                                    <div class="left key">{{key}} : </div>
                                    <ul class="right">
                                        <li class="value"><img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBjVCxtcIwDDz7p6HLCP4bMELIAsAGMAE1UAAVpGMD2AAWgGc2yAZohHQ83gMZkTh5KQjhGkunO1mSMtEyhO4s8IZ6Xug0O6IFysSbrTyTGkcAr+g83TeZ9AfOCL0zcXI18Xr02cSuaZxGs8qrveQqkcF3EPgxJDtPC1PeSe98nwxwWa1vKHnokwx8+w/ykDmF9uspN8ZT8gp/fVli6xMxd6LCpIN+pXE4VA08UQtJfkjL6ghtcM7CcY/slAJ/GfNd7FYitiUl46nur+Ka6X0p9ZO4RHHyKBlAcwi+H8kuM7TgBbQpY3L7uvwLAAAAAElFTkSuQmCC">
                                            {{value}}</li>
                                    </ul>
                                </div>
                                {{/each}}
                            </div>
                        </div>
                        <div class="option">
                            <div class="main">
                                <div class="head-section">
                                    <div class="title-head"><img
                                            src="https://roojh-development.netlify.app/static/media/medical.0f36072552c4941b88ba7168aff3a4e7.svg">Family
                                        History :</div>
                                </div>
                                <div class="item-body">
                                    {{#each roojh_summary.summary.family_history.details}}
                                    <div class="item-list">
                                        <div class="left key">{{key}} : </div>
                                        <ul class="right">
                                            <li class="value"><img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBjVCxtcIwDDz7p6HLCP4bMELIAsAGMAE1UAAVpGMD2AAWgGc2yAZohHQ83gMZkTh5KQjhGkunO1mSMtEyhO4s8IZ6Xug0O6IFysSbrTyTGkcAr+g83TeZ9AfOCL0zcXI18Xr02cSuaZxGs8qrveQqkcF3EPgxJDtPC1PeSe98nwxwWa1vKHnokwx8+w/ykDmF9uspN8ZT8gp/fVli6xMxd6LCpIN+pXE4VA08UQtJfkjL6ghtcM7CcY/slAJ/GfNd7FYitiUl46nur+Ka6X0p9ZO4RHHyKBlAcwi+H8kuM7TgBbQpY3L7uvwLAAAAAElFTkSuQmCC">
                                                {{value}}</li>
                                        </ul>
                                    </div>
                                    {{/each}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="main">
                            <div class="head-section">
                                <div class="title-head"><img
                                        src="https://roojh-development.netlify.app/static/media/medical.0f36072552c4941b88ba7168aff3a4e7.svg"> Medical &amp;
                                    Surgical History :</div>
                            </div>
                            <div class="wd100">
                                <h1 class="active-head ">Active Issues</h1>
                                <div class="text-align-center dsp-flex">
                                    <div class="wd100 m-shead">Medical</div>
                                </div>
                                <div class="wd100 body-sec">
                                    {{#each roojh_summary.summary.medical_history_and_surgical_history.medicalHistory.active}}
                                        <div class="m-bottom10">
                                            <div class=" dsp-flex">
                                                <div class="key" style="width: 67%;">{{problem_name}}</div>
                                                <div class="pd-top12">({{start_date}})</div>
                                            </div>
                                            <div class="comment">{{comment}}</div>
                                        </div>
                                    {{/each}}
                                </div>
                                <div class="text-align-center dsp-flex">
                                    <div class="wd100 m-shead">Surgical</div>
                                </div>
                                <div class="wd100 body-sec">
                                    {{#each roojh_summary.summary.medical_history_and_surgical_history.surgicalHistory.active}}
                                      <div class="m-bottom10">
                                          <div class=" dsp-flex">
                                              <div class="key" style="width: 67%;">{{problem_name}}</div>
                                              <div class="pd-top12">({{start_date}})</div>
                                          </div>
                                          <div class="comment">{{comment}}</div>
                                      </div>
                                    {{/each}}
                                </div>
                            </div>
                            <div class="wd100">
                                <h1 class="inactive-head">InActive Issues</h1>
                                <div class="text-align-center dsp-flex">
                                    <div class="wd100 m-shead">Medical</div>
                                </div>
                                <div class="wd100 color-light-gray body-sec">
                                    {{#each roojh_summary.summary.medical_history_and_surgical_history.medicalHistory.inactive}}
                                        <div class="m-bottom10">
                                            <div class=" dsp-flex">
                                                <div class="key" style="width: 67%;">{{problem_name}}</div>
                                                <div class="pd-top12">({{start_date}})</div>
                                            </div>
                                            <div class="comment">{{comment}}</div>
                                        </div> 
                                    {{/each}}
                                </div>
                                <div class="text-align-center dsp-flex">
                                    <div class="wd100 m-shead">Surgical</div>
                                </div>
                                <div class="wd100 color-light-gray body-sec">
                                    {{#each roojh_summary.summary.medical_history_and_surgical_history.surgicalHistory.inactive}}
                                        <div class="m-bottom10">
                                            <div class=" dsp-flex">
                                                <div class="key" style="width: 67%;">{{problem_name}} </div>
                                                <div class="pd-top12">({{start_date}})</div>
                                            </div>
                                            <div class="comment">{{comment}}</div>
                                        </div>
                                    {{/each}}   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="main">
                            <div class="head-section">
                                <div class="title-head"><img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYVSURBVHgBrZhbbBRVGMf/c+l2SwW3LSTUatwmctGI2XppNMbQwoOBGBETEqMJFH0xMQgY3kikfRAxGiz4pom0vjRCi0UMmGjabWLE4oVGiRGpdh6klzRtt9fdbbc7ft90z3J29sx2t/AlZ+fM7Mw5v/l/3/nOOaNhhTYwMBAoLS0N6roe0jQtQJe4RGzbtqhE1q1bF8YKTSvkZgYhO0jVumQyyQWLi4sgCKcQIAjQORqGwfUw/d+6sLAQrqystPLtJy+ooaGhoM/nO0bVhvn5eVAnSCQSSw1o6iYEWFFRkVMIuoWebcoHblmoiYmJY6TIoXg8HqDiKJJ+2AXkdc6AxcXFME3Toraa1q5d24KVQLE6fr//DKlSNzc3B3ZVPjC56lxKSkr4tJlAm8rKyiLIF4qB6M26Y7FYkIongHyugvECpFBg1froWr0KTFspUC6I5Y5sBOUJpruhCOirfIGES+S6KPJIlI+izuFAJUTlYzdDBhQHNY2QUL5A4ih3qCoymFxScdowNjZ2KKM/UWG30dAdmJmZ8QxqFRAXc+Qf6JPDsP33IFn9eE4lPdSOUKkWbjTFTZyHotFoQUDG5AhKL3wAY6QfyfUboA/fdMBir38Cu/y+vKBSFuC0Q8fGtFJCpampqYKAVn9xGInNzyG240C60+LuMzCvXUL8QCsBrs5ypQcUi5FWSxcqiQztNi+X+Xs7kAjWZABxWdj+BuyySpg/ns2KIVVcSf+xWg3ch57qqI6ztddbyNeFSsW97Ziv358V0FwWn3gBxlC/J4CqpObKXdyPya4jwiBPrLlUkou/pwVxAmJFVKNPj804gSFf91Jd7ou8FXKUolgKyUBuldznvr5vYVp9WAjtUA59p/zQBvvR+qzc5Haj4tkADbYHTboQkkecCsatkh2ohE51W9X4r98sPVv7ojLIVaEh/zc7O1vjxJSY+b2COj2yfmp3rifL1mPVyT3wdX0OPT5z+00jwzC++xR4/s2sZ93quJUT18gC/BtUKeU27pCDO/rqccRfPorokQ4YlJd8p/fC+O3SUsO/XASqNjsqqUaeCk6VLjh5RpaTVLhtsboGduXGpf8oOS7s/RAmAZkXTwLffwaMDwIPPQm0HQNrb69aDb3ifmDDU9AfeDinC2VjKCslW9YDos4qcYDPvnMu263XexwArWoTsKUeWkUVcOsG7N4L0AgqWV4Fu+MEjKd3o2jf+/lARUxe5As5VWBsrNL8M3uQDKx3AjztBoLV/wzDfukIuWwXAXbDvvo1tMEbMHa+Bb1+L7gp+/cuJNqPU/0EVN7gmOY6hxHlK8ukn7AXcjpZDvcjvvNtdQyU0FTyM8VS50dIL5QprpI3ryLZ2wl77Bb0jbWeLyyuMRinpvLy8j6T5hprfHyc1QrkWvJyQrRVw5ugcORLaPS/NvQ3tCgdY9PkunsdV2oUU3rpGsSPbsuZDngzQhbmHzMlXysl0YO8U1EZT7pFV85h8ZGtmY1R5+nzVWugb6jNOarcILIxFInSmoaik05acSqhuAGOJ1/fZfjPv4fEs684KvD6yTjbCJAyaHsXeGw7jbY1AI827jQFnfzvLySunIcdnfIEYg9x3yKU0neQC3ldXpeSMSufGPNzKL58Gsa/16BFhpx5D1tfg7aF3HKd2vqji5augxRDg7dfiNzHKUHfVAtzW4PjRpVRFmelWiiU9mdAjY6O1hFEN98g73bl7OvOxMvNZ273eak0OTlpaUsbCIuvpRNUau9/ijeNuayQDt3PqWx6eppFOCWAMqCcE11vpIDvk8EK6bhQ4w0Kb+crKiqaMzjkE16KUse7aSVq8b7sbpq83RdAtEyxqHrYfW/Wvo9lZP+SWlbqwwTuhskq82cABtI8dsi6qgEBRlAWb7Hl6UCG9KqrjP/noOYYoqV3mNqskeNoWSgBRim/mj9EsGLypO2GW874XnYX7ZYiNPQPU7v1Xh832PKKXNo585qrkd5un7imShPutMBzGe+SUkm5hUqTlzoFQ7ngDlGHPN+EVDlJqMiuomOYSg+BNudS5o6g3ICkQpC/eWLpe6dj/M2TDhGeMgoBke1/qQXDAN7H9cAAAAAASUVORK5CYII=">
                                    Medication :</div>

                            </div>
                            <div class="item-body">
                                <div class="item-list">
                                    <div class="left key">List of Medication : </div>
                                    <ul class="right">
                                        {{#each roojh_summary.summary.medication.list_of_medication}}
                                        <li class="value" style="margin-bottom: 15px;"><img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBjVCxtcIwDDz7p6HLCP4bMELIAsAGMAE1UAAVpGMD2AAWgGc2yAZohHQ83gMZkTh5KQjhGkunO1mSMtEyhO4s8IZ6Xug0O6IFysSbrTyTGkcAr+g83TeZ9AfOCL0zcXI18Xr02cSuaZxGs8qrveQqkcF3EPgxJDtPC1PeSe98nwxwWa1vKHnokwx8+w/ykDmF9uspN8ZT8gp/fVli6xMxd6LCpIN+pXE4VA08UQtJfkjL6ghtcM7CcY/slAJ/GfNd7FYitiUl46nur+Ka6X0p9ZO4RHHyKBlAcwi+H8kuM7TgBbQpY3L7uvwLAAAAAElFTkSuQmCC">
                                            <span class="bold">{{medicine}} </span>
                                            <span class="sm"> {{strength}} </span>
                                            <span class="grey">({{salt}}) </span> | <span class="grey">{{dosage}}</span>
                                        </li>
                                        {{/each}}
                                    </ul>
                                </div>
                                <div class="item-list">
                                    <div class="left key">Comment : </div>
                                    <div class="right">
                                        <div class="value">{{roojh_summary.summary.medication.comment}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="main">
                            <div class="head-section">
                                <div class="title-head"><img
                                        src="https://roojh-development.netlify.app/static/media/Allergy.8443a397652daca5df7eb0b95f702fc6.svg">Allergies
                                    :
                                </div>

                            </div>
                            <div class="item-body">
                                <div class="item-list">
                                    <div class="left key">List of Allergies : </div>
                                    <ul class="right">
                                        {{#each roojh_summary.summary.allergy.list_of_allergies}}
                                        <li class="value"><img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBjVCxtcIwDDz7p6HLCP4bMELIAsAGMAE1UAAVpGMD2AAWgGc2yAZohHQ83gMZkTh5KQjhGkunO1mSMtEyhO4s8IZ6Xug0O6IFysSbrTyTGkcAr+g83TeZ9AfOCL0zcXI18Xr02cSuaZxGs8qrveQqkcF3EPgxJDtPC1PeSe98nwxwWa1vKHnokwx8+w/ykDmF9uspN8ZT8gp/fVli6xMxd6LCpIN+pXE4VA08UQtJfkjL6ghtcM7CcY/slAJ/GfNd7FYitiUl46nur+Ka6X0p9ZO4RHHyKBlAcwi+H8kuM7TgBbQpY3L7uvwLAAAAAElFTkSuQmCC">
                                            {{this}}</li>
                                        {{/each}}
                                    </ul>
                                </div>
                                <div class="item-list">
                                    <div class="left key">Comment : </div>
                                    <div class="right">
                                        <div class="value">{{roojh_summary.summary.allergy.comment}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div>
                            <div class="main">
                                <div class="head-section">
                                    <div class="title-head"><img
                                            src="data:image/png;base64,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">Recent
                                        Labs :</div>

                                </div>
                                <div class="item-body">
                                    <div>
                                        {{#each roojh_summary.summary.recent_labs.list_of_recent_labs}}
                                        <div class="key bold">{{description}} :</div>
                                        <div class="data">
                                            <div class="item-list">
                                                <div class="left key ml">Date :</div>
                                                <div class="right value">{{date}}</div>
                                            </div>
                                            <div class="item-list">
                                                <div class="left key ml">Impression :</div>
                                                <div class="right value">{{summary}}</div>
                                            </div>
                                        </div>
                                        {{/each}}
                                    </div>
                                    <div class="item-list">
                                        <div class="left key">Comment : </div>
                                        <div class="right">
                                            <div class="value">{{roojh_summary.summary.recent_labs.comment}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div>
                            <div class="main">
                                <div class="head-section">
                                    <div class="title-head"><img
                                            src="https://roojh-development.netlify.app/static/media/primary.1c306ce00d1ed8d1adf03d97123c2c6d.svg">Primary
                                        Doctor :</div>

                                </div>
                                <div class="item-body">
                                    <div>
                                        <div class="key">Details of Primary Doctor : </div>
                                        <div class="data">
                                            <div class="item-list">
                                                <div class="left key ml">Name :</div>
                                                <div class="right value">
                                                    {{roojh_summary.summary.primary_doctor.details_of_primary_doctor.name}}
                                                </div>
                                            </div>
                                            <div class="item-list">
                                                <div class="left key ml">Address :</div>
                                                <div class="right value">
                                                    {{roojh_summary.summary.primary_doctor.details_of_primary_doctor.address}}
                                                </div>
                                            </div>
                                            <div class="item-list">
                                                <div class="left key ml">Telephone :</div>
                                                <div class="right value">
                                                    {{roojh_summary.summary.primary_doctor.details_of_primary_doctor.telephone}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-list">
                                        <div class="left key ">Comment : </div>
                                        <div class="right">
                                            <div class="value">{{roojh_summary.summary.primary_doctor.comment}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div>
                            <div class="main">
                                <div class="head-section">
                                    <div class="title-head"><img
                                            src="data:image/png;base64,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">Cardiology
                                        :</div>

                                </div>
                                <div class="item-body">
                                    <div>
                                        {{#each roojh_summary.summary.cardiology.list_of_cardiology}}
                                        <div class="key bold" style="display: flex;">
                                            <div>{{description}} :</div>
                                            <div class="card-head-icon-1"><img
                                                    src="https://roojh-development.netlify.app/static/media/photoImg.daab727f754723f9ea97.jpg">
                                            </div>
                                        </div>
                                        <div class="data">
                                            <div class="item-list">
                                                <div class="left key ml">Impression :</div>
                                                <div class="right value">{{date}}, {{summary}}</div>
                                            </div>
                                        </div>
                                        {{/each}}
                                    </div>
                                    <div class="item-list">
                                        <div class="left key">Comment : </div>
                                        <div class="right">
                                            <div class="value">{{roojh_summary.summary.cardiology.comment}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div>
                            <div class="main">
                                <div class="head-section">
                                    <div class="title-head"><img
                                            src="https://roojh-development.netlify.app/static/media/radio.246c420be2cf7186978a99e91a045e0e.svg">Radiology
                                        :
                                    </div>

                                </div>
                                <div class="item-body">
                                    <div>
                                        {{#each roojh_summary.summary.radiology.list_of_radiology}}
                                        <div class="key bold" style="display: flex;">
                                            <div>{{description}} :</div>
                                            <div class="card-head-icon-1"><img
                                                    src="https://roojh-development.netlify.app/static/media/photoImg.daab727f754723f9ea97.jpg">
                                            </div>
                                        </div>
                                        <div class="data">
                                            <div class="item-list">
                                                <div class="left key ml">Impression :</div>
                                                <div class="right value">{{date}}, {{summary}}</div>
                                            </div>
                                        </div>
                                        {{/each}}
                                    </div>
                                    <div class="item-list">
                                        <div class="left key">Comment : </div>
                                        <div class="right">
                                            <div class="value">{{roojh_summary.summary.radiology.comment}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>`;

const generatePdf = async (jsonData) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const template = handlebars.compile(source);
    const result = template(jsonData);

    await page.setContent(result);

    await page.pdf({
        path: 'roojh_summary.pdf',
        format: 'A4',
        printBackground: true,
    });
    await browser.close();
    console.log('pdf generated successfully')
};

getData().then((data) => {
    //console.log(JSON.stringify(data))
    generatePdf(data)
}).catch((err) => console.log(err))

