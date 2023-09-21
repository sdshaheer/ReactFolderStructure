const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
//const admin = require('firebase-admin');

// const serviceAccount = require("C:\Users\syed\Desktop\roojhproject-firebase-adminsdk-y2fh0-ab14ff814d.json")

// admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
// logger.info('Firebase Admin Initialized!!');

const jsonData = {
  user_information: {
    user_details: {
      name: 'Sahil',
      age: '31',
      BMI: '18.52',
      bloodGroup: 'B+',
      height: {
        value: '161',
      },
      weight: '121',
      address: 'mahagun noida',
      phone_no: '+911111111111',
      email: '',
    },
  },
  roojh_summary: {
    summary: {
      conclusion: `We are a team of doctors and technologists who want to bring the best of healthcare to every person in this world. We firmly believe that good healthcare starts with people who need to take control of personal health irrespective of skill level, education level or income level. A private, secure patient controlled personal health record is the key building block for empowering personal health.

            Also we believe that easy storage and exchange of health information among patients, doctors and health care providers, is fundamental to better medical decision making.
            
            Roojh is our attempt to empower people and healthcare providers to make better decision. And we will use an optimal mix of human and technological approach to build sustainable solutions.`,
      social_history: {
        details: [
          {
            type: 'Smoking',
            person: 'None',
          },
          {
            type: 'Alcohol',
            person: 'None',
          },
        ],
      },
      family_history: {
        details: [
          {
            type: 'Diabetes',
            person: 'Mother',
          },
          {
            type: 'Blood Pressure',
            person: 'Father',
          },
          {
            type: 'Heart Disease',
            person: 'None',
          },
        ],
      },
      medical_history: {
        comment: 'medical history comment',
        description: 'medical history description',
        problem_list: [
          {
            year: '2023',
            list_details: [
              {
                date: '06 june 2023',
                comment: 'post covid condition',
              },
              {
                date: '25 april 2023',
                comment: 'sumasoft',
              },
            ],
          },
          {
            year: '2022',
            list_details: [
              {
                date: '06 june 2023',
                comment: 'post covid condition',
              },
              {
                date: '25 april 2023',
                comment: 'sumasoft',
              },
            ],
          },
          {
            year: '2021',
            list_details: [
              {
                date: '06 june 2023',
                comment: 'post covid condition',
              },
              {
                date: '25 april 2023',
                comment: 'sumasoft',
              },
            ],
          },
        ],
      },
      medication: {
        comment: 'medication comment',
        list_of_medication: [
          {
            medicine: 'Zenmac',
            dosage: '500 mg',
            alternate: 'azithromycin',
            usage: 'One Time a Day',
          },
          {
            medicine: 'Theocef',
            dosage: '250 mg',
            alternate: 'cefuroxime axetil',
            usage: '2 Times a Day',
          },
          {
            medicine: 'Nimtas T ',
            dosage: '20 mg/1 mL + 5 mg/1 mL eye drops',
            alternate: 'dorzolamide hydrochloride and timolol maleate',
            usage: '2 Times a Day',
          },
          {
            medicine: 'Dorzina T ',
            dosage: '20 mg/1 mL + 5 mg/1 mL eye drops',
            alternate: '20 mg/1 mL + 5 mg/1 mL eye drops',
            usage: '2 Times a Day',
          },
          {
            medicine: 'Ulcirex ',
            dosage: '20 mg',
            alternate: 'omeprazole',
            usage: 'SoS',
          },
          {
            medicine: 'Ulcirex ',
            dosage: '20 mg',
            alternate: 'omeprazole',
            usage: 'SoS',
          },
          {
            medicine: 'Paracetamol ',
            dosage: '500mg Tablet',
            alternate: 'Paracetamol (500mg),Acetaminophen',
            usage: 'One Time a Day',
          },
          {
            medicine: 'XXParacetamol Tablet ',
            dosage: '',
            alternate: 'XX Para salt',
            usage: 'One Time a Day',
          },
          {
            medicine: 'zzDolo 650 Tablet',
            dosage: '',
            alternate: 'Paracetamol (650mg),Acetaminophen,',
            usage: ' Before Bed',
          },
          {
            medicine: 'zzDolo 650 Tablet',
            dosage: '',
            alternate: 'Paracetamol (650mg),Acetaminophen,',
            usage: ' Before Bed',
          },
          {
            medicine: 'Zenmac',
            dosage: '500 mg',
            alternate: 'azithromycin',
            usage: 'One Time a Day',
          },
          {
            medicine: 'Theocef',
            dosage: '250 mg',
            alternate: 'cefuroxime axetil',
            usage: '2 Times a Day',
          },
          {
            medicine: 'Zenmac',
            dosage: '500 mg',
            alternate: 'azithromycin',
            usage: 'One Time a Day',
          },
          {
            medicine: 'Theocef',
            dosage: '250 mg',
            alternate: 'cefuroxime axetil',
            usage: '2 Times a Day',
          },
          {
            medicine: 'Nimtas T ',
            dosage: '20 mg/1 mL + 5 mg/1 mL eye drops',
            alternate: 'dorzolamide hydrochloride and timolol maleate',
            usage: '2 Times a Day',
          },
        ],
      },
      allergy: {
        comment: 'allergies comment',
        list_of_allergies: ['gh', 'seasonal allergy', 'drugs and medications'],
      },
      recent_labs: {
        comment: 'test',
        list_of_recent_labs: [
          {
            date: '07 sep 2023',
            impression: 'test',
          },
          {
            date: '07 sep 2023',
            impression: 'test for lab 1',
          },
          {
            date: '12 sep 2023',
            impression: 'test for lab 2',
          },
          {
            date: '19 sep 2023',
            impression: 'test',
          },
        ],
      },
      surgical_history: {
        comment: 'surgical history data',
        list_of_surgical_history: [
          {
            year: '2023',
            list_details: [
              {
                date: '06 june 2023',
                comment: 'post covid condition',
              },
              {
                date: '25 april 2023',
                comment: 'sumasoft',
              },
            ],
          },
          {
            year: '2022',
            list_details: [
              {
                date: '06 june 2023',
                comment: 'post covid condition',
              },
              {
                date: '25 april 2023',
                comment: 'sumasoft',
              },
            ],
          },
          {
            year: '2021',
            list_details: [
              {
                date: '06 june 2023',
                comment: 'post covid condition',
              },
              {
                date: '25 april 2023',
                comment: 'sumasoft',
              },
            ],
          },
        ],
      },
      primary_doctor: {
        details_of_primary_doctor: {
          address: 'noida',
          name: 'pooja',
          telephone: '6761745151',
        },
        comment: 'primary docter details',
      },
      cardiology: {
        list_of_cardiology: [
          {
            test_name: 'test',
            impression: '07 sep 2023, test',
          },
          {
            test_name: 'ECG',
            impression: '12 sep 2023, ECG test',
          },
          {
            test_name: 'test',
            impression: '07 sep 2023, test',
          },
          {
            test_name: 'test',
            impression: '07 sep 2023, test',
          },
        ],
        comment: 'cardiology test details',
      },
      radiology: {
        list_of_radiology: [
          {
            test_name: 'test',
            impression: '07 sep 2023, test',
          },
          {
            test_name: 'test',
            impression: '12 sep 2023, test',
          },
          {
            test_name: 'test',
            impression: '07 sep 2023, test',
          },
          {
            test_name: 'test',
            impression: '07 sep 2023, test',
          },
        ],
        comment: 'radiology test details',
      },
    },
  },
};

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
  
          .ant-avatar-circle {
            display: inline-block; 
            width: 100px; 
            height: 100px; 
            border-radius: 50%; 
            overflow: hidden; 
        }
        
        .ant-avatar-circle img {
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
        }

          .summary-avatar {
              border-radius: 50%;
              height: 70px;
              width: 70px;
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
              font-size: 20px;
              font-weight: 700 !important;
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
                      <div class="summary-col-value">Age: {{user_information.user_details.age}} <div class="vertical-line"></div>BMI: {{user_information.user_details.BMI}}</div>
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
                  <div class="qr-code"><svg viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg" height="256"
                          width="256" style="height: auto; max-width: 100%; width: 100%;">
                          <path
                              d="       M 7 0 l 1 0 0 1 -1 0 Z M 8 0 l 1 0 0 1 -1 0 Z M 9 0 l 1 0 0 1 -1 0 Z  M 11 0 l 1 0 0 1 -1 0 Z  M 13 0 l 1 0 0 1 -1 0 Z     M 18 0 l 1 0 0 1 -1 0 Z M 19 0 l 1 0 0 1 -1 0 Z    M 23 0 l 1 0 0 1 -1 0 Z M 24 0 l 1 0 0 1 -1 0 Z M 25 0 l 1 0 0 1 -1 0 Z           M 36 0 l 1 0 0 1 -1 0 Z M 37 0 l 1 0 0 1 -1 0 Z M 38 0 l 1 0 0 1 -1 0 Z M 39 0 l 1 0 0 1 -1 0 Z  M 41 0 l 1 0 0 1 -1 0 Z         M 1 1 l 1 0 0 1 -1 0 Z M 2 1 l 1 0 0 1 -1 0 Z M 3 1 l 1 0 0 1 -1 0 Z M 4 1 l 1 0 0 1 -1 0 Z M 5 1 l 1 0 0 1 -1 0 Z  M 7 1 l 1 0 0 1 -1 0 Z  M 9 1 l 1 0 0 1 -1 0 Z M 10 1 l 1 0 0 1 -1 0 Z  M 12 1 l 1 0 0 1 -1 0 Z   M 15 1 l 1 0 0 1 -1 0 Z M 16 1 l 1 0 0 1 -1 0 Z M 17 1 l 1 0 0 1 -1 0 Z   M 20 1 l 1 0 0 1 -1 0 Z  M 22 1 l 1 0 0 1 -1 0 Z M 23 1 l 1 0 0 1 -1 0 Z           M 34 1 l 1 0 0 1 -1 0 Z       M 41 1 l 1 0 0 1 -1 0 Z  M 43 1 l 1 0 0 1 -1 0 Z M 44 1 l 1 0 0 1 -1 0 Z M 45 1 l 1 0 0 1 -1 0 Z M 46 1 l 1 0 0 1 -1 0 Z M 47 1 l 1 0 0 1 -1 0 Z   M 1 2 l 1 0 0 1 -1 0 Z    M 5 2 l 1 0 0 1 -1 0 Z  M 7 2 l 1 0 0 1 -1 0 Z   M 10 2 l 1 0 0 1 -1 0 Z M 11 2 l 1 0 0 1 -1 0 Z  M 13 2 l 1 0 0 1 -1 0 Z     M 18 2 l 1 0 0 1 -1 0 Z M 19 2 l 1 0 0 1 -1 0 Z M 20 2 l 1 0 0 1 -1 0 Z M 21 2 l 1 0 0 1 -1 0 Z  M 23 2 l 1 0 0 1 -1 0 Z M 24 2 l 1 0 0 1 -1 0 Z   M 27 2 l 1 0 0 1 -1 0 Z M 28 2 l 1 0 0 1 -1 0 Z     M 33 2 l 1 0 0 1 -1 0 Z M 34 2 l 1 0 0 1 -1 0 Z  M 36 2 l 1 0 0 1 -1 0 Z M 37 2 l 1 0 0 1 -1 0 Z M 38 2 l 1 0 0 1 -1 0 Z   M 41 2 l 1 0 0 1 -1 0 Z  M 43 2 l 1 0 0 1 -1 0 Z    M 47 2 l 1 0 0 1 -1 0 Z   M 1 3 l 1 0 0 1 -1 0 Z    M 5 3 l 1 0 0 1 -1 0 Z  M 7 3 l 1 0 0 1 -1 0 Z M 8 3 l 1 0 0 1 -1 0 Z  M 10 3 l 1 0 0 1 -1 0 Z M 11 3 l 1 0 0 1 -1 0 Z M 12 3 l 1 0 0 1 -1 0 Z M 13 3 l 1 0 0 1 -1 0 Z  M 15 3 l 1 0 0 1 -1 0 Z M 16 3 l 1 0 0 1 -1 0 Z M 17 3 l 1 0 0 1 -1 0 Z  M 19 3 l 1 0 0 1 -1 0 Z M 20 3 l 1 0 0 1 -1 0 Z  M 22 3 l 1 0 0 1 -1 0 Z  M 24 3 l 1 0 0 1 -1 0 Z    M 28 3 l 1 0 0 1 -1 0 Z   M 31 3 l 1 0 0 1 -1 0 Z M 32 3 l 1 0 0 1 -1 0 Z M 33 3 l 1 0 0 1 -1 0 Z M 34 3 l 1 0 0 1 -1 0 Z M 35 3 l 1 0 0 1 -1 0 Z M 36 3 l 1 0 0 1 -1 0 Z M 37 3 l 1 0 0 1 -1 0 Z M 38 3 l 1 0 0 1 -1 0 Z  M 40 3 l 1 0 0 1 -1 0 Z M 41 3 l 1 0 0 1 -1 0 Z  M 43 3 l 1 0 0 1 -1 0 Z    M 47 3 l 1 0 0 1 -1 0 Z   M 1 4 l 1 0 0 1 -1 0 Z    M 5 4 l 1 0 0 1 -1 0 Z  M 7 4 l 1 0 0 1 -1 0 Z  M 9 4 l 1 0 0 1 -1 0 Z      M 15 4 l 1 0 0 1 -1 0 Z M 16 4 l 1 0 0 1 -1 0 Z M 17 4 l 1 0 0 1 -1 0 Z    M 21 4 l 1 0 0 1 -1 0 Z      M 27 4 l 1 0 0 1 -1 0 Z M 28 4 l 1 0 0 1 -1 0 Z   M 31 4 l 1 0 0 1 -1 0 Z M 32 4 l 1 0 0 1 -1 0 Z  M 34 4 l 1 0 0 1 -1 0 Z M 35 4 l 1 0 0 1 -1 0 Z  M 37 4 l 1 0 0 1 -1 0 Z M 38 4 l 1 0 0 1 -1 0 Z M 39 4 l 1 0 0 1 -1 0 Z M 40 4 l 1 0 0 1 -1 0 Z M 41 4 l 1 0 0 1 -1 0 Z  M 43 4 l 1 0 0 1 -1 0 Z    M 47 4 l 1 0 0 1 -1 0 Z   M 1 5 l 1 0 0 1 -1 0 Z M 2 5 l 1 0 0 1 -1 0 Z M 3 5 l 1 0 0 1 -1 0 Z M 4 5 l 1 0 0 1 -1 0 Z M 5 5 l 1 0 0 1 -1 0 Z  M 7 5 l 1 0 0 1 -1 0 Z  M 9 5 l 1 0 0 1 -1 0 Z M 10 5 l 1 0 0 1 -1 0 Z  M 12 5 l 1 0 0 1 -1 0 Z  M 14 5 l 1 0 0 1 -1 0 Z M 15 5 l 1 0 0 1 -1 0 Z M 16 5 l 1 0 0 1 -1 0 Z  M 18 5 l 1 0 0 1 -1 0 Z M 19 5 l 1 0 0 1 -1 0 Z    M 23 5 l 1 0 0 1 -1 0 Z M 24 5 l 1 0 0 1 -1 0 Z M 25 5 l 1 0 0 1 -1 0 Z  M 27 5 l 1 0 0 1 -1 0 Z M 28 5 l 1 0 0 1 -1 0 Z M 29 5 l 1 0 0 1 -1 0 Z  M 31 5 l 1 0 0 1 -1 0 Z M 32 5 l 1 0 0 1 -1 0 Z M 33 5 l 1 0 0 1 -1 0 Z  M 35 5 l 1 0 0 1 -1 0 Z M 36 5 l 1 0 0 1 -1 0 Z   M 39 5 l 1 0 0 1 -1 0 Z M 40 5 l 1 0 0 1 -1 0 Z M 41 5 l 1 0 0 1 -1 0 Z  M 43 5 l 1 0 0 1 -1 0 Z M 44 5 l 1 0 0 1 -1 0 Z M 45 5 l 1 0 0 1 -1 0 Z M 46 5 l 1 0 0 1 -1 0 Z M 47 5 l 1 0 0 1 -1 0 Z         M 7 6 l 1 0 0 1 -1 0 Z  M 9 6 l 1 0 0 1 -1 0 Z  M 11 6 l 1 0 0 1 -1 0 Z  M 13 6 l 1 0 0 1 -1 0 Z  M 15 6 l 1 0 0 1 -1 0 Z  M 17 6 l 1 0 0 1 -1 0 Z  M 19 6 l 1 0 0 1 -1 0 Z  M 21 6 l 1 0 0 1 -1 0 Z  M 23 6 l 1 0 0 1 -1 0 Z  M 25 6 l 1 0 0 1 -1 0 Z  M 27 6 l 1 0 0 1 -1 0 Z  M 29 6 l 1 0 0 1 -1 0 Z  M 31 6 l 1 0 0 1 -1 0 Z  M 33 6 l 1 0 0 1 -1 0 Z  M 35 6 l 1 0 0 1 -1 0 Z  M 37 6 l 1 0 0 1 -1 0 Z  M 39 6 l 1 0 0 1 -1 0 Z  M 41 6 l 1 0 0 1 -1 0 Z        M 0 7 l 1 0 0 1 -1 0 Z M 1 7 l 1 0 0 1 -1 0 Z M 2 7 l 1 0 0 1 -1 0 Z M 3 7 l 1 0 0 1 -1 0 Z M 4 7 l 1 0 0 1 -1 0 Z M 5 7 l 1 0 0 1 -1 0 Z M 6 7 l 1 0 0 1 -1 0 Z M 7 7 l 1 0 0 1 -1 0 Z  M 9 7 l 1 0 0 1 -1 0 Z M 10 7 l 1 0 0 1 -1 0 Z M 11 7 l 1 0 0 1 -1 0 Z  M 13 7 l 1 0 0 1 -1 0 Z    M 17 7 l 1 0 0 1 -1 0 Z  M 19 7 l 1 0 0 1 -1 0 Z M 20 7 l 1 0 0 1 -1 0 Z M 21 7 l 1 0 0 1 -1 0 Z  M 23 7 l 1 0 0 1 -1 0 Z M 24 7 l 1 0 0 1 -1 0 Z M 25 7 l 1 0 0 1 -1 0 Z   M 28 7 l 1 0 0 1 -1 0 Z M 29 7 l 1 0 0 1 -1 0 Z M 30 7 l 1 0 0 1 -1 0 Z M 31 7 l 1 0 0 1 -1 0 Z  M 33 7 l 1 0 0 1 -1 0 Z        M 41 7 l 1 0 0 1 -1 0 Z M 42 7 l 1 0 0 1 -1 0 Z M 43 7 l 1 0 0 1 -1 0 Z M 44 7 l 1 0 0 1 -1 0 Z M 45 7 l 1 0 0 1 -1 0 Z M 46 7 l 1 0 0 1 -1 0 Z M 47 7 l 1 0 0 1 -1 0 Z M 48 7 l 1 0 0 1 -1 0 Z   M 2 8 l 1 0 0 1 -1 0 Z  M 4 8 l 1 0 0 1 -1 0 Z M 5 8 l 1 0 0 1 -1 0 Z   M 8 8 l 1 0 0 1 -1 0 Z M 9 8 l 1 0 0 1 -1 0 Z M 10 8 l 1 0 0 1 -1 0 Z   M 13 8 l 1 0 0 1 -1 0 Z M 14 8 l 1 0 0 1 -1 0 Z M 15 8 l 1 0 0 1 -1 0 Z  M 17 8 l 1 0 0 1 -1 0 Z  M 19 8 l 1 0 0 1 -1 0 Z           M 30 8 l 1 0 0 1 -1 0 Z M 31 8 l 1 0 0 1 -1 0 Z M 32 8 l 1 0 0 1 -1 0 Z   M 35 8 l 1 0 0 1 -1 0 Z  M 37 8 l 1 0 0 1 -1 0 Z M 38 8 l 1 0 0 1 -1 0 Z M 39 8 l 1 0 0 1 -1 0 Z M 40 8 l 1 0 0 1 -1 0 Z M 41 8 l 1 0 0 1 -1 0 Z    M 45 8 l 1 0 0 1 -1 0 Z   M 48 8 l 1 0 0 1 -1 0 Z M 0 9 l 1 0 0 1 -1 0 Z M 1 9 l 1 0 0 1 -1 0 Z M 2 9 l 1 0 0 1 -1 0 Z  M 4 9 l 1 0 0 1 -1 0 Z  M 6 9 l 1 0 0 1 -1 0 Z  M 8 9 l 1 0 0 1 -1 0 Z  M 10 9 l 1 0 0 1 -1 0 Z M 11 9 l 1 0 0 1 -1 0 Z  M 13 9 l 1 0 0 1 -1 0 Z  M 15 9 l 1 0 0 1 -1 0 Z M 16 9 l 1 0 0 1 -1 0 Z   M 19 9 l 1 0 0 1 -1 0 Z M 20 9 l 1 0 0 1 -1 0 Z  M 22 9 l 1 0 0 1 -1 0 Z M 23 9 l 1 0 0 1 -1 0 Z M 24 9 l 1 0 0 1 -1 0 Z M 25 9 l 1 0 0 1 -1 0 Z M 26 9 l 1 0 0 1 -1 0 Z  M 28 9 l 1 0 0 1 -1 0 Z M 29 9 l 1 0 0 1 -1 0 Z M 30 9 l 1 0 0 1 -1 0 Z M 31 9 l 1 0 0 1 -1 0 Z  M 33 9 l 1 0 0 1 -1 0 Z M 34 9 l 1 0 0 1 -1 0 Z M 35 9 l 1 0 0 1 -1 0 Z  M 37 9 l 1 0 0 1 -1 0 Z M 38 9 l 1 0 0 1 -1 0 Z M 39 9 l 1 0 0 1 -1 0 Z M 40 9 l 1 0 0 1 -1 0 Z M 41 9 l 1 0 0 1 -1 0 Z M 42 9 l 1 0 0 1 -1 0 Z M 43 9 l 1 0 0 1 -1 0 Z   M 46 9 l 1 0 0 1 -1 0 Z M 47 9 l 1 0 0 1 -1 0 Z    M 2 10 l 1 0 0 1 -1 0 Z  M 4 10 l 1 0 0 1 -1 0 Z   M 7 10 l 1 0 0 1 -1 0 Z M 8 10 l 1 0 0 1 -1 0 Z    M 12 10 l 1 0 0 1 -1 0 Z     M 17 10 l 1 0 0 1 -1 0 Z      M 23 10 l 1 0 0 1 -1 0 Z M 24 10 l 1 0 0 1 -1 0 Z  M 26 10 l 1 0 0 1 -1 0 Z M 27 10 l 1 0 0 1 -1 0 Z  M 29 10 l 1 0 0 1 -1 0 Z M 30 10 l 1 0 0 1 -1 0 Z   M 33 10 l 1 0 0 1 -1 0 Z   M 36 10 l 1 0 0 1 -1 0 Z M 37 10 l 1 0 0 1 -1 0 Z M 38 10 l 1 0 0 1 -1 0 Z  M 40 10 l 1 0 0 1 -1 0 Z  M 42 10 l 1 0 0 1 -1 0 Z   M 45 10 l 1 0 0 1 -1 0 Z M 46 10 l 1 0 0 1 -1 0 Z M 47 10 l 1 0 0 1 -1 0 Z    M 2 11 l 1 0 0 1 -1 0 Z M 3 11 l 1 0 0 1 -1 0 Z  M 5 11 l 1 0 0 1 -1 0 Z M 6 11 l 1 0 0 1 -1 0 Z M 7 11 l 1 0 0 1 -1 0 Z M 8 11 l 1 0 0 1 -1 0 Z M 9 11 l 1 0 0 1 -1 0 Z  M 11 11 l 1 0 0 1 -1 0 Z  M 13 11 l 1 0 0 1 -1 0 Z   M 16 11 l 1 0 0 1 -1 0 Z  M 18 11 l 1 0 0 1 -1 0 Z M 19 11 l 1 0 0 1 -1 0 Z  M 21 11 l 1 0 0 1 -1 0 Z M 22 11 l 1 0 0 1 -1 0 Z M 23 11 l 1 0 0 1 -1 0 Z    M 27 11 l 1 0 0 1 -1 0 Z     M 32 11 l 1 0 0 1 -1 0 Z  M 34 11 l 1 0 0 1 -1 0 Z   M 37 11 l 1 0 0 1 -1 0 Z   M 40 11 l 1 0 0 1 -1 0 Z M 41 11 l 1 0 0 1 -1 0 Z M 42 11 l 1 0 0 1 -1 0 Z  M 44 11 l 1 0 0 1 -1 0 Z M 45 11 l 1 0 0 1 -1 0 Z M 46 11 l 1 0 0 1 -1 0 Z  M 48 11 l 1 0 0 1 -1 0 Z M 0 12 l 1 0 0 1 -1 0 Z  M 2 12 l 1 0 0 1 -1 0 Z   M 5 12 l 1 0 0 1 -1 0 Z     M 10 12 l 1 0 0 1 -1 0 Z M 11 12 l 1 0 0 1 -1 0 Z  M 13 12 l 1 0 0 1 -1 0 Z  M 15 12 l 1 0 0 1 -1 0 Z  M 17 12 l 1 0 0 1 -1 0 Z  M 19 12 l 1 0 0 1 -1 0 Z  M 21 12 l 1 0 0 1 -1 0 Z M 22 12 l 1 0 0 1 -1 0 Z M 23 12 l 1 0 0 1 -1 0 Z  M 25 12 l 1 0 0 1 -1 0 Z     M 30 12 l 1 0 0 1 -1 0 Z M 31 12 l 1 0 0 1 -1 0 Z   M 34 12 l 1 0 0 1 -1 0 Z    M 38 12 l 1 0 0 1 -1 0 Z M 39 12 l 1 0 0 1 -1 0 Z M 40 12 l 1 0 0 1 -1 0 Z M 41 12 l 1 0 0 1 -1 0 Z M 42 12 l 1 0 0 1 -1 0 Z    M 46 12 l 1 0 0 1 -1 0 Z   M 0 13 l 1 0 0 1 -1 0 Z  M 2 13 l 1 0 0 1 -1 0 Z M 3 13 l 1 0 0 1 -1 0 Z  M 5 13 l 1 0 0 1 -1 0 Z M 6 13 l 1 0 0 1 -1 0 Z M 7 13 l 1 0 0 1 -1 0 Z  M 9 13 l 1 0 0 1 -1 0 Z  M 11 13 l 1 0 0 1 -1 0 Z M 12 13 l 1 0 0 1 -1 0 Z  M 14 13 l 1 0 0 1 -1 0 Z M 15 13 l 1 0 0 1 -1 0 Z M 16 13 l 1 0 0 1 -1 0 Z M 17 13 l 1 0 0 1 -1 0 Z M 18 13 l 1 0 0 1 -1 0 Z      M 24 13 l 1 0 0 1 -1 0 Z  M 26 13 l 1 0 0 1 -1 0 Z M 27 13 l 1 0 0 1 -1 0 Z M 28 13 l 1 0 0 1 -1 0 Z M 29 13 l 1 0 0 1 -1 0 Z M 30 13 l 1 0 0 1 -1 0 Z M 31 13 l 1 0 0 1 -1 0 Z    M 35 13 l 1 0 0 1 -1 0 Z M 36 13 l 1 0 0 1 -1 0 Z  M 38 13 l 1 0 0 1 -1 0 Z M 39 13 l 1 0 0 1 -1 0 Z  M 41 13 l 1 0 0 1 -1 0 Z M 42 13 l 1 0 0 1 -1 0 Z  M 44 13 l 1 0 0 1 -1 0 Z   M 47 13 l 1 0 0 1 -1 0 Z    M 2 14 l 1 0 0 1 -1 0 Z M 3 14 l 1 0 0 1 -1 0 Z  M 5 14 l 1 0 0 1 -1 0 Z  M 7 14 l 1 0 0 1 -1 0 Z  M 9 14 l 1 0 0 1 -1 0 Z M 10 14 l 1 0 0 1 -1 0 Z  M 12 14 l 1 0 0 1 -1 0 Z  M 14 14 l 1 0 0 1 -1 0 Z M 15 14 l 1 0 0 1 -1 0 Z M 16 14 l 1 0 0 1 -1 0 Z M 17 14 l 1 0 0 1 -1 0 Z M 18 14 l 1 0 0 1 -1 0 Z M 19 14 l 1 0 0 1 -1 0 Z    M 23 14 l 1 0 0 1 -1 0 Z  M 25 14 l 1 0 0 1 -1 0 Z  M 27 14 l 1 0 0 1 -1 0 Z   M 30 14 l 1 0 0 1 -1 0 Z M 31 14 l 1 0 0 1 -1 0 Z M 32 14 l 1 0 0 1 -1 0 Z M 33 14 l 1 0 0 1 -1 0 Z M 34 14 l 1 0 0 1 -1 0 Z   M 37 14 l 1 0 0 1 -1 0 Z  M 39 14 l 1 0 0 1 -1 0 Z M 40 14 l 1 0 0 1 -1 0 Z  M 42 14 l 1 0 0 1 -1 0 Z  M 44 14 l 1 0 0 1 -1 0 Z M 45 14 l 1 0 0 1 -1 0 Z M 46 14 l 1 0 0 1 -1 0 Z M 47 14 l 1 0 0 1 -1 0 Z   M 1 15 l 1 0 0 1 -1 0 Z M 2 15 l 1 0 0 1 -1 0 Z  M 4 15 l 1 0 0 1 -1 0 Z M 5 15 l 1 0 0 1 -1 0 Z M 6 15 l 1 0 0 1 -1 0 Z  M 8 15 l 1 0 0 1 -1 0 Z M 9 15 l 1 0 0 1 -1 0 Z M 10 15 l 1 0 0 1 -1 0 Z M 11 15 l 1 0 0 1 -1 0 Z  M 13 15 l 1 0 0 1 -1 0 Z  M 15 15 l 1 0 0 1 -1 0 Z   M 18 15 l 1 0 0 1 -1 0 Z M 19 15 l 1 0 0 1 -1 0 Z  M 21 15 l 1 0 0 1 -1 0 Z M 22 15 l 1 0 0 1 -1 0 Z M 23 15 l 1 0 0 1 -1 0 Z   M 26 15 l 1 0 0 1 -1 0 Z M 27 15 l 1 0 0 1 -1 0 Z  M 29 15 l 1 0 0 1 -1 0 Z M 30 15 l 1 0 0 1 -1 0 Z   M 33 15 l 1 0 0 1 -1 0 Z    M 37 15 l 1 0 0 1 -1 0 Z M 38 15 l 1 0 0 1 -1 0 Z  M 40 15 l 1 0 0 1 -1 0 Z M 41 15 l 1 0 0 1 -1 0 Z M 42 15 l 1 0 0 1 -1 0 Z M 43 15 l 1 0 0 1 -1 0 Z  M 45 15 l 1 0 0 1 -1 0 Z M 46 15 l 1 0 0 1 -1 0 Z  M 48 15 l 1 0 0 1 -1 0 Z     M 4 16 l 1 0 0 1 -1 0 Z M 5 16 l 1 0 0 1 -1 0 Z  M 7 16 l 1 0 0 1 -1 0 Z M 8 16 l 1 0 0 1 -1 0 Z  M 10 16 l 1 0 0 1 -1 0 Z   M 13 16 l 1 0 0 1 -1 0 Z      M 19 16 l 1 0 0 1 -1 0 Z  M 21 16 l 1 0 0 1 -1 0 Z  M 23 16 l 1 0 0 1 -1 0 Z  M 25 16 l 1 0 0 1 -1 0 Z  M 27 16 l 1 0 0 1 -1 0 Z M 28 16 l 1 0 0 1 -1 0 Z M 29 16 l 1 0 0 1 -1 0 Z  M 31 16 l 1 0 0 1 -1 0 Z  M 33 16 l 1 0 0 1 -1 0 Z      M 39 16 l 1 0 0 1 -1 0 Z    M 43 16 l 1 0 0 1 -1 0 Z  M 45 16 l 1 0 0 1 -1 0 Z M 46 16 l 1 0 0 1 -1 0 Z   M 0 17 l 1 0 0 1 -1 0 Z  M 2 17 l 1 0 0 1 -1 0 Z   M 5 17 l 1 0 0 1 -1 0 Z M 6 17 l 1 0 0 1 -1 0 Z M 7 17 l 1 0 0 1 -1 0 Z  M 9 17 l 1 0 0 1 -1 0 Z M 10 17 l 1 0 0 1 -1 0 Z M 11 17 l 1 0 0 1 -1 0 Z   M 14 17 l 1 0 0 1 -1 0 Z  M 16 17 l 1 0 0 1 -1 0 Z  M 18 17 l 1 0 0 1 -1 0 Z M 19 17 l 1 0 0 1 -1 0 Z  M 21 17 l 1 0 0 1 -1 0 Z    M 25 17 l 1 0 0 1 -1 0 Z  M 27 17 l 1 0 0 1 -1 0 Z M 28 17 l 1 0 0 1 -1 0 Z  M 30 17 l 1 0 0 1 -1 0 Z M 31 17 l 1 0 0 1 -1 0 Z   M 34 17 l 1 0 0 1 -1 0 Z M 35 17 l 1 0 0 1 -1 0 Z M 36 17 l 1 0 0 1 -1 0 Z   M 39 17 l 1 0 0 1 -1 0 Z M 40 17 l 1 0 0 1 -1 0 Z  M 42 17 l 1 0 0 1 -1 0 Z M 43 17 l 1 0 0 1 -1 0 Z M 44 17 l 1 0 0 1 -1 0 Z  M 46 17 l 1 0 0 1 -1 0 Z M 47 17 l 1 0 0 1 -1 0 Z  M 0 18 l 1 0 0 1 -1 0 Z   M 3 18 l 1 0 0 1 -1 0 Z M 4 18 l 1 0 0 1 -1 0 Z   M 7 18 l 1 0 0 1 -1 0 Z  M 9 18 l 1 0 0 1 -1 0 Z   M 12 18 l 1 0 0 1 -1 0 Z  M 14 18 l 1 0 0 1 -1 0 Z M 15 18 l 1 0 0 1 -1 0 Z M 16 18 l 1 0 0 1 -1 0 Z  M 18 18 l 1 0 0 1 -1 0 Z M 19 18 l 1 0 0 1 -1 0 Z M 20 18 l 1 0 0 1 -1 0 Z  M 22 18 l 1 0 0 1 -1 0 Z    M 26 18 l 1 0 0 1 -1 0 Z  M 28 18 l 1 0 0 1 -1 0 Z M 29 18 l 1 0 0 1 -1 0 Z M 30 18 l 1 0 0 1 -1 0 Z M 31 18 l 1 0 0 1 -1 0 Z M 32 18 l 1 0 0 1 -1 0 Z  M 34 18 l 1 0 0 1 -1 0 Z    M 38 18 l 1 0 0 1 -1 0 Z  M 40 18 l 1 0 0 1 -1 0 Z M 41 18 l 1 0 0 1 -1 0 Z M 42 18 l 1 0 0 1 -1 0 Z  M 44 18 l 1 0 0 1 -1 0 Z  M 46 18 l 1 0 0 1 -1 0 Z M 47 18 l 1 0 0 1 -1 0 Z   M 1 19 l 1 0 0 1 -1 0 Z M 2 19 l 1 0 0 1 -1 0 Z    M 6 19 l 1 0 0 1 -1 0 Z  M 8 19 l 1 0 0 1 -1 0 Z  M 10 19 l 1 0 0 1 -1 0 Z M 11 19 l 1 0 0 1 -1 0 Z  M 13 19 l 1 0 0 1 -1 0 Z       M 20 19 l 1 0 0 1 -1 0 Z M 21 19 l 1 0 0 1 -1 0 Z  M 23 19 l 1 0 0 1 -1 0 Z  M 25 19 l 1 0 0 1 -1 0 Z M 26 19 l 1 0 0 1 -1 0 Z  M 28 19 l 1 0 0 1 -1 0 Z M 29 19 l 1 0 0 1 -1 0 Z  M 31 19 l 1 0 0 1 -1 0 Z  M 33 19 l 1 0 0 1 -1 0 Z M 34 19 l 1 0 0 1 -1 0 Z    M 38 19 l 1 0 0 1 -1 0 Z M 39 19 l 1 0 0 1 -1 0 Z M 40 19 l 1 0 0 1 -1 0 Z  M 42 19 l 1 0 0 1 -1 0 Z M 43 19 l 1 0 0 1 -1 0 Z       M 1 20 l 1 0 0 1 -1 0 Z  M 3 20 l 1 0 0 1 -1 0 Z  M 5 20 l 1 0 0 1 -1 0 Z  M 7 20 l 1 0 0 1 -1 0 Z M 8 20 l 1 0 0 1 -1 0 Z    M 12 20 l 1 0 0 1 -1 0 Z     M 17 20 l 1 0 0 1 -1 0 Z M 18 20 l 1 0 0 1 -1 0 Z  M 20 20 l 1 0 0 1 -1 0 Z M 21 20 l 1 0 0 1 -1 0 Z M 22 20 l 1 0 0 1 -1 0 Z M 23 20 l 1 0 0 1 -1 0 Z   M 26 20 l 1 0 0 1 -1 0 Z   M 29 20 l 1 0 0 1 -1 0 Z M 30 20 l 1 0 0 1 -1 0 Z  M 32 20 l 1 0 0 1 -1 0 Z M 33 20 l 1 0 0 1 -1 0 Z M 34 20 l 1 0 0 1 -1 0 Z M 35 20 l 1 0 0 1 -1 0 Z   M 38 20 l 1 0 0 1 -1 0 Z  M 40 20 l 1 0 0 1 -1 0 Z M 41 20 l 1 0 0 1 -1 0 Z   M 44 20 l 1 0 0 1 -1 0 Z  M 46 20 l 1 0 0 1 -1 0 Z   M 0 21 l 1 0 0 1 -1 0 Z   M 3 21 l 1 0 0 1 -1 0 Z M 4 21 l 1 0 0 1 -1 0 Z M 5 21 l 1 0 0 1 -1 0 Z M 6 21 l 1 0 0 1 -1 0 Z  M 8 21 l 1 0 0 1 -1 0 Z   M 11 21 l 1 0 0 1 -1 0 Z M 12 21 l 1 0 0 1 -1 0 Z  M 14 21 l 1 0 0 1 -1 0 Z  M 16 21 l 1 0 0 1 -1 0 Z  M 18 21 l 1 0 0 1 -1 0 Z  M 20 21 l 1 0 0 1 -1 0 Z  M 22 21 l 1 0 0 1 -1 0 Z M 23 21 l 1 0 0 1 -1 0 Z   M 26 21 l 1 0 0 1 -1 0 Z M 27 21 l 1 0 0 1 -1 0 Z M 28 21 l 1 0 0 1 -1 0 Z M 29 21 l 1 0 0 1 -1 0 Z M 30 21 l 1 0 0 1 -1 0 Z M 31 21 l 1 0 0 1 -1 0 Z  M 33 21 l 1 0 0 1 -1 0 Z M 34 21 l 1 0 0 1 -1 0 Z M 35 21 l 1 0 0 1 -1 0 Z M 36 21 l 1 0 0 1 -1 0 Z  M 38 21 l 1 0 0 1 -1 0 Z M 39 21 l 1 0 0 1 -1 0 Z M 40 21 l 1 0 0 1 -1 0 Z M 41 21 l 1 0 0 1 -1 0 Z M 42 21 l 1 0 0 1 -1 0 Z   M 45 21 l 1 0 0 1 -1 0 Z M 46 21 l 1 0 0 1 -1 0 Z M 47 21 l 1 0 0 1 -1 0 Z           M 9 22 l 1 0 0 1 -1 0 Z M 10 22 l 1 0 0 1 -1 0 Z   M 13 22 l 1 0 0 1 -1 0 Z   M 16 22 l 1 0 0 1 -1 0 Z M 17 22 l 1 0 0 1 -1 0 Z  M 19 22 l 1 0 0 1 -1 0 Z         M 28 22 l 1 0 0 1 -1 0 Z M 29 22 l 1 0 0 1 -1 0 Z M 30 22 l 1 0 0 1 -1 0 Z M 31 22 l 1 0 0 1 -1 0 Z M 32 22 l 1 0 0 1 -1 0 Z M 33 22 l 1 0 0 1 -1 0 Z     M 38 22 l 1 0 0 1 -1 0 Z       M 45 22 l 1 0 0 1 -1 0 Z    M 0 23 l 1 0 0 1 -1 0 Z  M 2 23 l 1 0 0 1 -1 0 Z M 3 23 l 1 0 0 1 -1 0 Z  M 5 23 l 1 0 0 1 -1 0 Z M 6 23 l 1 0 0 1 -1 0 Z M 7 23 l 1 0 0 1 -1 0 Z  M 9 23 l 1 0 0 1 -1 0 Z M 10 23 l 1 0 0 1 -1 0 Z    M 14 23 l 1 0 0 1 -1 0 Z  M 16 23 l 1 0 0 1 -1 0 Z M 17 23 l 1 0 0 1 -1 0 Z M 18 23 l 1 0 0 1 -1 0 Z   M 21 23 l 1 0 0 1 -1 0 Z  M 23 23 l 1 0 0 1 -1 0 Z M 24 23 l 1 0 0 1 -1 0 Z M 25 23 l 1 0 0 1 -1 0 Z     M 30 23 l 1 0 0 1 -1 0 Z M 31 23 l 1 0 0 1 -1 0 Z M 32 23 l 1 0 0 1 -1 0 Z M 33 23 l 1 0 0 1 -1 0 Z    M 37 23 l 1 0 0 1 -1 0 Z M 38 23 l 1 0 0 1 -1 0 Z M 39 23 l 1 0 0 1 -1 0 Z  M 41 23 l 1 0 0 1 -1 0 Z M 42 23 l 1 0 0 1 -1 0 Z M 43 23 l 1 0 0 1 -1 0 Z  M 45 23 l 1 0 0 1 -1 0 Z M 46 23 l 1 0 0 1 -1 0 Z M 47 23 l 1 0 0 1 -1 0 Z M 48 23 l 1 0 0 1 -1 0 Z M 0 24 l 1 0 0 1 -1 0 Z M 1 24 l 1 0 0 1 -1 0 Z M 2 24 l 1 0 0 1 -1 0 Z   M 5 24 l 1 0 0 1 -1 0 Z  M 7 24 l 1 0 0 1 -1 0 Z  M 9 24 l 1 0 0 1 -1 0 Z       M 16 24 l 1 0 0 1 -1 0 Z    M 20 24 l 1 0 0 1 -1 0 Z M 21 24 l 1 0 0 1 -1 0 Z  M 23 24 l 1 0 0 1 -1 0 Z  M 25 24 l 1 0 0 1 -1 0 Z  M 27 24 l 1 0 0 1 -1 0 Z  M 29 24 l 1 0 0 1 -1 0 Z  M 31 24 l 1 0 0 1 -1 0 Z          M 41 24 l 1 0 0 1 -1 0 Z  M 43 24 l 1 0 0 1 -1 0 Z   M 46 24 l 1 0 0 1 -1 0 Z   M 0 25 l 1 0 0 1 -1 0 Z M 1 25 l 1 0 0 1 -1 0 Z  M 3 25 l 1 0 0 1 -1 0 Z  M 5 25 l 1 0 0 1 -1 0 Z M 6 25 l 1 0 0 1 -1 0 Z M 7 25 l 1 0 0 1 -1 0 Z   M 10 25 l 1 0 0 1 -1 0 Z  M 12 25 l 1 0 0 1 -1 0 Z M 13 25 l 1 0 0 1 -1 0 Z M 14 25 l 1 0 0 1 -1 0 Z   M 17 25 l 1 0 0 1 -1 0 Z M 18 25 l 1 0 0 1 -1 0 Z M 19 25 l 1 0 0 1 -1 0 Z M 20 25 l 1 0 0 1 -1 0 Z   M 23 25 l 1 0 0 1 -1 0 Z M 24 25 l 1 0 0 1 -1 0 Z M 25 25 l 1 0 0 1 -1 0 Z   M 28 25 l 1 0 0 1 -1 0 Z M 29 25 l 1 0 0 1 -1 0 Z M 30 25 l 1 0 0 1 -1 0 Z        M 38 25 l 1 0 0 1 -1 0 Z M 39 25 l 1 0 0 1 -1 0 Z  M 41 25 l 1 0 0 1 -1 0 Z M 42 25 l 1 0 0 1 -1 0 Z M 43 25 l 1 0 0 1 -1 0 Z   M 46 25 l 1 0 0 1 -1 0 Z M 47 25 l 1 0 0 1 -1 0 Z    M 2 26 l 1 0 0 1 -1 0 Z        M 10 26 l 1 0 0 1 -1 0 Z  M 12 26 l 1 0 0 1 -1 0 Z M 13 26 l 1 0 0 1 -1 0 Z M 14 26 l 1 0 0 1 -1 0 Z M 15 26 l 1 0 0 1 -1 0 Z     M 20 26 l 1 0 0 1 -1 0 Z       M 27 26 l 1 0 0 1 -1 0 Z   M 30 26 l 1 0 0 1 -1 0 Z M 31 26 l 1 0 0 1 -1 0 Z M 32 26 l 1 0 0 1 -1 0 Z  M 34 26 l 1 0 0 1 -1 0 Z M 35 26 l 1 0 0 1 -1 0 Z  M 37 26 l 1 0 0 1 -1 0 Z        M 45 26 l 1 0 0 1 -1 0 Z M 46 26 l 1 0 0 1 -1 0 Z       M 4 27 l 1 0 0 1 -1 0 Z  M 6 27 l 1 0 0 1 -1 0 Z M 7 27 l 1 0 0 1 -1 0 Z   M 10 27 l 1 0 0 1 -1 0 Z   M 13 27 l 1 0 0 1 -1 0 Z M 14 27 l 1 0 0 1 -1 0 Z M 15 27 l 1 0 0 1 -1 0 Z  M 17 27 l 1 0 0 1 -1 0 Z M 18 27 l 1 0 0 1 -1 0 Z M 19 27 l 1 0 0 1 -1 0 Z M 20 27 l 1 0 0 1 -1 0 Z M 21 27 l 1 0 0 1 -1 0 Z  M 23 27 l 1 0 0 1 -1 0 Z           M 34 27 l 1 0 0 1 -1 0 Z   M 37 27 l 1 0 0 1 -1 0 Z  M 39 27 l 1 0 0 1 -1 0 Z M 40 27 l 1 0 0 1 -1 0 Z M 41 27 l 1 0 0 1 -1 0 Z   M 44 27 l 1 0 0 1 -1 0 Z  M 46 27 l 1 0 0 1 -1 0 Z   M 0 28 l 1 0 0 1 -1 0 Z M 1 28 l 1 0 0 1 -1 0 Z  M 3 28 l 1 0 0 1 -1 0 Z M 4 28 l 1 0 0 1 -1 0 Z   M 7 28 l 1 0 0 1 -1 0 Z M 8 28 l 1 0 0 1 -1 0 Z M 9 28 l 1 0 0 1 -1 0 Z M 10 28 l 1 0 0 1 -1 0 Z M 11 28 l 1 0 0 1 -1 0 Z M 12 28 l 1 0 0 1 -1 0 Z   M 15 28 l 1 0 0 1 -1 0 Z M 16 28 l 1 0 0 1 -1 0 Z M 17 28 l 1 0 0 1 -1 0 Z    M 21 28 l 1 0 0 1 -1 0 Z   M 24 28 l 1 0 0 1 -1 0 Z    M 28 28 l 1 0 0 1 -1 0 Z M 29 28 l 1 0 0 1 -1 0 Z M 30 28 l 1 0 0 1 -1 0 Z        M 38 28 l 1 0 0 1 -1 0 Z M 39 28 l 1 0 0 1 -1 0 Z   M 42 28 l 1 0 0 1 -1 0 Z M 43 28 l 1 0 0 1 -1 0 Z  M 45 28 l 1 0 0 1 -1 0 Z      M 2 29 l 1 0 0 1 -1 0 Z   M 5 29 l 1 0 0 1 -1 0 Z M 6 29 l 1 0 0 1 -1 0 Z    M 10 29 l 1 0 0 1 -1 0 Z M 11 29 l 1 0 0 1 -1 0 Z M 12 29 l 1 0 0 1 -1 0 Z M 13 29 l 1 0 0 1 -1 0 Z  M 15 29 l 1 0 0 1 -1 0 Z   M 18 29 l 1 0 0 1 -1 0 Z M 19 29 l 1 0 0 1 -1 0 Z M 20 29 l 1 0 0 1 -1 0 Z   M 23 29 l 1 0 0 1 -1 0 Z M 24 29 l 1 0 0 1 -1 0 Z      M 30 29 l 1 0 0 1 -1 0 Z   M 33 29 l 1 0 0 1 -1 0 Z M 34 29 l 1 0 0 1 -1 0 Z M 35 29 l 1 0 0 1 -1 0 Z M 36 29 l 1 0 0 1 -1 0 Z M 37 29 l 1 0 0 1 -1 0 Z   M 40 29 l 1 0 0 1 -1 0 Z  M 42 29 l 1 0 0 1 -1 0 Z M 43 29 l 1 0 0 1 -1 0 Z   M 46 29 l 1 0 0 1 -1 0 Z   M 0 30 l 1 0 0 1 -1 0 Z M 1 30 l 1 0 0 1 -1 0 Z M 2 30 l 1 0 0 1 -1 0 Z M 3 30 l 1 0 0 1 -1 0 Z        M 11 30 l 1 0 0 1 -1 0 Z M 12 30 l 1 0 0 1 -1 0 Z  M 14 30 l 1 0 0 1 -1 0 Z M 15 30 l 1 0 0 1 -1 0 Z M 16 30 l 1 0 0 1 -1 0 Z   M 19 30 l 1 0 0 1 -1 0 Z M 20 30 l 1 0 0 1 -1 0 Z   M 23 30 l 1 0 0 1 -1 0 Z    M 27 30 l 1 0 0 1 -1 0 Z M 28 30 l 1 0 0 1 -1 0 Z M 29 30 l 1 0 0 1 -1 0 Z M 30 30 l 1 0 0 1 -1 0 Z M 31 30 l 1 0 0 1 -1 0 Z  M 33 30 l 1 0 0 1 -1 0 Z M 34 30 l 1 0 0 1 -1 0 Z  M 36 30 l 1 0 0 1 -1 0 Z M 37 30 l 1 0 0 1 -1 0 Z M 38 30 l 1 0 0 1 -1 0 Z     M 43 30 l 1 0 0 1 -1 0 Z  M 45 30 l 1 0 0 1 -1 0 Z M 46 30 l 1 0 0 1 -1 0 Z   M 0 31 l 1 0 0 1 -1 0 Z   M 3 31 l 1 0 0 1 -1 0 Z M 4 31 l 1 0 0 1 -1 0 Z M 5 31 l 1 0 0 1 -1 0 Z M 6 31 l 1 0 0 1 -1 0 Z M 7 31 l 1 0 0 1 -1 0 Z  M 9 31 l 1 0 0 1 -1 0 Z   M 12 31 l 1 0 0 1 -1 0 Z  M 14 31 l 1 0 0 1 -1 0 Z M 15 31 l 1 0 0 1 -1 0 Z M 16 31 l 1 0 0 1 -1 0 Z            M 28 31 l 1 0 0 1 -1 0 Z M 29 31 l 1 0 0 1 -1 0 Z M 30 31 l 1 0 0 1 -1 0 Z   M 33 31 l 1 0 0 1 -1 0 Z      M 39 31 l 1 0 0 1 -1 0 Z M 40 31 l 1 0 0 1 -1 0 Z   M 43 31 l 1 0 0 1 -1 0 Z  M 45 31 l 1 0 0 1 -1 0 Z   M 48 31 l 1 0 0 1 -1 0 Z M 0 32 l 1 0 0 1 -1 0 Z M 1 32 l 1 0 0 1 -1 0 Z  M 3 32 l 1 0 0 1 -1 0 Z       M 10 32 l 1 0 0 1 -1 0 Z  M 12 32 l 1 0 0 1 -1 0 Z M 13 32 l 1 0 0 1 -1 0 Z M 14 32 l 1 0 0 1 -1 0 Z M 15 32 l 1 0 0 1 -1 0 Z M 16 32 l 1 0 0 1 -1 0 Z M 17 32 l 1 0 0 1 -1 0 Z  M 19 32 l 1 0 0 1 -1 0 Z M 20 32 l 1 0 0 1 -1 0 Z M 21 32 l 1 0 0 1 -1 0 Z M 22 32 l 1 0 0 1 -1 0 Z  M 24 32 l 1 0 0 1 -1 0 Z       M 31 32 l 1 0 0 1 -1 0 Z M 32 32 l 1 0 0 1 -1 0 Z M 33 32 l 1 0 0 1 -1 0 Z M 34 32 l 1 0 0 1 -1 0 Z    M 38 32 l 1 0 0 1 -1 0 Z M 39 32 l 1 0 0 1 -1 0 Z      M 45 32 l 1 0 0 1 -1 0 Z M 46 32 l 1 0 0 1 -1 0 Z  M 48 32 l 1 0 0 1 -1 0 Z M 0 33 l 1 0 0 1 -1 0 Z  M 2 33 l 1 0 0 1 -1 0 Z  M 4 33 l 1 0 0 1 -1 0 Z M 5 33 l 1 0 0 1 -1 0 Z M 6 33 l 1 0 0 1 -1 0 Z M 7 33 l 1 0 0 1 -1 0 Z  M 9 33 l 1 0 0 1 -1 0 Z M 10 33 l 1 0 0 1 -1 0 Z  M 12 33 l 1 0 0 1 -1 0 Z M 13 33 l 1 0 0 1 -1 0 Z  M 15 33 l 1 0 0 1 -1 0 Z M 16 33 l 1 0 0 1 -1 0 Z M 17 33 l 1 0 0 1 -1 0 Z  M 19 33 l 1 0 0 1 -1 0 Z M 20 33 l 1 0 0 1 -1 0 Z   M 23 33 l 1 0 0 1 -1 0 Z M 24 33 l 1 0 0 1 -1 0 Z M 25 33 l 1 0 0 1 -1 0 Z M 26 33 l 1 0 0 1 -1 0 Z  M 28 33 l 1 0 0 1 -1 0 Z  M 30 33 l 1 0 0 1 -1 0 Z M 31 33 l 1 0 0 1 -1 0 Z   M 34 33 l 1 0 0 1 -1 0 Z M 35 33 l 1 0 0 1 -1 0 Z M 36 33 l 1 0 0 1 -1 0 Z M 37 33 l 1 0 0 1 -1 0 Z M 38 33 l 1 0 0 1 -1 0 Z   M 41 33 l 1 0 0 1 -1 0 Z  M 43 33 l 1 0 0 1 -1 0 Z M 44 33 l 1 0 0 1 -1 0 Z M 45 33 l 1 0 0 1 -1 0 Z      M 2 34 l 1 0 0 1 -1 0 Z M 3 34 l 1 0 0 1 -1 0 Z M 4 34 l 1 0 0 1 -1 0 Z     M 9 34 l 1 0 0 1 -1 0 Z    M 13 34 l 1 0 0 1 -1 0 Z M 14 34 l 1 0 0 1 -1 0 Z M 15 34 l 1 0 0 1 -1 0 Z   M 18 34 l 1 0 0 1 -1 0 Z    M 22 34 l 1 0 0 1 -1 0 Z M 23 34 l 1 0 0 1 -1 0 Z     M 28 34 l 1 0 0 1 -1 0 Z M 29 34 l 1 0 0 1 -1 0 Z M 30 34 l 1 0 0 1 -1 0 Z M 31 34 l 1 0 0 1 -1 0 Z    M 35 34 l 1 0 0 1 -1 0 Z   M 38 34 l 1 0 0 1 -1 0 Z M 39 34 l 1 0 0 1 -1 0 Z    M 43 34 l 1 0 0 1 -1 0 Z      M 0 35 l 1 0 0 1 -1 0 Z M 1 35 l 1 0 0 1 -1 0 Z    M 5 35 l 1 0 0 1 -1 0 Z M 6 35 l 1 0 0 1 -1 0 Z M 7 35 l 1 0 0 1 -1 0 Z M 8 35 l 1 0 0 1 -1 0 Z   M 11 35 l 1 0 0 1 -1 0 Z M 12 35 l 1 0 0 1 -1 0 Z  M 14 35 l 1 0 0 1 -1 0 Z  M 16 35 l 1 0 0 1 -1 0 Z M 17 35 l 1 0 0 1 -1 0 Z    M 21 35 l 1 0 0 1 -1 0 Z  M 23 35 l 1 0 0 1 -1 0 Z M 24 35 l 1 0 0 1 -1 0 Z M 25 35 l 1 0 0 1 -1 0 Z M 26 35 l 1 0 0 1 -1 0 Z   M 29 35 l 1 0 0 1 -1 0 Z  M 31 35 l 1 0 0 1 -1 0 Z M 32 35 l 1 0 0 1 -1 0 Z M 33 35 l 1 0 0 1 -1 0 Z  M 35 35 l 1 0 0 1 -1 0 Z  M 37 35 l 1 0 0 1 -1 0 Z  M 39 35 l 1 0 0 1 -1 0 Z  M 41 35 l 1 0 0 1 -1 0 Z   M 44 35 l 1 0 0 1 -1 0 Z  M 46 35 l 1 0 0 1 -1 0 Z M 47 35 l 1 0 0 1 -1 0 Z M 48 35 l 1 0 0 1 -1 0 Z M 0 36 l 1 0 0 1 -1 0 Z  M 2 36 l 1 0 0 1 -1 0 Z M 3 36 l 1 0 0 1 -1 0 Z  M 5 36 l 1 0 0 1 -1 0 Z    M 9 36 l 1 0 0 1 -1 0 Z     M 14 36 l 1 0 0 1 -1 0 Z    M 18 36 l 1 0 0 1 -1 0 Z M 19 36 l 1 0 0 1 -1 0 Z   M 22 36 l 1 0 0 1 -1 0 Z  M 24 36 l 1 0 0 1 -1 0 Z M 25 36 l 1 0 0 1 -1 0 Z    M 29 36 l 1 0 0 1 -1 0 Z  M 31 36 l 1 0 0 1 -1 0 Z   M 34 36 l 1 0 0 1 -1 0 Z    M 38 36 l 1 0 0 1 -1 0 Z M 39 36 l 1 0 0 1 -1 0 Z   M 42 36 l 1 0 0 1 -1 0 Z M 43 36 l 1 0 0 1 -1 0 Z M 44 36 l 1 0 0 1 -1 0 Z M 45 36 l 1 0 0 1 -1 0 Z M 46 36 l 1 0 0 1 -1 0 Z  M 48 36 l 1 0 0 1 -1 0 Z  M 1 37 l 1 0 0 1 -1 0 Z  M 3 37 l 1 0 0 1 -1 0 Z M 4 37 l 1 0 0 1 -1 0 Z M 5 37 l 1 0 0 1 -1 0 Z M 6 37 l 1 0 0 1 -1 0 Z  M 8 37 l 1 0 0 1 -1 0 Z    M 12 37 l 1 0 0 1 -1 0 Z M 13 37 l 1 0 0 1 -1 0 Z M 14 37 l 1 0 0 1 -1 0 Z    M 18 37 l 1 0 0 1 -1 0 Z M 19 37 l 1 0 0 1 -1 0 Z M 20 37 l 1 0 0 1 -1 0 Z  M 22 37 l 1 0 0 1 -1 0 Z  M 24 37 l 1 0 0 1 -1 0 Z M 25 37 l 1 0 0 1 -1 0 Z M 26 37 l 1 0 0 1 -1 0 Z M 27 37 l 1 0 0 1 -1 0 Z M 28 37 l 1 0 0 1 -1 0 Z M 29 37 l 1 0 0 1 -1 0 Z M 30 37 l 1 0 0 1 -1 0 Z M 31 37 l 1 0 0 1 -1 0 Z  M 33 37 l 1 0 0 1 -1 0 Z  M 35 37 l 1 0 0 1 -1 0 Z   M 38 37 l 1 0 0 1 -1 0 Z M 39 37 l 1 0 0 1 -1 0 Z  M 41 37 l 1 0 0 1 -1 0 Z M 42 37 l 1 0 0 1 -1 0 Z  M 44 37 l 1 0 0 1 -1 0 Z M 45 37 l 1 0 0 1 -1 0 Z M 46 37 l 1 0 0 1 -1 0 Z   M 0 38 l 1 0 0 1 -1 0 Z  M 2 38 l 1 0 0 1 -1 0 Z M 3 38 l 1 0 0 1 -1 0 Z M 4 38 l 1 0 0 1 -1 0 Z       M 11 38 l 1 0 0 1 -1 0 Z  M 13 38 l 1 0 0 1 -1 0 Z M 14 38 l 1 0 0 1 -1 0 Z    M 18 38 l 1 0 0 1 -1 0 Z  M 20 38 l 1 0 0 1 -1 0 Z  M 22 38 l 1 0 0 1 -1 0 Z M 23 38 l 1 0 0 1 -1 0 Z   M 26 38 l 1 0 0 1 -1 0 Z  M 28 38 l 1 0 0 1 -1 0 Z M 29 38 l 1 0 0 1 -1 0 Z M 30 38 l 1 0 0 1 -1 0 Z  M 32 38 l 1 0 0 1 -1 0 Z M 33 38 l 1 0 0 1 -1 0 Z M 34 38 l 1 0 0 1 -1 0 Z M 35 38 l 1 0 0 1 -1 0 Z  M 37 38 l 1 0 0 1 -1 0 Z  M 39 38 l 1 0 0 1 -1 0 Z M 40 38 l 1 0 0 1 -1 0 Z M 41 38 l 1 0 0 1 -1 0 Z  M 43 38 l 1 0 0 1 -1 0 Z   M 46 38 l 1 0 0 1 -1 0 Z M 47 38 l 1 0 0 1 -1 0 Z  M 0 39 l 1 0 0 1 -1 0 Z    M 4 39 l 1 0 0 1 -1 0 Z M 5 39 l 1 0 0 1 -1 0 Z M 6 39 l 1 0 0 1 -1 0 Z  M 8 39 l 1 0 0 1 -1 0 Z M 9 39 l 1 0 0 1 -1 0 Z   M 12 39 l 1 0 0 1 -1 0 Z M 13 39 l 1 0 0 1 -1 0 Z M 14 39 l 1 0 0 1 -1 0 Z  M 16 39 l 1 0 0 1 -1 0 Z  M 18 39 l 1 0 0 1 -1 0 Z  M 20 39 l 1 0 0 1 -1 0 Z  M 22 39 l 1 0 0 1 -1 0 Z M 23 39 l 1 0 0 1 -1 0 Z M 24 39 l 1 0 0 1 -1 0 Z M 25 39 l 1 0 0 1 -1 0 Z  M 27 39 l 1 0 0 1 -1 0 Z  M 29 39 l 1 0 0 1 -1 0 Z  M 31 39 l 1 0 0 1 -1 0 Z      M 37 39 l 1 0 0 1 -1 0 Z M 38 39 l 1 0 0 1 -1 0 Z M 39 39 l 1 0 0 1 -1 0 Z      M 45 39 l 1 0 0 1 -1 0 Z M 46 39 l 1 0 0 1 -1 0 Z  M 48 39 l 1 0 0 1 -1 0 Z    M 3 40 l 1 0 0 1 -1 0 Z M 4 40 l 1 0 0 1 -1 0 Z M 5 40 l 1 0 0 1 -1 0 Z  M 7 40 l 1 0 0 1 -1 0 Z    M 11 40 l 1 0 0 1 -1 0 Z  M 13 40 l 1 0 0 1 -1 0 Z   M 16 40 l 1 0 0 1 -1 0 Z   M 19 40 l 1 0 0 1 -1 0 Z M 20 40 l 1 0 0 1 -1 0 Z       M 27 40 l 1 0 0 1 -1 0 Z M 28 40 l 1 0 0 1 -1 0 Z      M 34 40 l 1 0 0 1 -1 0 Z   M 37 40 l 1 0 0 1 -1 0 Z  M 39 40 l 1 0 0 1 -1 0 Z      M 45 40 l 1 0 0 1 -1 0 Z  M 47 40 l 1 0 0 1 -1 0 Z M 48 40 l 1 0 0 1 -1 0 Z M 0 41 l 1 0 0 1 -1 0 Z M 1 41 l 1 0 0 1 -1 0 Z M 2 41 l 1 0 0 1 -1 0 Z M 3 41 l 1 0 0 1 -1 0 Z M 4 41 l 1 0 0 1 -1 0 Z M 5 41 l 1 0 0 1 -1 0 Z M 6 41 l 1 0 0 1 -1 0 Z M 7 41 l 1 0 0 1 -1 0 Z   M 10 41 l 1 0 0 1 -1 0 Z  M 12 41 l 1 0 0 1 -1 0 Z  M 14 41 l 1 0 0 1 -1 0 Z M 15 41 l 1 0 0 1 -1 0 Z M 16 41 l 1 0 0 1 -1 0 Z M 17 41 l 1 0 0 1 -1 0 Z    M 21 41 l 1 0 0 1 -1 0 Z  M 23 41 l 1 0 0 1 -1 0 Z M 24 41 l 1 0 0 1 -1 0 Z M 25 41 l 1 0 0 1 -1 0 Z  M 27 41 l 1 0 0 1 -1 0 Z M 28 41 l 1 0 0 1 -1 0 Z M 29 41 l 1 0 0 1 -1 0 Z M 30 41 l 1 0 0 1 -1 0 Z M 31 41 l 1 0 0 1 -1 0 Z M 32 41 l 1 0 0 1 -1 0 Z  M 34 41 l 1 0 0 1 -1 0 Z  M 36 41 l 1 0 0 1 -1 0 Z M 37 41 l 1 0 0 1 -1 0 Z  M 39 41 l 1 0 0 1 -1 0 Z  M 41 41 l 1 0 0 1 -1 0 Z M 42 41 l 1 0 0 1 -1 0 Z M 43 41 l 1 0 0 1 -1 0 Z  M 45 41 l 1 0 0 1 -1 0 Z  M 47 41 l 1 0 0 1 -1 0 Z M 48 41 l 1 0 0 1 -1 0 Z        M 7 42 l 1 0 0 1 -1 0 Z  M 9 42 l 1 0 0 1 -1 0 Z  M 11 42 l 1 0 0 1 -1 0 Z M 12 42 l 1 0 0 1 -1 0 Z M 13 42 l 1 0 0 1 -1 0 Z   M 16 42 l 1 0 0 1 -1 0 Z M 17 42 l 1 0 0 1 -1 0 Z   M 20 42 l 1 0 0 1 -1 0 Z   M 23 42 l 1 0 0 1 -1 0 Z  M 25 42 l 1 0 0 1 -1 0 Z  M 27 42 l 1 0 0 1 -1 0 Z   M 30 42 l 1 0 0 1 -1 0 Z M 31 42 l 1 0 0 1 -1 0 Z   M 34 42 l 1 0 0 1 -1 0 Z M 35 42 l 1 0 0 1 -1 0 Z M 36 42 l 1 0 0 1 -1 0 Z M 37 42 l 1 0 0 1 -1 0 Z M 38 42 l 1 0 0 1 -1 0 Z   M 41 42 l 1 0 0 1 -1 0 Z  M 43 42 l 1 0 0 1 -1 0 Z   M 46 42 l 1 0 0 1 -1 0 Z    M 1 43 l 1 0 0 1 -1 0 Z M 2 43 l 1 0 0 1 -1 0 Z M 3 43 l 1 0 0 1 -1 0 Z M 4 43 l 1 0 0 1 -1 0 Z M 5 43 l 1 0 0 1 -1 0 Z  M 7 43 l 1 0 0 1 -1 0 Z M 8 43 l 1 0 0 1 -1 0 Z M 9 43 l 1 0 0 1 -1 0 Z M 10 43 l 1 0 0 1 -1 0 Z  M 12 43 l 1 0 0 1 -1 0 Z  M 14 43 l 1 0 0 1 -1 0 Z   M 17 43 l 1 0 0 1 -1 0 Z M 18 43 l 1 0 0 1 -1 0 Z     M 23 43 l 1 0 0 1 -1 0 Z M 24 43 l 1 0 0 1 -1 0 Z M 25 43 l 1 0 0 1 -1 0 Z   M 28 43 l 1 0 0 1 -1 0 Z  M 30 43 l 1 0 0 1 -1 0 Z   M 33 43 l 1 0 0 1 -1 0 Z M 34 43 l 1 0 0 1 -1 0 Z       M 41 43 l 1 0 0 1 -1 0 Z M 42 43 l 1 0 0 1 -1 0 Z M 43 43 l 1 0 0 1 -1 0 Z  M 45 43 l 1 0 0 1 -1 0 Z  M 47 43 l 1 0 0 1 -1 0 Z M 48 43 l 1 0 0 1 -1 0 Z  M 1 44 l 1 0 0 1 -1 0 Z    M 5 44 l 1 0 0 1 -1 0 Z  M 7 44 l 1 0 0 1 -1 0 Z M 8 44 l 1 0 0 1 -1 0 Z  M 10 44 l 1 0 0 1 -1 0 Z   M 13 44 l 1 0 0 1 -1 0 Z M 14 44 l 1 0 0 1 -1 0 Z M 15 44 l 1 0 0 1 -1 0 Z    M 19 44 l 1 0 0 1 -1 0 Z  M 21 44 l 1 0 0 1 -1 0 Z           M 32 44 l 1 0 0 1 -1 0 Z   M 35 44 l 1 0 0 1 -1 0 Z    M 39 44 l 1 0 0 1 -1 0 Z      M 45 44 l 1 0 0 1 -1 0 Z M 46 44 l 1 0 0 1 -1 0 Z    M 1 45 l 1 0 0 1 -1 0 Z    M 5 45 l 1 0 0 1 -1 0 Z  M 7 45 l 1 0 0 1 -1 0 Z    M 11 45 l 1 0 0 1 -1 0 Z  M 13 45 l 1 0 0 1 -1 0 Z M 14 45 l 1 0 0 1 -1 0 Z M 15 45 l 1 0 0 1 -1 0 Z  M 17 45 l 1 0 0 1 -1 0 Z M 18 45 l 1 0 0 1 -1 0 Z M 19 45 l 1 0 0 1 -1 0 Z M 20 45 l 1 0 0 1 -1 0 Z M 21 45 l 1 0 0 1 -1 0 Z  M 23 45 l 1 0 0 1 -1 0 Z   M 26 45 l 1 0 0 1 -1 0 Z   M 29 45 l 1 0 0 1 -1 0 Z M 30 45 l 1 0 0 1 -1 0 Z M 31 45 l 1 0 0 1 -1 0 Z   M 34 45 l 1 0 0 1 -1 0 Z M 35 45 l 1 0 0 1 -1 0 Z  M 37 45 l 1 0 0 1 -1 0 Z M 38 45 l 1 0 0 1 -1 0 Z M 39 45 l 1 0 0 1 -1 0 Z  M 41 45 l 1 0 0 1 -1 0 Z M 42 45 l 1 0 0 1 -1 0 Z   M 45 45 l 1 0 0 1 -1 0 Z     M 1 46 l 1 0 0 1 -1 0 Z    M 5 46 l 1 0 0 1 -1 0 Z  M 7 46 l 1 0 0 1 -1 0 Z M 8 46 l 1 0 0 1 -1 0 Z M 9 46 l 1 0 0 1 -1 0 Z M 10 46 l 1 0 0 1 -1 0 Z M 11 46 l 1 0 0 1 -1 0 Z M 12 46 l 1 0 0 1 -1 0 Z M 13 46 l 1 0 0 1 -1 0 Z  M 15 46 l 1 0 0 1 -1 0 Z     M 20 46 l 1 0 0 1 -1 0 Z     M 25 46 l 1 0 0 1 -1 0 Z  M 27 46 l 1 0 0 1 -1 0 Z M 28 46 l 1 0 0 1 -1 0 Z  M 30 46 l 1 0 0 1 -1 0 Z M 31 46 l 1 0 0 1 -1 0 Z M 32 46 l 1 0 0 1 -1 0 Z M 33 46 l 1 0 0 1 -1 0 Z   M 36 46 l 1 0 0 1 -1 0 Z  M 38 46 l 1 0 0 1 -1 0 Z  M 40 46 l 1 0 0 1 -1 0 Z   M 43 46 l 1 0 0 1 -1 0 Z    M 47 46 l 1 0 0 1 -1 0 Z M 48 46 l 1 0 0 1 -1 0 Z  M 1 47 l 1 0 0 1 -1 0 Z M 2 47 l 1 0 0 1 -1 0 Z M 3 47 l 1 0 0 1 -1 0 Z M 4 47 l 1 0 0 1 -1 0 Z M 5 47 l 1 0 0 1 -1 0 Z  M 7 47 l 1 0 0 1 -1 0 Z   M 10 47 l 1 0 0 1 -1 0 Z   M 13 47 l 1 0 0 1 -1 0 Z M 14 47 l 1 0 0 1 -1 0 Z M 15 47 l 1 0 0 1 -1 0 Z  M 17 47 l 1 0 0 1 -1 0 Z M 18 47 l 1 0 0 1 -1 0 Z   M 21 47 l 1 0 0 1 -1 0 Z    M 25 47 l 1 0 0 1 -1 0 Z     M 30 47 l 1 0 0 1 -1 0 Z M 31 47 l 1 0 0 1 -1 0 Z M 32 47 l 1 0 0 1 -1 0 Z M 33 47 l 1 0 0 1 -1 0 Z M 34 47 l 1 0 0 1 -1 0 Z M 35 47 l 1 0 0 1 -1 0 Z  M 37 47 l 1 0 0 1 -1 0 Z  M 39 47 l 1 0 0 1 -1 0 Z M 40 47 l 1 0 0 1 -1 0 Z  M 42 47 l 1 0 0 1 -1 0 Z  M 44 47 l 1 0 0 1 -1 0 Z M 45 47 l 1 0 0 1 -1 0 Z M 46 47 l 1 0 0 1 -1 0 Z M 47 47 l 1 0 0 1 -1 0 Z M 48 47 l 1 0 0 1 -1 0 Z        M 7 48 l 1 0 0 1 -1 0 Z  M 9 48 l 1 0 0 1 -1 0 Z M 10 48 l 1 0 0 1 -1 0 Z  M 12 48 l 1 0 0 1 -1 0 Z    M 16 48 l 1 0 0 1 -1 0 Z   M 19 48 l 1 0 0 1 -1 0 Z M 20 48 l 1 0 0 1 -1 0 Z M 21 48 l 1 0 0 1 -1 0 Z  M 23 48 l 1 0 0 1 -1 0 Z  M 25 48 l 1 0 0 1 -1 0 Z M 26 48 l 1 0 0 1 -1 0 Z   M 29 48 l 1 0 0 1 -1 0 Z  M 31 48 l 1 0 0 1 -1 0 Z  M 33 48 l 1 0 0 1 -1 0 Z    M 37 48 l 1 0 0 1 -1 0 Z  M 39 48 l 1 0 0 1 -1 0 Z   M 42 48 l 1 0 0 1 -1 0 Z   M 45 48 l 1 0 0 1 -1 0 Z M 46 48 l 1 0 0 1 -1 0 Z  "
                              fill="#FFFFFF"></path>
                          <path
                              d="M 0 0 l 1 0 0 1 -1 0 Z M 1 0 l 1 0 0 1 -1 0 Z M 2 0 l 1 0 0 1 -1 0 Z M 3 0 l 1 0 0 1 -1 0 Z M 4 0 l 1 0 0 1 -1 0 Z M 5 0 l 1 0 0 1 -1 0 Z M 6 0 l 1 0 0 1 -1 0 Z    M 10 0 l 1 0 0 1 -1 0 Z  M 12 0 l 1 0 0 1 -1 0 Z  M 14 0 l 1 0 0 1 -1 0 Z M 15 0 l 1 0 0 1 -1 0 Z M 16 0 l 1 0 0 1 -1 0 Z M 17 0 l 1 0 0 1 -1 0 Z   M 20 0 l 1 0 0 1 -1 0 Z M 21 0 l 1 0 0 1 -1 0 Z M 22 0 l 1 0 0 1 -1 0 Z    M 26 0 l 1 0 0 1 -1 0 Z M 27 0 l 1 0 0 1 -1 0 Z M 28 0 l 1 0 0 1 -1 0 Z M 29 0 l 1 0 0 1 -1 0 Z M 30 0 l 1 0 0 1 -1 0 Z M 31 0 l 1 0 0 1 -1 0 Z M 32 0 l 1 0 0 1 -1 0 Z M 33 0 l 1 0 0 1 -1 0 Z M 34 0 l 1 0 0 1 -1 0 Z M 35 0 l 1 0 0 1 -1 0 Z     M 40 0 l 1 0 0 1 -1 0 Z  M 42 0 l 1 0 0 1 -1 0 Z M 43 0 l 1 0 0 1 -1 0 Z M 44 0 l 1 0 0 1 -1 0 Z M 45 0 l 1 0 0 1 -1 0 Z M 46 0 l 1 0 0 1 -1 0 Z M 47 0 l 1 0 0 1 -1 0 Z M 48 0 l 1 0 0 1 -1 0 Z M 0 1 l 1 0 0 1 -1 0 Z      M 6 1 l 1 0 0 1 -1 0 Z  M 8 1 l 1 0 0 1 -1 0 Z   M 11 1 l 1 0 0 1 -1 0 Z  M 13 1 l 1 0 0 1 -1 0 Z M 14 1 l 1 0 0 1 -1 0 Z    M 18 1 l 1 0 0 1 -1 0 Z M 19 1 l 1 0 0 1 -1 0 Z  M 21 1 l 1 0 0 1 -1 0 Z   M 24 1 l 1 0 0 1 -1 0 Z M 25 1 l 1 0 0 1 -1 0 Z M 26 1 l 1 0 0 1 -1 0 Z M 27 1 l 1 0 0 1 -1 0 Z M 28 1 l 1 0 0 1 -1 0 Z M 29 1 l 1 0 0 1 -1 0 Z M 30 1 l 1 0 0 1 -1 0 Z M 31 1 l 1 0 0 1 -1 0 Z M 32 1 l 1 0 0 1 -1 0 Z M 33 1 l 1 0 0 1 -1 0 Z  M 35 1 l 1 0 0 1 -1 0 Z M 36 1 l 1 0 0 1 -1 0 Z M 37 1 l 1 0 0 1 -1 0 Z M 38 1 l 1 0 0 1 -1 0 Z M 39 1 l 1 0 0 1 -1 0 Z M 40 1 l 1 0 0 1 -1 0 Z  M 42 1 l 1 0 0 1 -1 0 Z      M 48 1 l 1 0 0 1 -1 0 Z M 0 2 l 1 0 0 1 -1 0 Z  M 2 2 l 1 0 0 1 -1 0 Z M 3 2 l 1 0 0 1 -1 0 Z M 4 2 l 1 0 0 1 -1 0 Z  M 6 2 l 1 0 0 1 -1 0 Z  M 8 2 l 1 0 0 1 -1 0 Z M 9 2 l 1 0 0 1 -1 0 Z   M 12 2 l 1 0 0 1 -1 0 Z  M 14 2 l 1 0 0 1 -1 0 Z M 15 2 l 1 0 0 1 -1 0 Z M 16 2 l 1 0 0 1 -1 0 Z M 17 2 l 1 0 0 1 -1 0 Z     M 22 2 l 1 0 0 1 -1 0 Z   M 25 2 l 1 0 0 1 -1 0 Z M 26 2 l 1 0 0 1 -1 0 Z   M 29 2 l 1 0 0 1 -1 0 Z M 30 2 l 1 0 0 1 -1 0 Z M 31 2 l 1 0 0 1 -1 0 Z M 32 2 l 1 0 0 1 -1 0 Z   M 35 2 l 1 0 0 1 -1 0 Z    M 39 2 l 1 0 0 1 -1 0 Z M 40 2 l 1 0 0 1 -1 0 Z  M 42 2 l 1 0 0 1 -1 0 Z  M 44 2 l 1 0 0 1 -1 0 Z M 45 2 l 1 0 0 1 -1 0 Z M 46 2 l 1 0 0 1 -1 0 Z  M 48 2 l 1 0 0 1 -1 0 Z M 0 3 l 1 0 0 1 -1 0 Z  M 2 3 l 1 0 0 1 -1 0 Z M 3 3 l 1 0 0 1 -1 0 Z M 4 3 l 1 0 0 1 -1 0 Z  M 6 3 l 1 0 0 1 -1 0 Z   M 9 3 l 1 0 0 1 -1 0 Z     M 14 3 l 1 0 0 1 -1 0 Z    M 18 3 l 1 0 0 1 -1 0 Z   M 21 3 l 1 0 0 1 -1 0 Z  M 23 3 l 1 0 0 1 -1 0 Z  M 25 3 l 1 0 0 1 -1 0 Z M 26 3 l 1 0 0 1 -1 0 Z M 27 3 l 1 0 0 1 -1 0 Z  M 29 3 l 1 0 0 1 -1 0 Z M 30 3 l 1 0 0 1 -1 0 Z         M 39 3 l 1 0 0 1 -1 0 Z   M 42 3 l 1 0 0 1 -1 0 Z  M 44 3 l 1 0 0 1 -1 0 Z M 45 3 l 1 0 0 1 -1 0 Z M 46 3 l 1 0 0 1 -1 0 Z  M 48 3 l 1 0 0 1 -1 0 Z M 0 4 l 1 0 0 1 -1 0 Z  M 2 4 l 1 0 0 1 -1 0 Z M 3 4 l 1 0 0 1 -1 0 Z M 4 4 l 1 0 0 1 -1 0 Z  M 6 4 l 1 0 0 1 -1 0 Z  M 8 4 l 1 0 0 1 -1 0 Z  M 10 4 l 1 0 0 1 -1 0 Z M 11 4 l 1 0 0 1 -1 0 Z M 12 4 l 1 0 0 1 -1 0 Z M 13 4 l 1 0 0 1 -1 0 Z M 14 4 l 1 0 0 1 -1 0 Z    M 18 4 l 1 0 0 1 -1 0 Z M 19 4 l 1 0 0 1 -1 0 Z M 20 4 l 1 0 0 1 -1 0 Z  M 22 4 l 1 0 0 1 -1 0 Z M 23 4 l 1 0 0 1 -1 0 Z M 24 4 l 1 0 0 1 -1 0 Z M 25 4 l 1 0 0 1 -1 0 Z M 26 4 l 1 0 0 1 -1 0 Z   M 29 4 l 1 0 0 1 -1 0 Z M 30 4 l 1 0 0 1 -1 0 Z   M 33 4 l 1 0 0 1 -1 0 Z   M 36 4 l 1 0 0 1 -1 0 Z      M 42 4 l 1 0 0 1 -1 0 Z  M 44 4 l 1 0 0 1 -1 0 Z M 45 4 l 1 0 0 1 -1 0 Z M 46 4 l 1 0 0 1 -1 0 Z  M 48 4 l 1 0 0 1 -1 0 Z M 0 5 l 1 0 0 1 -1 0 Z      M 6 5 l 1 0 0 1 -1 0 Z  M 8 5 l 1 0 0 1 -1 0 Z   M 11 5 l 1 0 0 1 -1 0 Z  M 13 5 l 1 0 0 1 -1 0 Z    M 17 5 l 1 0 0 1 -1 0 Z   M 20 5 l 1 0 0 1 -1 0 Z M 21 5 l 1 0 0 1 -1 0 Z M 22 5 l 1 0 0 1 -1 0 Z    M 26 5 l 1 0 0 1 -1 0 Z    M 30 5 l 1 0 0 1 -1 0 Z    M 34 5 l 1 0 0 1 -1 0 Z   M 37 5 l 1 0 0 1 -1 0 Z M 38 5 l 1 0 0 1 -1 0 Z    M 42 5 l 1 0 0 1 -1 0 Z      M 48 5 l 1 0 0 1 -1 0 Z M 0 6 l 1 0 0 1 -1 0 Z M 1 6 l 1 0 0 1 -1 0 Z M 2 6 l 1 0 0 1 -1 0 Z M 3 6 l 1 0 0 1 -1 0 Z M 4 6 l 1 0 0 1 -1 0 Z M 5 6 l 1 0 0 1 -1 0 Z M 6 6 l 1 0 0 1 -1 0 Z  M 8 6 l 1 0 0 1 -1 0 Z  M 10 6 l 1 0 0 1 -1 0 Z  M 12 6 l 1 0 0 1 -1 0 Z  M 14 6 l 1 0 0 1 -1 0 Z  M 16 6 l 1 0 0 1 -1 0 Z  M 18 6 l 1 0 0 1 -1 0 Z  M 20 6 l 1 0 0 1 -1 0 Z  M 22 6 l 1 0 0 1 -1 0 Z  M 24 6 l 1 0 0 1 -1 0 Z  M 26 6 l 1 0 0 1 -1 0 Z  M 28 6 l 1 0 0 1 -1 0 Z  M 30 6 l 1 0 0 1 -1 0 Z  M 32 6 l 1 0 0 1 -1 0 Z  M 34 6 l 1 0 0 1 -1 0 Z  M 36 6 l 1 0 0 1 -1 0 Z  M 38 6 l 1 0 0 1 -1 0 Z  M 40 6 l 1 0 0 1 -1 0 Z  M 42 6 l 1 0 0 1 -1 0 Z M 43 6 l 1 0 0 1 -1 0 Z M 44 6 l 1 0 0 1 -1 0 Z M 45 6 l 1 0 0 1 -1 0 Z M 46 6 l 1 0 0 1 -1 0 Z M 47 6 l 1 0 0 1 -1 0 Z M 48 6 l 1 0 0 1 -1 0 Z         M 8 7 l 1 0 0 1 -1 0 Z    M 12 7 l 1 0 0 1 -1 0 Z  M 14 7 l 1 0 0 1 -1 0 Z M 15 7 l 1 0 0 1 -1 0 Z M 16 7 l 1 0 0 1 -1 0 Z  M 18 7 l 1 0 0 1 -1 0 Z    M 22 7 l 1 0 0 1 -1 0 Z    M 26 7 l 1 0 0 1 -1 0 Z M 27 7 l 1 0 0 1 -1 0 Z     M 32 7 l 1 0 0 1 -1 0 Z  M 34 7 l 1 0 0 1 -1 0 Z M 35 7 l 1 0 0 1 -1 0 Z M 36 7 l 1 0 0 1 -1 0 Z M 37 7 l 1 0 0 1 -1 0 Z M 38 7 l 1 0 0 1 -1 0 Z M 39 7 l 1 0 0 1 -1 0 Z M 40 7 l 1 0 0 1 -1 0 Z         M 0 8 l 1 0 0 1 -1 0 Z M 1 8 l 1 0 0 1 -1 0 Z  M 3 8 l 1 0 0 1 -1 0 Z   M 6 8 l 1 0 0 1 -1 0 Z M 7 8 l 1 0 0 1 -1 0 Z    M 11 8 l 1 0 0 1 -1 0 Z M 12 8 l 1 0 0 1 -1 0 Z    M 16 8 l 1 0 0 1 -1 0 Z  M 18 8 l 1 0 0 1 -1 0 Z  M 20 8 l 1 0 0 1 -1 0 Z M 21 8 l 1 0 0 1 -1 0 Z M 22 8 l 1 0 0 1 -1 0 Z M 23 8 l 1 0 0 1 -1 0 Z M 24 8 l 1 0 0 1 -1 0 Z M 25 8 l 1 0 0 1 -1 0 Z M 26 8 l 1 0 0 1 -1 0 Z M 27 8 l 1 0 0 1 -1 0 Z M 28 8 l 1 0 0 1 -1 0 Z M 29 8 l 1 0 0 1 -1 0 Z    M 33 8 l 1 0 0 1 -1 0 Z M 34 8 l 1 0 0 1 -1 0 Z  M 36 8 l 1 0 0 1 -1 0 Z      M 42 8 l 1 0 0 1 -1 0 Z M 43 8 l 1 0 0 1 -1 0 Z M 44 8 l 1 0 0 1 -1 0 Z  M 46 8 l 1 0 0 1 -1 0 Z M 47 8 l 1 0 0 1 -1 0 Z     M 3 9 l 1 0 0 1 -1 0 Z  M 5 9 l 1 0 0 1 -1 0 Z  M 7 9 l 1 0 0 1 -1 0 Z  M 9 9 l 1 0 0 1 -1 0 Z   M 12 9 l 1 0 0 1 -1 0 Z  M 14 9 l 1 0 0 1 -1 0 Z   M 17 9 l 1 0 0 1 -1 0 Z M 18 9 l 1 0 0 1 -1 0 Z   M 21 9 l 1 0 0 1 -1 0 Z      M 27 9 l 1 0 0 1 -1 0 Z     M 32 9 l 1 0 0 1 -1 0 Z    M 36 9 l 1 0 0 1 -1 0 Z        M 44 9 l 1 0 0 1 -1 0 Z M 45 9 l 1 0 0 1 -1 0 Z   M 48 9 l 1 0 0 1 -1 0 Z M 0 10 l 1 0 0 1 -1 0 Z M 1 10 l 1 0 0 1 -1 0 Z  M 3 10 l 1 0 0 1 -1 0 Z  M 5 10 l 1 0 0 1 -1 0 Z M 6 10 l 1 0 0 1 -1 0 Z   M 9 10 l 1 0 0 1 -1 0 Z M 10 10 l 1 0 0 1 -1 0 Z M 11 10 l 1 0 0 1 -1 0 Z  M 13 10 l 1 0 0 1 -1 0 Z M 14 10 l 1 0 0 1 -1 0 Z M 15 10 l 1 0 0 1 -1 0 Z M 16 10 l 1 0 0 1 -1 0 Z  M 18 10 l 1 0 0 1 -1 0 Z M 19 10 l 1 0 0 1 -1 0 Z M 20 10 l 1 0 0 1 -1 0 Z M 21 10 l 1 0 0 1 -1 0 Z M 22 10 l 1 0 0 1 -1 0 Z   M 25 10 l 1 0 0 1 -1 0 Z   M 28 10 l 1 0 0 1 -1 0 Z   M 31 10 l 1 0 0 1 -1 0 Z M 32 10 l 1 0 0 1 -1 0 Z  M 34 10 l 1 0 0 1 -1 0 Z M 35 10 l 1 0 0 1 -1 0 Z    M 39 10 l 1 0 0 1 -1 0 Z  M 41 10 l 1 0 0 1 -1 0 Z  M 43 10 l 1 0 0 1 -1 0 Z M 44 10 l 1 0 0 1 -1 0 Z    M 48 10 l 1 0 0 1 -1 0 Z M 0 11 l 1 0 0 1 -1 0 Z M 1 11 l 1 0 0 1 -1 0 Z   M 4 11 l 1 0 0 1 -1 0 Z      M 10 11 l 1 0 0 1 -1 0 Z  M 12 11 l 1 0 0 1 -1 0 Z  M 14 11 l 1 0 0 1 -1 0 Z M 15 11 l 1 0 0 1 -1 0 Z  M 17 11 l 1 0 0 1 -1 0 Z   M 20 11 l 1 0 0 1 -1 0 Z    M 24 11 l 1 0 0 1 -1 0 Z M 25 11 l 1 0 0 1 -1 0 Z M 26 11 l 1 0 0 1 -1 0 Z  M 28 11 l 1 0 0 1 -1 0 Z M 29 11 l 1 0 0 1 -1 0 Z M 30 11 l 1 0 0 1 -1 0 Z M 31 11 l 1 0 0 1 -1 0 Z  M 33 11 l 1 0 0 1 -1 0 Z  M 35 11 l 1 0 0 1 -1 0 Z M 36 11 l 1 0 0 1 -1 0 Z  M 38 11 l 1 0 0 1 -1 0 Z M 39 11 l 1 0 0 1 -1 0 Z    M 43 11 l 1 0 0 1 -1 0 Z    M 47 11 l 1 0 0 1 -1 0 Z   M 1 12 l 1 0 0 1 -1 0 Z  M 3 12 l 1 0 0 1 -1 0 Z M 4 12 l 1 0 0 1 -1 0 Z  M 6 12 l 1 0 0 1 -1 0 Z M 7 12 l 1 0 0 1 -1 0 Z M 8 12 l 1 0 0 1 -1 0 Z M 9 12 l 1 0 0 1 -1 0 Z   M 12 12 l 1 0 0 1 -1 0 Z  M 14 12 l 1 0 0 1 -1 0 Z  M 16 12 l 1 0 0 1 -1 0 Z  M 18 12 l 1 0 0 1 -1 0 Z  M 20 12 l 1 0 0 1 -1 0 Z    M 24 12 l 1 0 0 1 -1 0 Z  M 26 12 l 1 0 0 1 -1 0 Z M 27 12 l 1 0 0 1 -1 0 Z M 28 12 l 1 0 0 1 -1 0 Z M 29 12 l 1 0 0 1 -1 0 Z   M 32 12 l 1 0 0 1 -1 0 Z M 33 12 l 1 0 0 1 -1 0 Z  M 35 12 l 1 0 0 1 -1 0 Z M 36 12 l 1 0 0 1 -1 0 Z M 37 12 l 1 0 0 1 -1 0 Z      M 43 12 l 1 0 0 1 -1 0 Z M 44 12 l 1 0 0 1 -1 0 Z M 45 12 l 1 0 0 1 -1 0 Z  M 47 12 l 1 0 0 1 -1 0 Z M 48 12 l 1 0 0 1 -1 0 Z  M 1 13 l 1 0 0 1 -1 0 Z   M 4 13 l 1 0 0 1 -1 0 Z    M 8 13 l 1 0 0 1 -1 0 Z  M 10 13 l 1 0 0 1 -1 0 Z   M 13 13 l 1 0 0 1 -1 0 Z      M 19 13 l 1 0 0 1 -1 0 Z M 20 13 l 1 0 0 1 -1 0 Z M 21 13 l 1 0 0 1 -1 0 Z M 22 13 l 1 0 0 1 -1 0 Z M 23 13 l 1 0 0 1 -1 0 Z  M 25 13 l 1 0 0 1 -1 0 Z       M 32 13 l 1 0 0 1 -1 0 Z M 33 13 l 1 0 0 1 -1 0 Z M 34 13 l 1 0 0 1 -1 0 Z   M 37 13 l 1 0 0 1 -1 0 Z   M 40 13 l 1 0 0 1 -1 0 Z   M 43 13 l 1 0 0 1 -1 0 Z  M 45 13 l 1 0 0 1 -1 0 Z M 46 13 l 1 0 0 1 -1 0 Z  M 48 13 l 1 0 0 1 -1 0 Z M 0 14 l 1 0 0 1 -1 0 Z M 1 14 l 1 0 0 1 -1 0 Z   M 4 14 l 1 0 0 1 -1 0 Z  M 6 14 l 1 0 0 1 -1 0 Z  M 8 14 l 1 0 0 1 -1 0 Z   M 11 14 l 1 0 0 1 -1 0 Z  M 13 14 l 1 0 0 1 -1 0 Z       M 20 14 l 1 0 0 1 -1 0 Z M 21 14 l 1 0 0 1 -1 0 Z M 22 14 l 1 0 0 1 -1 0 Z  M 24 14 l 1 0 0 1 -1 0 Z  M 26 14 l 1 0 0 1 -1 0 Z  M 28 14 l 1 0 0 1 -1 0 Z M 29 14 l 1 0 0 1 -1 0 Z      M 35 14 l 1 0 0 1 -1 0 Z M 36 14 l 1 0 0 1 -1 0 Z  M 38 14 l 1 0 0 1 -1 0 Z   M 41 14 l 1 0 0 1 -1 0 Z  M 43 14 l 1 0 0 1 -1 0 Z     M 48 14 l 1 0 0 1 -1 0 Z M 0 15 l 1 0 0 1 -1 0 Z   M 3 15 l 1 0 0 1 -1 0 Z    M 7 15 l 1 0 0 1 -1 0 Z     M 12 15 l 1 0 0 1 -1 0 Z  M 14 15 l 1 0 0 1 -1 0 Z  M 16 15 l 1 0 0 1 -1 0 Z M 17 15 l 1 0 0 1 -1 0 Z   M 20 15 l 1 0 0 1 -1 0 Z    M 24 15 l 1 0 0 1 -1 0 Z M 25 15 l 1 0 0 1 -1 0 Z   M 28 15 l 1 0 0 1 -1 0 Z   M 31 15 l 1 0 0 1 -1 0 Z M 32 15 l 1 0 0 1 -1 0 Z  M 34 15 l 1 0 0 1 -1 0 Z M 35 15 l 1 0 0 1 -1 0 Z M 36 15 l 1 0 0 1 -1 0 Z   M 39 15 l 1 0 0 1 -1 0 Z     M 44 15 l 1 0 0 1 -1 0 Z   M 47 15 l 1 0 0 1 -1 0 Z  M 0 16 l 1 0 0 1 -1 0 Z M 1 16 l 1 0 0 1 -1 0 Z M 2 16 l 1 0 0 1 -1 0 Z M 3 16 l 1 0 0 1 -1 0 Z   M 6 16 l 1 0 0 1 -1 0 Z   M 9 16 l 1 0 0 1 -1 0 Z  M 11 16 l 1 0 0 1 -1 0 Z M 12 16 l 1 0 0 1 -1 0 Z  M 14 16 l 1 0 0 1 -1 0 Z M 15 16 l 1 0 0 1 -1 0 Z M 16 16 l 1 0 0 1 -1 0 Z M 17 16 l 1 0 0 1 -1 0 Z M 18 16 l 1 0 0 1 -1 0 Z  M 20 16 l 1 0 0 1 -1 0 Z  M 22 16 l 1 0 0 1 -1 0 Z  M 24 16 l 1 0 0 1 -1 0 Z  M 26 16 l 1 0 0 1 -1 0 Z    M 30 16 l 1 0 0 1 -1 0 Z  M 32 16 l 1 0 0 1 -1 0 Z  M 34 16 l 1 0 0 1 -1 0 Z M 35 16 l 1 0 0 1 -1 0 Z M 36 16 l 1 0 0 1 -1 0 Z M 37 16 l 1 0 0 1 -1 0 Z M 38 16 l 1 0 0 1 -1 0 Z  M 40 16 l 1 0 0 1 -1 0 Z M 41 16 l 1 0 0 1 -1 0 Z M 42 16 l 1 0 0 1 -1 0 Z  M 44 16 l 1 0 0 1 -1 0 Z   M 47 16 l 1 0 0 1 -1 0 Z M 48 16 l 1 0 0 1 -1 0 Z  M 1 17 l 1 0 0 1 -1 0 Z  M 3 17 l 1 0 0 1 -1 0 Z M 4 17 l 1 0 0 1 -1 0 Z    M 8 17 l 1 0 0 1 -1 0 Z    M 12 17 l 1 0 0 1 -1 0 Z M 13 17 l 1 0 0 1 -1 0 Z  M 15 17 l 1 0 0 1 -1 0 Z  M 17 17 l 1 0 0 1 -1 0 Z   M 20 17 l 1 0 0 1 -1 0 Z  M 22 17 l 1 0 0 1 -1 0 Z M 23 17 l 1 0 0 1 -1 0 Z M 24 17 l 1 0 0 1 -1 0 Z  M 26 17 l 1 0 0 1 -1 0 Z   M 29 17 l 1 0 0 1 -1 0 Z   M 32 17 l 1 0 0 1 -1 0 Z M 33 17 l 1 0 0 1 -1 0 Z    M 37 17 l 1 0 0 1 -1 0 Z M 38 17 l 1 0 0 1 -1 0 Z   M 41 17 l 1 0 0 1 -1 0 Z    M 45 17 l 1 0 0 1 -1 0 Z   M 48 17 l 1 0 0 1 -1 0 Z  M 1 18 l 1 0 0 1 -1 0 Z M 2 18 l 1 0 0 1 -1 0 Z   M 5 18 l 1 0 0 1 -1 0 Z M 6 18 l 1 0 0 1 -1 0 Z  M 8 18 l 1 0 0 1 -1 0 Z  M 10 18 l 1 0 0 1 -1 0 Z M 11 18 l 1 0 0 1 -1 0 Z  M 13 18 l 1 0 0 1 -1 0 Z    M 17 18 l 1 0 0 1 -1 0 Z    M 21 18 l 1 0 0 1 -1 0 Z  M 23 18 l 1 0 0 1 -1 0 Z M 24 18 l 1 0 0 1 -1 0 Z M 25 18 l 1 0 0 1 -1 0 Z  M 27 18 l 1 0 0 1 -1 0 Z      M 33 18 l 1 0 0 1 -1 0 Z  M 35 18 l 1 0 0 1 -1 0 Z M 36 18 l 1 0 0 1 -1 0 Z M 37 18 l 1 0 0 1 -1 0 Z  M 39 18 l 1 0 0 1 -1 0 Z    M 43 18 l 1 0 0 1 -1 0 Z  M 45 18 l 1 0 0 1 -1 0 Z   M 48 18 l 1 0 0 1 -1 0 Z M 0 19 l 1 0 0 1 -1 0 Z   M 3 19 l 1 0 0 1 -1 0 Z M 4 19 l 1 0 0 1 -1 0 Z M 5 19 l 1 0 0 1 -1 0 Z  M 7 19 l 1 0 0 1 -1 0 Z  M 9 19 l 1 0 0 1 -1 0 Z   M 12 19 l 1 0 0 1 -1 0 Z  M 14 19 l 1 0 0 1 -1 0 Z M 15 19 l 1 0 0 1 -1 0 Z M 16 19 l 1 0 0 1 -1 0 Z M 17 19 l 1 0 0 1 -1 0 Z M 18 19 l 1 0 0 1 -1 0 Z M 19 19 l 1 0 0 1 -1 0 Z   M 22 19 l 1 0 0 1 -1 0 Z  M 24 19 l 1 0 0 1 -1 0 Z   M 27 19 l 1 0 0 1 -1 0 Z   M 30 19 l 1 0 0 1 -1 0 Z  M 32 19 l 1 0 0 1 -1 0 Z   M 35 19 l 1 0 0 1 -1 0 Z M 36 19 l 1 0 0 1 -1 0 Z M 37 19 l 1 0 0 1 -1 0 Z    M 41 19 l 1 0 0 1 -1 0 Z   M 44 19 l 1 0 0 1 -1 0 Z M 45 19 l 1 0 0 1 -1 0 Z M 46 19 l 1 0 0 1 -1 0 Z M 47 19 l 1 0 0 1 -1 0 Z M 48 19 l 1 0 0 1 -1 0 Z M 0 20 l 1 0 0 1 -1 0 Z  M 2 20 l 1 0 0 1 -1 0 Z  M 4 20 l 1 0 0 1 -1 0 Z  M 6 20 l 1 0 0 1 -1 0 Z   M 9 20 l 1 0 0 1 -1 0 Z M 10 20 l 1 0 0 1 -1 0 Z M 11 20 l 1 0 0 1 -1 0 Z  M 13 20 l 1 0 0 1 -1 0 Z M 14 20 l 1 0 0 1 -1 0 Z M 15 20 l 1 0 0 1 -1 0 Z M 16 20 l 1 0 0 1 -1 0 Z   M 19 20 l 1 0 0 1 -1 0 Z     M 24 20 l 1 0 0 1 -1 0 Z M 25 20 l 1 0 0 1 -1 0 Z  M 27 20 l 1 0 0 1 -1 0 Z M 28 20 l 1 0 0 1 -1 0 Z   M 31 20 l 1 0 0 1 -1 0 Z     M 36 20 l 1 0 0 1 -1 0 Z M 37 20 l 1 0 0 1 -1 0 Z  M 39 20 l 1 0 0 1 -1 0 Z   M 42 20 l 1 0 0 1 -1 0 Z M 43 20 l 1 0 0 1 -1 0 Z  M 45 20 l 1 0 0 1 -1 0 Z  M 47 20 l 1 0 0 1 -1 0 Z M 48 20 l 1 0 0 1 -1 0 Z  M 1 21 l 1 0 0 1 -1 0 Z M 2 21 l 1 0 0 1 -1 0 Z     M 7 21 l 1 0 0 1 -1 0 Z  M 9 21 l 1 0 0 1 -1 0 Z M 10 21 l 1 0 0 1 -1 0 Z   M 13 21 l 1 0 0 1 -1 0 Z  M 15 21 l 1 0 0 1 -1 0 Z  M 17 21 l 1 0 0 1 -1 0 Z  M 19 21 l 1 0 0 1 -1 0 Z  M 21 21 l 1 0 0 1 -1 0 Z   M 24 21 l 1 0 0 1 -1 0 Z M 25 21 l 1 0 0 1 -1 0 Z       M 32 21 l 1 0 0 1 -1 0 Z     M 37 21 l 1 0 0 1 -1 0 Z      M 43 21 l 1 0 0 1 -1 0 Z M 44 21 l 1 0 0 1 -1 0 Z    M 48 21 l 1 0 0 1 -1 0 Z M 0 22 l 1 0 0 1 -1 0 Z M 1 22 l 1 0 0 1 -1 0 Z M 2 22 l 1 0 0 1 -1 0 Z M 3 22 l 1 0 0 1 -1 0 Z M 4 22 l 1 0 0 1 -1 0 Z M 5 22 l 1 0 0 1 -1 0 Z M 6 22 l 1 0 0 1 -1 0 Z M 7 22 l 1 0 0 1 -1 0 Z M 8 22 l 1 0 0 1 -1 0 Z   M 11 22 l 1 0 0 1 -1 0 Z M 12 22 l 1 0 0 1 -1 0 Z  M 14 22 l 1 0 0 1 -1 0 Z M 15 22 l 1 0 0 1 -1 0 Z   M 18 22 l 1 0 0 1 -1 0 Z  M 20 22 l 1 0 0 1 -1 0 Z M 21 22 l 1 0 0 1 -1 0 Z M 22 22 l 1 0 0 1 -1 0 Z M 23 22 l 1 0 0 1 -1 0 Z M 24 22 l 1 0 0 1 -1 0 Z M 25 22 l 1 0 0 1 -1 0 Z M 26 22 l 1 0 0 1 -1 0 Z M 27 22 l 1 0 0 1 -1 0 Z       M 34 22 l 1 0 0 1 -1 0 Z M 35 22 l 1 0 0 1 -1 0 Z M 36 22 l 1 0 0 1 -1 0 Z M 37 22 l 1 0 0 1 -1 0 Z  M 39 22 l 1 0 0 1 -1 0 Z M 40 22 l 1 0 0 1 -1 0 Z M 41 22 l 1 0 0 1 -1 0 Z M 42 22 l 1 0 0 1 -1 0 Z M 43 22 l 1 0 0 1 -1 0 Z M 44 22 l 1 0 0 1 -1 0 Z  M 46 22 l 1 0 0 1 -1 0 Z M 47 22 l 1 0 0 1 -1 0 Z M 48 22 l 1 0 0 1 -1 0 Z  M 1 23 l 1 0 0 1 -1 0 Z   M 4 23 l 1 0 0 1 -1 0 Z    M 8 23 l 1 0 0 1 -1 0 Z   M 11 23 l 1 0 0 1 -1 0 Z M 12 23 l 1 0 0 1 -1 0 Z M 13 23 l 1 0 0 1 -1 0 Z  M 15 23 l 1 0 0 1 -1 0 Z    M 19 23 l 1 0 0 1 -1 0 Z M 20 23 l 1 0 0 1 -1 0 Z  M 22 23 l 1 0 0 1 -1 0 Z    M 26 23 l 1 0 0 1 -1 0 Z M 27 23 l 1 0 0 1 -1 0 Z M 28 23 l 1 0 0 1 -1 0 Z M 29 23 l 1 0 0 1 -1 0 Z     M 34 23 l 1 0 0 1 -1 0 Z M 35 23 l 1 0 0 1 -1 0 Z M 36 23 l 1 0 0 1 -1 0 Z    M 40 23 l 1 0 0 1 -1 0 Z    M 44 23 l 1 0 0 1 -1 0 Z        M 3 24 l 1 0 0 1 -1 0 Z M 4 24 l 1 0 0 1 -1 0 Z  M 6 24 l 1 0 0 1 -1 0 Z  M 8 24 l 1 0 0 1 -1 0 Z  M 10 24 l 1 0 0 1 -1 0 Z M 11 24 l 1 0 0 1 -1 0 Z M 12 24 l 1 0 0 1 -1 0 Z M 13 24 l 1 0 0 1 -1 0 Z M 14 24 l 1 0 0 1 -1 0 Z M 15 24 l 1 0 0 1 -1 0 Z  M 17 24 l 1 0 0 1 -1 0 Z M 18 24 l 1 0 0 1 -1 0 Z M 19 24 l 1 0 0 1 -1 0 Z   M 22 24 l 1 0 0 1 -1 0 Z  M 24 24 l 1 0 0 1 -1 0 Z  M 26 24 l 1 0 0 1 -1 0 Z  M 28 24 l 1 0 0 1 -1 0 Z  M 30 24 l 1 0 0 1 -1 0 Z  M 32 24 l 1 0 0 1 -1 0 Z M 33 24 l 1 0 0 1 -1 0 Z M 34 24 l 1 0 0 1 -1 0 Z M 35 24 l 1 0 0 1 -1 0 Z M 36 24 l 1 0 0 1 -1 0 Z M 37 24 l 1 0 0 1 -1 0 Z M 38 24 l 1 0 0 1 -1 0 Z M 39 24 l 1 0 0 1 -1 0 Z M 40 24 l 1 0 0 1 -1 0 Z  M 42 24 l 1 0 0 1 -1 0 Z  M 44 24 l 1 0 0 1 -1 0 Z M 45 24 l 1 0 0 1 -1 0 Z  M 47 24 l 1 0 0 1 -1 0 Z M 48 24 l 1 0 0 1 -1 0 Z   M 2 25 l 1 0 0 1 -1 0 Z  M 4 25 l 1 0 0 1 -1 0 Z    M 8 25 l 1 0 0 1 -1 0 Z M 9 25 l 1 0 0 1 -1 0 Z  M 11 25 l 1 0 0 1 -1 0 Z    M 15 25 l 1 0 0 1 -1 0 Z M 16 25 l 1 0 0 1 -1 0 Z     M 21 25 l 1 0 0 1 -1 0 Z M 22 25 l 1 0 0 1 -1 0 Z    M 26 25 l 1 0 0 1 -1 0 Z M 27 25 l 1 0 0 1 -1 0 Z    M 31 25 l 1 0 0 1 -1 0 Z M 32 25 l 1 0 0 1 -1 0 Z M 33 25 l 1 0 0 1 -1 0 Z M 34 25 l 1 0 0 1 -1 0 Z M 35 25 l 1 0 0 1 -1 0 Z M 36 25 l 1 0 0 1 -1 0 Z M 37 25 l 1 0 0 1 -1 0 Z   M 40 25 l 1 0 0 1 -1 0 Z    M 44 25 l 1 0 0 1 -1 0 Z M 45 25 l 1 0 0 1 -1 0 Z   M 48 25 l 1 0 0 1 -1 0 Z M 0 26 l 1 0 0 1 -1 0 Z M 1 26 l 1 0 0 1 -1 0 Z  M 3 26 l 1 0 0 1 -1 0 Z M 4 26 l 1 0 0 1 -1 0 Z M 5 26 l 1 0 0 1 -1 0 Z M 6 26 l 1 0 0 1 -1 0 Z M 7 26 l 1 0 0 1 -1 0 Z M 8 26 l 1 0 0 1 -1 0 Z M 9 26 l 1 0 0 1 -1 0 Z  M 11 26 l 1 0 0 1 -1 0 Z     M 16 26 l 1 0 0 1 -1 0 Z M 17 26 l 1 0 0 1 -1 0 Z M 18 26 l 1 0 0 1 -1 0 Z M 19 26 l 1 0 0 1 -1 0 Z  M 21 26 l 1 0 0 1 -1 0 Z M 22 26 l 1 0 0 1 -1 0 Z M 23 26 l 1 0 0 1 -1 0 Z M 24 26 l 1 0 0 1 -1 0 Z M 25 26 l 1 0 0 1 -1 0 Z M 26 26 l 1 0 0 1 -1 0 Z  M 28 26 l 1 0 0 1 -1 0 Z M 29 26 l 1 0 0 1 -1 0 Z    M 33 26 l 1 0 0 1 -1 0 Z   M 36 26 l 1 0 0 1 -1 0 Z  M 38 26 l 1 0 0 1 -1 0 Z M 39 26 l 1 0 0 1 -1 0 Z M 40 26 l 1 0 0 1 -1 0 Z M 41 26 l 1 0 0 1 -1 0 Z M 42 26 l 1 0 0 1 -1 0 Z M 43 26 l 1 0 0 1 -1 0 Z M 44 26 l 1 0 0 1 -1 0 Z   M 47 26 l 1 0 0 1 -1 0 Z M 48 26 l 1 0 0 1 -1 0 Z M 0 27 l 1 0 0 1 -1 0 Z M 1 27 l 1 0 0 1 -1 0 Z M 2 27 l 1 0 0 1 -1 0 Z M 3 27 l 1 0 0 1 -1 0 Z  M 5 27 l 1 0 0 1 -1 0 Z   M 8 27 l 1 0 0 1 -1 0 Z M 9 27 l 1 0 0 1 -1 0 Z  M 11 27 l 1 0 0 1 -1 0 Z M 12 27 l 1 0 0 1 -1 0 Z    M 16 27 l 1 0 0 1 -1 0 Z      M 22 27 l 1 0 0 1 -1 0 Z  M 24 27 l 1 0 0 1 -1 0 Z M 25 27 l 1 0 0 1 -1 0 Z M 26 27 l 1 0 0 1 -1 0 Z M 27 27 l 1 0 0 1 -1 0 Z M 28 27 l 1 0 0 1 -1 0 Z M 29 27 l 1 0 0 1 -1 0 Z M 30 27 l 1 0 0 1 -1 0 Z M 31 27 l 1 0 0 1 -1 0 Z M 32 27 l 1 0 0 1 -1 0 Z M 33 27 l 1 0 0 1 -1 0 Z  M 35 27 l 1 0 0 1 -1 0 Z M 36 27 l 1 0 0 1 -1 0 Z  M 38 27 l 1 0 0 1 -1 0 Z    M 42 27 l 1 0 0 1 -1 0 Z M 43 27 l 1 0 0 1 -1 0 Z  M 45 27 l 1 0 0 1 -1 0 Z  M 47 27 l 1 0 0 1 -1 0 Z M 48 27 l 1 0 0 1 -1 0 Z   M 2 28 l 1 0 0 1 -1 0 Z   M 5 28 l 1 0 0 1 -1 0 Z M 6 28 l 1 0 0 1 -1 0 Z       M 13 28 l 1 0 0 1 -1 0 Z M 14 28 l 1 0 0 1 -1 0 Z    M 18 28 l 1 0 0 1 -1 0 Z M 19 28 l 1 0 0 1 -1 0 Z M 20 28 l 1 0 0 1 -1 0 Z  M 22 28 l 1 0 0 1 -1 0 Z M 23 28 l 1 0 0 1 -1 0 Z  M 25 28 l 1 0 0 1 -1 0 Z M 26 28 l 1 0 0 1 -1 0 Z M 27 28 l 1 0 0 1 -1 0 Z    M 31 28 l 1 0 0 1 -1 0 Z M 32 28 l 1 0 0 1 -1 0 Z M 33 28 l 1 0 0 1 -1 0 Z M 34 28 l 1 0 0 1 -1 0 Z M 35 28 l 1 0 0 1 -1 0 Z M 36 28 l 1 0 0 1 -1 0 Z M 37 28 l 1 0 0 1 -1 0 Z   M 40 28 l 1 0 0 1 -1 0 Z M 41 28 l 1 0 0 1 -1 0 Z   M 44 28 l 1 0 0 1 -1 0 Z  M 46 28 l 1 0 0 1 -1 0 Z M 47 28 l 1 0 0 1 -1 0 Z M 48 28 l 1 0 0 1 -1 0 Z M 0 29 l 1 0 0 1 -1 0 Z M 1 29 l 1 0 0 1 -1 0 Z  M 3 29 l 1 0 0 1 -1 0 Z M 4 29 l 1 0 0 1 -1 0 Z   M 7 29 l 1 0 0 1 -1 0 Z M 8 29 l 1 0 0 1 -1 0 Z M 9 29 l 1 0 0 1 -1 0 Z     M 14 29 l 1 0 0 1 -1 0 Z  M 16 29 l 1 0 0 1 -1 0 Z M 17 29 l 1 0 0 1 -1 0 Z    M 21 29 l 1 0 0 1 -1 0 Z M 22 29 l 1 0 0 1 -1 0 Z   M 25 29 l 1 0 0 1 -1 0 Z M 26 29 l 1 0 0 1 -1 0 Z M 27 29 l 1 0 0 1 -1 0 Z M 28 29 l 1 0 0 1 -1 0 Z M 29 29 l 1 0 0 1 -1 0 Z  M 31 29 l 1 0 0 1 -1 0 Z M 32 29 l 1 0 0 1 -1 0 Z      M 38 29 l 1 0 0 1 -1 0 Z M 39 29 l 1 0 0 1 -1 0 Z  M 41 29 l 1 0 0 1 -1 0 Z   M 44 29 l 1 0 0 1 -1 0 Z M 45 29 l 1 0 0 1 -1 0 Z  M 47 29 l 1 0 0 1 -1 0 Z M 48 29 l 1 0 0 1 -1 0 Z     M 4 30 l 1 0 0 1 -1 0 Z M 5 30 l 1 0 0 1 -1 0 Z M 6 30 l 1 0 0 1 -1 0 Z M 7 30 l 1 0 0 1 -1 0 Z M 8 30 l 1 0 0 1 -1 0 Z M 9 30 l 1 0 0 1 -1 0 Z M 10 30 l 1 0 0 1 -1 0 Z   M 13 30 l 1 0 0 1 -1 0 Z    M 17 30 l 1 0 0 1 -1 0 Z M 18 30 l 1 0 0 1 -1 0 Z   M 21 30 l 1 0 0 1 -1 0 Z M 22 30 l 1 0 0 1 -1 0 Z  M 24 30 l 1 0 0 1 -1 0 Z M 25 30 l 1 0 0 1 -1 0 Z M 26 30 l 1 0 0 1 -1 0 Z      M 32 30 l 1 0 0 1 -1 0 Z   M 35 30 l 1 0 0 1 -1 0 Z    M 39 30 l 1 0 0 1 -1 0 Z M 40 30 l 1 0 0 1 -1 0 Z M 41 30 l 1 0 0 1 -1 0 Z M 42 30 l 1 0 0 1 -1 0 Z  M 44 30 l 1 0 0 1 -1 0 Z   M 47 30 l 1 0 0 1 -1 0 Z M 48 30 l 1 0 0 1 -1 0 Z  M 1 31 l 1 0 0 1 -1 0 Z M 2 31 l 1 0 0 1 -1 0 Z      M 8 31 l 1 0 0 1 -1 0 Z  M 10 31 l 1 0 0 1 -1 0 Z M 11 31 l 1 0 0 1 -1 0 Z  M 13 31 l 1 0 0 1 -1 0 Z    M 17 31 l 1 0 0 1 -1 0 Z M 18 31 l 1 0 0 1 -1 0 Z M 19 31 l 1 0 0 1 -1 0 Z M 20 31 l 1 0 0 1 -1 0 Z M 21 31 l 1 0 0 1 -1 0 Z M 22 31 l 1 0 0 1 -1 0 Z M 23 31 l 1 0 0 1 -1 0 Z M 24 31 l 1 0 0 1 -1 0 Z M 25 31 l 1 0 0 1 -1 0 Z M 26 31 l 1 0 0 1 -1 0 Z M 27 31 l 1 0 0 1 -1 0 Z    M 31 31 l 1 0 0 1 -1 0 Z M 32 31 l 1 0 0 1 -1 0 Z  M 34 31 l 1 0 0 1 -1 0 Z M 35 31 l 1 0 0 1 -1 0 Z M 36 31 l 1 0 0 1 -1 0 Z M 37 31 l 1 0 0 1 -1 0 Z M 38 31 l 1 0 0 1 -1 0 Z   M 41 31 l 1 0 0 1 -1 0 Z M 42 31 l 1 0 0 1 -1 0 Z  M 44 31 l 1 0 0 1 -1 0 Z  M 46 31 l 1 0 0 1 -1 0 Z M 47 31 l 1 0 0 1 -1 0 Z    M 2 32 l 1 0 0 1 -1 0 Z  M 4 32 l 1 0 0 1 -1 0 Z M 5 32 l 1 0 0 1 -1 0 Z M 6 32 l 1 0 0 1 -1 0 Z M 7 32 l 1 0 0 1 -1 0 Z M 8 32 l 1 0 0 1 -1 0 Z M 9 32 l 1 0 0 1 -1 0 Z  M 11 32 l 1 0 0 1 -1 0 Z       M 18 32 l 1 0 0 1 -1 0 Z     M 23 32 l 1 0 0 1 -1 0 Z  M 25 32 l 1 0 0 1 -1 0 Z M 26 32 l 1 0 0 1 -1 0 Z M 27 32 l 1 0 0 1 -1 0 Z M 28 32 l 1 0 0 1 -1 0 Z M 29 32 l 1 0 0 1 -1 0 Z M 30 32 l 1 0 0 1 -1 0 Z     M 35 32 l 1 0 0 1 -1 0 Z M 36 32 l 1 0 0 1 -1 0 Z M 37 32 l 1 0 0 1 -1 0 Z   M 40 32 l 1 0 0 1 -1 0 Z M 41 32 l 1 0 0 1 -1 0 Z M 42 32 l 1 0 0 1 -1 0 Z M 43 32 l 1 0 0 1 -1 0 Z M 44 32 l 1 0 0 1 -1 0 Z   M 47 32 l 1 0 0 1 -1 0 Z   M 1 33 l 1 0 0 1 -1 0 Z  M 3 33 l 1 0 0 1 -1 0 Z     M 8 33 l 1 0 0 1 -1 0 Z   M 11 33 l 1 0 0 1 -1 0 Z   M 14 33 l 1 0 0 1 -1 0 Z    M 18 33 l 1 0 0 1 -1 0 Z   M 21 33 l 1 0 0 1 -1 0 Z M 22 33 l 1 0 0 1 -1 0 Z     M 27 33 l 1 0 0 1 -1 0 Z  M 29 33 l 1 0 0 1 -1 0 Z   M 32 33 l 1 0 0 1 -1 0 Z M 33 33 l 1 0 0 1 -1 0 Z      M 39 33 l 1 0 0 1 -1 0 Z M 40 33 l 1 0 0 1 -1 0 Z  M 42 33 l 1 0 0 1 -1 0 Z    M 46 33 l 1 0 0 1 -1 0 Z M 47 33 l 1 0 0 1 -1 0 Z M 48 33 l 1 0 0 1 -1 0 Z M 0 34 l 1 0 0 1 -1 0 Z M 1 34 l 1 0 0 1 -1 0 Z    M 5 34 l 1 0 0 1 -1 0 Z M 6 34 l 1 0 0 1 -1 0 Z M 7 34 l 1 0 0 1 -1 0 Z M 8 34 l 1 0 0 1 -1 0 Z  M 10 34 l 1 0 0 1 -1 0 Z M 11 34 l 1 0 0 1 -1 0 Z M 12 34 l 1 0 0 1 -1 0 Z    M 16 34 l 1 0 0 1 -1 0 Z M 17 34 l 1 0 0 1 -1 0 Z  M 19 34 l 1 0 0 1 -1 0 Z M 20 34 l 1 0 0 1 -1 0 Z M 21 34 l 1 0 0 1 -1 0 Z   M 24 34 l 1 0 0 1 -1 0 Z M 25 34 l 1 0 0 1 -1 0 Z M 26 34 l 1 0 0 1 -1 0 Z M 27 34 l 1 0 0 1 -1 0 Z     M 32 34 l 1 0 0 1 -1 0 Z M 33 34 l 1 0 0 1 -1 0 Z M 34 34 l 1 0 0 1 -1 0 Z  M 36 34 l 1 0 0 1 -1 0 Z M 37 34 l 1 0 0 1 -1 0 Z   M 40 34 l 1 0 0 1 -1 0 Z M 41 34 l 1 0 0 1 -1 0 Z M 42 34 l 1 0 0 1 -1 0 Z  M 44 34 l 1 0 0 1 -1 0 Z M 45 34 l 1 0 0 1 -1 0 Z M 46 34 l 1 0 0 1 -1 0 Z M 47 34 l 1 0 0 1 -1 0 Z M 48 34 l 1 0 0 1 -1 0 Z   M 2 35 l 1 0 0 1 -1 0 Z M 3 35 l 1 0 0 1 -1 0 Z M 4 35 l 1 0 0 1 -1 0 Z     M 9 35 l 1 0 0 1 -1 0 Z M 10 35 l 1 0 0 1 -1 0 Z   M 13 35 l 1 0 0 1 -1 0 Z  M 15 35 l 1 0 0 1 -1 0 Z   M 18 35 l 1 0 0 1 -1 0 Z M 19 35 l 1 0 0 1 -1 0 Z M 20 35 l 1 0 0 1 -1 0 Z  M 22 35 l 1 0 0 1 -1 0 Z     M 27 35 l 1 0 0 1 -1 0 Z M 28 35 l 1 0 0 1 -1 0 Z  M 30 35 l 1 0 0 1 -1 0 Z    M 34 35 l 1 0 0 1 -1 0 Z  M 36 35 l 1 0 0 1 -1 0 Z  M 38 35 l 1 0 0 1 -1 0 Z  M 40 35 l 1 0 0 1 -1 0 Z  M 42 35 l 1 0 0 1 -1 0 Z M 43 35 l 1 0 0 1 -1 0 Z  M 45 35 l 1 0 0 1 -1 0 Z     M 1 36 l 1 0 0 1 -1 0 Z   M 4 36 l 1 0 0 1 -1 0 Z  M 6 36 l 1 0 0 1 -1 0 Z M 7 36 l 1 0 0 1 -1 0 Z M 8 36 l 1 0 0 1 -1 0 Z  M 10 36 l 1 0 0 1 -1 0 Z M 11 36 l 1 0 0 1 -1 0 Z M 12 36 l 1 0 0 1 -1 0 Z M 13 36 l 1 0 0 1 -1 0 Z  M 15 36 l 1 0 0 1 -1 0 Z M 16 36 l 1 0 0 1 -1 0 Z M 17 36 l 1 0 0 1 -1 0 Z   M 20 36 l 1 0 0 1 -1 0 Z M 21 36 l 1 0 0 1 -1 0 Z  M 23 36 l 1 0 0 1 -1 0 Z   M 26 36 l 1 0 0 1 -1 0 Z M 27 36 l 1 0 0 1 -1 0 Z M 28 36 l 1 0 0 1 -1 0 Z  M 30 36 l 1 0 0 1 -1 0 Z  M 32 36 l 1 0 0 1 -1 0 Z M 33 36 l 1 0 0 1 -1 0 Z  M 35 36 l 1 0 0 1 -1 0 Z M 36 36 l 1 0 0 1 -1 0 Z M 37 36 l 1 0 0 1 -1 0 Z   M 40 36 l 1 0 0 1 -1 0 Z M 41 36 l 1 0 0 1 -1 0 Z      M 47 36 l 1 0 0 1 -1 0 Z  M 0 37 l 1 0 0 1 -1 0 Z  M 2 37 l 1 0 0 1 -1 0 Z     M 7 37 l 1 0 0 1 -1 0 Z  M 9 37 l 1 0 0 1 -1 0 Z M 10 37 l 1 0 0 1 -1 0 Z M 11 37 l 1 0 0 1 -1 0 Z    M 15 37 l 1 0 0 1 -1 0 Z M 16 37 l 1 0 0 1 -1 0 Z M 17 37 l 1 0 0 1 -1 0 Z    M 21 37 l 1 0 0 1 -1 0 Z  M 23 37 l 1 0 0 1 -1 0 Z         M 32 37 l 1 0 0 1 -1 0 Z  M 34 37 l 1 0 0 1 -1 0 Z  M 36 37 l 1 0 0 1 -1 0 Z M 37 37 l 1 0 0 1 -1 0 Z   M 40 37 l 1 0 0 1 -1 0 Z   M 43 37 l 1 0 0 1 -1 0 Z    M 47 37 l 1 0 0 1 -1 0 Z M 48 37 l 1 0 0 1 -1 0 Z  M 1 38 l 1 0 0 1 -1 0 Z    M 5 38 l 1 0 0 1 -1 0 Z M 6 38 l 1 0 0 1 -1 0 Z M 7 38 l 1 0 0 1 -1 0 Z M 8 38 l 1 0 0 1 -1 0 Z M 9 38 l 1 0 0 1 -1 0 Z M 10 38 l 1 0 0 1 -1 0 Z  M 12 38 l 1 0 0 1 -1 0 Z   M 15 38 l 1 0 0 1 -1 0 Z M 16 38 l 1 0 0 1 -1 0 Z M 17 38 l 1 0 0 1 -1 0 Z  M 19 38 l 1 0 0 1 -1 0 Z  M 21 38 l 1 0 0 1 -1 0 Z   M 24 38 l 1 0 0 1 -1 0 Z M 25 38 l 1 0 0 1 -1 0 Z  M 27 38 l 1 0 0 1 -1 0 Z    M 31 38 l 1 0 0 1 -1 0 Z     M 36 38 l 1 0 0 1 -1 0 Z  M 38 38 l 1 0 0 1 -1 0 Z    M 42 38 l 1 0 0 1 -1 0 Z  M 44 38 l 1 0 0 1 -1 0 Z M 45 38 l 1 0 0 1 -1 0 Z   M 48 38 l 1 0 0 1 -1 0 Z  M 1 39 l 1 0 0 1 -1 0 Z M 2 39 l 1 0 0 1 -1 0 Z M 3 39 l 1 0 0 1 -1 0 Z    M 7 39 l 1 0 0 1 -1 0 Z   M 10 39 l 1 0 0 1 -1 0 Z M 11 39 l 1 0 0 1 -1 0 Z    M 15 39 l 1 0 0 1 -1 0 Z  M 17 39 l 1 0 0 1 -1 0 Z  M 19 39 l 1 0 0 1 -1 0 Z  M 21 39 l 1 0 0 1 -1 0 Z     M 26 39 l 1 0 0 1 -1 0 Z  M 28 39 l 1 0 0 1 -1 0 Z  M 30 39 l 1 0 0 1 -1 0 Z  M 32 39 l 1 0 0 1 -1 0 Z M 33 39 l 1 0 0 1 -1 0 Z M 34 39 l 1 0 0 1 -1 0 Z M 35 39 l 1 0 0 1 -1 0 Z M 36 39 l 1 0 0 1 -1 0 Z    M 40 39 l 1 0 0 1 -1 0 Z M 41 39 l 1 0 0 1 -1 0 Z M 42 39 l 1 0 0 1 -1 0 Z M 43 39 l 1 0 0 1 -1 0 Z M 44 39 l 1 0 0 1 -1 0 Z   M 47 39 l 1 0 0 1 -1 0 Z  M 0 40 l 1 0 0 1 -1 0 Z M 1 40 l 1 0 0 1 -1 0 Z M 2 40 l 1 0 0 1 -1 0 Z    M 6 40 l 1 0 0 1 -1 0 Z  M 8 40 l 1 0 0 1 -1 0 Z M 9 40 l 1 0 0 1 -1 0 Z M 10 40 l 1 0 0 1 -1 0 Z  M 12 40 l 1 0 0 1 -1 0 Z  M 14 40 l 1 0 0 1 -1 0 Z M 15 40 l 1 0 0 1 -1 0 Z  M 17 40 l 1 0 0 1 -1 0 Z M 18 40 l 1 0 0 1 -1 0 Z   M 21 40 l 1 0 0 1 -1 0 Z M 22 40 l 1 0 0 1 -1 0 Z M 23 40 l 1 0 0 1 -1 0 Z M 24 40 l 1 0 0 1 -1 0 Z M 25 40 l 1 0 0 1 -1 0 Z M 26 40 l 1 0 0 1 -1 0 Z   M 29 40 l 1 0 0 1 -1 0 Z M 30 40 l 1 0 0 1 -1 0 Z M 31 40 l 1 0 0 1 -1 0 Z M 32 40 l 1 0 0 1 -1 0 Z M 33 40 l 1 0 0 1 -1 0 Z  M 35 40 l 1 0 0 1 -1 0 Z M 36 40 l 1 0 0 1 -1 0 Z  M 38 40 l 1 0 0 1 -1 0 Z  M 40 40 l 1 0 0 1 -1 0 Z M 41 40 l 1 0 0 1 -1 0 Z M 42 40 l 1 0 0 1 -1 0 Z M 43 40 l 1 0 0 1 -1 0 Z M 44 40 l 1 0 0 1 -1 0 Z  M 46 40 l 1 0 0 1 -1 0 Z           M 8 41 l 1 0 0 1 -1 0 Z M 9 41 l 1 0 0 1 -1 0 Z  M 11 41 l 1 0 0 1 -1 0 Z  M 13 41 l 1 0 0 1 -1 0 Z     M 18 41 l 1 0 0 1 -1 0 Z M 19 41 l 1 0 0 1 -1 0 Z M 20 41 l 1 0 0 1 -1 0 Z  M 22 41 l 1 0 0 1 -1 0 Z    M 26 41 l 1 0 0 1 -1 0 Z       M 33 41 l 1 0 0 1 -1 0 Z  M 35 41 l 1 0 0 1 -1 0 Z   M 38 41 l 1 0 0 1 -1 0 Z  M 40 41 l 1 0 0 1 -1 0 Z    M 44 41 l 1 0 0 1 -1 0 Z  M 46 41 l 1 0 0 1 -1 0 Z   M 0 42 l 1 0 0 1 -1 0 Z M 1 42 l 1 0 0 1 -1 0 Z M 2 42 l 1 0 0 1 -1 0 Z M 3 42 l 1 0 0 1 -1 0 Z M 4 42 l 1 0 0 1 -1 0 Z M 5 42 l 1 0 0 1 -1 0 Z M 6 42 l 1 0 0 1 -1 0 Z  M 8 42 l 1 0 0 1 -1 0 Z  M 10 42 l 1 0 0 1 -1 0 Z    M 14 42 l 1 0 0 1 -1 0 Z M 15 42 l 1 0 0 1 -1 0 Z   M 18 42 l 1 0 0 1 -1 0 Z M 19 42 l 1 0 0 1 -1 0 Z  M 21 42 l 1 0 0 1 -1 0 Z M 22 42 l 1 0 0 1 -1 0 Z  M 24 42 l 1 0 0 1 -1 0 Z  M 26 42 l 1 0 0 1 -1 0 Z  M 28 42 l 1 0 0 1 -1 0 Z M 29 42 l 1 0 0 1 -1 0 Z   M 32 42 l 1 0 0 1 -1 0 Z M 33 42 l 1 0 0 1 -1 0 Z      M 39 42 l 1 0 0 1 -1 0 Z M 40 42 l 1 0 0 1 -1 0 Z  M 42 42 l 1 0 0 1 -1 0 Z  M 44 42 l 1 0 0 1 -1 0 Z M 45 42 l 1 0 0 1 -1 0 Z  M 47 42 l 1 0 0 1 -1 0 Z M 48 42 l 1 0 0 1 -1 0 Z M 0 43 l 1 0 0 1 -1 0 Z      M 6 43 l 1 0 0 1 -1 0 Z     M 11 43 l 1 0 0 1 -1 0 Z  M 13 43 l 1 0 0 1 -1 0 Z  M 15 43 l 1 0 0 1 -1 0 Z M 16 43 l 1 0 0 1 -1 0 Z   M 19 43 l 1 0 0 1 -1 0 Z M 20 43 l 1 0 0 1 -1 0 Z M 21 43 l 1 0 0 1 -1 0 Z M 22 43 l 1 0 0 1 -1 0 Z    M 26 43 l 1 0 0 1 -1 0 Z M 27 43 l 1 0 0 1 -1 0 Z  M 29 43 l 1 0 0 1 -1 0 Z  M 31 43 l 1 0 0 1 -1 0 Z M 32 43 l 1 0 0 1 -1 0 Z   M 35 43 l 1 0 0 1 -1 0 Z M 36 43 l 1 0 0 1 -1 0 Z M 37 43 l 1 0 0 1 -1 0 Z M 38 43 l 1 0 0 1 -1 0 Z M 39 43 l 1 0 0 1 -1 0 Z M 40 43 l 1 0 0 1 -1 0 Z    M 44 43 l 1 0 0 1 -1 0 Z  M 46 43 l 1 0 0 1 -1 0 Z   M 0 44 l 1 0 0 1 -1 0 Z  M 2 44 l 1 0 0 1 -1 0 Z M 3 44 l 1 0 0 1 -1 0 Z M 4 44 l 1 0 0 1 -1 0 Z  M 6 44 l 1 0 0 1 -1 0 Z   M 9 44 l 1 0 0 1 -1 0 Z  M 11 44 l 1 0 0 1 -1 0 Z M 12 44 l 1 0 0 1 -1 0 Z    M 16 44 l 1 0 0 1 -1 0 Z M 17 44 l 1 0 0 1 -1 0 Z M 18 44 l 1 0 0 1 -1 0 Z  M 20 44 l 1 0 0 1 -1 0 Z  M 22 44 l 1 0 0 1 -1 0 Z M 23 44 l 1 0 0 1 -1 0 Z M 24 44 l 1 0 0 1 -1 0 Z M 25 44 l 1 0 0 1 -1 0 Z M 26 44 l 1 0 0 1 -1 0 Z M 27 44 l 1 0 0 1 -1 0 Z M 28 44 l 1 0 0 1 -1 0 Z M 29 44 l 1 0 0 1 -1 0 Z M 30 44 l 1 0 0 1 -1 0 Z M 31 44 l 1 0 0 1 -1 0 Z  M 33 44 l 1 0 0 1 -1 0 Z M 34 44 l 1 0 0 1 -1 0 Z  M 36 44 l 1 0 0 1 -1 0 Z M 37 44 l 1 0 0 1 -1 0 Z M 38 44 l 1 0 0 1 -1 0 Z  M 40 44 l 1 0 0 1 -1 0 Z M 41 44 l 1 0 0 1 -1 0 Z M 42 44 l 1 0 0 1 -1 0 Z M 43 44 l 1 0 0 1 -1 0 Z M 44 44 l 1 0 0 1 -1 0 Z   M 47 44 l 1 0 0 1 -1 0 Z M 48 44 l 1 0 0 1 -1 0 Z M 0 45 l 1 0 0 1 -1 0 Z  M 2 45 l 1 0 0 1 -1 0 Z M 3 45 l 1 0 0 1 -1 0 Z M 4 45 l 1 0 0 1 -1 0 Z  M 6 45 l 1 0 0 1 -1 0 Z  M 8 45 l 1 0 0 1 -1 0 Z M 9 45 l 1 0 0 1 -1 0 Z M 10 45 l 1 0 0 1 -1 0 Z  M 12 45 l 1 0 0 1 -1 0 Z    M 16 45 l 1 0 0 1 -1 0 Z      M 22 45 l 1 0 0 1 -1 0 Z  M 24 45 l 1 0 0 1 -1 0 Z M 25 45 l 1 0 0 1 -1 0 Z  M 27 45 l 1 0 0 1 -1 0 Z M 28 45 l 1 0 0 1 -1 0 Z    M 32 45 l 1 0 0 1 -1 0 Z M 33 45 l 1 0 0 1 -1 0 Z   M 36 45 l 1 0 0 1 -1 0 Z    M 40 45 l 1 0 0 1 -1 0 Z   M 43 45 l 1 0 0 1 -1 0 Z M 44 45 l 1 0 0 1 -1 0 Z  M 46 45 l 1 0 0 1 -1 0 Z M 47 45 l 1 0 0 1 -1 0 Z M 48 45 l 1 0 0 1 -1 0 Z M 0 46 l 1 0 0 1 -1 0 Z  M 2 46 l 1 0 0 1 -1 0 Z M 3 46 l 1 0 0 1 -1 0 Z M 4 46 l 1 0 0 1 -1 0 Z  M 6 46 l 1 0 0 1 -1 0 Z        M 14 46 l 1 0 0 1 -1 0 Z  M 16 46 l 1 0 0 1 -1 0 Z M 17 46 l 1 0 0 1 -1 0 Z M 18 46 l 1 0 0 1 -1 0 Z M 19 46 l 1 0 0 1 -1 0 Z  M 21 46 l 1 0 0 1 -1 0 Z M 22 46 l 1 0 0 1 -1 0 Z M 23 46 l 1 0 0 1 -1 0 Z M 24 46 l 1 0 0 1 -1 0 Z  M 26 46 l 1 0 0 1 -1 0 Z   M 29 46 l 1 0 0 1 -1 0 Z     M 34 46 l 1 0 0 1 -1 0 Z M 35 46 l 1 0 0 1 -1 0 Z  M 37 46 l 1 0 0 1 -1 0 Z  M 39 46 l 1 0 0 1 -1 0 Z  M 41 46 l 1 0 0 1 -1 0 Z M 42 46 l 1 0 0 1 -1 0 Z  M 44 46 l 1 0 0 1 -1 0 Z M 45 46 l 1 0 0 1 -1 0 Z M 46 46 l 1 0 0 1 -1 0 Z   M 0 47 l 1 0 0 1 -1 0 Z      M 6 47 l 1 0 0 1 -1 0 Z  M 8 47 l 1 0 0 1 -1 0 Z M 9 47 l 1 0 0 1 -1 0 Z  M 11 47 l 1 0 0 1 -1 0 Z M 12 47 l 1 0 0 1 -1 0 Z    M 16 47 l 1 0 0 1 -1 0 Z   M 19 47 l 1 0 0 1 -1 0 Z M 20 47 l 1 0 0 1 -1 0 Z  M 22 47 l 1 0 0 1 -1 0 Z M 23 47 l 1 0 0 1 -1 0 Z M 24 47 l 1 0 0 1 -1 0 Z  M 26 47 l 1 0 0 1 -1 0 Z M 27 47 l 1 0 0 1 -1 0 Z M 28 47 l 1 0 0 1 -1 0 Z M 29 47 l 1 0 0 1 -1 0 Z       M 36 47 l 1 0 0 1 -1 0 Z  M 38 47 l 1 0 0 1 -1 0 Z   M 41 47 l 1 0 0 1 -1 0 Z  M 43 47 l 1 0 0 1 -1 0 Z      M 0 48 l 1 0 0 1 -1 0 Z M 1 48 l 1 0 0 1 -1 0 Z M 2 48 l 1 0 0 1 -1 0 Z M 3 48 l 1 0 0 1 -1 0 Z M 4 48 l 1 0 0 1 -1 0 Z M 5 48 l 1 0 0 1 -1 0 Z M 6 48 l 1 0 0 1 -1 0 Z  M 8 48 l 1 0 0 1 -1 0 Z   M 11 48 l 1 0 0 1 -1 0 Z  M 13 48 l 1 0 0 1 -1 0 Z M 14 48 l 1 0 0 1 -1 0 Z M 15 48 l 1 0 0 1 -1 0 Z  M 17 48 l 1 0 0 1 -1 0 Z M 18 48 l 1 0 0 1 -1 0 Z    M 22 48 l 1 0 0 1 -1 0 Z  M 24 48 l 1 0 0 1 -1 0 Z   M 27 48 l 1 0 0 1 -1 0 Z M 28 48 l 1 0 0 1 -1 0 Z  M 30 48 l 1 0 0 1 -1 0 Z  M 32 48 l 1 0 0 1 -1 0 Z  M 34 48 l 1 0 0 1 -1 0 Z M 35 48 l 1 0 0 1 -1 0 Z M 36 48 l 1 0 0 1 -1 0 Z  M 38 48 l 1 0 0 1 -1 0 Z  M 40 48 l 1 0 0 1 -1 0 Z M 41 48 l 1 0 0 1 -1 0 Z  M 43 48 l 1 0 0 1 -1 0 Z M 44 48 l 1 0 0 1 -1 0 Z   M 47 48 l 1 0 0 1 -1 0 Z M 48 48 l 1 0 0 1 -1 0 Z"
                              fill="#000000"></path>
                      </svg></div>
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
                                  <div class="value" style="margin-left: 28px; margin-right: 22px;">{{roojh_summary.summary.conclusion}}</div>
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
                                    
                                        <div class="left key">{{type}} : </div>
                                        <ul class="right">
                                            <li class="value"><img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBjVCxtcIwDDz7p6HLCP4bMELIAsAGMAE1UAAVpGMD2AAWgGc2yAZohHQ83gMZkTh5KQjhGkunO1mSMtEyhO4s8IZ6Xug0O6IFysSbrTyTGkcAr+g83TeZ9AfOCL0zcXI18Xr02cSuaZxGs8qrveQqkcF3EPgxJDtPC1PeSe98nwxwWa1vKHnokwx8+w/ykDmF9uspN8ZT8gp/fVli6xMxd6LCpIN+pXE4VA08UQtJfkjL6ghtcM7CcY/slAJ/GfNd7FYitiUl46nur+Ka6X0p9ZO4RHHyKBlAcwi+H8kuM7TgBbQpY3L7uvwLAAAAAElFTkSuQmCC">
                                                {{person}}</li>
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
                                            <div class="left key">{{type}} : </div>
                                            <ul class="right">
                                                <li class="value"><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADoSURBVHgBjVCxtcIwDDz7p6HLCP4bMELIAsAGMAE1UAAVpGMD2AAWgGc2yAZohHQ83gMZkTh5KQjhGkunO1mSMtEyhO4s8IZ6Xug0O6IFysSbrTyTGkcAr+g83TeZ9AfOCL0zcXI18Xr02cSuaZxGs8qrveQqkcF3EPgxJDtPC1PeSe98nwxwWa1vKHnokwx8+w/ykDmF9uspN8ZT8gp/fVli6xMxd6LCpIN+pXE4VA08UQtJfkjL6ghtcM7CcY/slAJ/GfNd7FYitiUl46nur+Ka6X0p9ZO4RHHyKBlAcwi+H8kuM7TgBbQpY3L7uvwLAAAAAElFTkSuQmCC">
                                                    {{person}}</li>
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
                                          src="https://roojh-development.netlify.app/static/media/social.dc9378a87510145f46818e8b185251e1.svg">
                                      Medical
                                      History :</div>
                                  
                              </div>
                              <div class="item-body">
                                  <div class="item-list">
                                      <div class="left key">List of Problems : </div>
                                      <div class="right">
                                          <div>
                                              <div>
                                                {{#each roojh_summary.summary.medical_history.problem_list}}
                                                  <div class="year">{{year}}</div>
                                                  {{#each list_details}}
                                                     <div class="problem-date">
                                                      <div class="month">{{date}}</div>
                                                      <ul>
                                                          <li class="comment">{{comment}}</li>
                                                      </ul>
                                                    
                                                  </div>
                                                  {{/each}}
                                                  {{/each}}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="item-list">
                                      <div class="left key">Description : </div>
                                      <div class="right">
                                          <div class="value">{{roojh_summary.summary.medical_history.description}}</div>
                                      </div>
                                  </div>
                                  <div class="item-list">
                                      <div class="left key">Comment : </div>
                                      <div class="right">
                                          <div class="value">{{roojh_summary.summary.medical_history.comment}}</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="option">
                          <div class="main">
                              <div class="head-section">
                                  <div class="title-head"><img
                                          src="data:image/png;base64,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">
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
                                          <span class="sm"> {{dosage}} </span>
                                          <span class="grey">({{alternate}}) </span> | <span class="grey">{{usage}}</span></li>
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
                                          <div class="key bold">test : </div>
                                          <div class="data">
                                                <div class="item-list">
                                                    <div class="left key ml">Date :</div>
                                                    <div class="right value">{{date}}</div>
                                                </div>
                                                <div class="item-list">
                                                     <div class="left key ml">Impression :</div>
                                                     <div class="right value">{{impression}}</div>
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
                          <div class="main">
                              <div class="head-section">
                                  <div class="title-head"><img
                                          src="https://roojh-development.netlify.app/static/media/surgical.7a4982d9016c30b3b93d4e1627ce2966.svg">
                                      Surgical
                                      History :</div>
                                 
                              </div>
                                <div class="item-body">
                                    <div class="item-list">
                                      <div class="left key">List of Surgical History : </div>
                                      <div class="right">
                                        {{#each roojh_summary.summary.surgical_history.list_of_surgical_history}}
                                            <div>
                                                <div>
                                                  <div class="year">{{year}}</div>
                                                    {{#each list_details}}
                                                        <div class="problem-date">
                                                            <div class="month">{{date}}</div>
                                                            <ul>
                                                                <li class="comment"> {{comment}}</li>
                                                            </ul>
                                                        </div>
                                                    {{/each}}
                                                </div>
                                            </div>
                                        {{/each}}
                                    </div>
                                </div>
                                  <div class="item-list">
                                      <div class="left key">Comment : </div>
                                      <div class="right">
                                          <div class="value">{{roojh_summary.summary.surgical_history.comment}}</div>
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
                                                  <div class="right value">{{roojh_summary.summary.primary_doctor.details_of_primary_doctor.name}}</div>
                                              </div>
                                              <div class="item-list">
                                                  <div class="left key ml">Address :</div>
                                                  <div class="right value">{{roojh_summary.summary.primary_doctor.details_of_primary_doctor.address}}</div>
                                              </div>
                                              <div class="item-list">
                                                  <div class="left key ml">Telephone :</div>
                                                  <div class="right value">{{roojh_summary.summary.primary_doctor.details_of_primary_doctor.telephone}}</div>
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
                                                <div>{{test_name}} :</div>
                                                    <div class="card-head-icon-1"><img
                                                        src="https://roojh-development.netlify.app/static/media/photoImg.daab727f754723f9ea97.jpg">
                                                    </div>
                                            </div>
                                            <div class="data">
                                                <div class="item-list">
                                                    <div class="left key ml">Impression :</div>
                                                    <div class="right value">{{impression}}</div>
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
                                                <div>{{test_name}} :</div>
                                                <div class="card-head-icon-1"><img
                                                        src="https://roojh-development.netlify.app/static/media/photoImg.daab727f754723f9ea97.jpg"></div>
                                            </div>
                                            <div class="data">
                                                <div class="item-list">
                                                    <div class="left key ml">Impression :</div>
                                                    <div class="right value">{{impression}}</div>
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

const generatePdf = async () => {
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
  console.log('completed')
};

generatePdf();
